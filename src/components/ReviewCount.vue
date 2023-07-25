<template>
  <div class="filter-panel">
    <h4>Количество отзывов (от)</h4>
    <div class="search-group-input" >
        <b-form-input class="search-input"
          placeholder="Например, от 10"
          v-model="reviewCount"
          size="lg"
          type="number"
        >

        </b-form-input>
        {{ reviewCount }}
    </div>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        reviewCount: undefined,
      }
    },

    watch: {

      reviewCount() {
        this.$store.dispatch('setReviewCountFilter', this.reviewCount);
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



</style>
