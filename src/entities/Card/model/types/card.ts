export interface CardSchema{
  question: QuestionItem
  answers: AnswerItem[]
}


export interface QuestionItem{
  text: string
  tip?: string
}

export interface AnswerItem{
  id: string
  text: string
}