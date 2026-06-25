import { useEffect, useState } from "react";

import {
    getDocuments,
    createDocument
} from "../services/knowledgeService";

function Knowledge() {

    const [documents, setDocuments] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const loadDocuments = async () => {

        const data = await getDocuments();

        setDocuments(data);
    };

    useEffect(() => {

        loadDocuments();

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await createDocument({
                title,
                content
            });

            setTitle("");
            setContent("");

            await loadDocuments();

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="container mt-4">

            <h1 className="mb-4">
                Knowledge Base
            </h1>

            <div className="card shadow-sm mb-4">

                <div className="card-header">
                    Add New Document
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Document Title"
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                            />

                        </div>

                        <div className="mb-3">

                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Document Content"
                                value={content}
                                onChange={(e) =>
                                    setContent(e.target.value)
                                }
                            />

                        </div>

                        <button
                            className="btn btn-success"
                            type="submit"
                            disabled={loading}
                        >
                            {
                                loading
                                    ? "Saving..."
                                    : "Add Document"
                            }
                        </button>

                    </form>

                </div>

            </div>

            <div className="card shadow-sm">

                <div className="card-header">
                    Documents
                </div>

                <div className="card-body">

                    {
                        documents.length === 0 ? (

                            <div className="alert alert-warning mb-0">
                                No documents found.
                            </div>

                        ) : (

                            <ul className="list-group">

                                {
                                    documents.map((doc) => (

                                        <li
                                            key={doc.id}
                                            className="list-group-item"
                                        >
                                            {doc.title}
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

export default Knowledge;