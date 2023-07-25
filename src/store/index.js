import { createStore } from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    currentFilters: {
      countries: [],
      stars: [],
      types: [],
      reviews: 0,
      priceMin: 0,
      priceMax: 0
    },

    hotels: [],
    countries: [],
    types: []
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

    SET_REVIEW_FILTER (state, reviews) {
      state.currentFilters.reviews = reviews;
    },

    SET_PRICE_FILTER (state, priceMin, priceMax) {
      state.currentFilters.priceMin = priceMin;
      state.currentFilters.priceMax = priceMax;
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
      // console.log(context.state.countries);
    },

    setCountriesFilter(context, countries) {
      context.commit('SET_COUNTRY_FILTER', countries);
    }


  },

  modules: {
  },

  plugins:[
    createPersistedState()
  ],
})
