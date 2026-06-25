import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (

        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        Agentic Flow
                    </Link>

                    <div className="navbar-nav">

                        <Link
                            className="nav-link"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="nav-link"
                            to="/chat"
                        >
                            Chat
                        </Link>

                        <Link
                            className="nav-link"
                            to="/knowledge"
                        >
                            Knowledge
                        </Link>

                        <Link
                            className="nav-link"
                            to="/executions"
                        >
                            Executions
                        </Link>

                    </div>

                </div>

            </nav>

            <div className="container mt-4">

                <Outlet />

            </div>

        </div>
    );
}

export default Dashboard;