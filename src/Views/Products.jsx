import useProductManagement from '../components/ProductManagement';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';
import { Pagination } from '../components/pagination';

const ProductsView = () => {
  const {
    currentProducts,
    categories,
    searchProducts,
    filterByCategory,
    handleEditProduct,
    handleDeleteProduct,
    currentPage,
    setCurrentPage,
    totalPages
  } = useProductManagement();


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        categories={categories}
        onSearch={searchProducts}
        onFilterCategory={filterByCategory}
      />

      <div className="p-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <CardProduct
            key={product.id}
            product={product}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          //isAdmin={false}
          />
        ))}
      </div>

      {/* Componente de paginación */}
      <div className="flex justify-center m-6">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default ProductsView;