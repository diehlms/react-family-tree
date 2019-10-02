import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://icfc-family-tree-4bc1c.firebaseio.com/'
})

export default instance;