import { getExecutions } from "../services/executionService";

import { useState, useEffect } from "react";


function Executions() {

    const [executions, setExecutions] = useState([]);

    useEffect(() => {

        loadExecutions();

    }, []);

    const loadExecutions = async () => {

        const data = await getExecutions();

        console.log(data);


        setExecutions(data);
    };

    return (

        <div>

            <h1>Execution Dashboard</h1>

            <table border="1">

                <thead>

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
    );
}


export default Executions;
