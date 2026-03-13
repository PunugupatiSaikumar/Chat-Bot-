type EventPayload = Record<string, string | number | boolean | undefined>;

// Lightweight analytics hook for demo discussion. Replace with Segment/Amplitude later.
export function trackEvent(eventName: string, payload?: EventPayload): void {
  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, payload ?? {});
  }
}
