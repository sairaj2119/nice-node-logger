import { platform } from 'os'
import { colors } from './colors'

export type LoggerFunction = (message?: any, ...optionalParams: any[]) => void
export type LogType = 'log' | 'info' | 'warn' | 'error'

const splitChar = platform() === 'win32' ? '\\' : '/'

/*
@deprecated
*/
export const logger: LoggerFunction = (
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

class Logger {
  private get_file_meta(stack: any) {
    let fileTrace = stack.split('\n').slice(1)[1].trim()
    const splitArr = fileTrace.split(this.split_char)
    const fileName = splitArr[splitArr.length - 1]
    const final = fileName.split(':').splice(0, 2).join(':')
    return final
  }
  private split_char = platform() === 'win32' ? '\\' : '/'

  public log(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      console['log'](
        colors.log,
        `${file_meta} => `,
        message,
        ...optionalParams,
        colors.reset
      )
    }
  }

  public warn(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      console['warn'](
        colors.warn,
        `${file_meta} => `,
        message,
        ...optionalParams,
        colors.reset
      )
    }
  }

  public info(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      console['info'](
        colors.info,
        `${file_meta} => `,
        message,
        ...optionalParams,
        colors.reset
      )
    }
  }

  public error(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      console['error'](
        colors.error,
        `${file_meta} => `,
        message,
        ...optionalParams,
        colors.reset
      )
    }
  }
}

export default new Logger()
