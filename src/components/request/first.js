import axios from "axios";

const baseURL = "http://localhost:5000"

var config = {
    method: 'post',
    baseURL: 'http://localhost:5000',
    url: '/optimize',
    data: {'Vyl':600, 'Vyu':720,}
}

const FirstRequest = async (values) => {
    var data = {weight: 0}
    try {
        config = {...config, data: {...config.data, ...values}}
        const res = await axios(config);
        data = res.data
        console.log(data);
    } catch (error) {
        console.log(error.response);
    }
    return data
}

export default FirstRequest