import UrlParser from '../../routes/url-parser';
import TheBetatuTobaSource from '../../data/thebetatutoba-source';
import { createWisataDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="wisata" class="wisata"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const wisata = await TheBetatuTobaSource.getWisataById(url.id);
    const wisataContainer = document.querySelector('#wisata');
    wisataContainer.innerHTML = createWisataDetailTemplate(wisata);
  }
};

export default Detail;


// import UrlParser from "../../routes/url-parser";
// import TheBetatutobaDbSource from "../../data/thebetatutoba-source";

// const Detail = {
//     async render() {
//       return `
//         <h2>Detail Page</h2>
//       `;
//     },
   
//     async afterRender() {
//       const url = UrlParser.parseActiveUrlWithoutCombiner();
//       const betatutoba = await TheBetatutobaDbSource.detailBetatutoba(url.id);
//       console.log(betatutoba);    
//     },
//   };
   
//   export default Detail;
  