export interface CardSchema{
  id?: string
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