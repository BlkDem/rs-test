<template>
  <div class="filter-panel">
    <h4>Тип</h4>
    <div class="serach-checkbox-list">
    <b-form-group style="margin-bottom: 0!important;">
      <b-form-checkbox
        v-for="aType in types"
        v-model="selectedTypes"
        :key="aType"
        :value="aType"
        name="typeList"
        class="form-check-input"
      >
        {{ aType }}
      </b-form-checkbox>
    </b-form-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedTypes: [],
        types: this.$store.state.types,
      }
    },

    watch: {
      selectedTypes() {
        this.$store.dispatch('setTypesFilter', this.selectedTypes);
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

.form-check {
  height: 3rem;
  margin: .25rem 1.5rem;
  padding-top: .75rem;
}

.form-check:first-child {
    border-bottom: 1px solid #EAEAEA;
}

fieldset {
  width: 100%;
  background-color: #FAFAFA;
  border: 1px solid;
  border-color: #EAEAEA;
  margin-top: .5rem;
  @include border-radius;
}



</style>

