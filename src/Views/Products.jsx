import useProductManagement from '../components/ProductManagement';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';
import { Pagination } from '../components/pagination';
import Footer from '../components/footer';
import { SidebarWithBurgerMenu } from '../components/adminProduct/sidebar'


const ProductsView = ({ isAdmin = false }) => {
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
      {isAdmin && (
        <div className="bg-gray-900 text-white py-2 font-semibold flex items-center justify-between px-4">
          <SidebarWithBurgerMenu />
          <p className="text-center flex-grow">Panel de administración</p>
        </div>
      )}
      <Navbar
        categories={categories}
        onSearch={searchProducts}
        onFilterCategory={filterByCategory}
        isAdmin={isAdmin}
      />

      <div className="p-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <CardProduct
            key={product.id}
            product={product}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            isAdmin={isAdmin}
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
      <Footer />
    </div>
  );
};

export default ProductsView;