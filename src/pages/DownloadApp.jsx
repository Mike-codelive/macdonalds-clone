import { NavLink } from 'react-router-dom';
import MainBtn from '../ui/MainBtn';

function DownloadApp() {
  return (
    <section>
      <div className="w-full max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div className="mb-[17px] text-center text-[38px] font-bold leading-[56px] lg:w-[1194px] lg:text-[54px]">
          <h1>McDonald’s App - Mobile Orders, McDonald's Rewards, and More</h1>
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
                srcSet="./Main/digital_delivery_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/digital_delivery.jpeg" />
              <img src="./Main/digital_delivery.jpeg" alt="digital delivery" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              McDelivery® is where you get food. And free food.
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              Every McDelivery order in the app lets you earn MyMcDonald’s
              Rewards points—use those to get your free food. And, yup, you can
              get ‘em delivered, too. Imagine, McD’s you didn’t pay for brought
              right to you.{' '}
              <NavLink className="text-[#006bae] underline" to="/dowload-app">
                Check out how easy ordering delivery is in the app.
              </NavLink>
              *
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *At participating McDonald's. Must opt into Rewards. McDelivery
              prices may be higher than at restaurants. Delivery/other fees may
              apply.
            </p>
            <NavLink to="/delivery">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Earn Points with McDelivery
              </MainBtn>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-wrap pt-[100px]">
          <div className="px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./dowload-app/1PUB_ROA_1_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./dowload-app/1PUB_ROA_1.jpeg" />
              <img src="./dowload-app/1PUB_ROA_1.jpeg" alt="pub 1" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              New: Faster Faves, Only in the App
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              We now prep when you’re on the way if you choose Curbside, Front
              Counter—or dine in for Table Service. Just order ahead in the app
              to save time. Because waiting in line for faves? Not our thing
              either.*
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *At participating McDonald’s.
            </p>
            <NavLink to="/delivery">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Order Ahead in the App
              </MainBtn>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-wrap pt-[100px]">
          <div className="px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./dowload-app/1PUB_DownloadApp_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./dowload-app/1PUB_DownloadApp.jpeg" />
              <img src="./dowload-app/1PUB_DownloadApp.jpeg" alt="pub 2" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              More Ways to Pay for Faves
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              Get faves fast with Mobile Order & Pay* in the app. Use your
              preferred debit or credit card, Apple Pay, Google Pay™, PayPal or
              Venmo.
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *McDonald’s app download and registration required. Mobile Order &
              Pay available at participating McDonald’s.
            </p>
            <NavLink to="/delivery">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Order in the App
              </MainBtn>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-wrap pt-[100px] lg:flex-nowrap">
          <div className="px-[15px]">
            <picture>
              <source
                srcSet="./dowload-app/AppPromo_1.jpg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./dowload-app/AppPromo_1.jpg" />
              <img
                className="lg:min-w-[475px]"
                src="./dowload-app/AppPromo_1.jpg"
                alt="pub 3"
              />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[30px] lg:mt-[15px] lg:text-[54px] lg:leading-[56px]">
              Deliciousness At Your Fingertips
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              Download the app for exclusive deals and easy ordering.
            </h2>
            <div className="flex">
              <img
                className="cursor-pointer"
                src="./Footer/app_store_badge.png"
                alt="app"
              />
              <img
                className="cursor-pointer"
                src="./Footer/google_play_badge.png"
                alt="app"
              />
            </div>
          </div>
        </div>

        <div className="px-[15px] pt-[75pt]">
          <h2 className="mb-[18px] text-[36px] font-bold">
            Deals and Much More
          </h2>

          <p>
            With the McDonald’s app, you’ll get access to{' '}
            <span className="cursor-pointer text-[#006bae] underline">
              exclusive deals.
            </span>{' '}
            Use the app to order ahead and pass the line with{' '}
            <span className="cursor-pointer text-[#006bae] underline">
              Mobile Order & Pay
            </span>
            plus join{' '}
            <span className="cursor-pointer text-[#006bae] underline">
              MyMcDonald’s Rewards
            </span>{' '}
            to earn points on every order to redeem for free McDonald's.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
