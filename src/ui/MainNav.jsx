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
      <header className="pt-[15px] shadow-nav">
        <div className="mx-auto flex w-full max-w-[1170px] items-center justify-between">
          <div className="flex items-center">
            <NavLink to="./main">
              <img
                className="block h-3pc w-3pc lg:hidden"
                src="/logo.jpg"
                alt="logo"
              />
              <img
                className="hidden lg:block"
                src="/logo_desk.jpg"
                alt="logo"
              />
            </NavLink>
            <MobileNavBtn />
          </div>
          <div className="mr-3">
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
              openModal={() => openModal()}
            >
              Order Now
            </MainBtn>
          </div>
          <OrderModal isOpen={isModalOpen} onClose={closeModal}></OrderModal>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default MainNav;
