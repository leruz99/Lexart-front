import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../features/product/productActions';
import '../styles/Product.css'
import { Link } from 'react-router-dom';


const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };
  const handleAddProduct = () => {
    window.open('/add-product', '_blank'); 
  };

  return (
    <div className='main-container-product'>

        <div className="product-list-container">
            
        {loading && <p>Cargando productos...</p>}
        {error && <p>Error: {error}</p>}

        <table className="product-table">
            <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td>
                    <button onClick={() => handleSelectProduct(product)}>Ver Detalles</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="container-submit-button">
            <Link to="/add-product">
                <button className='submit-button'>Agregar Producto</button>
            </Link>
        </div>

        </div>
        {selectedProduct && (
            <div className="product-details">
            <table className="details-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Precio</th>
                    <th>Color</th>
                </tr>
                </thead>
                <tbody>
                {selectedProduct.data.length > 0 ? (
                    selectedProduct.data.map((d, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{d.price}</td>
                        <td>{d.color}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="3">No hay datos disponibles</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        )}
    </div>
  );
};

export default ProductList;
