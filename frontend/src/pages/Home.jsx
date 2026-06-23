import { Link } from "react-router-dom";

function Home() {

    return (

        <div>

            <h2>Welcome to Agentic Flow</h2>

            <p>
                AI-powered workflow and knowledge platform.
            </p>

            <hr />

            <h3>Quick Actions</h3>

            <ul>

                <li>
                    <Link to="/chat">
                        Open Agent Chat
                    </Link>
                </li>

                <li>
                    <Link to="/knowledge">
                        View Knowledge Base
                    </Link>
                </li>

                <li>
                    <Link to="/executions">
                        View Executions
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Home;