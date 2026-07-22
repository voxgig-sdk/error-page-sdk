-- ErrorPage SDK error

local ErrorPageError = {}
ErrorPageError.__index = ErrorPageError


function ErrorPageError.new(code, msg, ctx)
  local self = setmetatable({}, ErrorPageError)
  self.is_sdk_error = true
  self.sdk = "ErrorPage"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ErrorPageError:error()
  return self.msg
end


function ErrorPageError:__tostring()
  return self.msg
end


return ErrorPageError
