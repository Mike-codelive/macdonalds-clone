import { useState } from 'react';
import MobileNavMenu from './MobileNavMenu';
import {
  ArrowDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';

function MobileNav({ isOpen, onClose }) {
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

  const toggleMobileNavMenu = () => {
    setIsMobileNavMenuOpen(!isMobileNavMenuOpen);
  };

  return isOpen ? (
    <div className="mobile_nav fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll lg:hidden">
      <div className="h-full w-full rounded-lg bg-white">
        <div>
          <img className="h-3pc w-3pc" src="./logo.jpg" alt="Logo" />
          <button
            onClick={onClose}
            className="btn_close_modal absolute right-4 top-4"
          ></button>
        </div>
        <nav className="flex flex-col items-start pl-[65px] pr-[13px] pt-[40px]">
          <button className="text-[14px]">Sign Up for Email</button>
          <button className="mt-[30px] text-[14px]">Careers</button>
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
            <MobileNavMenu isOpen={isMobileNavMenuOpen} />
          </div>
          <button className="mt-[30px]">Download App</button>
          <button className="mt-[30px]">MyMcDonald's Rewards</button>
          <button className="mt-[30px]">Exclusive Deals</button>
          <button className="mt-[30px]">About Our Food</button>
          <button className="mt-[30px]">McDelivery®</button>
          <button className="mt-[30px]">Locate</button>
          <button className="mt-[30px]">Gift Cards</button>
          <hr className="w-full" />
          <div className="flex w-full items-start justify-between">
            <button>Search</button>
            <MagnifyingGlassIcon className="w-[20px]" />
          </div>
          <div className="mt-[30px] flex w-full items-start justify-between pb-[30px]">
            <button className="text-[14px]">Find Your Restaurant</button>
            <MapPinIcon className="mobile_geo_location w-[20px]" />
          </div>
        </nav>
      </div>
    </div>
  ) : null;
}

export default MobileNav;
