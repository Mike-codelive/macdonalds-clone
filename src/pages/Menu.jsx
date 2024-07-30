function Menu() {
  return (
    <section>
      <div className="mx-[9pt] max-w-[1170px] pt-[50px] lg:mx-auto lg:pt-[100px]">
        <div className="flex">
          <div className="w-[25%]">
            <div className="flex border-[1px] border-[#292929]">
              <picture>
                <source
                  srcSet="./Menu/full-menu/FeaturedFavorites_NavImage_mob.jpeg"
                  media="(max-width: 767px)"
                />
                <source srcSet="./Menu/full-menu/FeaturedFavorites_NavImage.jpeg" />
                <img
                  src="./Menu/full-menu/FeaturedFavorites_NavImage_mob.jpeg"
                  alt="menu"
                />
              </picture>
              <span>Featured Favorites</span>
            </div>
          </div>
          <div className="w-[75%] text-center">
            <h1>McDonald's Menu</h1>
            <h2 className="mt-[50px]">Featured Favorites</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
