import { useState } from 'react'

const Number = () => {
    const [num, setNum] = useState(0)

    return (
        <>
            <h3>{num}</h3>
            <button onClick={() => setNum(num + 1)}>Increment</button>
            <button onClick={() => setNum(0)}>Default</button>
            <button onClick={() => setNum(num - 1)}>Decrement</button>
        </>
    )
}

export default Number