<template>
  <div class="star-group">
      <i class="bi bi-star-fill" :class="{'bi-filled': value > 0}" ></i>
      <i class="bi bi-star-fill" :class="{'bi-filled': value > 1}" ></i>
      <i class="bi bi-star-fill" :class="{'bi-filled': value > 2}" ></i>
      <i class="bi bi-star-fill" :class="{'bi-filled': value > 3}" ></i>
      <i class="bi bi-star-fill" :class="{'bi-filled': value > 4}" ></i>
  </div>


</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped lang="scss">

@import '../scss/app.scss';

.star-group {
  display: inline-block;
  margin-right: 1rem;
}

.star-element {
  margin-left: .25rem;
  margin-right: .25rem;
}

.bi {
  margin-right: .5rem;
  color: #D7D7D7;
}

.bi-filled {
  color: #FFA900;
}


</style>
