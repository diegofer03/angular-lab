export interface task {
  id: number
  title: string
  completed: boolean
  editing?: boolean
}

export type filter = 'all' | 'pending' | 'completed'

