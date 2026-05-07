// import { ListSection } from "@/components/ListSection";
import { roadNetwork } from "@/data/rosemontSite";
import { ListSection } from "./ListSection";

export default function MasterPlanPage() {
  return (
    <section className="bg-[#f8f3ec] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5">
        <ListSection
          title="Estate Road Network"
          copy="A hierarchical road system gives the development a generous estate character while supporting access, utilities, and daily movement."
          items={roadNetwork}
        />
      </div>
    </section>
  );
}
