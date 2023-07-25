<template>
  <article>
      <div class="article-top-head">
        <h3>{{ hotel?.name }}</h3>
        <h3>{{ Math.ceil(hotel?.min_price).toLocaleString('ru-RU') }} ₽</h3>
      </div>
      <div class="article-top-head">
        <div class="article-top-subhead">
          <span class="hotelStars">
            <vue3-star-ratings style="display: inline-block;"
              v-model="value"
              starSize="16"
              starColor="#ff9800"
              inactiveColor="#333333"
              controlBg="#2e5090"
              controlColor="#ffffff"
              controlSize="24"
              :numberOfStars="5"
              :step="0.5"
              :showControl="false"
              :disableClick="false"
            />

          </span>
          <span class="hotelType">
            {{ hotel?.type }}
          </span>
          <span>
            <i class="bi bi-dot search-icon"></i>
          </span>
          <span v-if="hotel?.reviews_amount>0">
            {{ hotel?.reviews_amount }}
            {{ getEnding(hotel?.reviews_amount) }}
          </span>
          <span>
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            {{ hotel?.country }}
          </span>

        </div>
        <div class="price-description">
          Цена за 1 ночь
        </div>
      </div>
    </article>
</template>

<script>
import Ending from '../helpers/ReviewWordEnding';
import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";

export default defineComponent({

  // components: [
  //   vue3starRatings
  // ],

  props: {
    hotel: undefined,
  },

  methods: {
    getEnding(num) {
      if (!num) return '';
      return Ending.reviewWordEnding(num);
    }
  },

//   // data: () => ({
//   //   value: 4,
//   // }),
});

</script>

<style scoped lang="scss">

article {
  border: 1px solid #EAEAEA;
  border-radius: 1rem;
  padding: 1.25rem;
  margin: 1rem;
}
h3, .h3 {
  font-size: 1.25rem;
  font-weight: 700;
}
.article-top-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.article-top-subhead {
  display: inline-block;
}
.price-description {
  font-size: 1rem;
  color: #333;
}

span {
  margin-right: .25rem;
}

</style>
