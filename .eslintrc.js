module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended" 
    ],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error"  // Marca los problemas de formato como errores
    }
  };
  