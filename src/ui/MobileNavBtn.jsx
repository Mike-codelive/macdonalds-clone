function MobileNavBtn() {
  return (
    <button className="ml-2 flex h-5 w-5 flex-col items-center justify-center space-y-1.5 focus:outline-none">
      <span
        className={
          'block h-0.5 w-5 transform bg-black transition duration-300 ease-in-out'
        }
      />
      <span
        className={
          'block h-0.5 w-5 transform bg-black transition duration-300 ease-in-out'
        }
      />
      <span
        className={
          'block h-0.5 w-5 transform bg-black transition duration-300 ease-in-out'
        }
      />
    </button>
  );
}

export default MobileNavBtn;
