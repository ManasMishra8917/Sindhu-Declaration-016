// useFetchData.js
import { useState } from 'react';
import axios from 'axios';

export const baseurl="https://sindhu-declaration-016.onrender.com/data";
const useFetchData = () => {
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        try {
            const result = await axios.get(url);
            setData(result.data);
    
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { data, fetchData };
};

export default useFetchData;
