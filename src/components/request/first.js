import axios from "axios";

var config = {
    method: 'post',
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://ssod-512.herokuapp.com/',
    url: '/optimize',
}

const FirstRequest = async ({values, limits}) => {
    var data = {weight: 0}
    try {
        config = {...config, data: {values, limits}}
        const res = await axios(config);
        data = res.data
        console.log(data);
    } catch (error) {
        console.log(error.response);
    }
    return data
}

export default FirstRequest