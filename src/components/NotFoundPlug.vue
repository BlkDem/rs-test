<template>
  <div class="not-found-plug">
    <div class="plug-image text-center">
      <img src="../assets/images/no-items-plug.png" />
    </div>
    <div class="plug-text text-center">
      <h2>По данным параметрам ничего не найдено</h2>
      <p>Попробуйте изменить параметры фильтрации или вернуться в общий каталог</p>
    </div>
    <button class="clear-filter-button" @click="clearFilter">Очистить фильтр</button>
  </div>
</template>

<script>

export default {
  emits: ['clearFilter'],

  methods: {
    clearFilter() {
      this.$emit('clearFilter')
    }
  }
}

</script>

<style scoped>

h2 {
  font-size: 18px;
  font-weight: 700;
}

p {
  font-size: 16px;
  color: #969696;
}
.not-found-plug {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 10rem;
  border: 1px solid silver;
  border-radius: 2rem;
  margin-top: 2rem;
}

.plug-image {
  padding: 1rem;
}

.plug-image img {
  width: 50%;
}
.plug-text {

}

.clear-filter-button {
  width: 180px;
  height: 40px;
  color: #6A53F5;
  background-color: #f0eefe;
  border: 0;
  border-radius: 0.75rem;
  font-size: 14px;
}
</style>
