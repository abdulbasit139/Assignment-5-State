import { useState } from 'react'

const Name = () => {
    
    const [name, setName] = useState("Basit") 

    return(
        <>
            <h3>{name}</h3>
            <button onClick={() => setName("Abdul Basit")}>Change</button>
        </>
    )
}

export default Name