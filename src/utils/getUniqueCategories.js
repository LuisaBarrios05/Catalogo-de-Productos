export const getUniqueCategories = (products) => {
    return [...new Set(products.map(p => p.category).filter(Boolean))];
  };
  