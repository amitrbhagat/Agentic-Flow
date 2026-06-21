import { useEffect, useState } from "react";

import { getDocuments, createDocument } from "../services/knowledgeService";


function Knowledge() {

    const [documents, setDocuments] = useState([]);

    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    const loadDocuments = async () => {
        const data = await getDocuments();
        setDocuments(data);
    }

    useEffect(() => {
        loadDocuments();
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        await createDocument({
            title,
            content
        });

        setTitle("");
        setContent("");

        await loadDocuments();
    };


    return (
        <div>

            <h1>Knowledge Base</h1>

            <form onSubmit={handleSubmit}>

                <input type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <br />
                <br />

                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) =>
                        setContent(e.target.value)
                    }
                />

                <br />
                <br />

                <button type="submit">
                    Add Document
                </button>

            </form>

            <hr />

            <h2>Documents</h2>

            <ul>
                {documents.map((doc) => (
                    <li key={doc.id}>
                        {doc.title}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Knowledge
