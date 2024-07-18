import { NavLink } from 'react-router-dom';
import MainBtn from '../ui/MainBtn';

function Rewards() {
  return (
    <section>
      <div className="mx-2 max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div className="mb-[17px] flex justify-center">
          <h1 className="text-[54px] font-bold">MyMcDonald’s Rewards</h1>
        </div>
        <div>
          <p className="mb-[16px]">
            Download the app and join MyMcDonald’s Rewards to earn bonus points
            on your McDonald’s orders—then, start getting fave after fave for
            free.*
          </p>
          <p className="text-[10px]">
            *At participating McDonald’s. Refer to{' '}
            <span className="text-[#006bae] underline">
              MyMcDonald’s Program Terms
            </span>
            for details. Must opt in to Rewards.
          </p>
        </div>
        <div className="pt-[100px]">
          <div className="flex flex-wrap">
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
                of $1+.* Every $1 you spend earns 100 points, redeemable for
                free food.
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
        </div>
        <div className="mb-[50px] px-[9pt]">
          <h2 className="mb-[18px] mt-[45px] text-[36px] font-bold">
            How to Earn Points and Redeem Faves
          </h2>
          <p className="mb-[32px]">
            Order like a pro––all it takes is one code or one scan to earn
            MyMcDonald’s Rewards points, quickly pay and redeem your favorites.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="px-[12px]">
            <img src="./Rewards/3PUB_Loyalty_0.jpeg" alt="rewards 1" />
            <div className="mx-[.75rem] mb-[50px]">
              <h3 className="mb-[18px] mt-[48px] text-[36px]">
                Easily Earn Points
              </h3>
              <p>
                Select the ‘Earn Points’ tab in the{' '}
                <span className="text-[#006bae] underline">McDonald's app</span>{' '}
                found on the bottom menu bar. Access the 4-digit Drive Thru Code
                or code to scan at the counter or kiosk. When you place your
                order in the app, you'll automatically earn your points.
              </p>
            </div>
          </div>
          <div className="px-[12px]">
            <img
              className="max-h-[225px]"
              src="./Rewards/3PUB_Loyalty_1.jpeg"
              alt="rewards 1"
            />
            <div className="mx-[.75rem] mb-[50px]">
              <h3 className="mb-[18px] mt-[48px] text-[36px]">
                Pay & Earn All in One Step
              </h3>
              <p>
                Link your card details to the app so you can conveniently pay
                and earn points at the same time—including an extra 1500 Bonus
                Points on your first payment using your linked card. Then,
                simply tell us your Drive Thru code before placing your order at
                the speaker or scan the code in-restaurant.
              </p>
              <p className="mt-[18px] text-[10px]">
                *Bonus points may take up to 10 days to appear in your account.
                Rewards program available only at participating McDonald's.
                McDonald's app download and registration required.
              </p>
            </div>
          </div>
          <div className="px-[12px]">
            <img src="./Rewards/3PUB_Loyalty_2.jpeg" alt="rewards 1" />
            <div className="mx-[.75rem] mb-[50px]">
              <h3 className="mb-[18px] mt-[48px] text-[36px]">
                Redeem Free McDonald’s
              </h3>
              <p>
                Go to the Rewards & Deals tab. There you can select the menu
                item you want to redeem. Choose ‘Use at Restaurant’ to get the
                Drive Thru code, or select ‘Use Restaurant Code’ when you’re
                inside to reveal the code to use at the counter or kiosk.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-[32px]">
            <h3 className="mb-[18px] mt-[48px] text-[36px] font-bold">
              More Points Unlock More Rewards
            </h3>
            <p className="text-[16px]">
              It's easy to track your McDonald's points and see how far you are
              from unlocking the next tier of free McDonald's.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="mb-[50px] lg:px-[2pc]">
              <img src="./Rewards/2PUB_MMR_Tier1.jpeg" alt="points 1" />
              <h3 className="text-md-36 mb-[18px] mt-[45px]">1500 Points</h3>
              <p>
                Choose your McDonald's item, whether you’re craving a{' '}
                <span className="text-linkcolor underline">McChicken®</span>
                {`(Regular or Hot ‘N Spicy)`},{' '}
                <span className="text-linkcolor underline">Hash Browns</span>,
                <span className="text-linkcolor underline">Vanilla Cone</span>{' '}
                or our classic{' '}
                <span className="text-linkcolor underline">Cheeseburger</span>.
              </p>
            </div>
            <div className="px-[12px]">
              <img src="./Rewards/2PUB_MMR_Tier2.jpeg" alt="points 2" />
              <h3 className="text-md-36 mb-[18px] mt-[45px]">3000 Points</h3>
              <p>
                Step up and take your pick between
                <span className="text-linkcolor underline">medium Fries</span>
                <span className="text-linkcolor underline">
                  Sausage Burrito
                </span>
                ,
                <span className="text-linkcolor underline">
                  {' '}
                  6 piece Chicken McNuggets®
                </span>{' '}
                or a
                <span className="text-linkcolor underline">
                  large Iced Coffee
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
