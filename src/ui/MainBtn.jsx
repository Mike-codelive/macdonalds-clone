function MainBtn({ children, openModal, buttonClass }) {
  return (
    <button onClick={openModal} className={buttonClass}>
      {children}
    </button>
  );
}

export default MainBtn;
