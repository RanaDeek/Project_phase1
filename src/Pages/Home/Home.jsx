import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const { data } = await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
        setCategories(data.categories);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>{
            categories.map(category =>
                <div className="items" key={category.id}>
                    <h3>{category.name}</h3>
                    <img src={category.image.secure_url} alt="Category Image" />
                </div>
            )
        }
        </>
    );
}

export default Home;
