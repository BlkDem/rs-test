import { createStore } from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    currentFilters: {
      countries: [],
      stars: [],
      types: [],
      reviewCount: 0,
      priceRange: [],
    },

    hotels: [],
    countries: [],
    types: [],

    priceRange: [],
  },

  getters: {
    priceMin: (state) => {
      // return state.all.length
      //     ? Number(_.minBy(state.all, 'price').price)
      //     : 0;
    },

    // maxPrice: (state) => {
    //     return state.all.length
    //       ? Number(_.maxBy(state.all, 'price').price)
    //       : 0;
    // }
  },

  mutations: {
    SET_HOTELS (state, hotels) {
      state.hotels = hotels;
    },

    SET_COUNTRY_FILTER (state, countries) {
      state.currentFilters.countries = countries;
    },

    SET_STAR_FILTER (state, stars) {
      state.currentFilters.stars = stars;
    },

    SET_TYPE_FILTER (state, types) {
      state.currentFilters.types = types;
    },

    SET_REVIEW_COUNT_FILTER (state, reviewCount) {
      state.currentFilters.reviewCount = reviewCount;
    },

    SET_PRICE_RANGE_FILTER (state, priceRange) {
      state.currentFilters.priceRange = priceRange;
    },
  },
  actions: {
    async getHotels (context) {

      const response = await axios.get('/hotels.json');
      const hotels = response?.data?.hotels;
      context.commit('SET_HOTELS', hotels);

    },

    prepareFilters(context) {

      const countries = context.state.hotels.map(item => item.country);
      context.state.countries = new Set(countries)

      const types = context.state.hotels.map(item => item.type);
      context.state.types = new Set(types)

      const stars = context.state.hotels.map(item => item.stars);
      context.state.stars = new Set(stars)

      const priceArray = context.state.hotels.map(item => Math.ceil(item.min_price)).sort();
      const priceRangeMin = priceArray[0];
      const priceRangeMax = priceArray.at(-1);
      context.state.priceRange = [priceRangeMin, priceRangeMax];

    },

    setCountriesFilter(context, countries) {
      context.commit('SET_COUNTRY_FILTER', countries);
    },

    setTypesFilter(context, types) {
      context.commit('SET_TYPE_FILTER', types);
    },

    setStarsFilter(context, stars) {
      context.commit('SET_STAR_FILTER', stars);
    },

    setReviewCountFilter(context, reviewCount) {
      context.commit('SET_REVIEW_COUNT_FILTER', reviewCount);
    },

    setPriceRangeFilter(context, priceRange) {
      context.commit('SET_PRICE_RANGE_FILTER', priceRange);
    },


  },

  modules: {
  },

  plugins:[
    createPersistedState()
  ],
})
