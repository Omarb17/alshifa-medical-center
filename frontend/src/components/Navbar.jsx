import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between py-5 mt-3 mb-5 text-xl border-b-4 bg-blue-7 rounded-2xl border-b-blue-8 px-14">
      <img
        onClick={() => navigate("/")}
        className="cursor-pointer w-72"
        src={assets.CentreMédicalAlShifaLogo}
        alt="CentreMédicalAlShifaLogo"
      />
      <ul className="items-start hidden gap-5 font-medium md:flex">
        <NavLink to="/">
          <li className="py-1 text-2xl font-bold active:text-blue-8 text-blue-6">
            Accueil
          </li>
          <hr className="hidden w-3/5 h-1 m-auto border-none outline-none bg-blue-1" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 text-2xl font-bold active:text-blue-8 text-blue-6">
            Tous Les Médecins
          </li>
          <hr className="hidden w-3/5 h-1 m-auto border-none outline-none bg-blue-1" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 text-2xl font-bold active:text-blue-8 text-blue-6">
            Qui Sommes-Nous?
          </li>
          <hr className="hidden w-3/5 h-1 m-auto border-none outline-none bg-blue-1" />
        </NavLink>
        <NavLink to="contact">
          <li className="py-1 text-2xl font-bold active:text-blue-8 text-blue-6">
            Contact
          </li>
          <hr className="hidden w-3/5 h-1 m-auto border-none outline-none bg-blue-1" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            <div className="absolute top-0 right-0 z-20 hidden pt-12 text-base font-medium text-blue-9 group-hover:block">
              <div className="flex-col gap-4 p-4 rounded min-w-48 bg-blue-6">
                <p
                  onClick={() => navigate("my-profile")}
                  className="cursor-pointer hover:text-blue-4"
                >
                  Mon profil
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="cursor-pointer hover:text-blue-4"
                >
                  Mes Rendez-vous
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="cursor-pointer hover:text-blue-4"
                >
                  Déconnecter
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden px-8 py-3 font-light rounded-full md:block bg-blue-8 text-blue-3 "
          >
            Créer un compte
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/*mobile menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "w-0 h-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-blue-1 transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
            <NavLink to="/" onClick={() => setShowMenu(false)}>
              <p className="inline-block px-4 py-2 rounded">Home</p>
            </NavLink>
            <NavLink to="/doctors" onClick={() => setShowMenu(false)}>
              <p className="inline-block px-4 py-2 rounded"> All Doctors</p>
            </NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)}>
              <p className="inline-block px-4 py-2 rounded">About</p>
            </NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)}>
              <p className="inline-block px-4 py-2 rounded">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
