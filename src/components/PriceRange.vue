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
      v-model="priceRange"
    ></Slider>

  </div>
</template>

<script>
  import Slider from '@vueform/slider'

  export default {
    components: { Slider },
    data: () => ({
      priceRange: [20, 40],
      priceMin: 'от',
      priceMax: 'до',
    }),

    computed: {
      priceRangeMin() {
        return `от ${this.priceRange[0]} руб`;
      },

      priceRangeMax() {
        return `до ${this.priceRange[1]} руб`;
      },
    }
  }

</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped lang="scss">
.min-max-price-panel {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.min-max-separator {
  margin: 1rem 1rem;
}

.price-range-max, .price-range-min {
  font-size: 1rem;
}
</style>
