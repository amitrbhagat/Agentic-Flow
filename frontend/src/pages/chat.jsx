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

        <div className="container mt-4">

            <h1 className="mb-4">
                Agent Chat
            </h1>

            <form
                onSubmit={handleSubmit}
                className="d-flex gap-2"
            >

                <input
                    type="text"
                    className="form-control"
                    placeholder="Ask a question..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Thinking..." : "Send"}
                </button>

            </form>

            <hr />

            {
                loading && (
                    <div className="alert alert-info">
                        Agent is thinking...
                    </div>
                )
            }

            <div className="card shadow-sm">

                <div className="card-header">
                    Answer
                </div>

                <div className="card-body">

                    {
                        answer ? (
                            <p className="mb-0">
                                {answer}
                            </p>
                        ) : (
                            <p className="text-muted mb-0">
                                Ask a question to get started.
                            </p>
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default Chat;