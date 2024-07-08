import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DownloadApp from './pages/DownloadApp';
import Deals from './pages/Deals';
import OurFood from './pages/OurFood';
import Delivery from './pages/Delivery';
import Locate from './pages/Locate';
import Gift from './pages/Gift';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
import MainNav from './ui/MainNav';
import McEmailSub from './pages/McEmailSub';
import SearchResults from './pages/SearchResults';
import Rewards from './pages/Rewards';
import RestaurantLocation from './pages/RestaurantLocation';
import Footer from './ui/Footer';

function Layout() {
  return (
    <>
      <MainNav />
      <Footer />
    </>
  );
}

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="main" />} />
            <Route path="main" element={<MainPage />} />
            <Route path="menu" element={<Menu />} />
            <Route path="subemail" element={<McEmailSub />} />
            <Route path="dowload-app" element={<DownloadApp />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="deals" element={<Deals />} />
            <Route path="our-food" element={<OurFood />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="locate" element={<Locate />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="reslocation" element={<RestaurantLocation />} />
            <Route path="gift" element={<Gift />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
