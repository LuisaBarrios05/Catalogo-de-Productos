export const handleCategoryFilter = (products, category) => {
  if (category) {
    return products.filter(p => p.categoryId === category.id);
  }
  return products;
};
