import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default instance


// baseURL : "https://api.themoviedb.org/3//discover/tv?api_key=12795c2f04e749c21cabddbccdffb923&with_networks=213"

