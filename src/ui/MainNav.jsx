import { NavLink, Outlet } from 'react-router-dom';
import MobileNavBtn from './MobileNavBtn';
import MainBtn from './MainBtn';
import { useState } from 'react';
import OrderModal from './OrderModal';

function MainNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="shadow-nav flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="./main">
            <img className="w-3pc h-3pc" src="/logo.jpg" alt="logo" />
          </NavLink>
          <MobileNavBtn />
        </div>
        <div className="mr-3">
          <MainBtn openModal={() => openModal()}>Order Now</MainBtn>
        </div>
        <OrderModal isOpen={isModalOpen} onClose={closeModal}></OrderModal>
      </header>
      <Outlet />
    </>
  );
}

export default MainNav;
