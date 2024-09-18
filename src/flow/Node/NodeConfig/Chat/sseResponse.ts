export class MockSSEResponse {
  private controller!: ReadableStreamDefaultController<Uint8Array>
  private encoder = new TextEncoder()

  private stream: ReadableStream<Uint8Array>

  constructor(
    private dataArray: string[],
    private delay: number = 60,
  ) {
    this.stream = new ReadableStream({
      start: (controller) => {
        this.controller = controller
        this.pushData()
      },
    })
  }

  // private pushData() {
  //   if (this.dataArray.length === 0) {
  //     this.controller.close()
  //     return
  //   }
  //
  //   const chunk = this.dataArray.shift()
  //
  //   this.controller.enqueue(this.encoder.encode(chunk))
  //
  //   setTimeout(() => this.pushData(), this.delay)
  // }

  private pushData(batchSize: number = 10) {
    // 每次发送10个数据块
    if (this.dataArray.length === 0) {
      this.controller.close()
      return
    }

    for (let i = 0; i < batchSize && this.dataArray.length > 0; i++) {
      const chunk = this.dataArray.shift()
      if (chunk) {
        this.controller.enqueue(this.encoder.encode(chunk))
      }
    }

    setTimeout(() => this.pushData(batchSize), this.delay)
  }
  getResponse() {
    return new Response(this.stream)
  }
}

export function generateDataArrayFromSentence(sentence: string): string[] {
  const words = sentence.split('')
  const dataArray = words.map((word, index) => {
    return `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": ${Date.now()}, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "${word}"}, "index": 0, "finish_reason": null}]}`
  })

  dataArray.push(
    `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": ${Date.now()}, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": ""}, "index": 0, "finish_reason": "complete"}]}`,
  )

  return dataArray
}

//
// export const dataArray = [
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "Searching","type":"function"}, "index": 0, "finish_reason": null}]}`,
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "苹果"}, "index": 0, "finish_reason": null}]}`,
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "公司"}, "index": 0, "finish_reason": null}]}`,
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "是"}, "index": 0, "finish_reason": null}]}`,
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "一"}, "index": 0, "finish_reason": null}]}`,
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "家"}, "index": 0, "finish_reason": null}]}`,
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "科技"}, "index": 0, "finish_reason": null}]}`,
//   `data: {"id": "chatcmpl-6w****KZb6hx****RzIghUz****Qy", "object": "chat.completion.chunk", "created": 1703582861554, "model": "gpt-3.5-turbo-0301", "choices": [{"delta": {"content": "公司"}, "index": 0, "finish_reason": "complete"}]}`,
// ]
