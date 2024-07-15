import { useState } from 'react';

function McEmailSub() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    validateEmail(inputValue);
  };
  const handleChange = (e) => setInputValue(e.target.value);

  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValid(isValidEmail || email === '');
  };

  const isLabelUp = isFocused || inputValue !== '';

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
                <div className="relative flex flex-col">
                  {!isValid && (
                    <span className="text-[.6875rem] text-red-500">
                      Error: Please enter a valid email address
                    </span>
                  )}
                  <label
                    className={`absolute bottom-0 transition-all duration-300 ease-in-out ${
                      isLabelUp ? '-translate-y-6 text-xs' : 'text-base'
                    }`}
                    htmlFor="email"
                  >
                    * Email
                  </label>
                  <input
                    className={`email_sub_input border-x-0 border-b-[.063rem] border-t-0 pt-4 outline-none ${
                      isValid
                        ? 'focus:border-b-slate-950'
                        : 'border-b-red-500 focus:border-b-red-500'
                    }`}
                    type="email"
                    id="email"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default McEmailSub;
