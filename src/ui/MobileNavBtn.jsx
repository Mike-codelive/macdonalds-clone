import { useState } from 'react';
import MobileNav from './MobileNav';

function MobileNavBtn() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <button
        onClick={toggleMobileNav}
        className="ml-2 flex h-5 w-5 flex-col items-center justify-center space-y-1.5 focus:outline-none lg:hidden"
      >
        <span
          className={
            'block h-0.5 w-5 transform bg-black transition duration-300 ease-in-out'
          }
        />
        <span
          className={
            'block h-0.5 w-5 transform bg-black transition duration-300 ease-in-out'
          }
        />
        <span
          className={
            'block h-0.5 w-5 transform bg-black transition duration-300 ease-in-out'
          }
        />
      </button>

      <MobileNav isOpen={isMobileNavOpen} onClose={toggleMobileNav} />
    </>
  );
}

export default MobileNavBtn;
