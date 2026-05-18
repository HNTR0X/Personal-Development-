import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  const { text } = await req.json()

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 256,
      system: `You are a reflective journaling assistant. When given a journal entry, respond ONLY with a JSON object (no markdown, no backticks) with exactly these keys:
- "summary": a 1-2 sentence empathetic insight about the themes and emotional tone
- "keyTheme": a short 3-5 word phrase capturing the core theme`,
      messages: [{ role: 'user', content: `Journal entry: "${text}"` }],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : '{}'
    const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim())
    return NextResponse.json(parsed)
  } catch (e) {
    return NextResponse.json({ summary: 'A meaningful reflection captured — keep building this practice.', keyTheme: 'Personal growth' })
  }
}
