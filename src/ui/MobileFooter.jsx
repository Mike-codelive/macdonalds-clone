import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

function MobileFooter() {
  const firstLink = 'Privacy (Updated)';
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-[1170px] px-[20px] py-[75pt]">
      <ul className="te mb-[40px] text-[18px]">
        {[
          {
            title: 'About Us',
            links: [
              'About Us Overview',
              'Leadership Team',
              'Values In Action',
              'Franchising info',
              'Recalls & Alerts',
              'Real Estate',
              'Accessibility',
              'Investor Relations',
              'News & Notifications',
            ],
          },
          {
            title: 'Services',
            links: [
              'Services Overview',
              'Delivery Partners',
              'Wi-Fi',
              'PlayPlaces & Parties',
              'Mobile Order & Pay',
              'Trending Now',
              'McDonald’s Merchandise',
              'Family Fun Hub',
              "MyMcDonald's Rewards",
              'McCafé®',
            ],
          },
          {
            title: 'Community',
            links: [
              'Community Overview',
              'Now Serving',
              'HACER® Scholarships for Hispanic Students',
              'Ronald McDonald House Charities®',
              'McDonald’s Asian Pacific American',
              'McDonald’s International',
              'Black and Positively Golden',
              'McDonald’s LGBTQ+',
            ],
          },
          {
            title: 'Contact Us',
            links: [
              'Contact Us Overview',
              'Gift Card FAQs',
              'Donations',
              'Employment',
              'Customer Feedback',
              'Frequently Asked Questions',
            ],
          },
        ].map((section, index) => (
          <li key={index}>
            <h2
              className="mb-[20px] flex w-full cursor-pointer justify-between"
              onClick={() => toggleSection(index)}
            >
              <p>{section.title}</p>
              <PlusIcon
                className={`h-6 w-6 ${openSection === index ? 'hidden' : 'block'}`}
              />
              <MinusIcon
                className={`h-6 w-6 ${openSection === index ? 'block' : 'hidden'}`}
              />
            </h2>
            <ul
              className={`mobile_footer_links max-w-fit ${openSection === index ? 'block' : 'hidden'}`}
            >
              {section.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="mb-[46px] flex flex-col justify-center">
        <div className="mb-[30px] flex justify-center">
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
            <source srcSet="./Footer/youtube.png" media="(max-width: 1023px)" />
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
            <source srcSet="./Footer/tumblr.png" media="(max-width: 1023px)" />
            <img src="./Footer/tumblr.png" alt="tumblr" />
          </picture>
          <picture className="mr-[21px]">
            <source srcSet="./Footer/spotify.png" media="(max-width: 1023px)" />
            <img src="./Footer/spotify.png" alt="spotify" />
          </picture>
        </div>
        <div className="flex justify-around">
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
      <div className="flex flex-col">
        <p className="mb-[18px] text-center text-[12px]">{firstLink}</p>
        <div className="">
          <ul className="mobile_footer_links_buttom flex flex-wrap justify-center">
            <li>California Privacy Notice</li>
            <li>Consumer Health Data</li>
            <li>Terms & Conditions</li>
            <li>Accessibility</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
        <div className="flex justify-center text-[12px]">
          <picture className="ml-[36px] max-h-[28px]">
            <source srcSet="./Footer/footer_logo.jpg" />
            <img
              className="max-h-[28px]"
              src="./Footer/footer_logo.jpg"
              alt="mc logo"
            />
          </picture>
          <p>© 2017 - 2024 McDonald's. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
