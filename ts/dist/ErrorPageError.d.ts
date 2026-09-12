import { Context } from './Context';
declare class ErrorPageError extends Error {
    isErrorPageError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ErrorPageError };
