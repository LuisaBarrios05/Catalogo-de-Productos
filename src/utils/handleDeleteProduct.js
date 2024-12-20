export const handleDeleteProduct = (products, productId) => {
    return products.filter(p => p.id !== productId);
  };
  