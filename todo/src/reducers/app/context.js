import {createContext, useContext} from 'react'

const appContext = createContext()

const useAppContext = () => {
    return useContext(appContext)
}

export {useAppContext}
export default appContext