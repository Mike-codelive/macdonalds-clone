import { NavLink } from 'react-router-dom';
import MainBtn from '../ui/MainBtn';

function Rewards() {
  return (
    <section>
      <div className="max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div className="mb-[17px] flex justify-center px-[9pt] lg:px-[12px]">
          <h1 className="text-[36px] font-bold lg:text-[54px]">
            MyMcDonald’s Rewards
          </h1>
        </div>
        <div className="px-[12px] lg:px-[9pt]">
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
          <div className="mb-[32px] px-[12px]">
            <h3 className="mb-[18px] mt-[48px] text-[36px] font-bold">
              More Points Unlock More Rewards
            </h3>
            <p className="text-[16px]">
              It's easy to track your McDonald's points and see how far you are
              from unlocking the next tier of free McDonald's.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="mb-[50px] px-[12px] lg:px-[9pt]">
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
            <div className="px-[12px] lg:px-[9pt]">
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
        <div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="mb-[50px] px-[12px] lg:px-[9pt]">
              <img src="./Rewards/2PUB_MMR_Tier3.jpeg" alt="points 1" />
              <h3 className="text-md-36 mb-[18px] mt-[45px]">4500 Points</h3>
              <p>
                We’re going large with your choice of{' '}
                <span className="text-linkcolor underline">large Fries</span>,
                large <span className="text-linkcolor underline">Frappé</span>,
                <span className="text-linkcolor underline">Filet-O-Fish®</span>{' '}
                or{' '}
                <span className="text-linkcolor underline">
                  Sausage McMuffin® with Egg
                </span>
                .
              </p>
            </div>
            <div className="px-[12px] lg:px-[9pt]">
              <img src="./Rewards/2PUB_MMR_Tier4.jpeg" alt="points 2" />
              <h3 className="text-md-36 mb-[18px] mt-[45px]">6000 Points</h3>
              <p>
                Save up your points and you could get a
                <span className="text-linkcolor underline">Big Mac®</span>,
                <span className="text-linkcolor underline">
                  Quarter Pounder®* with Cheese
                </span>
                ,<span className="text-linkcolor underline"> Happy Meal®</span>{' '}
                or
                <span className="text-linkcolor underline">
                  Bacon, Egg & Cheese Biscuit
                </span>
                !
              </p>
              <p className="mt-[18px] text-[10px]">
                * Weight before cooking 4 oz.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-[12px] lg:px-[9pt]">
            <h2 className="text-md-36 mt-[45px] font-bold">
              Frequently Asked Questions
            </h2>
            <h2 className="text-md-36 mt-[15px]">
              What Do I Have to Do to Earn Points?
            </h2>
            <p className="pt-[18px]">
              Earning rewards points is very easy—simply{' '}
              <span className="text-linkcolor underline">download our app</span>{' '}
              and agree to participate in MyMcDonald’s Rewards. Present the
              4-digit code before ordering, or get points automatically when you
              order in the app.
            </p>
            <h3 className="text-md-36 mt-[15px]">How Much Are Points Worth?</h3>
            <p className="mt-[18px]">
              For every dollar you spend on eligible products, you will receive
              100 points. You can start redeeming your MyMcDonald’s Rewards when
              you have 1500 points
            </p>
            <h3 className="text-md-36 mt-[15px]">Do My Points Expire?</h3>
            <p className="mt-[18px]">
              Unfortunately, nothing can last forever. Your points will expire
              on the first day of the month after the sixth month from the day
              your points were earned. Plenty of time to save up for your
              favorite!
            </p>
            <h3 className="text-md-36 mt-[15px]">
              Can I Get More Than One Reward at a Time?
            </h3>
            <p className="mt-[18px]">
              At this time, you are limited to redeeming one reward per order.
            </p>
            <h3 className="text-md-36 mt-[15px]">Can I Share My Points?</h3>
            <p className="mt-[18px]">
              Your MyMcDonald's Rewards points are yours alone. Once you have
              your food, it’s up to you whether you want to share!
            </p>
            <h3 className="text-md-36 mt-[15px]">
              How Do I Redeem Points for Free McDonald’s?
            </h3>
            <p className="mt-[18px]">
              You can redeem with contactless mobile ordering in the McDonald's
              app by selecting Rewards, choosing the favorite you want to redeem
              and choosing “Add to Mobile Order”. To redeem in store or Drive
              Thru, select rewards and choose the item you want to redeem, then
              choose “Use at Restaurant” to get the 4-digit code you can provide
              the crew before you start ordering. For delivery orders placed
              using the McDonald’s app, select your reward item and add that to
              your McDelivery order. Rewards cannot be redeemed for delivery
              orders placed with a third party operator such as DoorDash and
              Uber Eats.
            </p>
            <h3 className="text-md-36 mt-[15px]">
              Can I Redeem a Reward And Earn Points in the Same Order?
            </h3>
            <p className="mt-[18px]">
              Yes! You earn points on every eligible purchase, so if you’re
              redeeming a reward and ordering more food in addition to that, you
              will still earn 100 points for every dollar you spend.
            </p>
            <h3 className="text-md-36 mt-[15px]">
              What If I Forgot to Provide My Code?
            </h3>
            <p className="mt-[18px]">
              If you’re enjoying your order and suddenly realized you never
              provided your code, no worries! Take these steps to contact us in
              the app:
            </p>
            <ol className="my-[1em] list-decimal ps-[40px]">
              <li>Select More in the bottom navigation</li>
              <li>Select Add Missing Points from Receipt</li>
              <li>Select Enter Receipt Details</li>
              <li>
                Provide the restaurant number from where your order was placed,
                the date of your visit, the time of your visit, your order
                number and your order total. All of this information can be
                found on your receipt.
              </li>
              <li>Select Submit</li>
            </ol>
            <h3 className="text-md-36 mt-[15px]">
              I Just Made a Purchase and My Points Aren’t There—Can You Help?
            </h3>
            <p className="mt-[18px]">
              Of course, we’d be glad to help you. The first step is wait 24
              hours; sometimes it takes a little time for MyMcDonald's Rewards
              points to appear in the app. If after 24 hours you still don’t
              have points, here are the steps for you to contact us in the app:
            </p>
            <ol className="my-[1em] list-decimal ps-[40px]">
              <li>Select More</li>
              <li>Choose Careers, Contact & Legal</li>
              <li>Select Contact Us</li>
              <li>
                Enter your comments regarding your order, including your account
                email, order number, subtotal, and if there’s any reason you
                think you might be missing points {`(example: forgot to scan)`}
              </li>
            </ol>
            <h3 className="text-md-36 mt-[15px]">
              Do I have to Provide Two Codes If I Want to Redeem a Reward or
              Deal and Earn Points in the Same Transaction?
            </h3>
            <p className="mt-[18px]">
              No, you only need to provide one code. When redeeming, provide the
              4-digit reward code {`(found on the Rewards tab)`}—this will help
              you redeem your free item while also earning points for products
              you are purchasing. The same is true for a deal, use the 4-digit
              deal code to save and you will automatically earn points for
              products you purchase in that transaction.
            </p>
            <h3 className="text-md-36 mt-[15px]">
              Are There Any Purchases That Don’t Qualify For Points?
            </h3>
            <p className="mt-[18px]">
              Qualifying purchases where an active reward, mobile offer or
              promotional offer is redeemed will earn points, but you will only
              earn points for U.S. dollars actually spent in the transaction.
              When a McDonald’s Arch card is used to make a qualifying purchase,
              you will earn points. The following are not considered qualifying
              purchases and will not earn any points:
            </p>
            <ol className="my-[1em] list-decimal ps-[40px]">
              <li>taxes, bags and bottle fees, other surcharges or fees</li>
              <li>
                loading any money on a McDonald’s Arch Card® {`(gift card)`}
              </li>
              <li>delivery fees for orders placed using the McDonald’s app</li>
            </ol>
            <h3 className="text-md-36 mt-[15px]">
              How do I link my card for payment in the app?
            </h3>
            <p className="mt-[18px]">
              Linking you card for more convenient payment in the app is easy:
              Simply,
            </p>
            <ol className="my-[1em] list-decimal ps-[40px]">
              <li>Go to ‘Earn Points’ in the McDonald’s app</li>
              <li>Select “Pay with Linked Card” at the top</li>
              <li>Insert your card information and hit save</li>
            </ol>
            <p className="mt-[18px]">If you want to edit or replace:</p>
            <ol className="my-[1em] list-decimal ps-[40px]">
              <li>Select ‘More’ at the bottom right</li>
              <li>Go to “Profile”</li>
              <li>Select “Payment Methods”</li>
            </ol>
            <h3 className="text-md-36 mt-[15px]">
              I Lost My Phone! Did I Lose My Points?
            </h3>
            <p className="mt-[18px]">
              We’re sorry about your phone! Contact your service provider and
              once you have a new phone, your MyMcDonald's Rewards should still
              be waiting for you when you log in to{' '}
              <span className="text-linkcolor underline">our app</span>.
            </p>
            <h3 className="text-md-36 mt-[15px]">
              Where Are the Terms and Conditions?
            </h3>
            <p className="mt-[18px]">
              You can access MyMcDonald's Rewards Terms and Conditions by
              visiting the{' '}
              <span className="text-linkcolor underline">
                MyMcDonald’s Rewards Terms and Conditions section
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rewards;
