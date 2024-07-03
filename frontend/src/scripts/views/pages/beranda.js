import TheBetatutobaDbSource from "../../data/thebetatutoba-source";

const Beranda = {
    async render() {
      return `
        <div class="content">
        <section class="hero">
        <img src="../images/heros/hero_image.jpeg" alt="Hero Image" crossorigin="anonymous" />
        </section>
          <h2 class="content__heading">Explore Wisata Danau Toba dan Sekitarnya</h2>
          <div id="beranda">
          </div>
        </div>
      `;
    },
   
    async afterRender() {
      const betatutoba = await TheBetatutobaDbSource.getAllWisata();
      console.log(betatutoba);
   
  },
};
  export default Beranda;