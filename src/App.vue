<template>
  <b-container>
    <b-row>
      <b-col md="4">
        <aside>
          <CountrySearch />
          <TypeSelect />
          <StarSelect />
          <ReviewCount />
          <PriceRange />
          <div class="filter-panel py-4 mt-4">
            <b-button size="lg" class="btn-apply w-100 p-2 mb-3">Применить фильтр</b-button>
            <b-button size="lg" class="btn-cancel w-100 p-2">
              <i class="bi bi-x cancel-icon"></i>
              Очистить фильтр
            </b-button>
            </div>
        </aside>
      </b-col>
      <b-col md="8">
        <main>

        </main>
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
  }
}
</script>

<style scoped>
button {
  font-size: 1rem;
  height: 56px;
  border-radius: 15px;
  font-weight: 700;
  color: #3A3A3A;
}

.btn-apply {
  background-color: #6A53F5;
  color: white;
}
.btn-cancel {
  background-color: transparent;
  color: #333;
}
</style>
