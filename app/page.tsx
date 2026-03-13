import { ChatWidget } from "@/components/chat/chat-widget";
import { SAMPLE_CONVERSATIONS } from "@/data/sample-conversations";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent px-6 pb-28 pt-14 md:px-12">
      <section className="mx-auto max-w-5xl">
        <p className="inline-flex rounded-full border border-naya-line bg-white px-3 py-1 text-xs text-naya-mauve">
          NayaCare
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-naya-ink md:text-4xl">
          Naya: gentle fourth-trimester guidance for new parents and families.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-naya-mauve">
          Safety-aware, evidence-informed conversational support for newborn care and postpartum
          recovery.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-naya-line bg-white shadow-soft">
            <Image
              src="/images/mother-baby.svg"
              alt="Mother holding a newborn baby"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-naya-line bg-white shadow-soft">
            <Image
              src="/images/newborn-care.svg"
              alt="Newborn care essentials in a soft scene"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
        {SAMPLE_CONVERSATIONS.map((entry) => (
          <article key={entry.user} className="rounded-2xl border border-naya-line bg-white p-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-naya-mauve">Example question</p>
            <p className="mt-2 text-sm text-naya-ink">{entry.user}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-naya-mauve">Naya response style</p>
            <p className="mt-2 text-sm text-naya-ink/90">{entry.assistant}</p>
          </article>
        ))}
      </section>

      <ChatWidget />
    </main>
  );
}
