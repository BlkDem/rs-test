<template>
  <b-container>
    <b-row>
      <b-col md="3">
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
      <b-col md="9">
        <main>
          <section name="hotel-list">
            <HotelBlock v-for="(item, key) in hotels"
              :hotel="item"
              :id="key"
              :key="key"
            />
          </section>
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
import HotelBlock from './components/HotelBlock.vue';

export default {
  name: 'App',
  components: {
    CountrySearch,
    TypeSelect,
    StarSelect,
    ReviewCount,
    PriceRange,
    HotelBlock,
  },

  async beforeCreate () {
    await this.$store.dispatch('getData');
    // this.$store.dispatch('prepareFilters');
  },

  computed: {
    hotels () {
        return this.$store.state.hotels;
    },
  }
}
</script>

<style scoped>

main {
  padding-top: 2.5rem;
}

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
