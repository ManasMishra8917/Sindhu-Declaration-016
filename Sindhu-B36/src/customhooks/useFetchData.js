// useFetchData.js
import { useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('https://sindhu-declaration-016.onrender.com/data');
            setData(result.data);
    
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { data, fetchData };
};

export default useFetchData;
