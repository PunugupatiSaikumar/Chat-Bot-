import { NextRequest, NextResponse } from "next/server";
import { orchestrateChatReply } from "@/lib/chat/orchestrator";
import { ChatRequestBody } from "@/types/chat";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatRequestBody;
    if (!body?.userMessage?.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const payload = await orchestrateChatReply(body.userMessage.trim(), body.messages ?? []);
    return NextResponse.json(payload);
  } catch (error) {
    console.error("Chat route failed", error);
    return NextResponse.json(
      {
        error: "Something went wrong while generating guidance."
      },
      { status: 500 }
    );
  }
}
