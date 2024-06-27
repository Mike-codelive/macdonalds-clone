import { Outlet } from 'react-router-dom';

function MainNav() {
  return (
    <div className="text-center text-yellow-400">
      Navbar
      <Outlet />
    </div>
  );
}

export default MainNav;
