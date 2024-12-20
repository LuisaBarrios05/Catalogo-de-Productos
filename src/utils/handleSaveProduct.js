export const handleSaveProduct = (
    products,
    productData,
    setEditingProduct,
    setIsCreatingProduct
  ) => {
    if (productData.id) {
      // Editar producto existente
      return products.map(p =>
        p.id === productData.id ? { ...p, ...productData } : p
      );
    } else {
      // Crear nuevo producto
      const newProduct = {
        ...productData,
        id: Date.now()
      };
      return [...products, newProduct];
    }
  };
  