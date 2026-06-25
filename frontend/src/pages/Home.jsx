import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="container mt-4">

            <div className="card shadow-sm mb-4">

                <div className="card-body">

                    <h2 className="card-title">
                        Welcome to Agentic Flow
                    </h2>

                    <p className="card-text">
                        AI-powered workflow and knowledge platform.
                    </p>

                </div>

            </div>

            <h3 className="mb-3">
                Quick Actions
            </h3>

            <div className="row">

                <div className="col-md-4 mb-3">

                    <div className="card h-100 shadow-sm">

                        <div className="card-body">

                            <h5 className="card-title">
                                Agent Chat
                            </h5>

                            <p className="card-text">
                                Ask questions and interact with your AI agent.
                            </p>

                            <Link
                                to="/chat"
                                className="btn btn-primary"
                            >
                                Open Chat
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card h-100 shadow-sm">

                        <div className="card-body">

                            <h5 className="card-title">
                                Knowledge Base
                            </h5>

                            <p className="card-text">
                                Manage and search stored documents.
                            </p>

                            <Link
                                to="/knowledge"
                                className="btn btn-success"
                            >
                                Open Knowledge
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card h-100 shadow-sm">

                        <div className="card-body">

                            <h5 className="card-title">
                                Executions
                            </h5>

                            <p className="card-text">
                                Monitor workflow execution history.
                            </p>

                            <Link
                                to="/executions"
                                className="btn btn-dark"
                            >
                                View Executions
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;