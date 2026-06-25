import { getExecutions } from "../services/executionService";
import { useState, useEffect } from "react";

function Executions() {

    const [executions, setExecutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadExecutions();
    }, []);

    const loadExecutions = async () => {

        try {

            const data = await getExecutions();

            console.log(data);

            setExecutions(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="container mt-4">

            <h1 className="mb-4">
                Execution Dashboard
            </h1>

            <div className="card shadow-sm">

                <div className="card-header">
                    Workflow Executions
                </div>

                <div className="card-body">

                    {
                        loading ? (

                            <div className="alert alert-info">
                                Loading executions...
                            </div>

                        ) : executions.length === 0 ? (

                            <div className="alert alert-warning">
                                No executions found.
                            </div>

                        ) : (

                            <div className="table-responsive">

                                <table className="table table-striped table-hover table-bordered">

                                    <thead className="table-dark">

                                        <tr>
                                            <th>ID</th>
                                            <th>Status</th>
                                            <th>Started</th>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            executions.map((execution) => (

                                                <tr key={execution.id}>

                                                    <td>{execution.id}</td>

                                                    <td>{execution.status}</td>

                                                    <td>{execution.started_at}</td>

                                                </tr>

                                            ))
                                        }

                                    </tbody>

                                </table>

                            </div>

                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default Executions;