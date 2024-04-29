import axios from 'axios';

const getProducts = () => {
    const URL =
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC';

    const response = axios.get(URL);
    return response;
};

export default getProducts;

