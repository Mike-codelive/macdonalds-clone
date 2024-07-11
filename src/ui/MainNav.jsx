import { NavLink, Outlet } from 'react-router-dom';
import MobileNavBtn from './MobileNavBtn';
import MainBtn from './MainBtn';
import { useEffect, useState } from 'react';
import OrderModal from './OrderModal';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';

function MainNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const links = document.querySelectorAll('.custom_link');

    links.forEach((link) => {
      if (link.classList.contains('active')) {
        link.parentElement.classList.add('highlight');
      }

      link.addEventListener('click', () => {
        // Remove active class from all links and parent highlight
        links.forEach((l) => {
          l.classList.remove('active');
          l.parentElement.classList.remove('highlight');
        });

        // Add active class to clicked link and parent highlight
        link.classList.add('active');
        link.parentElement.classList.add('highlight');
      });
    });

    const handleClickOutside = (event) => {
      const activeLink = document.querySelector('.custom_link.active');
      if (activeLink && !event.target.closest('.custom_link')) {
        activeLink.classList.remove('active');
        activeLink.parentElement.classList.remove('highlight');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <header className="shadow-nav lg:pt-[15px]">
        <div className="mx-auto flex w-full max-w-[1170px] grid-cols-[165px_auto_auto_auto] lg:grid">
          <div className="flex min-w-[165px] items-center [grid-column-start:1] [grid-row-end:3] [grid-row-start:1] lg:items-center">
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
          <div className="mr-3 flex w-full justify-end text-[14px] [grid-column-end:5] [grid-column-start:2] [grid-row-start:1] lg:max-h-[40px] lg:justify-between">
            <div className="hidden items-center lg:flex">
              <NavLink to="./subemail">Sign Up for Email</NavLink>
            </div>
            <div className="flex items-center">
              <NavLink to="./search">
                <span className="mr-[30px] hidden lg:flex">
                  <MagnifyingGlassIcon className="w-full max-w-[20px]" /> Search
                </span>
              </NavLink>
              <NavLink to="./reslocation">
                <span className="mr-[30px] hidden lg:flex">
                  <MapPinIcon className="w-full max-w-[20px] text-[#d90007]" />
                  <span className="text-[#006bae] underline">
                    Find Your Restaurant
                  </span>
                </span>
              </NavLink>
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] grow-0 py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
                openModal={() => openModal()}
              >
                Order Now
              </MainBtn>
            </div>
          </div>
          <nav className="navbar_bottom_links mt-[26px] hidden whitespace-nowrap [grid-column-end:5] [grid-column-start:2] [grid-row-start:2] lg:flex">
            <div className="pb-[23px] pl-[5px] pr-[25px]">
              <span className="flex items-center">
                Our Menu
                <ChevronDownIcon className="w-[25px] px-[6px]" />
              </span>
            </div>
            <div className="pb-[23px] pl-[5px] pr-[25px]">
              <NavLink
                to="dowload-app"
                className="custom_link flex items-center"
              >
                Download App
              </NavLink>
            </div>
            <div className="pb-[23px] pl-[5px] pr-[25px]">
              <NavLink to="rewards" className="custom_link flex items-center">
                MyMcDonald's Rewards
              </NavLink>
            </div>
            <div className="pb-[23px] pl-[5px] pr-[25px]">
              <NavLink to="deals" className="flex items-center">
                Exclusive Deals
              </NavLink>
            </div>
            <div className="pb-[23px] pl-[5px] pr-[25px]">
              <NavLink to="our-food" className="flex items-center">
                About Our Food
              </NavLink>
            </div>
            <div className="pb-[23px] pl-[5px] pr-[25px]">
              <NavLink to="delivery" className="flex items-center">
                McDelivery®
              </NavLink>
            </div>
            <div className="pb-[23px] pl-[5px] pr-[25px]">
              <NavLink to="locate" className="flex items-center">
                Locate
              </NavLink>
            </div>
            <div className="pb-[23px] pl-[5px]">
              <NavLink to="gift" className="flex items-center">
                Gift Cards
              </NavLink>
            </div>
          </nav>

          <OrderModal isOpen={isModalOpen} onClose={closeModal}></OrderModal>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default MainNav;
