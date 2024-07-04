import { NavLink } from 'react-router-dom';

function MenuBtn({ buttonName, imageName }) {
  return (
    <NavLink className="flex items-center" to={`./menu/${buttonName}`}>
      <img
        className="mr-4 h-[60px] w-[60px]"
        src={`./Menu/${imageName}.jpeg`}
        alt={imageName}
      />
      <p>{buttonName}</p>
    </NavLink>
  );
}

export default MenuBtn;
