export const handleSearch = (products, term) => {
    return products.filter(p =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );
  };
  