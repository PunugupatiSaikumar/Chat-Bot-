import { ChatWidget } from "@/components/chat/chat-widget";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent px-6 pb-28 pt-14 md:px-12">
      <section className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1.2fr,0.8fr]">
        <article className="rounded-3xl border border-naya-line bg-white p-6 shadow-soft md:p-8">
          <p className="inline-flex rounded-full border border-naya-line bg-naya-shell px-3 py-1 text-xs text-naya-mauve">
            NayaCare
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-naya-ink md:text-4xl">
            Gentle fourth-trimester guidance for newborn care and postpartum recovery.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-naya-mauve">
            Calm, evidence-informed support for feeding, sleep, recovery, and maternal wellbeing.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Feeding", "Newborn sleep", "Postpartum bleeding", "Mental health"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-naya-line bg-white px-3 py-1 text-xs text-naya-mauve"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <aside className="rounded-3xl border border-naya-line bg-gradient-to-b from-white to-naya-shell/70 p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-wide text-naya-mauve">Safety first</p>
          <h2 className="mt-2 text-lg font-semibold text-naya-ink">Clinical guardrails built in</h2>
          <ul className="mt-4 space-y-2 text-sm text-naya-ink/90">
            <li>Urgent red-flag detection and escalation prompts</li>
            <li>Clear guidance on when to call your provider</li>
            <li>Informational support, never a replacement for emergency care</li>
          </ul>
          <p className="mt-4 text-xs text-naya-mauve">Use the Ask Naya button to start.</p>
        </aside>
      </section>

      <section className="mx-auto mt-6 grid max-w-5xl gap-4 md:grid-cols-3">
        {[
          {
            title: "Warm and practical",
            text: "Short, compassionate guidance designed for overwhelmed early-parent moments."
          },
          {
            title: "Evidence-informed",
            text: "Responses are grounded in structured postpartum and newborn support knowledge."
          },
          {
            title: "Escalation-aware",
            text: "Concerning symptom patterns trigger clearer, safer next-step recommendations."
          }
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-naya-line bg-white p-4 shadow-soft">
            <h3 className="text-sm font-semibold text-naya-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-naya-mauve">{item.text}</p>
          </article>
        ))}
      </section>

      <ChatWidget />
    </main>
  );
}
