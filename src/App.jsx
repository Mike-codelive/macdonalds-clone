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

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<MainNav />}>
            <Route index element={<Navigate replace to="main" />} />
            <Route path="main" element={<MainPage />} />
            <Route path="menu" element={<Menu />} />
            <Route path="dowload-app" element={<DownloadApp />} />
            <Route path="deals" element={<Deals />} />
            <Route path="our-food" element={<OurFood />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="locate" element={<Locate />} />
            <Route path="gift" element={<Gift />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
