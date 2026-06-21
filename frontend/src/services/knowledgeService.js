import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/knowledge/";


export const getDocuments = async () => {
    const response = await axios.get(API_URL);
    return response.data
}

export const createDocument = async (document) => {
    const response = await axios.post(
        API_URL,
        document
    );

    return response.data;
}
