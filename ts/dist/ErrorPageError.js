"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorPageError = void 0;
class ErrorPageError extends Error {
    isErrorPageError = true;
    sdk = 'ErrorPage';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ErrorPageError = ErrorPageError;
//# sourceMappingURL=ErrorPageError.js.map