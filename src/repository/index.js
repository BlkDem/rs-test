import fakeData from "../repository/file/index";

export default {

  async getData(_api = undefined) {

      if (typeof _api === undefined) return await fakeData.getData();

  }
}
