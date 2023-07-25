<template>
  <div class="filter-panel">
    <h4>Цена</h4>
    <div class="min-max-price-panel">
      <b-form-input class="price-range-min" readonly
          :placeholder="priceRangeMin"
          v-model="priceRangeMin"
          size="lg"
        >
      </b-form-input>
      <div class="min-max-separator"> - </div>
      <b-form-input class="price-range-max"  readonly
          :placeholder="priceRangeMax"
          v-model="priceRangeMax"
          size="lg"
        >
      </b-form-input>
    </div>

    <Slider showTooltip="drag"
      class="slider-green"
      v-model="priceRange"
      :min="priceMin"
      :max="priceMax"
    ></Slider>

  </div>
</template>

<script>
  import Slider from '@vueform/slider'

  export default {
    components: { Slider },
    data: () => ({
      priceRange: [20, 40],
      priceMin: 0,
      priceMax: 100,
    }),

    created() {
      // console.log(this.$store.state.priceRange);
      this.priceRange = this.$store.state.priceRange;
      this.priceMax = this.$store.state.priceRange[1];
      this.priceMin = this.$store.state.priceRange[0];
    },

    computed: {
      priceRangeMin() {
        return `от ${this.priceRange[0]} ₽`;
      },

      priceRangeMax() {
        return `до ${this.priceRange[1]} ₽`;
      },
    },

    watch: {
      priceRange() {
        this.$store.dispatch('setPriceRangeFilter', this.priceRange);
      }
    }

  }

</script>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped lang="scss">

@import '../scss/_variables.scss';

.min-max-price-panel {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.min-max-separator {
  margin: .75rem;
}

.price-range-max, .price-range-min {
  font-size: 1rem;
}

.slider-green {
  --slider-connect-bg: #{$form-selected-color};
  --slider-tooltip-bg: #{$form-selected-color};
}

</style>
