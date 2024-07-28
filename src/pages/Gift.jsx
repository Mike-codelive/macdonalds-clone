import MainBtn from '../ui/MainBtn';

function Gift() {
  return (
    <section>
      <div className="max-w-[1170px] px-[9pt] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <h1 className="text-center lg:text-[54px]">
          Arch Card®: McDonald’s Gift Card
        </h1>
        <div className="relative">
          <picture>
            <source
              srcSet="./Gift/ArchCardLP-Carousel.jpg"
              media="(max-width: 1023px)"
            />
            <source srcSet="./Gift/ArchCardLP-Carousel.jpg" />
            <img src="./Gift/ArchCardLP-Carousel.jpg" alt="promo gifts" />
          </picture>
          <div className="cmp-teaser__content top-[1px] min-h-[75pt] min-w-[15pc] bg-[#fff] p-[30px] lg:absolute lg:m-[50px] lg:w-[392px]">
            <div className="mb-[1pc]">
              <h2 className="mb-[29px] text-[36px] leading-[39px] lg:pr-[29px]">
                Hot Take: A Gift Card is the Best Gift
              </h2>
              <p className="mb-[1pc]">
                You can get one for yourself, too. There’s no judging here. For
                orders of 25 or more, please{' '}
                <span className="text-linkcolor underline">buy in bulk</span>. *
              </p>
              <MainBtn
                buttonClass={
                  'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] mr-[30px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
                }
              >
                Buy a Gift Card
              </MainBtn>
              <p className="mb-[20px] text-[11px]">* Shipping time may vary.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[75pt] lg:flex-nowrap">
          <div>
            <picture>
              <source
                srcSet="./Gift/2Pub_ArchCard_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Gift/2Pub_ArchCard.jpeg" />
              <img src="./Gift/2Pub_ArchCard.jpeg" alt="promo gifts" />
            </picture>
            <h2 className="mb-[18px] mt-[45px]">
              A Gift That’s Loaded with Smiles
            </h2>
            <p className="mb-[2pc] text-[16px]">
              Made for anyone and everyone. Trust us... they’re going to love
              it.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] mr-[30px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Buy a Gift Card
            </MainBtn>
          </div>
          <div>
            <picture>
              <source
                srcSet="./Gift/2Pub_ArchCard_LandingPage_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Gift/2Pub_ArchCard_LandingPage.jpeg" />
              <img
                src="./Gift/2Pub_ArchCard_LandingPage.jpeg"
                alt="promo gifts"
              />
            </picture>
            <h2 className="mb-[18px] mt-[45px]">
              Get All the Arch Cards You Need
            </h2>
            <p className="mb-[2pc] text-[16px]">
              Fuel initiatives, drive results or simply give thanks. There are
              plenty of reasons to order cards in quantities of 25 or more.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] mr-[30px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Buy in Bulk
            </MainBtn>
          </div>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[75pt] lg:flex-nowrap">
          <div>
            <picture>
              <source
                srcSet="./Gift/2Pub_ArchCard_LandingPage_mob_0.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Gift/2Pub_ArchCard_LandingPage_0.jpeg" />
              <img
                src="./Gift/2Pub_ArchCard_LandingPage_0.jpeg"
                alt="promo gifts"
              />
            </picture>
            <h2 className="mb-[18px] mt-[45px]">Check Your Balance</h2>
            <p className="mb-[2pc] text-[16px]">
              Already have an Arch Card? It’s easy to check your balance and
              review transactions.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] mr-[30px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Check Your Balance
            </MainBtn>
          </div>
          <div>
            <picture>
              <source
                srcSet="./Gift/2Pub_ArchCard_LandingPage_Reloadv1_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./Gift/2Pub_ArchCard_LandingPage_Reloadv1.jpeg" />
              <img
                src="./Gift/2Pub_ArchCard_LandingPage_Reloadv1.jpeg"
                alt="promo gifts"
              />
            </picture>
            <h2 className="mb-[18px] mt-[45px]">Reload Your Card</h2>
            <p className="mb-[2pc] text-[16px]">
              Reload your Arch Card or set up automatic reloading online.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] mr-[30px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Reload Your Card
            </MainBtn>
          </div>
        </div>
        <div className="pt-[100px]">
          <h2 className="mb-[18px] mt-[45px]">
            Replacing Lost, Stolen or Damaged Arch Cards
          </h2>
          <p>
            Be sure to keep your activation and reload receipts; you will need
            them to replace a lost or stolen card.
          </p>
          <p className="mt-[18px]">
            Submit a request for replacement of a lost, stolen or damaged card
            via the Contact Us Form. Cards will only be replaced upon submission
            of acceptable supporting documents which may include activation
            receipt, purchase receipt, account summary, online purchase
            electronic receipt and/or a picture of your damaged card. For
            properly submitted claims, a new card will be issued for the
            remaining balance at the time of deactivation.
          </p>
          <p className="mb-[2pc] mt-[18px]">
            If your request qualifies, please allow 4-6 weeks for delivery of
            replacement Arch Cards.
          </p>
          <MainBtn
            buttonClass={
              'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] mr-[30px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
            }
          >
            Contact Us
          </MainBtn>
        </div>
        <div className="pt-[100px]">
          <h2 className="pb-[18px] pt-[45px]">
            Arch Card Frequently Asked Questions
          </h2>
          <p className="mb-[2pc]">
            Have more questions about the Arch Card? We’re here to help.
          </p>
          <MainBtn
            buttonClass={
              'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] mr-[30px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
            }
          >
            Explore Arch Card FAQs
          </MainBtn>
        </div>
        <div className="pt-[100px]">
          <h2 className="my-[30px]">Terms & Conditions</h2>
          <p className="mb-[2pc]">
            Find out more about the specific terms & conditions associated with
            our Arch Cards
          </p>
          <div className="block flex-wrap items-baseline lg:flex lg:flex-nowrap">
            <MainBtn
              buttonClass={
                'rounded-md flex-1 bg-[#ffbc0d] py-[13px] px-[25px] mx-[12px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Arch Card Terms & Conditions
            </MainBtn>
            <MainBtn
              buttonClass={
                'rounded-md flex-1 bg-[#ffbc0d] py-[13px] px-[25px] mx-[12px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Arch Card Corporate Sales Terms & Conditions
            </MainBtn>
            <MainBtn
              buttonClass={
                'rounded-md flex-1 bg-[#ffbc0d] py-[13px] px-[25px] mx-[12px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Arch Card Online Reloads Terms & Conditions
            </MainBtn>
            <MainBtn
              buttonClass={
                'rounded-md flex-1 bg-[#ffbc0d] py-[13px] px-[25px] mx-[12px] mb-[30px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              P2W Arch Card Privacy Policy
            </MainBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gift;
