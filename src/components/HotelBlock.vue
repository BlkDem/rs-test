<template>
  <article>
      <div class="article-top-head">
        <h3>{{ hotel?.name }}</h3>
        <h3 class="hotel-price">{{ Math.ceil(hotel?.min_price).toLocaleString('ru-RU') }} ₽</h3>
      </div>
      <div class="article-top-head">
        <div class="article-top-subhead">
          <span class="hotelStars">
            <HotelStars :value="hotel?.stars"/>
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
          <span class="location">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            {{ hotel?.country }}
          </span>

        </div>
        <div class="price-description">
          Цена за 1 ночь
        </div>
      </div>
      <b-row class="py-4">
        <b-col md="8">{{ hotel?.description }}</b-col>
        <b-col md="4" class="text-end">
          <button class="booking-button" :class="{
              'booking-button-ordered': !isHotelOrdered()
              }" @click="orderHotel">
            <i class="bi" :class="{
                'bi-calendar4': !isHotelOrdered(),
                'bi-check': isHotelOrdered()
              }"></i>
            {{ currentButtonCaption() }}
          </button>
        </b-col>
      </b-row>
    </article>
</template>

<script>
import Ending from '../helpers/ReviewWordEnding';
import HotelStars from './HotelStars.vue';
import { defineComponent } from "vue";

export default defineComponent({

  components: {
    HotelStars
  },

  props: {
    id: {
      type: Number,
      default: 0
    },
    hotel: undefined,
  },

  methods: {
    getEnding(num) {
      if (!num) return '';
      return Ending.reviewWordEnding(num);
    },

    orderHotel() {
      this.hotelOrdered = !this.hotelOrdered
      // this.orderHotels.
    },

    isHotelOrdered() {
      return this.hotelOrdered;
      // this.orderHotels.
    },

    currentButtonCaption() {
      return (this.hotelOrdered)? 'Забронировано' : 'Забронировать';
    }
  },

  data: () => ({
    hotelOrdered: false,
  }),

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
  font-size: .75rem;
  color: #333;
  margin-top: -8px;
}


span {
  margin-right: .25rem;
  font-size: 14px;
  color: #868686;
}

.location {
  color: #333;
}

.booking-button {
  width: 180px;
  height: 40px;
  color: #6A53F5;
  background-color: #f0eefe;
  border: 0;
  border-radius: .75rem;
  font-size: 14px;
}

.booking-button-ordered {
  color: #00bb6d;
  background-color: #e5f8f0;
}

.hotel-price {
  font-size: 25px;
}

</style>
