import { NavLink } from 'react-router-dom';

function OrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <section className="h-full w-full justify-center bg-slate-50">
      <div className="">
        <h1>Earn points on delivery or pickup via the app</h1>
        <h5>Or, please select your McDelivery option</h5>
        <p>
          You are leaving McDonald’s to visit a site not hosted by McDonald’s.
          Please review the third-party’s privacy policy, accessibility policy,
          and terms. McDonald’s is not responsible for the content provided by
          third-party sites.
        </p>

        <NavLink to="dowload-app">
          <div>
            <img className="w-72px" src="./McdAppImage.jpg" alt="app logo" />
            <h1>McDonald's App</h1>
            <span className="custom-arrow-button"></span>
          </div>
        </NavLink>

        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-red-900"
        >
          Close
        </button>
      </div>
    </section>
  );
}

export default OrderModal;
