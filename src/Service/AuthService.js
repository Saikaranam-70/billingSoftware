import axios from "axios";

export const login = async (data) => {
    return await axios.post("https://comfortable-illumination-production.up.railway.app/api/v1.0/login", data);
}