<template>
  <div class="filter-panel">
    <h4>Количество звезд</h4>

    <div class="serach-checkbox-list">
      <b-form-group style="margin-bottom: 0!important;">
      <b-form-checkbox
        v-for="star in 5"
        v-model="selectedStars"
        :key="star"
        :value="star"
        name="starList"
        class="form-check-input"
      >
        {{ star }}
      </b-form-checkbox>
    </b-form-group>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        selectedStars: [],
      }
    },

    watch: {

      selectedStars() {
        this.$store.dispatch('setStarsFilter', this.selectedStars);
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
}

.form-check {
  margin-bottom: .5rem;
}

fieldset {
  margin-top: .5rem;
}


</style>
