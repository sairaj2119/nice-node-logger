import os from 'os'

export type Logger = (message?: any, ...optionalParams: any[]) => void

const splitChar = os.platform() === 'win32' ? '\\' : '/'

export const logger: Logger = (
  message?: any,
  ...optionalParams: any[]
): void => {
  try {
    throw new Error()
  } catch (err: any) {
    const stack = err.stack
    let fileTrace = stack.split('\n').slice(1)[1].trim()
    const splitArr = fileTrace.split(splitChar)
    const fileName = splitArr[splitArr.length - 1]
    const final = fileName.split(':').splice(0, 2).join(':')
    console.log(`${final} => `, message, ...optionalParams)
  }
}
