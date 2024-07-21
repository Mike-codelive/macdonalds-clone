import MainBtn from '../ui/MainBtn';

function OurFood() {
  return (
    <section>
      <div className="mx-[9pt] max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div>
          <h1 className="mb-[17px] text-center">About Our Food</h1>
          <picture>
            <source
              srcSet="./OurFood/About_Our_Food_Hero_mob.jpeg"
              media="(max-width: 1023px)"
            />
            <img
              src="./OurFood/About_Our_Food_Hero.jpeg"
              alt="about our food"
            />
          </picture>
        </div>
        <div className="mb-[19px] pt-[95px] lg:mb-[2pc] lg:pt-[145px]">
          <h2>We’re Passionate About Our Food</h2>
          <p className="mt-[9pt]">
            From adding more balanced options to our Happy Meal®, to serving up
            fresh beef Quarter Pounder® burgers that are cooked when you order,
            we’re always finding ways to show our commitment to our customers
            and our food.{' '}
          </p>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[50px] lg:flex-nowrap lg:pt-[100px]">
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/Header_2PUB_Ingredients_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/Header_2PUB_Ingredients.jpeg" />
              <img
                src="./OurFood/Header_2PUB_Ingredients_mob.jpeg"
                alt="or food pub 2"
              />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">Commitment to Quality</h3>
            <p className="mb-[2pc]">
              We're dedicated to improving the way we prepare our quality food
              and the ingredients that go into it.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/2_Pub_Whats_In_Your_Food_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/2_Pub_Whats_In_Your_Food.jpeg" />
              <img
                src="./OurFood/2_Pub_Whats_In_Your_Food.jpeg"
                alt="or food pub 2"
              />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">What's in Your Food</h3>
            <p className="mb-[2pc]">
              Find out what makes our ingredients special.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[50px] lg:flex-nowrap lg:pt-[100px]">
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/about-food_philosophy_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/about-food_philosophy.jpeg" />
              <img
                src="./OurFood/about-food_philosophy.jpeg"
                alt="or food pub 2"
              />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">Our Food Philosophy</h3>
            <p className="mb-[2pc]">
              We’re passionate about our food. That’s why we’re committed to
              always evolving what matters to you.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/TwoPub_Desktop_NutritionCalculator_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/TwoPub_Desktop_NutritionCalculator.jpeg" />
              <img
                src="./OurFood/TwoPub_Desktop_NutritionCalculator.jpeg"
                alt="or food pub 2"
              />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">Nutrition Calculator</h3>
            <p className="mb-[2pc]">
              Our nutrition calculator has the McDonald’s menu nutrition
              information you’re seeking. Learn more about your favorite meals.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[50px] lg:flex-nowrap lg:pt-[100px]">
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/Our_Food_Experts_2-col_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/Our_Food_Experts_2-col.jpeg" />
              <img
                src="./OurFood/Our_Food_Experts_2-col.jpeg"
                alt="or food pub 2"
              />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">Our Food Experts</h3>
            <p className="mb-[2pc]">
              From our chefs, to our dieticians and suppliers, McDonald’s food
              experts care deeply about the food you eat.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/FreshBeefPage_QPC_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/FreshBeefPage_QPC.jpeg" />
              <img src="./OurFood/FreshBeefPage_QPC.jpeg" alt="or food pub 2" />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">Fresh Beef</h3>
            <p className="mb-[2pc]">
              Our Quarter Pounder®* patty is made with 100% fresh beef and
              cooked right when you order. It’s hot and deliciously juicy and
              full of flavor.
            </p>
            <p className="mb-[2pc] text-[10px]">
              *Weight before cooking 4 oz. At participating McDonald's. Fresh
              Beef available at most restaurants in contiguous US. Not available
              in Alaska, Hawaii, and US Territories
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[50px] lg:flex-nowrap lg:pt-[100px]">
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/2_Pub_Happy_Meal_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/2_Pub_Happy_Meal.jpeg" />
              <img src="./OurFood/2_Pub_Happy_Meal.jpeg" alt="or food pub 2" />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">Happy Meal® Nutrition</h3>
            <p className="mb-[2pc]">
              When your kids enjoy a meal that’s delicious and balanced, you’ll
              enjoy it too.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
          <div className="mb-[50px]">
            <picture>
              <source
                srcSet="./OurFood/Variety_2Col_1110x740_mob.jpeg"
                media="(max-width: 1023px)"
              />
              <source srcSet="./OurFood/Variety_2Col_1110x740.jpeg" />
              <img
                src="./OurFood/Variety_2Col_1110x740.jpeg"
                alt="or food pub 2"
              />
            </picture>
            <h3 className="mb-[18px] mt-[48px]">Variety of Choices</h3>
            <p className="mb-[2pc]">
              When it comes to quality options, we’ve got you covered.
            </p>
            <MainBtn
              buttonClass={
                'rounded-md bg-[#ffbc0d] py-[13px] px-[25px] leading-[24px] text-[1pc] text-[#292929]'
              }
            >
              Learn More
            </MainBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFood;
