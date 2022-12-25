export type apiResponseType <T> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: 0
}