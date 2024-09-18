import fs from 'fs'
import { parse } from 'csv-parse'
import path from 'path'

// 输入 CSV 文件路径
const csvFilePath = path.join(process.cwd(), 'QAData.csv')

// 输出 JS 文件路径
const outputFilePath = path.join(process.cwd(), 'QAData.ts')

// 存储解析后的记录
const records = []

// 初始化解析器
const parser = parse({
  columns: true, // 使用第一行作为列名
  skip_empty_lines: true, // 跳过空行
})

// 监听解析数据的事件
parser.on('readable', () => {
  let record
  while ((record = parser.read()) !== null) {
    // 假设 CSV 的第二列是 "提问"，第三列是 "回答"
    const question = record['提问']
    const answer = record['回答']

    // 将数据存储到 records 数组中
    records.push({
      question,
      answer,
    })
  }
})

// 捕捉解析错误
parser.on('error', (err) => {
  console.error(`解析 CSV 文件时出错: ${err.message}`)
})

// 解析完成后生成 JS 文件
parser.on('end', () => {
  // 生成的 JS 文件内容
  const fileContent = `export const QAData = ${JSON.stringify(records, null, 2)};\n`

  // 将内容写入 JS 文件
  fs.writeFileSync(outputFilePath, fileContent, 'utf8')
  console.log(`QA 数据已成功生成: ${outputFilePath}`)
})

// 读取 CSV 文件并将其传递给解析器
fs.createReadStream(csvFilePath).pipe(parser)
