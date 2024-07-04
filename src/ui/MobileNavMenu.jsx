import MenuBtn from './MenuBtn';

function MobileNavMenu({ isOpen }) {
  const itemBtn = {
    item1: { buttonName: 'breakfast', imageName: 'breakfast' },
    item2: { buttonName: 'Burguers', imageName: 'burguers' },
    item3: {
      buttonName: 'Chicken & Fish Sandwiches',
      imageName: 'chicken&sandwiches',
    },
    item4: {
      buttonName: 'McNuggets® and Meals',
      imageName: 'mcnuggets',
    },
    item5: {
      buttonName: 'Fries & Sides',
      imageName: 'fries',
    },
    item6: {
      buttonName: 'Happy Meal®',
      imageName: 'happy',
    },
    item7: {
      buttonName: 'Meal Deals',
      imageName: 'meal',
    },
    item8: {
      buttonName: 'McCafé® Coffees',
      imageName: 'mccafe',
    },
    item9: {
      buttonName: 'Sweets & Treats',
      imageName: 'sweets',
    },
    item10: {
      buttonName: 'Beverages',
      imageName: 'beverages',
    },
    item11: {
      buttonName: '$1 $2 $3 Dollar Menu*',
      imageName: 'dollar',
    },
  };

  return isOpen ? (
    <div className="mt-[34px] flex flex-col">
      <button className="view_full_menu">View Full Menu</button>

      {Object.entries(itemBtn).map(([key, item]) => (
        <MenuBtn
          key={key}
          buttonName={item.buttonName}
          imageName={item.imageName}
        />
      ))}
    </div>
  ) : null;
}

export default MobileNavMenu;
