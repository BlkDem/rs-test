<template>
  <div>
    <h4>Страна</h4>
    <div class="search-group-input" >
        <i class="bi bi-search search-icon"></i>
        <b-form-input class="search-input" placeholder="Поиск стран" v-model="searchText"></b-form-input>
    </div>

    <div class="serach-checkbox-list">
      <b-form-group

    >
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
    {{ selectedCountries }}
  </div>


</template>

<script>
  export default {
    data() {
      return {
        searchText: '',
        selectedCountries: [],
        countries: this.$store.state.countries,
      }
    },

    watch: {
      searchText() {
        this.countries = Array.from(this.$store.state.countries).filter(
          country => (country.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0)
         )
      },

      selectedCountries() {
        this.$store.dispatch('setCountriesFilter', this.selectedCountries);
      }


    },

    methods: {

    }

  }
</script>

<style scoped lang="scss">

@import '../scss/app.scss';

@mixin border-radius {
  border-radius: 8px;
}

.form-check-input:checked {
    background-color: red;
    border-color: $form-selected-color;
}
.search-icon {
  position: absolute;
  left: 12px;
  top: 8px;
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
  padding: 12px 12px;
}

.search-input {
  @include border-radius;
  padding-left: 2.5rem;
}



</style>
