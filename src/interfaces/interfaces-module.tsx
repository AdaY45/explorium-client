export interface IAuthContext {
    authStatus: boolean,
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}