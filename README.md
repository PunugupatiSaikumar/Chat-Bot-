# NayaCare Chat Experience

Premium, healthcare-aware chatbot module for NayaCare's fourth-trimester support experience.

## What This Includes

- Floating launcher with first-use tooltip and tasteful pulse
- Animated expandable chat panel with premium maternal-wellness styling
- Welcome onboarding with guided prompt chips
- Multi-state chat UI with typing indicator, markdown rendering, and rich response cards
- Safety-aware triage layer with three escalation levels
- Emergency warning banners for high-risk symptom language
- Source-aware response metadata and follow-up suggestions
- Conversation persistence in localStorage
- Keyboard shortcuts (`Cmd/Ctrl+K` to open, `Esc` to close)
- Mobile-responsive and accessibility-minded interactions
- Secure server-side OpenAI route with graceful mock fallback mode

## Architecture

`UI Layer` -> `API Route` -> `Safety/Triage` -> `Knowledge Retrieval` -> `LLM Rewriting` -> `Structured Response`

### Request flow

1. User sends message from `components/chat/chat-widget.tsx`
2. API receives request at `app/api/chat/route.ts`
3. Orchestrator (`lib/chat/orchestrator.ts`) runs:
   - topic classification (`lib/knowledge/index.ts`)
   - triage and escalation checks (`lib/triage/engine.ts`)
   - curated knowledge retrieval (`data/knowledge.ts`)
   - structured draft generation (safe, deterministic)
   - optional OpenAI rewrite for tone polish (`lib/openai/client.ts`)
4. Final payload returns triage tags, cards, sources, and follow-up chips
5. Client renders rich UI blocks and escalation banners

## Clinical Safety Model

- **Level 1**: General education and reassurance
- **Level 2**: Call provider soon
- **Level 3**: Seek urgent or emergency care now

Hard-coded high-priority triggers include:
- Severe postpartum bleeding patterns
- Chest pain, seizures, breathing difficulty
- Self-harm or harm-to-baby thoughts
- Infant under 3 months + fever language
- Blue lips, unresponsiveness, severe dehydration clues

## Project Structure

```txt
app/
  api/chat/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  chat/chat-message.tsx
  chat/chat-widget.tsx
  chat/prompt-chips.tsx
  chat/typing-indicator.tsx
data/
  knowledge.ts
  sample-conversations.ts
hooks/
  use-chat-session.ts
lib/
  chat/orchestrator.ts
  knowledge/index.ts
  openai/client.ts
  openai/system-prompt.ts
  triage/engine.ts
types/
  chat.ts
```

## Setup

1. Install dependencies:
   - `npm install`
2. Create environment file:
   - `cp .env.example .env.local`
3. Add your key:
   - `OPENAI_API_KEY=your_key_here`
4. Run local development:
   - `npm run dev`
5. Open:
   - `http://localhost:3000`

## Behavior With/Without API Key

- **With `OPENAI_API_KEY`**: the app uses OpenAI to rewrite structured clinical guidance into polished Naya tone.
- **Without key**: app stays fully functional using deterministic local guidance draft mode.

## Recommended Validation Prompts

Use these prompts in the widget:

1. "I am 10 days postpartum and still bleeding. Is that normal?"
2. "My baby is 5 weeks old and feels hot. What temperature is a fever?"
3. "I start crying every evening and feel overwhelmed all the time."
4. "My nipples hurt badly during breastfeeding."
5. "My newborn only sleeps in short stretches. Is something wrong?"

Expected behavior:
- escalation label changes (`common`, `monitor`, `urgent`)
- emergency banner behavior
- source chips and follow-up prompts
- resilient fallback if key is not available

## Important Note

This product provides informational support only and does not replace emergency services or licensed clinical care.
