import axios from "axios"

export default {
    search: function(title) {
        return axios.get("/api/googlebooks/" + title);
    }
}