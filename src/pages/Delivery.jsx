import { NavLink } from 'react-router-dom';
import MainBtn from '../ui/MainBtn';

function Delivery() {
  return (
    <section className="delivery_page">
      <div className="mx-[9pt] max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <h1 className="text-center">
          McDonald's Delivery: Food Delivery Near Me
        </h1>
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
        <div className="mx-[9pt]">
          <h2 className="mb-[18px] mt-[45px]">
            How you do this McDelivery thing
          </h2>
          <div className="flex flex-wrap gap-[24px] lg:flex-nowrap">
            <div className="lg:w-[33.33333333%]">
              <picture>
                <source
                  srcSet="./Delivery/3PUB_McDelivery_1_mob.jpeg"
                  media="(width <= 1023px)"
                />
                <source srcSet="./Delivery/3PUB_McDelivery_1.jpeg" />
                <img
                  className="lg:h-[250px]"
                  src="./Delivery/3PUB_McDelivery_1.jpeg"
                  alt="mc delivery"
                />
              </picture>
              <h3 className="mb-[18px] mt-[48px]">
                Make your way to the McDonald’s app
              </h3>
              <p>
                First thing’s first, got the right address? Once that’s sorted
                out, order whatever you want. Add extra pickles or make your
                burger plain, the app’s not gonna judge. You’ll start racking up
                MyMcDonald’s Rewards points which means free food for future
                you.
              </p>
            </div>
            <div className="lg:w-[33.33333333%]">
              <picture>
                <source
                  srcSet="./Delivery/3PUB_McDelivery_2_mob.jpeg"
                  media="(width <= 1023px)"
                />
                <source srcSet="./Delivery/3PUB_McDelivery_2.jpeg" />
                <img
                  className="lg:h-[250px]"
                  src="./Delivery/3PUB_McDelivery_2.jpeg"
                  alt="mc delivery"
                />
              </picture>
              <h3 className="mb-[18px] mt-[48px]">Now, you pay & do nothing</h3>
              <p>
                You can use Apple Pay or Google Pay, but a linked card is the
                easiest. Then you get to chill and let the McD’s come to you.
                Try not to check the order tracker every second. Or do. You do
                you.
              </p>
            </div>
            <div className="lg:w-[33.33333333%]">
              <picture className="h-[250px]">
                <source
                  srcSet="./Delivery/3PUB_McDelivery_LP_mob.jpeg"
                  media="(width <= 1023px)"
                />
                <source srcSet="./Delivery/3PUB_McDelivery_LP.jpeg" />
                <img
                  className="lg:h-[250px]"
                  src="./Delivery/3PUB_McDelivery_LP.jpeg"
                  alt="mc delivery"
                />
              </picture>
              <h3 className="mb-[18px] mt-[48px]">
                Pretend you’re not waiting by the door
              </h3>
              <p>
                Give it a few... and open. It’s just too easy—but if you have
                questions from breakfast delivery and late night delivery to all
                the burger delivery in between, you’ll find answers in the
                <span className="text-linkcolor underline">
                  McDelivery FAQs
                </span>
                .*
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[30px] pt-[100px] lg:flex-nowrap">
          <div className="lg:w-[65.6%]">
            <picture>
              <source
                srcSet="./Delivery/1PUB_McDelivery_UE_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Delivery/1PUB_McDelivery_UE.jpeg" />
              <img src="./Delivery/1PUB_McDelivery_UE.jpeg" alt="Mc delivery" />
            </picture>
          </div>
          <div className="lg:w-[34.4%]">
            <h2 className="mb-[18px] mt-[15px]">
              There’s more McD’s delivery out there
            </h2>
            <p className="mb-[18px]">
              When you realize you got options—download the{' '}
              <span className="text-linkcolor underline">
                Uber Eats, DoorDash or Grubhub
              </span>{' '}
              app and use the McD’s promo code for a lil’ extra something. It’s
              ok, it doesn’t count as cheating{' '}
              {`(you just won’t get those MyMcDonald’s Rewards points)`}.*
            </p>
            <p className="text-[10px]">
              *At participating McDonald’s. Delivery prices may be higher than
              at restaurants. Delivery/other fees may apply.
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-[18px] mt-[45px]">
            The question is, got any questions?
          </h2>
          <p className="mb-[18px]">
            If you’re curious about the ins and outs of McDonald’s delivery
            partners, other people probably were too. Check out the delivery
            FAQs for some answers.*
          </p>
          <p className="mb-[32px] text-[10px]">
            *At participating McDonald’s. Delivery prices may be higher than at
            restaurants. Delivery/other fees may apply.
          </p>
          <MainBtn
            buttonClass={
              'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
            }
          >
            Go To Delivery FAQs
          </MainBtn>
        </div>
        <div>
          <h2 className="mb-[18px] mt-[45px]">All FAQs</h2>
          <p>
            For some real knowledge, find all the McDelivery and delivery
            partner FAQs on the{' '}
            <span className="text-linkcolor underline">
              Mobile Order & Pay FAQ page
            </span>
            . It’s basically a delivery encyclopedia.
          </p>
        </div>
        <div className="mt-[100px] flex flex-wrap gap-[24px] lg:flex-nowrap">
          <div className="delivery_page_card w-full lg:w-[33.33333333%]">
            <picture>
              <source
                className="w-full"
                srcSet="./Delivery/FC_Loyalty_BestBurger_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source
                className="w-full"
                srcSet="./Delivery/FC_Loyalty_BestBurger.jpeg"
              />
              <img
                className="max-h-[136px] w-full"
                src="./Delivery/FC_Loyalty_BestBurger.jpeg"
                alt="delivery card"
              />
            </picture>
            <div className="h-[387.4px] pl-[30px] pr-[20px]">
              <div className="h-[207px]">
                <h2 className="mb-[7px] mt-[22px] lg:text-[24px]">
                  Earn Points for Free McDonald’s
                </h2>
                <p className="mb-[25px]">
                  Download the app and join MyMcDonald’s Rewards to earn bonus
                  points on your McDonald’s orders—then, start getting fave
                  after fave for free. *
                </p>
              </div>
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] mb-[30px] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Join Now
              </MainBtn>
              <p className="mb-[26px] text-[12px]">
                * At participating McDonald’s. Refer to{' '}
                <span className="text-linkcolor underline">
                  MyMcDonald’s Program Terms
                </span>{' '}
                for details. Must opt in to Rewards.
              </p>
            </div>
          </div>
          <div className="delivery_page_card w-full lg:w-[33.33333333%]">
            <picture>
              <source
                className="w-full"
                srcSet="./Delivery/Feature_Callout.jpg"
                media="(max-width: 1023px)"
              />
              <source
                className="w-full"
                srcSet="./Delivery/Feature_Callout.jpg"
              />
              <img
                className="max-h-[136px] w-full"
                src="./Delivery/Feature_Callout.jpg"
                alt="delivery card"
              />
            </picture>
            <div className="h-[387.4px] pl-[30px] pr-[20px]">
              <div className="h-[207px]">
                <h2 className="mb-[7px] mt-[22px] lg:text-[24px]">
                  Contactless Payment? Great Call.
                </h2>
                <p className="mb-[25px]">
                  Pick up your favorites in the Drive Thru or curbside with
                  Mobile Order & Pay.*
                </p>
              </div>
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] mb-[30px] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Use the App to Order
              </MainBtn>
              <p className="mb-[26px] text-[12px]">
                * At participating McDonald’s. Must opt into Rewards.
              </p>
            </div>
          </div>
          <div className="delivery_page_card w-full lg:w-[33.33333333%]">
            <picture>
              <source
                className="w-full"
                srcSet="./Delivery/featured_desktop.jpg"
                media="(max-width: 1023px)"
              />
              <source
                className="w-full"
                srcSet="./Delivery/featured_desktop.jpg"
              />
              <img
                className="max-h-[136px] w-full"
                src="./Delivery/featured_desktop.jpg"
                alt="delivery card"
              />
            </picture>
            <div className="h-[387.4px] pl-[30px] pr-[20px]">
              <div className="h-[207px]">
                <h2 className="mb-[7px] mt-[22px] lg:text-[24px]">
                  Join Our Email List
                </h2>
                <p className="mb-[25px]">
                  Get news, promotions and more delivered right to your inbox.
                </p>
              </div>
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] mb-[30px] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Sign Up For Our Email List
              </MainBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
