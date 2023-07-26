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
      clearSelected() {
        this.reviewCount = undefined;
      }
    }

  }
</script>

<style scoped lang="scss">

@import '../scss/app.scss';

</style>
