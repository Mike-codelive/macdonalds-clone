function PageNotFound() {
  return (
    <section className="max-w-[1170px] px-[9pt] pt-[50px] lg:mx-auto lg:pt-[100px]">
      <div className="lg:ml-[16.66666667%]">
        <h1 className="my-[.67em]">Oops, something went wrong</h1>
        <p className="my-[16px]">
          It doesn't look like the page you're searching for exists.
        </p>
        <h2 className="my-[30px] pt-[100px]">Try one of the links below:</h2>
        <div className="flex flex-wrap gap-[24px] lg:flex-nowrap">
          <ul className="lg:[16.66666667%]">
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                Full Menu
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                Careers
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                Apply Now
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                Restaurant Locator
              </span>
            </li>
          </ul>
          <ul className="w-full lg:w-[16.66666667%]">
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                Community
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                What's In Your Food
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                Deals
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-linkcolor underline">
                Mobile Order and Pay
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
