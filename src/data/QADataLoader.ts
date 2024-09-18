import { fuzzy } from 'fast-fuzzy'
import { QAData } from '@/data/QAData.ts'

export function questionToAnswer(question: string) {
  for (const qa of QAData) {
    const fuzzyScore = fuzzy(question, qa.question)
    if (fuzzyScore > 0.8) {
      return qa.answer
    }
  }
  return '没有找到匹配问题的答案，请添加新的对话数据'
}
