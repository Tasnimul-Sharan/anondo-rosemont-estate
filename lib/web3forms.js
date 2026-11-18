export const DEFAULT_WEB3FORMS_KEY = "26650a51-3fb4-44db-93ee-06e1e36565ac";

/**
 * Submits an HTML form element to Web3Forms and returns normalized status output.
 */
export async function submitWeb3Form({
  form,
  accessKey = DEFAULT_WEB3FORMS_KEY,
  subject,
  fromName = "Anondo Rosemont Estate Website",
}) {
  const formData = new FormData(form);
  formData.set("access_key", accessKey);
  if (subject) formData.set("subject", subject);
  if (fromName) formData.set("from_name", fromName);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (response.ok && data.success) {
      return { ok: true, message: data.message || "" };
    }

    return {
      ok: false,
      message: data.message || "Submission failed. Please try again.",
    };
  } catch {
    return {
      ok: false,
      message: "A network error occurred. Please try again shortly.",
    };
  }
}
