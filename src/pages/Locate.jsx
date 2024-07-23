import { useState } from 'react';
import MainBtn from '../ui/MainBtn';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/16/solid';

function Locate() {
  const [isLocateFocused, setIsLocateFocused] = useState(false);
  const [locateValue, setLocateValue] = useState('');

  const handleLocateFocus = () => setIsLocateFocused(true);
  const handleLocateBlur = () => setIsLocateFocused(false);
  const handleLocateChange = (e) => setLocateValue(e.target.value);

  const isLocateLabelUp = isLocateFocused || locateValue !== '';

  return (
    <section>
      <div className="mx-[9pt] max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div className="pt-[100px]">
          <div className="border-customGray flex border-b-2 px-[10px] pt-[50px]">
            <div className="relative flex-[70%]">
              <label
                className={`absolute bottom-0 text-[50px] transition-all duration-300 ease-in-out ${
                  isLocateLabelUp ? '-translate-y-[75px] !text-xs' : ''
                }`}
                htmlFor="location"
              >
                Zip or City & State
              </label>
              <input
                className="border-x-0 border-b-[.063rem] border-t-0 pt-4 text-[50px] outline-none"
                type="text"
                id="location"
                value={locateValue}
                onChange={handleLocateChange}
                onFocus={handleLocateFocus}
                onBlur={handleLocateBlur}
                required
              />
            </div>
            <div className="flex-[10%] pt-4">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] flex items-center py-[8px] w-[60px] h-[48px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                <MagnifyingGlassIcon className="h-[18px] w-[18px] flex-shrink-0" />
              </MainBtn>
            </div>
            <div className="flex-[20%] pt-4">
              <MainBtn
                buttonClass={
                  'rounded-md w-full flex items-center py-[8px] w-[60px] h-[48px] lg:px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                <MapPinIcon className="w-[18px]" /> Locate me
              </MainBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locate;
