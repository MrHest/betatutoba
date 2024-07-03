import TheBetatuTobaSource from '../../data/thebetatutoba-source';

const Wisata = {
  async render() {
    return `
      <div id="wisata">
        <h2>Daftar Wisata</h2>
        <div id="wisataList"></div>
      </div>
    `;
  },

  async afterRender() {
    const wisataList = await TheBetatuTobaSource.getAllWisata();
    const wisataContainer = document.querySelector('#wisataList');
    wisataList.forEach((wisata) => {
      wisataContainer.innerHTML += `
        <div class="wisata-item">
          <h3>${wisata.nama}</h3>
          <img src="data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(wisata.gambar)))}" alt="${wisata.nama}" />
          <p>${wisata.deskripsi}</p>
        </div>
      `;
    });
  }
};

export default Wisata;

// batas

// import { wisata } from "../../../../../backend/src/controllers";
// import TheBetatutobaDbSource from "../../data/thebetatutoba-source";

// const Wisata = {
//     async render() {
//       return `
//         <div class="content">
//         <h2 class="content__heading"></h2>
//         <div id="wisata" class="wisata-item">
//         </div>
//       </div>
//       `;
//     },
   
//     async afterRender() {
//       const betatutoba = await TheBetatutobaDbSource.WisataBetatutoba();
//       const wisatatList = document.querySelector('.wisata-item');
//     wisata.forEach((wisata) => {
//       wisataList.innerHTML += createWisataItemTemplate(wisata);
//     });
//     },
//   };
   
//   export default Wisata;