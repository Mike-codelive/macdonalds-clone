function MenuModal() {
  return (
    <section className="menu_modal absolute left-0 right-0 top-auto z-[999999] hidden select-none bg-[#fff] lg:block">
      <div className="mx-auto w-full max-w-[765pt] px-[20px] pb-[50px] pt-[44px]">
        <ul className="grid grid-cols-[auto_auto_auto] gap-[15px]">
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/breakfast.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/breakfast.jpeg"
                alt="breakfast"
              />
            </picture>
            <span>Breakfast</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/fries.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/fries.jpeg"
                alt="fries"
              />
            </picture>
            <span>Fries & Sides</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/sweets.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/sweets.jpeg"
                alt="sweets"
              />
            </picture>
            <span>Sweets & Treats</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/burguers.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/burguers.jpeg"
                alt="burguers"
              />
            </picture>
            <span>Burguers</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/happy.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/happy.jpeg"
                alt="happy"
              />
            </picture>
            <span>Happy Meal®</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/beverages.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/beverages.jpeg"
                alt="beverages"
              />
            </picture>
            <span>Beverages</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source
                srcSet="./Menu/chicken&sandwiches.jpeg"
                type="image/jpeg"
              />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/chicken&sandwiches.jpeg"
                alt="chicken&sandwiches"
              />
            </picture>
            <span>Chicken & Fish Sandwiches</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/meal.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/meal.jpeg"
                alt="meal"
              />
            </picture>
            <span>Meal Deals</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/dollar.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/dollar.jpeg"
                alt="dollar"
              />
            </picture>
            <span>$1 $2 $3 Dollar Menu*</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/mcnuggets.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/mcnuggets.jpeg"
                alt="mcnuggets"
              />
            </picture>
            <span>McNuggets® and Meals</span>
          </li>
          <li className="flex cursor-pointer items-center">
            <picture>
              <source srcSet="./Menu/mccafe.jpeg" type="image/jpeg" />
              <img
                className="mr-[14px] h-[78px] w-[78px]"
                src="./Menu/mccafe.jpeg"
                alt="mccafe"
              />
            </picture>
            <span>McCafé® Coffees</span>
          </li>
        </ul>
        <div className="mt-[54px] flex w-full justify-center">
          <button className="border- rounded border-[1px] border-solid border-[#adadad] px-[25px] py-[13px]">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}

export default MenuModal;