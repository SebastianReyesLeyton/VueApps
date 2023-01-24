import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-ae675-default-rtdb.firebaseio.com'
});

export default journalApi;