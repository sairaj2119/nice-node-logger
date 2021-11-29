export type Logger = (msg: string) => void

export const logger: Logger = (msg: string): void => {
  try {
    throw new Error(msg)
  } catch (err: any) {
    const stack = err.stack
    let fileTrace = stack.split('\n').slice(1)[1].trim()
    const splitArr = fileTrace.split('/')
    const fileName = splitArr[splitArr.length - 1]
    const final = fileName.split(':').splice(0, 2).join(':')
    console.log(`${final} => ${msg}`)
  }
}
