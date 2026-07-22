package core

type ErrorPageError struct {
	IsErrorPageError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewErrorPageError(code string, msg string, ctx *Context) *ErrorPageError {
	return &ErrorPageError{
		IsErrorPageError: true,
		Sdk:              "ErrorPage",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ErrorPageError) Error() string {
	return e.Msg
}
