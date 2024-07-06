import { NavLink } from 'react-router-dom';
import MainBtn from '../ui/MainBtn';

function MainPage() {
  return (
    <section className="lg:text-[1pc]">
      <div className="mx-2 max-w-[1170px] pt-[100px] lg:mx-auto">
        <div>
          <div className="float-left inline-block px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./Main/bigmac-mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/bigmac.jpeg" />
              <img src="./Main/bigmac.jpeg" alt="bigmac promo" />
            </picture>
          </div>
          <div className="float-left px-[15px] lg:w-[34.4%]">
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
              <MainBtn text={16} px={25} py={13}>
                Get a Free Big Mac in the App
              </MainBtn>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
