<template>
  <b-container>
    <b-row>
      <b-col md="4">
        <CountrySearch />
        <TypeSelect />
        <StarSelect />
        <ReviewCount />
        <PriceRange />
      </b-col>
      <b-col md="8">
        hotels
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import CountrySearch from './components/CountrySearch.vue';
import TypeSelect from './components/TypeSelect.vue';
import StarSelect from './components/StarSelect.vue';
import ReviewCount from './components/ReviewCount.vue';
import PriceRange from './components/PriceRange.vue';

export default {
  name: 'App',
  components: {
    CountrySearch,
    TypeSelect,
    StarSelect,
    ReviewCount,
    PriceRange,
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
</style>
