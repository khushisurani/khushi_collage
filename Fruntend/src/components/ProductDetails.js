import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../store/auth";
// import { handleError } from '../utils.js';
import './ProductList.css';

function ProductDetails() {
  const { services } = useAuth();
    // const [products, setProducts] = useState([]);
    // const fetchProducts = async () => {
    //     try {
    //         const url = "http://localhost:4001/diamond";
    //         const headers = {
    //             headers: {
    //                 'Authorization': localStorage.getItem('token')
    //             }
    //         }
    //         const response = await fetch(url, headers);
    //         const result = await response.json();
    //         console.log(result);
    //         setProducts(result);

    //     } catch (error) {
    //         handleError(error)
    //     }
    // }
    // useEffect(() => {
    //     fetchProducts()
    // }, [])
    return (
        <>
            <div className="product-list">
                {services.map((values) => {
                    const { id, name, price, image } = values;
                    return (
                        <div key={id} className="product-card">
                            <Link to={`/product/${id}`}>
                                <img src={image} alt={name} />
                            </Link>
                            <h6>{name}</h6>
                            <p>${price}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProductDetails;