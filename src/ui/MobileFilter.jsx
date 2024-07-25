import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';

function MobileFilter({ onClose }) {
  const [selectedMiles, setSelectedMiles] = useState('5');

  const handleRadioChange = (e) => {
    setSelectedMiles(e.target.value);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1170px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        onClose();
      }
    };

    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [onClose]);

  return (
    <section className="fixed left-0 top-0 z-[999999999999] h-[100vh] w-[100vw] bg-white p-[20px]">
      <div>
        <XMarkIcon
          className="absolute right-[15px] top-[15px] h-[40px] w-[25px]"
          onClick={onClose}
        />
      </div>
      <div className="py-[32px] text-center">
        <h2>Filters</h2>
      </div>
      <div>
        <fieldset>
          <legend className="mb-[20px]">Services</legend>
          <ul>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput0"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput0"
              >
                Mobile Deals
              </label>
            </li>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput1"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput1"
              >
                Drive Thru
              </label>
            </li>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput2"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput2"
              >
                McDelivery
              </label>
            </li>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput3"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput3"
              >
                Indoor PlayPlace
              </label>
            </li>
            <li className="mb-3 flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput4"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput4"
              >
                Wi-Fi
              </label>
            </li>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput5"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput5"
              >
                Outdoor PlayPlace
              </label>
            </li>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput6"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput6"
              >
                Indoor Dining
              </label>
            </li>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput7"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput7"
              >
                Gift Cards
              </label>
            </li>
            <li className="mb-[12px] flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput8"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput8"
              >
                Open 24/7
              </label>
            </li>
            <li className="mb-3 flex">
              <input
                className="absolute mr-[15px] h-[20px] w-[20px] cursor-pointer opacity-0"
                type="checkbox"
                id="filterItemsInput9"
              />
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-md border-2 border-gray-400 bg-white">
                <svg
                  className="check-icon hidden h-4 w-4 text-[#292929]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <label
                className="mr-[25px] cursor-pointer pl-[15px]"
                htmlFor="filterItemsInput9"
              >
                Kiosk Audio Navigation
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <div className="flex items-center">
            <legend className="mr-[14px]">miles</legend>
            <label className="flex items-center">
              <input
                className="locate_custom_radio mr-[15px]"
                name="radio-filter"
                type="radio"
                value={5}
                checked={selectedMiles === '5'}
                onChange={handleRadioChange}
              />
              <span className="mr-[25px]">5</span>
            </label>
            <label className="flex items-center">
              <input
                className="locate_custom_radio mr-[15px]"
                name="radio-filter"
                type="radio"
                value={10}
                checked={selectedMiles === '10'}
                onChange={handleRadioChange}
              />
              <span className="mr-[25px]">10</span>
            </label>
            <label className="flex items-center">
              <input
                className="locate_custom_radio mr-[15px]"
                name="radio-filter"
                type="radio"
                value={20}
                checked={selectedMiles === '20'}
                onChange={handleRadioChange}
              />
              <span className="mr-[25px]">20</span>
            </label>
            <label className="flex items-center">
              <input
                className="locate_custom_radio mr-[15px]"
                name="radio-filter"
                type="radio"
                value={50}
                checked={selectedMiles === '50'}
                onChange={handleRadioChange}
              />
              <span className="mr-[25px]">50</span>
            </label>
          </div>
        </fieldset>
      </div>
    </section>
  );
}

export default MobileFilter;
