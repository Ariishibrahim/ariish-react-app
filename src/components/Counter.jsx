import { useState } from 'react';

export function Tiriye() {
    const [count, setCount] = useState(0);



    return (

        <div style={{ backgroundColor: "yellow" }}>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}


