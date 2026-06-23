import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (

        <div>

            <h1>Agentic Flow</h1>

            <nav>

                <Link to="/">
                    Home
                </Link>

                {" | "}

                <Link to="/chat">
                    Chat
                </Link>

                {" | "}

                <Link to="/knowledge">
                    Knowledge
                </Link>

                {" | "}

                <Link to="/executions">
                    Executions
                </Link>

            </nav>

            <hr />

            <Outlet />

        </div>
    );
}

export default Dashboard;
