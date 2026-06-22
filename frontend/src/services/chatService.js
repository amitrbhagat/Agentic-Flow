import axios from "axios"


const API_URL = "http://127.0.0.1:8000/api/agents/chat/";

export const askAgent = async (query) => {

    const response = await axios.post(
        API_URL,
        {
            query: query
        }
    );

    return response.data
};