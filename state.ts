export interface Task {
  id: number
  text: string
  priority: 'high' | 'med' | 'low'
  duration: number
  done: boolean
}

export interface Habit {
  id: number
  name: string
  streak: number
  completions: number[] // 7 days, 0 or 1
}

export interface JournalEntry {
  id: number
  date: string
  mood: string
  preview: string
  aiSummary: string | null
}

export interface Resource {
  id: number
  type: 'book' | 'podcast' | 'article'
  title: string
  author: string
  progress: number
  summary: string
  tags: string[]
}

export interface AppState {
  tasks: Task[]
  habits: Habit[]
  journal: JournalEntry[]
  resources: Resource[]
  plannerModalOpen: boolean
  habitModalOpen: boolean
  journalModalOpen: boolean
  learningModalOpen: boolean
}

export const defaultState: AppState = {
  tasks: [
    { id: 1, text: 'Review Sivarr backend API endpoints', priority: 'high', duration: 60, done: false },
    { id: 2, text: 'Write NexaCorp weekly update', priority: 'med', duration: 30, done: false },
    { id: 3, text: 'Read chapter 4 — Atomic Habits', priority: 'low', duration: 30, done: true },
  ],
  habits: [
    { id: 1, name: 'Morning meditation', streak: 14, completions: [1,1,1,1,1,1,0] },
    { id: 2, name: 'Exercise 30 min',    streak: 7,  completions: [1,1,0,1,1,1,0] },
    { id: 3, name: 'Read 20 pages',      streak: 5,  completions: [0,1,1,1,1,0,0] },
    { id: 4, name: 'Cold shower',        streak: 3,  completions: [0,0,1,1,1,0,0] },
  ],
  journal: [
    {
      id: 1, date: 'May 16, 2026', mood: '🔥',
      preview: "Had an incredibly productive session on Sivarr today. The dynamic Spaces system is finally clicking. Feeling energized about where the product is heading...",
      aiSummary: "You're in a high-momentum creative phase. Key theme: technical mastery leading to clarity of vision.",
    },
    {
      id: 2, date: 'May 15, 2026', mood: '🤔',
      preview: "Thinking about the balance between building fast and building right. NexaCorp partnerships are moving forward but there's a sense of tension...",
      aiSummary: "Underlying tension between speed and quality. Suggests a need to define non-negotiable quality thresholds.",
    },
  ],
  resources: [
    {
      id: 1, type: 'book', title: 'Atomic Habits', author: 'James Clear', progress: 75,
      summary: 'Small 1% improvements compound remarkably over time. Identity-based habits are more sustainable than outcome-based ones. The Four Laws: obvious, attractive, easy, satisfying.',
      tags: ['psychology', 'productivity', 'habits'],
    },
    {
      id: 2, type: 'podcast', title: 'How I Built This', author: 'Guy Raz / NPR', progress: 100,
      summary: 'Most successful companies were founded on the edge of failure multiple times. Persistence and timing matter as much as idea quality.',
      tags: ['entrepreneurship', 'business'],
    },
    {
      id: 3, type: 'article', title: 'The Anatomy of a Great Pitch', author: 'First Round Review', progress: 100,
      summary: 'Lead with the problem before the solution. Use specific numbers early. The best pitches tell a story arc: world before → friction → your insight → world after.',
      tags: ['startups', 'communication'],
    },
  ],
  plannerModalOpen: false,
  habitModalOpen: false,
  journalModalOpen: false,
  learningModalOpen: false,
}
