<template>
  <b-container>
    <b-row>
      <b-col md="4">
        <CountrySearch />
      </b-col>
      <b-col md="8">
        hotels
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import CountrySearch from './components/CountrySearch.vue';

export default {
  name: 'App',
  components: {
    CountrySearch
  },

  created () {
    this.$store.dispatch('getHotels');
    this.$store.dispatch('prepareFilters');
  },

  computed: {
    hotels () {
        return this.$store.state.hotels;
    },
    // Остальные вычисляемые свойства
    // filteredProducts () { ... },
    // sortKey () { ... },
    // sortDir () { ... }
  }
}
</script>

<style>
#app {
  font-family: PT Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
