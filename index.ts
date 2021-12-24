import { platform } from 'os'
import { colors } from './colors'

export type LoggerFunction = (message?: any, ...optionalParams: any[]) => void
export type LogType = 'log' | 'info' | 'warn' | 'error'

export class Logger {
  private get_file_meta(stack: any) {
    let fileTrace = stack.split('\n').slice(1)[1].trim()
    const splitArr = fileTrace.split(this.split_char)
    const fileName = splitArr[splitArr.length - 1]
    const final = fileName.split(':').splice(0, 2).join(':')
    return final
  }

  private get_output = (
    type: LogType,
    file_meta: string,
    message?: any,
    ...optionalParams: any[]
  ) => {
    return [
      colors[type],
      `\b${file_meta} => `,
      message,
      ...optionalParams,
      colors.reset,
    ]
  }

  private split_char = platform() === 'win32' ? '\\' : '/'

  public log(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      const output = this.get_output(
        'log',
        file_meta,
        message,
        ...optionalParams
      )
      console['log'](...output)
    }
  }

  public warn(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      const output = this.get_output(
        'warn',
        file_meta,
        message,
        ...optionalParams
      )
      console['warn'](...output)
    }
  }

  public info(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      const output = this.get_output(
        'info',
        file_meta,
        message,
        ...optionalParams
      )
      console['info'](...output)
    }
  }

  public error(message?: any, ...optionalParams: any[]): void {
    try {
      throw new Error()
    } catch (err: any) {
      const file_meta = this.get_file_meta(err.stack)
      const output = this.get_output(
        'error',
        file_meta,
        message,
        ...optionalParams
      )
      console['error'](...output)
    }
  }
}

export const logger = new Logger()
