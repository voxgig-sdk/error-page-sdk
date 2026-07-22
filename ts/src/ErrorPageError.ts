
import { Context } from './Context'


class ErrorPageError extends Error {

  isErrorPageError = true

  sdk = 'ErrorPage'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ErrorPageError
}

