import { useState } from "preact/hooks";

export default function Greetings({ messages }) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting}! Thank you for visiting! </h3>
            <buton onClick={()=> setGreeting(randomMessage())}>
                New Greeting
            </buton>
        </div>
    )
}