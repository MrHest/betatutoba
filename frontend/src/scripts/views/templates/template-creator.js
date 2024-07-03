import CONFIG from '../../globals/config';

const createWisataDetailTemplate = (wisata) => `
  <h2 class="wisata__title">${wisata.nama}</h2>
  <img class="wisata__poster" src="${CONFIG.BASE_IMAGE_URL + wisata.gambar}" alt="${wisata.nama}" />
  <div class="wisata__info">
    <h3>Informasi</h3>
    <h4>Nama</h4>
    <p>${wisata.nama}</p>
    <h4>Deskripsi</h4>
    <p>${wisata.deskripsi}</p>
  </div>
`;

const createWisataItemTemplate = (wisata) => `
  <div class="wisata-item">
    <div class="wisata-item__header">
      <img class="wisata-item__header__poster" alt="${wisata.nama}" src="${CONFIG.BASE_IMAGE_URL + wisata.gambar}">
    </div>
    <div class="wisata-item__content">
      <h3><a href="/#/detail/${wisata.id}">${wisata.nama}</a></h3>
      <p>${wisata.deskripsi}</p>
    </div>
  </div>
`;

export { createWisataItemTemplate, createWisataDetailTemplate };
