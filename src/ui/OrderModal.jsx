import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function OrderModal({ isOpen, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <section className="modal_container h-full w-full justify-center">
      <div className="bg_modal_shadow bg-white" ref={modalRef}>
        <div className="modal_links_container mb-10">
          <h2 className="mb-[10px] text-center text-[28px] font-bold leading-[2pc]">
            Earn points on delivery or pickup via the app
          </h2>
          <legend className="mb-[20px] text-center text-[14px]">
            Or, please select your McDelivery option
          </legend>
          <div className="flex justify-center">
            <div className="max-w-[297.33334px]">
              <NavLink onClick={onClose} to="dowload-app">
                <div className="partner_list_item mb-3 !max-h-[96px] rounded px-3 py-6">
                  <div className="mb-1 flex items-center gap-4">
                    <img
                      className="w-72px"
                      src="./McdAppImage.jpg"
                      alt="app logo"
                    />
                    <h1 className="font-bold">McDonald's App</h1>
                    <span className="custom-arrow-button ml-auto"></span>
                  </div>
                </div>
              </NavLink>

              <a href="#">
                <div className="partner_list_item mb-3 rounded px-3 py-3">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-72px"
                      src="./UberEats.jpeg"
                      alt="app logo"
                    />
                    <h1 className="font-bold">Uber Eats</h1>
                    <span className="custom-arrow-button ml-auto"></span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="partner_list_item mb-3 rounded px-3 py-3">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-72px"
                      src="./DoorDash.jpeg"
                      alt="app logo"
                    />
                    <h1 className="font-bold">Door Dash</h1>
                    <span className="custom-arrow-button ml-auto"></span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="partner_list_item mb-3 rounded px-3 py-3">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-72px"
                      src="./Grubhub.jpeg"
                      alt="app logo"
                    />
                    <h1 className="font-bold">Grubhub</h1>
                    <span className="custom-arrow-button ml-auto"></span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="partner_list_item mb-3 rounded px-3 py-3">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-72px"
                      src="./Postmates.jpeg"
                      alt="app logo"
                    />
                    <h1 className="font-bold">Postmates</h1>
                    <span className="custom-arrow-button ml-auto"></span>
                  </div>
                </div>
              </a>

              <p className="text-[10px]">
                You are leaving McDonald’s to visit a site not hosted by
                McDonald’s. Please review the third-party’s privacy policy,
                accessibility policy, and terms. McDonald’s is not responsible
                for the content provided by third-party sites.
              </p>

              <button
                onClick={onClose}
                className="btn_close_modal absolute right-4 top-4"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderModal;
