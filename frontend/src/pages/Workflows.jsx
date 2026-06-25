import { useEffect, useState } from "react";
import { getWorkflows } from "../services/workflowService";

function Workflows() {

    const [workflows, setWorkflows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchWorkflows = async () => {

            try {

                const data = await getWorkflows();

                setWorkflows(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);
            }
        };

        fetchWorkflows();

    }, []);

    return (

        <div className="container mt-4">

            <h1 className="mb-4">
                Workflows
            </h1>

            <div className="card shadow-sm">

                <div className="card-header">
                    Available Workflows
                </div>

                <div className="card-body">

                    {
                        loading ? (

                            <div className="alert alert-info">
                                Loading workflows...
                            </div>

                        ) : workflows.length === 0 ? (

                            <div className="alert alert-warning mb-0">
                                No workflows found.
                            </div>

                        ) : (

                            <ul className="list-group">

                                {
                                    workflows.map((item) => (

                                        <li
                                            key={item.id}
                                            className="list-group-item d-flex justify-content-between align-items-center"
                                        >
                                            {item.name}

                                            <span className="badge bg-primary">
                                                #{item.id}
                                            </span>
                                        </li>

                                    ))
                                }

                            </ul>

                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default Workflows;