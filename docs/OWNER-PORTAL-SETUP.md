# Rosemont Admin & Owner Portal

## Scope

Admin: searchable, paginated client directory; client profile creation and editing; account activation/deactivation; invitations; villa assignment; construction percentage, stage and estimated handover; draft/published reports; private photo/video uploads. Owners: their own profile, assigned villas, published progress and media. Payments and document storage are intentionally outside this release.

Routes: `/login`, `/admin`, `/portal`, `/portal/reset-password`.

Development previews: `/admin?preview=1` and `/portal?preview=1`. Preview data is fictional and held in component memory. Refresh resets it. No emails or uploads run in preview. Preview is disabled in production regardless of the query string. This is not a demo login or a bypass to real data.

## 1. Supabase

1. Create a dedicated Supabase project. Run `supabase/migrations/202609150001_owner_portal.sql`, then `supabase/migrations/202609160001_client_codes.sql`, once each in the SQL editor. Existing installations need only the new client-code migration; it assigns IDs to existing profiles without changing their UUIDs or villa assignments.
2. Disable public user signup in Authentication settings. Keep email/password login enabled. Clients enter through administrator invitations.
3. Configure custom SMTP and verify your sender domain. Supabase's built-in sender is for testing, is restricted to team addresses and currently limited to 2 messages/hour. Set a suitable SMTP rate limit before inviting clients.
4. Set the Auth Site URL to your production domain, and allow the exact production `/portal/reset-password` URL. Add `http://localhost:3010/portal/reset-password` for local testing. Do not use broad production redirect wildcards.
5. Set the Supabase minimum password length to 12. The password form also requires 12 characters.
6. Create your first administrator in Supabase Authentication > Users. Copy that user's UUID and run:

```sql
insert into public.portal_admins(user_id)
values ('REPLACE_WITH_ADMIN_AUTH_USER_UUID');
```

Only a trusted database operator can grant admin access. User metadata cannot grant this role. No default admin password is shipped.

## 2. Cloudinary

Create an Image and Video API account. Add its cloud name, API key and API secret to the server environment. Never prefix secrets or the Supabase service-role key with `NEXT_PUBLIC_`.

Uploads are signed on the server for a generated path under `rosemont-private/`, use `type=authenticated`, and cannot overwrite another asset. The server reads Cloudinary's resource metadata before marking uploads ready. Allowed types: JPEG, PNG, WebP up to 10 MB; MP4, WebM, MOV up to 50 MB. Prefer optimized photos and short MP4 clips for browser compatibility and bandwidth.

After checking the requesting user's RLS access, the media endpoint returns a five-minute private download URL. Original and derived authenticated assets are not publicly accessible. Anyone given a valid media URL may use it until expiry; an already loaded/downloaded file cannot be revoked. This is access control, not DRM.

Cloudinary documents that these expiring download URLs bypass CDN caching and cost twice the delivery bandwidth. They are a conservative privacy-first starting point, not the most economical high-volume streaming solution. For sustained video traffic, evaluate a paid expiring-token CDN setup or private object storage with signed delivery. Recheck current plan availability before switching.

Incomplete uploads create a pending metadata record. If an upload succeeds but verification fails, inspect Cloudinary before retrying; remove stale pending assets/records through trusted admin operations to reclaim space. Never turn a private villa asset into a public `upload` asset to fix delivery.

## 3. Environment and local launch

Variable names are in `config/portal.env.example`. Add them to the existing `.env.local`; do not replace other settings. For production set `PORTAL_SITE_URL` to the canonical production origin and configure the same variables in hosting settings. Rebuild after changing `NEXT_PUBLIC_*` values.

```sh
npm install --legacy-peer-deps
npm run dev -- --port 3010
```

The repository already contains older lightbox dependencies with React peer conflicts; the install flag accommodates that existing dependency tree.

## 4. Daily workflow

