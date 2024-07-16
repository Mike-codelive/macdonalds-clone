import { useState } from 'react';
import MainBtn from '../ui/MainBtn';
import { NavLink } from 'react-router-dom';

function McEmailSub() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isZipFocused, setIsZipFocused] = useState(false);
  const [zipValue, setZipValue] = useState('');
  const [isZipValid, setIsZipValid] = useState(true);

  const handleEmailFocus = () => setIsEmailFocused(true);
  const handleEmailBlur = () => {
    setIsEmailFocused(false);
    validateEmail(emailValue);
  };
  const handleEmailChange = (e) => setEmailValue(e.target.value);

  const handleZipFocus = () => setIsZipFocused(true);
  const handleZipBlur = () => {
    setIsZipFocused(false);
    validateZip(zipValue);
  };
  const handleZipChange = (e) => setZipValue(e.target.value);

  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsEmailValid(isValidEmail || email === '');
  };

  const validateZip = (zip) => {
    const isValidZip = /^\d{5}$/.test(zip);
    setIsZipValid(isValidZip || zip === '');
  };

  const isEmailLabelUp = isEmailFocused || emailValue !== '';
  const isZipLabelUp = isZipFocused || zipValue !== '';

  return (
    <section>
      <div className="mx-2 max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div className="mx-auto max-w-[830px]">
          <div className="flex justify-center">
            <h1 className="text-[54px] font-bold">McDonald’s Email Signup</h1>
          </div>
          <div>
            <h2 className="my-[30px] text-[36px] font-bold">Sign Up*</h2>
            <p>
              Be in the know about deals, MyMcDonald’s Rewards, news and more by
              signing up for our emails.
            </p>
            <p className="mb-5 mt-[50px] text-[.875rem]">
              * Indicates a required field
            </p>
            <div>
              <form action="" method="post">
                <div className="relative mb-4 flex flex-col">
                  {!isEmailValid && (
                    <span className="text-[.6875rem] text-red-500">
                      Error: Please enter a valid email address
                    </span>
                  )}
                  <label
                    className={`absolute bottom-0 transition-all duration-300 ease-in-out ${
                      isEmailLabelUp ? '-translate-y-6 text-xs' : 'text-base'
                    }`}
                    htmlFor="email"
                  >
                    * Email
                  </label>
                  <input
                    className={`border-x-0 border-b-[.063rem] border-t-0 pt-4 outline-none ${
                      isEmailValid
                        ? 'focus:border-b-slate-950'
                        : 'border-b-red-500 focus:border-b-red-500'
                    }`}
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    required
                  />
                </div>
                <div className="relative flex flex-col">
                  {!isZipValid && (
                    <span className="text-[.6875rem] text-red-500">
                      Error: Please enter a valid zip code
                    </span>
                  )}
                  <label
                    className={`absolute bottom-0 transition-all duration-300 ease-in-out ${
                      isZipLabelUp ? '-translate-y-6 text-xs' : 'text-base'
                    }`}
                    htmlFor="zipcode"
                  >
                    * Zip Code
                  </label>
                  <input
                    className={`border-x-0 border-b-[.063rem] border-t-0 pt-4 outline-none ${
                      isZipValid
                        ? 'focus:border-b-slate-950'
                        : 'border-b-red-500 focus:border-b-red-500'
                    }`}
                    type="text"
                    id="zipcode"
                    value={zipValue}
                    onChange={handleZipChange}
                    onFocus={handleZipFocus}
                    onBlur={handleZipBlur}
                    required
                  />
                </div>

                <p className="my-[16px] mt-[32px]">
                  *By selecting {'"'}Sign Up,{'"'} you agree to the{' '}
                  <span className="text-[#006bae] underline">
                    McDonald's Privacy Policy
                  </span>{' '}
                  and{' '}
                  <span className="text-[#006bae] underline">
                    Terms & Conditions.
                  </span>{' '}
                  <span className="text-[#006bae] underline">
                    Unsubscribe from emails any time.
                  </span>{' '}
                  Please note when unsubscribing: it may take up to 10 business
                  days for your request to take effect.
                </p>

                <MainBtn
                  buttonClass={
                    'rounded-md bg-[#ffbc0d] mt-[50px] grow-0 py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                  }
                >
                  Sign Up
                </MainBtn>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex flex-wrap">
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
        <div className="mx-[8px] mt-[100px]">
          <h2 className="text-[36px] font-bold">
            What You Get When You Sign Up For Email
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="px-[12px]">
              <div className="pt-[50px]">
                <img src="./EmailSub/3PUB_Deals_1.jpeg" alt="deal 1" />
                <h3 className="mb-[18px] mt-[58px] text-[36px]">
                  App Deal Alerts
                </h3>
                <p className="mb-[50px] mt-[18px]">
                  Get notified of exclusive in-app deals and offers. Your next
                  deal is waiting in your inbox.
                </p>
              </div>
            </div>
            <div className="px-[12px]">
              <div className="pt-[50px]">
                <img src="./EmailSub/3PUB_2.jpeg" alt="deal 1" />
                <h3 className="mb-[18px] mt-[58px] text-[36px]">
                  MyMcDonald's Rewards Updates
                </h3>
                <p className="mt-[18px]">
                  Get the latest exclusive bonus offers and personalized
                  notifications on free McDonald’s rewards ready for you to
                  redeem.*
                </p>
                <p className="mt-[18px] text-[10px]">
                  *Program available only at participating McDonald's. Refer to
                  MyMcDonald’s Program Terms for details. Must opt in to
                  Rewards.
                </p>
                <MainBtn
                  buttonClass={
                    'rounded-md mb-[50px] bg-[#ffbc0d] mt-[50px] grow-0 py-[8px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
                  }
                >
                  Start in the App
                </MainBtn>
              </div>
            </div>
            <div className="px-[12px]">
              <div className="pt-[50px]">
                <img src="./EmailSub/3PUB_3.jpeg" alt="deal 1" />
                <h3 className="mb-[18px] mt-[58px] text-[36px]">
                  MyMcDonald's Rewards Updates
                </h3>
                <p className="mb-[50px] mt-[18px]">
                  Get the latest exclusive bonus offers and personalized
                  notifications on free McDonald’s rewards ready for you to
                  redeem.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default McEmailSub;
