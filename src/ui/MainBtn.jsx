function MainBtn({ children, openModal = null, py = 15, px = 15, text = 16 }) {
  return (
    <button
      onClick={openModal}
      className={`rounded-md bg-[#ffbc0d] py-[${py}px] px-[${px}px] text-[${text}px] leading-7 text-[#292929]`}
    >
      {children}
    </button>
  );
}

export default MainBtn;
