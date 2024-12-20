import { useState } from 'react';
import productsData from '../Data/products.json';
import { getUniqueCategories } from '../utils/getUniqueCategories';
import { handleSearch } from '../utils/handleSearch';
import { handleCategoryFilter } from '../utils/handleCategoryFilter';
import { handleDeleteProduct } from '../utils/handleDeleteProduct';
import { handleSaveProduct } from '../utils/handleSaveProduct';

export const useProductManagement = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const categories = getUniqueCategories(products);

  const searchProducts = (term) => {
    const filtered = handleSearch(products, term);
    setFilteredProducts(filtered);
  };

  const filterByCategory = (category) => {
    const filtered = handleCategoryFilter(products, category);
    setFilteredProducts(filtered);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = handleDeleteProduct(products, productId);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const saveProduct = (
    productData, 
    setEditingProduct, 
    setIsCreatingProduct
  ) => {
    const updatedProducts = handleSaveProduct(
      products,
      productData,
      setEditingProduct,
      setIsCreatingProduct
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  return {
    products,
    filteredProducts,
    categories,
    searchProducts,
    filterByCategory,
    deleteProduct,
    saveProduct
  };
};
