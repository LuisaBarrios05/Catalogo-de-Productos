import { useState, useEffect } from 'react';
import { getProducts } from '../api/products'
import { getCategories } from '../api/categories';
import { handleSearch } from '../utils/handleSearch';
import { handleCategoryFilter } from '../utils/handleCategoryFilter';
import { handleDeleteProduct } from '../utils/handleDeleteProduct';
import { handleSaveProduct } from '../utils/handleSaveProduct';

function useProductManagement() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Índices para paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = (filteredProducts || []).slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setProducts(response);
        setFilteredProducts(response);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setError('Error al cargar productos. Intentalo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true);
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
        setError('Error al cargar categorías. Intentalo más tarde.');
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);


  const searchProducts = (term) => {
    const filtered = handleSearch(products, term);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const filterByCategory = (category) => {
    const filtered = handleCategoryFilter(products, category);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // const deleteProduct = (productId) => {
  //   const updatedProducts = handleDeleteProduct(products, productId);
  //   setProducts(updatedProducts);
  //   setFilteredProducts(updatedProducts);
  //   setCurrentPage(1);
  // };

  // const saveProduct = (
  //   productData,
  //   setEditingProduct,
  //   setIsCreatingProduct
  // ) => {
  //   const updatedProducts = handleSaveProduct(
  //     products,
  //     productData,
  //     setEditingProduct,
  //     setIsCreatingProduct
  //   );
  //   setProducts(updatedProducts);
  //   setFilteredProducts(updatedProducts);
  //   setCurrentPage(1);
  // };

  return {
    products,
    filteredProducts,
    categories,
    currentProducts,
    searchProducts,
    filterByCategory,
    //deleteProduct,
    //saveProduct,
    currentPage,
    setCurrentPage,
    //totalPages: Math.ceil(filteredProducts.length / productsPerPage),
    totalPages: Math.ceil((filteredProducts?.length || 0) / productsPerPage),
    loading,
    categoriesLoading
  };
};
export default useProductManagement;