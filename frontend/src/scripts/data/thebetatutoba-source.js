import API_ENDPOINT from '../globals/api-endpoint';

const TheBetatuTobaSource = {
  async getAllWisata() {
    const response = await fetch(API_ENDPOINT.WISATA);
    const responseJson = await response.json();
    return responseJson;
  }
};

export default TheBetatuTobaSource;
