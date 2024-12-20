export const handleCategoryFilter = (products, category) => {
    if (category) {
      return products.filter(p => p.category === category);
    }
    return products;
  };
  