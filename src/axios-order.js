import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9be35-default-rtdb.firebaseio.com/'
})

export default instance;