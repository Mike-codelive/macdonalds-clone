import MobileFooter from './MobileFooter';

function Footer() {
  const firstLink = 'Privacy (Updated)';

  return (
    <footer>
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
      <div className="mx-auto hidden max-w-[1170px] px-[20px] py-[75pt] lg:block">
        <ul className="mb-[40px] flex justify-between">
          <li className="basis-[16.6%]">
            <div>
              <h2 className="mb-[20px] mt-[13px] font-bold">About Us</h2>
            </div>
            <ul className="footer_links">
              <li>About Us Overview</li>
              <li>Leadership Team</li>
              <li>Values In Action</li>
              <li>Franchising info</li>
              <li>Recalls & Alerts</li>
              <li>Real Estate</li>
              <li>Accessibility</li>
              <li>Investor Relations</li>
              <li>News & Notifications</li>
            </ul>
          </li>
          <li className="basis-[16.6%]">
            <div>
              <h2 className="mb-[20px] mt-[13px] font-bold">Services</h2>
            </div>
            <ul className="footer_links">
              <li>Services Overview</li>
              <li>Delivery Partners</li>
              <li>Wi-Fi</li>
              <li>PlayPlaces & Parties</li>
              <li>Mobile Order & Pay</li>
              <li>Trending Now</li>
              <li>McDonald’s Merchandise</li>
              <li>Family Fun Hub</li>
              <li>MyMcDonald's Rewards</li>
              <li>McCafé®</li>
            </ul>
          </li>
          <li className="basis-[16.6%]">
            <div>
              <h2 className="mb-[20px] mt-[13px] font-bold">community</h2>
            </div>
            <ul className="footer_links">
              <li>Community Overview</li>
              <li>Now Serving</li>
              <li>HACER® Scholarships for Hispanic Students</li>
              <li>Ronald McDonald House Charities®</li>
              <li>McDonald’s Asian Pacific American</li>
              <li>McDonald’s International</li>
              <li>Black and Positively Golden</li>
              <li>McDonald’s LGBTQ+</li>
            </ul>
          </li>
          <li className="basis-[16.6%]">
            <div>
              <h2 className="mb-[20px] mt-[13px] font-bold">Contact Us</h2>
            </div>
            <ul className="footer_links">
              <li>Contact Us Overview</li>
              <li>Gift Card FAQs</li>
              <li>Donations</li>
              <li>Employment</li>
              <li>Customer Feedback</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </li>
        </ul>
        <div className="mb-[46px] flex">
          <div className="flex basis-[66%]">
            <picture className="mr-[21px]">
              <source
                srcSet="./Footer/facebook.png"
                media="(max-width: 1023px)"
              />
              <img src="./Footer/facebook.png" alt="facebook" />
            </picture>
            <picture className="mr-[21px]">
              <source srcSet="./Footer/x.png" media="(max-width: 1023px)" />
              <img src="./Footer/x.png" alt="x social" />
            </picture>
            <picture className="mr-[21px]">
              <source
                srcSet="./Footer/youtube.png"
                media="(max-width: 1023px)"
              />
              <img src="./Footer/youtube.png" alt="youtube" />
            </picture>
            <picture className="mr-[21px]">
              <source
                srcSet="./Footer/instagram.png"
                media="(max-width: 1023px)"
              />
              <img src="./Footer/instagram.png" alt="instagram" />
            </picture>
            <picture className="mr-[21px]">
              <source
                srcSet="./Footer/tumblr.png"
                media="(max-width: 1023px)"
              />
              <img src="./Footer/tumblr.png" alt="tumblr" />
            </picture>
            <picture className="mr-[21px]">
              <source
                srcSet="./Footer/spotify.png"
                media="(max-width: 1023px)"
              />
              <img src="./Footer/spotify.png" alt="spotify" />
            </picture>
          </div>
          <div className="flex basis-[34%] justify-end">
            <picture>
              <source src="./Footer/app_store_badge.png" />
              <img src="./Footer/app_store_badge.png" alt="app store" />
            </picture>
            <picture>
              <source src="./Footer/google_play_badge.png" />
              <img src="./Footer/google_play_badge.png" alt="google store" />
            </picture>
          </div>
        </div>
        <hr className="mb-[50px] w-full" />
        <div className="flex">
          <div className="basis-[66.6%]">
            <ul className="footer_links_buttom flex flex-wrap">
              <li>{firstLink}</li>
              <li>California Privacy Notice</li>
              <li>Consumer Health Data</li>
              <li>Terms & Conditions</li>
              <li>Accessibility</li>
              <li>Do Not Sell or Share My Personal Information</li>
              <li>Cookie Settings</li>
            </ul>
          </div>
          <div className="flex basis-[33.333%]">
            <picture className="ml-[36px] max-h-[28px]">
              <source srcSet="./Footer/footer_logo.jpg" />
              <img
                className="max-h-[28px]"
                src="./Footer/footer_logo.jpg"
                alt="mc logo"
              />
            </picture>
            <p className="text-right">
              © 2017 - 2024 McDonald's. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
