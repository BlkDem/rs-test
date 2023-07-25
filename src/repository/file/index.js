const fakeJson = "../../fakedata/hotels.json";

export default {
  async getData(fakeJson) {
    const data = await axios.get(_api);
    return data.data;
  },
}
