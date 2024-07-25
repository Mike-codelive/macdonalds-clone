import { useState } from 'react';
import MainBtn from '../ui/MainBtn';
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';
import Map from '../ui/Map';

function Locate() {
  const [isLocateFocused, setIsLocateFocused] = useState(false);
  const [locateValue, setLocateValue] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleLocateFocus = () => setIsLocateFocused(true);
  const handleLocateBlur = () => setIsLocateFocused(false);
  const handleLocateChange = (e) => setLocateValue(e.target.value);

  const isLocateLabelUp = isLocateFocused || locateValue !== '';

  return (
    <section>
      <div className="mx-[9pt] max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div>
          <div className="border-customGray mb-[24px] flex flex-wrap border-b-2 px-[10px] pt-[50px] lg:flex-nowrap">
            <div className="relative w-full flex-[90%] lg:flex-[70%]">
              <label
                className={`absolute bottom-0 text-[18px] transition-all duration-300 ease-in-out lg:text-[50px] ${
                  isLocateLabelUp
                    ? '-translate-y-[36px] !text-xs lg:-translate-y-[75px]'
                    : ''
                }`}
                htmlFor="location"
              >
                Zip or City & State
              </label>
              <input
                className="w-full border-0 pt-4 text-[18px] outline-none lg:text-[50px]"
                type="text"
                id="location"
                value={locateValue}
                onChange={handleLocateChange}
                onFocus={handleLocateFocus}
                onBlur={handleLocateBlur}
                required
              />
            </div>
            <div className="flex flex-[10%] justify-end lg:pt-4">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] flex items-center justify-center px-[25px] py-[8px] w-[44px] h-[36px] lg:w-[60px] lg:h-[48px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                <MagnifyingGlassIcon className="h-[18px] w-[18px] flex-shrink-0" />
              </MainBtn>
            </div>
            <div className="ml-[36px] hidden pt-4 lg:block lg:flex-[20%]">
              <MainBtn
                buttonClass={
                  'rounded-md w-full flex gap-[5px] border-[1px] border-[#6f6f6f] items-center justify-center py-[8px] w-[60px] h-[48px] lg:px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                <MapPinIcon className="w-[18px]" /> Locate me
              </MainBtn>
            </div>
          </div>
          <div className="mb-[24px] flex justify-between">
            <MainBtn
              buttonClass={
                'rounded-md lg:hidden flex gap-[5px] border-[1px] border-[#6f6f6f] items-center justify-center py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              <MapPinIcon className="w-[18px]" /> Locate me
            </MainBtn>
            <div className="flex flex-col px-[10px] lg:block">
              <button
                className="flex items-center justify-center gap-[5px] rounded-md px-[25px] py-[8px] text-[1pc] leading-[24px] text-[#292929]"
                onClick={toggleFilter}
              >
                <AdjustmentsHorizontalIcon className="text-linkcolor w-[18px] flex-shrink-0" />
                Filters
                <ChevronDownIcon
                  className={`${
                    isFilterOpen ? 'rotate-180' : ''
                  } w-[18px] flex-shrink-0 transition-transform duration-300 ease-in-out`}
                />
              </button>
              {isFilterOpen ? (
                <div className="pt-[40px]">
                  <fieldset>
                    <legend className="mb-[20px]">Services</legend>
                    <ul className="mb-[2.5rem] flex flex-wrap">
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                      <li className="relative mb-[12px] flex items-center">
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
                    <fieldset>
                      <div className="flex items-center">
                        <legend className="mr-[14px]">miles</legend>
                        <label className="flex items-center">
                          <input
                            className="locate_custom_radio mr-[15px]"
                            checked
                            name="radio-filter"
                            type="radio"
                          />
                          <span className="mr-[25px]">5</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            className="locate_custom_radio mr-[15px]"
                            name="radio-filter"
                            type="radio"
                          />
                          <span className="mr-[25px]">10</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            className="locate_custom_radio mr-[15px]"
                            name="radio-filter"
                            type="radio"
                          />
                          <span className="mr-[25px]">20</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            className="locate_custom_radio mr-[15px]"
                            name="radio-filter"
                            type="radio"
                          />
                          <span className="mr-[25px]">50</span>
                        </label>
                      </div>
                    </fieldset>
                  </fieldset>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1170px]">
        <div className="h-[600px]">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Locate;
