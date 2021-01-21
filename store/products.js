export const state = () => ({
  products: [],
  categories: [],
  productsInCart: []
});

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  ADD_TO_CART(state, card) {
    state.productsInCart.push(card);
  },
  DELETE_FROM_CART(state, card) {
    const productsInCart = state.productsInCart.filter(f => f.id != card.id);
    state.productsInCart = productsInCart;
  },
  CLEAR_CART(state) {
    const productsInCart = [];
    state.productsInCart = [];
  },
  SORT_BY_RATING(state) {
    const products = state.products
      .sort((a, b) => a.rating - b.rating)
      .reverse();
    state.products = products;
  },
  SORT_BY_PRICE(state) {
    const products = state.products.sort((a, b) => a.price - b.price).reverse();
    state.products = products;
  }
};

export const actions = {
  async fetchProducts({ commit }) {
    let products = [];
    await this.$axios
      .get("https://frontend-test.idaproject.com/api/product?category=1")
      .then(response => (products = response.data));
    await this.$axios
      .get("https://frontend-test.idaproject.com/api/product?category=2")
      .then(response => (products = products.concat(response.data)));
    await this.$axios
      .get("https://frontend-test.idaproject.com/api/product?category=3")
      .then(response => (products = products.concat(response.data)));
    commit("SET_PRODUCTS", products);
  },
  async fetchCategories({ commit }) {
    let categories;
    await this.$axios
      .get("https://frontend-test.idaproject.com/api/product-category")
      .then(response => (categories = response.data));
    commit("SET_CATEGORIES", categories);
  },
  addToCart({ commit }, card) {
    commit("ADD_TO_CART", card);
  },
  deleteFromCart({ commit }, card) {
    commit("DELETE_FROM_CART", card);
  },
  clearCart({ commit }) {
    commit("CLEAR_CART");
  },
  sortByRating({ commit }) {
    commit("SORT_BY_RATING");
  },
  sortByPrice({ commit }) {
    commit("SORT_BY_PRICE");
  }
};

export const getters = {
  products: s => s.products,
  categories: s => s.categories,
  productsInCart: s => s.productsInCart
};
