import { useEffect, useState } from 'react';
import MobileNavMenu from './MobileNavMenu';
import {
  ArrowDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';
import { NavLink } from 'react-router-dom';

function MobileNav({ isOpen, onClose }) {
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

  const toggleMobileNavMenu = () => {
    setIsMobileNavMenuOpen(!isMobileNavMenuOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return isOpen ? (
    <div className="mobile_nav fixed inset-0 z-50 flex items-center justify-center lg:hidden">
      <div className="h-full w-full overflow-y-auto bg-white">
        <div className="relative bg-white">
          <NavLink className="inline-block" onClick={onClose} to={'./main'}>
            <img className="h-3pc w-3pc" src="./logo.jpg" alt="Logo" />
          </NavLink>
          <button
            onClick={onClose}
            className="btn_close_modal absolute right-4 top-4"
          ></button>
        </div>
        <nav className="flex flex-col items-start pl-[65px] pr-[13px] pt-[80px]">
          <NavLink onClick={onClose} to={'./subemail'} className="text-[14px]">
            Sign Up for Email
          </NavLink>
          <hr className="w-full" />
          <div className="flex w-full flex-col items-start justify-between">
            <button
              onClick={() => toggleMobileNavMenu()}
              className="flex w-full justify-between"
            >
              Our Menu{' '}
              {isMobileNavMenuOpen ? (
                <ArrowDownIcon className="w-[20px]" />
              ) : (
                <span className="nav_movile_menu_cross"></span>
              )}
            </button>
            <MobileNavMenu onClose={onClose} isOpen={isMobileNavMenuOpen} />
          </div>
          <NavLink onClick={onClose} to={'./dowload-app'} className="mt-[30px]">
            Download App
          </NavLink>
          <NavLink onClick={onClose} to={'./rewards'} className="mt-[30px]">
            MyMcDonald's Rewards
          </NavLink>
          <NavLink onClick={onClose} to={'./deals'} className="mt-[30px]">
            Exclusive Deals
          </NavLink>
          <NavLink onClick={onClose} to={'./our-food'} className="mt-[30px]">
            About Our Food
          </NavLink>
          <NavLink onClick={onClose} to={'./delivery'} className="mt-[30px]">
            McDelivery®
          </NavLink>
          <NavLink onClick={onClose} to={'./locate'} className="mt-[30px]">
            Locate
          </NavLink>
          <NavLink onClick={onClose} to={'./gift'} className="mt-[30px]">
            Gift Cards
          </NavLink>
          <hr className="w-full" />
          <div className="flex w-full items-start justify-between">
            <NavLink onClick={onClose} to={'./search'}>
              Search
            </NavLink>
            <NavLink onClick={onClose} to={'./search'}>
              <MagnifyingGlassIcon className="w-[20px]" />
            </NavLink>
          </div>
          <div className="mt-[30px] flex w-full items-start justify-between pb-[30px]">
            <NavLink
              onClick={onClose}
              to={'./reslocation'}
              className="text-[14px] text-[#006bae] underline"
            >
              Find Your Restaurant
            </NavLink>
            <NavLink onClick={onClose} to={'./reslocation'}>
              <MapPinIcon className="mobile_geo_location w-[20px]" />
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  ) : null;
}

export default MobileNav;
