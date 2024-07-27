import { NavLink, Outlet, useLocation } from 'react-router-dom';
import MobileNavBtn from './MobileNavBtn';
import MainBtn from './MainBtn';
import { useEffect, useRef, useState } from 'react';
import OrderModal from './OrderModal';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';
import MenuModal from './MenuModal';

function MainNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll('.custom_link');
    links.forEach((link) => {
      const parent = link.parentElement;
      if (
        link.classList.contains('active') &&
        !link.classList.contains('not_active')
      ) {
        parent.classList.add('highlight');
      } else {
        parent.classList.remove('highlight');
      }

      link.addEventListener('click', () => {
        links.forEach((l) => {
          l.classList.remove('active');
          l.parentElement.classList.remove('highlight');
        });

        if (link.classList.contains('not_active')) {
          setIsMenuOpen(false);
          return;
        }
        link.classList.add('active');
        link.parentElement.classList.add('highlight');

        setIsMenuOpen(false);
      });
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="shadow-nav lg:relative lg:pt-[15px]">
        <div className="mx-auto flex w-full max-w-[1170px] select-none grid-cols-[165px_auto_auto_auto] lg:grid">
          <div className="flex min-w-[165px] items-center [grid-column-start:1] [grid-row-end:3] [grid-row-start:1] lg:items-center">
            <NavLink to="./main">
              <img
                className="custom_link not_active block h-3pc w-3pc lg:hidden"
                src="/logo.jpg"
                alt="logo"
              />
              <img
                className="custom_link not_active hidden lg:block"
                src="/logo_desk.jpg"
                alt="logo"
              />
            </NavLink>
            <MobileNavBtn />
          </div>
          <div className="mr-3 flex w-full justify-end text-[14px] [grid-column-end:5] [grid-column-start:2] [grid-row-start:1] lg:max-h-[40px] lg:justify-between">
            <div className="hidden items-center lg:flex">
              <NavLink className="custom_link not_active" to="./subemail">
                Sign Up for Email
              </NavLink>
            </div>
            <div className="flex items-center">
              <NavLink className="custom_link not_active" to="./search">
                <span className="mr-[30px] hidden lg:flex">
                  <MagnifyingGlassIcon className="w-full max-w-[20px]" /> Search
                </span>
              </NavLink>
              <NavLink className="custom_link not_active" to="">
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
          <nav className="navbar_bottom_links mt-[26px] hidden [grid-column-end:5] [grid-column-start:2] [grid-row-start:2] lg:flex xl:whitespace-nowrap">
            <div className="ml-[5px] mr-[25px] pb-[23px]">
              <span
                onClick={toggleMenu}
                className={`${isMenuOpen ? 'font-bold' : ''} flex items-center`}
              >
                Our Menu
                <ChevronDownIcon
                  className={`${isMenuOpen ? 'rotate-180' : ''} linear w-[30px] px-[6px] transition-all duration-[.25s]`}
                />
              </span>
            </div>
            <div className="ml-[5px] mr-[25px] pb-[23px]">
              <NavLink
                to="dowload-app"
                className="custom_link flex items-center"
              >
                Download App
              </NavLink>
            </div>
            <div className="ml-[5px] mr-[25px] pb-[23px]">
              <NavLink to="rewards" className="custom_link flex items-center">
                MyMcDonald's Rewards
              </NavLink>
            </div>
            <div className="ml-[5px] mr-[25px] pb-[23px]">
              <NavLink to="deals" className="custom_link flex items-center">
                Exclusive Deals
              </NavLink>
            </div>
            <div className="ml-[5px] mr-[25px] pb-[23px]">
              <NavLink to="our-food" className="custom_link flex items-center">
                About Our Food
              </NavLink>
            </div>
            <div className="ml-[5px] mr-[25px] pb-[23px]">
              <NavLink to="delivery" className="custom_link flex items-center">
                McDelivery®
              </NavLink>
            </div>
            <div className="ml-[5px] mr-[25px] pb-[23px]">
              <NavLink to="locate" className="custom_link flex items-center">
                Locate
              </NavLink>
            </div>
            <div className="ml-[5px] pb-[23px]">
              <NavLink to="gift" className="custom_link flex items-center">
                Gift Cards
              </NavLink>
            </div>
          </nav>

          <OrderModal isOpen={isModalOpen} onClose={closeModal}></OrderModal>
        </div>
      </header>
      {isMenuOpen ? <MenuModal /> : null}
      <Outlet />
    </>
  );
}

export default MainNav;
