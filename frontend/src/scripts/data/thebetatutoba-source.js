import API_ENDPOINT from '../globals/api-endpoint';

const TheBetatuTobaSource = {
  async getAllWisata() {
    const response = await fetch(API_ENDPOINT.WISATA);
    const responseJson = await response.json();
    return responseJson;
  }
};

export default TheBetatuTobaSource;

// batas

// import API_ENDPOINT from '../globals/api-endpoint';
 
// class TheBetatutobaDbSource {
//   static async BerandaBetatutoba() {
//     const response = await fetch(API_ENDPOINT.WISATA);
//     const responseJson = await response.json();
//     return responseJson.data;
//   }

//   static async WisataBetatutoba() {
//     const response = await fetch(API_ENDPOINT.WISATA);
//     const responseJson = await response.json();
//     return responseJson.data;
//   }

//   static async TentangKamiBetatutoba() {
//     const response = await fetch(API_ENDPOINT.TENTANGKAMI);
//     const responseJson = await response.json();
//     return responseJson.data;
//   }
 
//   static async detailBetatutoba(id) {
//     const response = await fetch(API_ENDPOINT.DETAIL(id));
//     return response.json();
//   }
// }
 
// export default TheBetatutobaDbSource;