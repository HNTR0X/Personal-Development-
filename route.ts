import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  const { title, author, type, notes } = await req.json()

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: `You are a learning assistant. Given a resource title, author, type, and optional notes, generate key learnings.
Respond ONLY with a JSON object (no markdown backticks) with:
- "summary": 2-3 sentence distillation of the most important ideas from this resource
- "tags": array of 2-4 lowercase topic tags`,
      messages: [{ role: 'user', content: `Resource: "${title}" by ${author || 'unknown'}. Type: ${type}. Notes: ${notes || 'none'}` }],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : '{}'
    const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim())
    return NextResponse.json(parsed)
  } catch (e) {
    return NextResponse.json({ summary: 'A valuable resource worth exploring deeply.', tags: [type, 'learning'] })
  }
}
