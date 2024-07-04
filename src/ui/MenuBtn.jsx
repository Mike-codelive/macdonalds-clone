function MenuBtn({ buttonName, imageName }) {
  return (
    <button className="flex items-center">
      <img
        className="mr-4 h-[60px] w-[60px]"
        src={`./Menu/${imageName}.jpeg`}
        alt={imageName}
      />
      <p>{buttonName}</p>
    </button>
  );
}

export default MenuBtn;
