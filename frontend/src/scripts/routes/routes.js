import Beranda from '../views/pages/beranda';
import Wisata from '../views/pages/wisata';
import Detail from '../views/pages/detail';
import TentangKami from '../views/pages/tentang-kami'; 

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/wisata': Wisata,
  '/tentang-kami':TentangKami,
  '/detail/:id': Detail,
};
 
export default routes;