import { useEffect, useState } from "react";

import { getWorkflows } from "../services/workflowService";


function Workflows() {

    const [workflows, setWorkflows] = useState([]);

    useEffect(() => {
        const fetchWorkflows = async () => {
            const data = await getWorkflows();

            setWorkflows(data);
        };

        fetchWorkflows();
    }, []);

    return (
        <div>
            <h1>Workflows</h1>

            <ul>
                {workflows.map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Workflows;
