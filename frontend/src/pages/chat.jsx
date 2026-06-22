import { useState } from "react";

import { askAgent } from "../services/chatService";


function Chat() {

    const [query, setQuery] = useState("");

    const [answer, setAnswer] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const data = await askAgent(query);

            console.log("API DATA:", data);

            setAnswer(data.answer);

        } catch (error) {

            setAnswer("Something went wrong.");

        } finally {

            setLoading(false);
        }
    };

    return (
        <div>

            <h1>Agent Chat</h1>

            <form onSubmit={handleSubmit}>

                <input type="text"
                    placeholder="Ask a question..."
                    value={query}
                    onChange={(e) =>
                        setQuery(e.target.value)
                    }
                />

                <button type="submit">
                    send
                </button>

            </form>

            <hr />

            {
                loading && <p>Thinking...</p>
            }

            <h3>Answer</h3>

            <pre>{answer}</pre>

        </div>
    )
};


export default Chat;
