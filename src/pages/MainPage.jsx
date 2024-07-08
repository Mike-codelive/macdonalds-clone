import { NavLink } from 'react-router-dom';
import MainBtn from '../ui/MainBtn';

function MainPage() {
  return (
    <section className="lg:text-[1pc]">
      <div className="mx-2 max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
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
                srcSet="./Main/black_designers_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/black_designers.jpeg" />
              <img src="./Main/black_designers.jpeg" alt="black designers" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              ‘More Black Designers’ is the New Black
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              <p className="mb-[18px]">
                The 2024 McDonald’s Change of Fashion Program is focused on
                driving change when it comes to Black representation in fashion.
                The industry frequently pulls inspiration from Black culture,
                but doesn’t always embrace Black creatives. After all, only 7.3%
                of American fashion designers are Black.*
              </p>
              So, we’re pairing five, rising Black designers with five fashion
              insiders for career-changing mentorships. The program will also
              provide access and resources, and give their brands a chance to
              shine.
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *Per <a href="#">Zippia.com</a> as of 2021.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Follow on Instagram @wearegolden
            </MainBtn>
          </div>
        </div>
        <div className="flex flex-wrap pt-[100px]">
          <div className="px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./Main/bestburguer_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/bestburguer.jpeg" />
              <img src="./Main/bestburguer.jpeg" alt="best burguers" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              “McD’s Best Burgers Ever.” - Hamburglar
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              <p className="mb-[18px]">
                You’re gonna love the hotter, juicier, tastier upgrades we’ve
                made to burgers like our Cheeseburger and Double Cheeseburger.*
                From patties grilled with onions and perfectly melted cheese to
                new soft, pillowy buns—these are our best burgers yet. Ask the
                Hamburglar, he can’t keep his hands off of ‘em. Robble, robble.
              </p>
              Get one today in the app for pickup or McDelivery®.^
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *Comparison of McDonald’s classic burgers to prior burgers. ^At
              participating McDonald’s. McDelivery prices may be higher than at
              restaurants. Delivery/other fees may apply.
            </p>
            <NavLink to="/dowload-app">
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
        <div className="flex flex-wrap pt-[100px]">
          <div className="px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./Main/crocs_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/crocs.jpeg" />
              <img src="./Main/crocs.jpeg" alt="buy crocs" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              Step Into the World of McD’s x Crocs
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              <p className="mb-[18px]">
                Get a pair of McDonald’s branded clogs or limited edition
                Grimace, Birdie or Hamburglar Crocs decked out with fun
                McDonald’s x Crocs JibbitzTM charms or socks. Hurry, before it’s
                too late.*
              </p>
              In celebration of the Crocs partnership, McDonald’s will be making
              a donation to
              <a className="text-[#006bae] underline" href="#">
                Ronald McDonald House Charities®
              </a>
              to help support families when they have a child who is ill or
              injured.
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *While supplies last.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Shop The Colab Now
            </MainBtn>
          </div>
        </div>
        <div className="flex flex-wrap pt-[100px]">
          <div className="px-[15px] lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./Main/faster_faves_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/faster_faves.jpeg" />
              <img src="./Main/faster_faves.jpeg" alt="fast faves" />
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
            <NavLink to="/dowload-app">
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
                srcSet="./Main/deals_days_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Main/deals_days.jpeg" />
              <img src="./Main/deals_days.jpeg" alt="deals days" />
            </picture>
          </div>
          <div className="px-[15px] pb-[30px] lg:w-[34.4%]">
            <h1 className="leading[2pc] text-[28px] font-bold lg:mb-[18px] lg:mt-[15px] lg:text-[36px] lg:leading-[40px]">
              Deals for Days
            </h1>
            <h2 className="mb-[9pt] text-[1pc] lg:mb-[18px]">
              Get{' '}
              <a className="text-[#006bae] underline" href="#">
                exclusive deals
              </a>{' '}
              on your McDonald’s favorites in the app with contactless Mobile
              Order & Pay* and convenient Drive Thru or Curbside pickup.
            </h2>
            <p className="mb-[9pt] pb-[15px] text-[10px] lg:mb-[18px]">
              *Mobile Order & Pay at participating McDonald’s.
            </p>
            <NavLink to="/dowload-app">
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Get App Deals
              </MainBtn>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
