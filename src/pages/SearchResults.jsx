import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import MainBtn from '../ui/MainBtn';

function SearchResults() {
  return (
    <section>
      <div className="max-w-[1170px] px-[9pt] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div className="flex justify-between border-b-[1px] border-solid border-[#292929]">
          <input
            placeholder="Search mcdonalds.com"
            className="w-[85%] border-0 text-[18px] placeholder-black outline-none lg:text-[50px]"
            type="text"
          />
          <MainBtn
            buttonClass={
              'rounded-md bg-[#ffbc0d] my-[12.5px] flex items-center justify-center px-[25px] py-[8px] w-[44px] h-[36px] lg:w-[60px] lg:h-[48px] leading-[24px] text-[1pc] text-[#292929]'
            }
          >
            <MagnifyingGlassIcon className="h-[18px] w-[18px] flex-shrink-0" />
          </MainBtn>
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
