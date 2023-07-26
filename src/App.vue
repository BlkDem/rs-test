<template>
  <b-container>
    <b-row>
      <b-col md="3">
        <aside>
          <CountrySearch ref="countrySearch"/>
          <TypeSelect ref="typeSelect"/>
          <StarSelect ref="starSelect"/>
          <ReviewCount ref="reviewCount"/>
          <PriceRange ref="priceRange"/>
          <div class="filter-panel py-4 mt-4">
            <b-button size="lg" class="btn-apply w-100 p-2 mb-3" @click="applyFilter">Применить фильтр</b-button>
            <b-button size="lg" class="btn-cancel w-100 p-2" @click="clearFilter">
              <i class="bi bi-x cancel-icon"></i>
              Очистить фильтр
            </b-button>
            </div>
        </aside>
      </b-col>
      <b-col md="9">
        <main>
          <section name="hotel-list">
            <HotelBlock v-for="(item, key) in filteredHotels"
              :hotel="item"
              :id="key"
              :key="key"
            />
          </section>
        </main>

        <NotFoundPlug v-if="!(filteredHotels.length > 0)"
          @clearFilter="clearFilter"
        />

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
import NotFoundPlug from './components/NotFoundPlug.vue';

export default {

  name: 'App',

  components: {
    CountrySearch,
    TypeSelect,
    StarSelect,
    ReviewCount,
    PriceRange,
    HotelBlock,
    NotFoundPlug,
  },

  data() {
    return{
      filteredHotels: []
    }
  },

  async created () {
    await this.$store.dispatch('getData');
    this.filteredHotels = this.$store.state.hotels;
  },

  computed: {
    hotels () {
      return this.$store.state.hotels;
    },
  },

  methods: {

    reviewCountFilter(hotels, currentFilters) {
      return hotels.filter((el) => (el.reviews_amount >= currentFilters.reviewCount));
    },

    priceRangeFilter(hotels, currentFilters) {
      return hotels.filter((el) => (el.min_price >= currentFilters.priceRange[0]) && (el.min_price <= currentFilters.priceRange[1]));
    },

    starsFilter(hotels, currentFilters) {
      return hotels.filter((el) => (currentFilters.stars.includes(el.stars)));
    },

    typesFilter(hotels, currentFilters) {
      return hotels.filter((el) => (currentFilters.types.includes(el.type)));
    },

    countriesFilter(hotels, currentFilters) {
      return hotels.filter((el) => (currentFilters.countries.includes(el.country)));
    },


    applyFilter() {

      const currentFilters = this.$store.state.currentFilters;
      const notFilteredHotels = this.$store.state.notFilteredHotels;

      this.filteredHotels = notFilteredHotels;

      //filter for reviews
      this.filteredHotels = (!currentFilters.reviewCount) ?
        this.filteredHotels
        :
        this.reviewCountFilter(this.filteredHotels, currentFilters);

      //filter for price
      this.filteredHotels = (currentFilters.priceRange === this.$store.state.priceRange)?
        this.filteredHotels
        :
        this.priceRangeFilter(this.filteredHotels, currentFilters);

      // filter for stars
      this.filteredHotels = (currentFilters.stars.length > 0)?
        this.starsFilter(this.filteredHotels, currentFilters)
        :
        this.filteredHotels;

      // filter for types
      this.filteredHotels = (currentFilters.types.length > 0)?
        this.typesFilter(this.filteredHotels, currentFilters)
        :
        this.filteredHotels;

      this.filteredHotels = (currentFilters.countries.length > 0)?
        this.countriesFilter(this.filteredHotels, currentFilters)
        :
        this.filteredHotels;

      window.scrollTo(0, 0);
    },

    clearFilter() {
      this.$store.dispatch('clearFilter');
      this.$refs.countrySearch.clearSelected();
      this.$refs.priceRange.clearSelected();
      this.$refs.reviewCount.clearSelected();
      this.$refs.typeSelect.clearSelected();
      this.$refs.starSelect.clearSelected();
      this.filteredHotels = this.$store.state.notFilteredHotels;
      window.scrollTo(0, 0);
    }
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

.btn-apply:hover, .btn-apply:active {
  color: var(--bs-btn-hover-color);
  background-color: #8c8cd0;
  border-color: #8c8cd0;
}
.btn-cancel {
  background-color: transparent;
  color: #333;
}

</style>
