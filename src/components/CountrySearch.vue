<template>
  <div>
    <h4>Страна</h4>
    <div class="search-group-input" >
        <i class="bi bi-search search-icon"></i>
        <b-form-input class="search-input" placeholder="Поиск стран"></b-form-input>
    </div>

    <div class="serach-checkbox-list">
      <b-form-group
      label="Individual stacked checkboxes (default)"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-3a"
        class="form-check-input"
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>
    </div>
    {{ selected }}
  </div>


</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
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