1. Sign in at `/login` with the administrator account.
2. Add a client. Leave Client ID blank for an automatic code such as `RE-000001`, or enter a unique ID (3-32 letters, digits or hyphens; first character must be a letter or digit). Manual IDs are trimmed and uppercased. IDs are fixed after creation, shown in the directory and owner profile, and searchable along with name/email. Automatic numbering skips IDs already entered manually; sequence gaps are normal. Client ID is a reference, not a password or an authorization credential. Verify their email and send the invitation with the mail action. Linked clients can receive a new account-access email using the same action. An existing unrelated Auth account must be reconciled manually by a trusted operator; the app does not silently claim it.
3. Open that client's villas and add their villa number, collection, block, plot size and construction details.
4. Open the villa's progress page, save a report as a draft, add photos/videos, then publish it.
5. The invited owner sets their password and signs in to see only their assigned villas and published updates.

Existing client email and villa owner assignment are deliberately fixed in the edit form. Ownership transfer or identity-email changes require a verified manual procedure because they alter who can access historical records.

## Capacity and free plans

Checked 15 September 2026:

- Supabase Free lists 50,000 monthly active users, a 500 MB database and 1 GB file storage. 1,500 registered clients are below its Auth quota; this does not guarantee performance for 1,500 simultaneous users. This portal stores media in Cloudinary, not Supabase Storage.
- Cloudinary Free lists 25 monthly credits shared across storage, transformations and delivery. Free-plan video bandwidth counts 1 GB per credit. Its private download delivery consumes additional bandwidth as noted above.
- Example: 1,500 owners each watching one 20 MB clip per month is about 30 GB delivered before repeat plays, photos, storage or transformation costs. Expiring-download delivery can account for about 60 GB of bandwidth credits. That already exceeds the free allowance.

Free plans are suitable for setup and a small pilot. Budget for paid media delivery, production email, backups and hosting as usage grows. Monitor actual usage weekly; do not promise permanently free operation based only on account count. Consider Supabase Pro before business-critical rollout for production operations and backup needs.

Sources: [Supabase pricing](https://supabase.com/pricing), [SMTP](https://supabase.com/docs/guides/auth/auth-smtp), [Cloudinary pricing](https://cloudinary.com/pricing), [Cloudinary credits](https://cloudinary.com/documentation/billing_and_plans), [private media access](https://cloudinary.com/documentation/control_access_to_media).

## Verification and launch

`node --test tests/portal-rls.test.mjs` executes the actual migration in embedded PostgreSQL (PGlite) with Supabase-like roles and an `auth.uid()` stand-in. It tests cross-owner isolation, draft/pending media visibility, privilege escalation, admin writes, invitation linking, deactivation, and pagination over 1,500 additional profiles. It is not a hosted Supabase concurrency/load test.

`npm run test:portal` runs the database tests. `npm run test:portal:browser` runs the local preview flows and writes desktop/mobile screenshots under `.next/portal-qa`. The browser test needs Playwright available, either installed locally or selected with `PORTAL_PLAYWRIGHT_MODULE` (an absolute path to Playwright's `index.js`). Set `PORTAL_BROWSER_CHANNEL=chrome` to use installed Chrome. Set `PORTAL_TEST_URL=http://127.0.0.1:3000` when using the existing development server on port 3000; its default is port 3010. Preview tests use sample records and never send email or upload files.

Before production, run a real two-client test against your configured Supabase project and verify invitation/reset email, image upload/viewing, video playback/seeking, expired URL retry, draft-to-published changes, inactive accounts and unauthorized API calls. Test a direct Supabase query as client A against client B's UUIDs. Check media links on a signed-out browser after expiry. Configure database backups, credential recovery and usage alerts. Do not deploy a development server.

Live Supabase, SMTP and Cloudinary cannot be end-to-end verified until those accounts and credentials exist. Audit records store actor, entity and action, not full copies of client PII; service-role upload finalization has a null Auth actor. Administrative MFA and multi-staff permission tiers are not included in this initial release.
