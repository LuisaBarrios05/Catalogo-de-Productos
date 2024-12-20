import { useProductManagement } from '../components/ProductManagement';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';

const ProductsView = () => {
    const {
      filteredProducts,
      categories,
      searchProducts,
      filterByCategory,
      handleEditProduct,
      handleDeleteProduct
    } = useProductManagement();
   
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          categories={categories} 
          onSearch={searchProducts} 
          onFilterCategory={filterByCategory} 
        />
        
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <CardProduct
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
              //isAdmin={false}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsView;