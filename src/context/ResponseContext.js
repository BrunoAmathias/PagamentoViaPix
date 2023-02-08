import { createContext, useState } from "react"




export const ResponseContext = createContext()



export function ResponseContextProvider({children}){


    const [responsePayment, setResponsePayment] = useState(false)


return(

<ResponseContext.Provider value={{responsePayment, setResponsePayment}}>
    {children}
</ResponseContext.Provider>

)


}



