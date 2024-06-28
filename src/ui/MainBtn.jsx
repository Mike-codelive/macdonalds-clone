function MainBtn({ children, openModal }) {
  return (
    <button
      onClick={openModal}
      className="rounded-md bg-amber-400 p-2 pl-3 pr-3 text-sm leading-7 text-black"
    >
      {children}
    </button>
  );
}

export default MainBtn;
