import { convertToModelMessages, streamText, type UIMessage } from "ai"

import { openrouter } from "@/lib/ai/openrouter"

export const maxDuration = 30

export async function POST(request: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return Response.json(
      { error: "Missing OPENROUTER_API_KEY environment variable." },
      { status: 500 },
    )
  }

  const { messages } = (await request.json()) as { messages: UIMessage[] }

  const result = streamText({
    model: openrouter(process.env.OPENROUTER_MODEL ?? "openai/gpt-4o-mini"),
    system: "You are a concise assistant for a professional networking app.",
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
