import { NavLink } from 'react-router-dom';
import MainBtn from '../ui/MainBtn';

function Deals() {
  return (
    <section>
      <div className="mx-[9pt] max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div>
          <h1 className="text-md-36 text-center font-bold lg:text-[56px]">
            Exclusive McDonald's Deals
          </h1>
        </div>

        <div className="flex flex-wrap pt-[100px]">
          <div className="px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./Main/bigmac-mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/bigmac.jpeg" />
              <img src="./Main/bigmac.jpeg" alt="bigmac promo" />
            </picture>
          </div>
          <div className="float-left px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              Free Big Mac® w/ $1 min. purchase
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              Looking for something special, saucy and free? Download the app
              and
              <b className="mx-1">
                get a free Big Mac with your first purchase
              </b>
              of $1+.* Every $1 you spend earns 100 points, redeemable for free
              food.
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *Offer valid 1x thru the last day of month for first time app
              users at participating McDonald’s. May take up to 48 hours to
              appear in your deals. Must opt in to Rewards. Excludes tax.
            </p>
            <NavLink to="/dowload-app">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Get a Free Big Mac in the App
              </MainBtn>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-wrap pt-[100px]">
          <div className="px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./Main/meal_deal_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/meal_deal.jpeg" />
              <img src="./Main/meal_deal.jpeg" alt="meal deal" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              The rumors = true
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              <b className="mx-1">
                Get a 4 piece McNuggets®, small fries and soft drink, plus a
                McChicken® or McDouble®
              </b>{' '}
              starting at $5 for a limited time.*
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *Prices and participation may vary. McDouble Meal Deal $6 in some
              areas. ©2024 The Coca-Cola Company. &quot;Coca-Cola&quot; is a
              registered trademark of The Coca-Cola Company.
            </p>
            <NavLink to="/dowload-app">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Get The Meal In The App
              </MainBtn>
            </NavLink>
          </div>
        </div>
        <div className="mx-[-9px] flex flex-wrap pt-[100px]">
          <picture className="w-full px-[8px] lg:w-[30%]">
            <source srcSet="./Deals/1pub.jpeg" media="(max-width: 1023px)" />
            <source srcSet="./Deals/1pub.jpeg" />
            <img src="./Deals/1pub.jpeg" alt="1 pub" />
          </picture>
          <div className="px-[8px] pb-[30px] lg:w-[70%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              Free Fries Friday
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              Gather your friends! You have Friday plans.{' '}
              <b>Get free medium Fries on any $1+ purchase</b>, only in the
              app.* Order ahead to save time or use your deal at the restaurant.
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *Valid 1x on Fridays thru 12/31/24 at participating McDonald’s.
              Excludes tax. Must opt in to Rewards.
            </p>
            <NavLink to="/dowload-app">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Get Free Fries in the App
              </MainBtn>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deals;
