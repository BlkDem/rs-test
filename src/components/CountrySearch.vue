<template>
  <div class="filter-panel">
    <h4>Страна</h4>
      <div class="search-group-input" >
        <i class="bi bi-search search-icon"></i>
        <b-form-input class="search-input"
          placeholder="Поиск стран"
          v-model="searchCountry"
          size="lg"
        >

        </b-form-input>
      </div>

      <div class="serach-checkbox-list">

        <p class="no-items-plug" v-if="countries==0">
          К сожалению, по Вашему запросу ничего не найдено :(
        </p>

        <b-form-group v-if="countries"
          style="margin-bottom: 0!important;">
          <b-form-checkbox
            v-for="country in countries"
            v-model="selectedCountries"
            :key="country"
            :value="country"
            name="countryList"
            class="form-check-input"
          >
          {{ country }}
        </b-form-checkbox>
      </b-form-group>
    </div>
  </div>


</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
    data() {
      return {
        searchCountry: '',
        selectedCountries: [],
        // countries: this.$store.state.countries,
      }
    },

    computed: {
      countries() {
        return this.$store.state.countries;
      }
    },

    watch: {
      searchCountry() {
        this.countries = Array.from(this.$store.state.countries).filter(
          country => (country.toLowerCase().indexOf(this.searchCountry.toLowerCase()) >= 0)
         )
      },

      selectedCountries() {
        this.$store.dispatch('setCountriesFilter', this.selectedCountries);
      }


    },

    methods: {

    }

  });
</script>

<style scoped lang="scss">

@import '../scss/app.scss';

@mixin border-radius {
  border-radius: 8px;
}


.search-icon {
  position: absolute;
  left: 1.5rem;
  top: .75rem;
  z-index: 2;
}

.search-group-input, .serach-checkbox-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  margin-bottom: 1rem;
}

.serach-checkbox-list {
  border: 1px solid #ddd;
  @include border-radius;
  padding: 1rem 1.5rem;
  height: 202px;
  overflow-y: auto;
}

.search-input {
  @include border-radius;
  padding-left: 3rem;
}

.form-check {
  margin-bottom: .5rem;
}

fieldset {
  margin-top: .5rem;
}

.no-items-plug {
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  margin: 1.25rem;
  text-align: center;
}


</style>
