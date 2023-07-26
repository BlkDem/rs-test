import { createStore } from 'vuex'
import axios from 'axios';
// import createPersistedState from 'vuex-persistedstate'

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

    priceRange(state){
      return state.priceRange;
    }

  },

  mutations: {
    SET_HOTELS (state, hotels) {
      state.hotels = hotels;
    },

    SET_COUNTRIES (state, countries) {
      state.countries = countries;
    },

    SET_TYPES (state, types) {
      state.types = types;
    },

    SET_PRICE_RANGE (state, priceRange) {
      state.priceRange = priceRange;
      console.log('store: ', priceRange);
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
    async getData (context) {

      const response = await axios.get('/hotels.json');
      const hotels = response?.data?.hotels;
      context.commit('SET_HOTELS', hotels);

      const countries = hotels.map(item => item.country);
      const countryMap = new Set(countries)
      context.commit('SET_COUNTRIES', countryMap);

      const types = hotels.map(item => item.type);
      const typeMap = new Set(types)
      context.commit('SET_TYPES', typeMap);

      const priceArray = hotels.map(item => Math.ceil(item.min_price)).sort();
      const priceRangeMin = priceArray[0];
      const priceRangeMax = priceArray.at(-1);
      context.commit('SET_PRICE_RANGE', [priceRangeMin, priceRangeMax]);

    },

    getPriceRange(context) {
      const priceArray = context.state.hotels.map(item => Math.ceil(item.min_price)).sort();
      const priceRangeMin = priceArray[0];
      const priceRangeMax = priceArray.at(-1);

      context.commit('SET_PRICE_RANGE', [priceRangeMin, priceRangeMax]);
      context.state.priceRange = [priceRangeMin, priceRangeMax];

    },

    prepareFilters(context, hotels) {

      const countries = hotels.map(item => item.country);
      const countryMap = new Set(countries)
      context.commit('SET_COUNTRIES', countryMap);

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
    // createPersistedState()
  ],
})
