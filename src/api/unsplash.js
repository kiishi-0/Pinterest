import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Y4xWYHX-sdAWsVcUFs8rJHnz4HHWs86XZXvn0eBZ78U"
    }
})