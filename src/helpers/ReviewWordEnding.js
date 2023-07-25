import Decliner from 'decliner';

export default {

  reviewWordEnding(num) {
    const decliner = new Decliner(['отзыв', 'отзыва', 'отзывов']);
    return decliner.decline(num);
  }

}
