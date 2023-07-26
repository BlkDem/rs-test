<template>
  <div class="star-group">
      <i v-for="(star, index) in starCount"
        class="bi bi-star-fill" :class="{'bi-filled': value > index}" ></i>
  </div>


</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },

      starCount: {
        type: Number,
        default: 5
      }
    }
  }
</script>

<style scoped lang="scss">

@import '../scss/app.scss';

.star-group {
  display: inline-block;
  margin-right: .25rem;
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
