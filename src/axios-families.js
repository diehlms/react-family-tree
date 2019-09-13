import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-family-tree.firebaseio.com/'
})

export default instance;