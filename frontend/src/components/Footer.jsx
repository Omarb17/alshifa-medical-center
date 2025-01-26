import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className=" w-72" src={assets.CentreMédicalAlShifaLogo} alt="" />
          <p className="w-full font-medium leading-7 md:w-2/3 text-blue-6">
            Centre Médical al shifa vous permet de trouver le médecin de
            différents spécialités qui vous convient et de prendre rendez-vous
            avec lui directement en ligne. Le Centre Médical al shifa vous
            apporte des informations fiables sur les médecins de votre région et
            vous fait gagner du temps.
          </p>
        </div>
        <div className="text-blue-6">
          <p className="mb-5 text-2xl font-black ">Entreprise</p>
          <ul className="flex flex-col gap-2 font-medium ">
            <li>Accueil</li>
            <li>À propos de nous</li>
            <li>Conditions d'utilisation</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className="text-blue-6">
          <p className="mb-5 text-2xl font-black ">Contact</p>
          <ul className="flex flex-col gap-2 ">
            <li>+212 06 12 34 56 78</li>
            <li>alshifacentremédical@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="h-1 bg-blue-1" />
        <p className="py-5 text-sm text-center">
          © Copyright CentreMédicalAlShifa.com 2025 - Tous Droits Réservés
        </p>
      </div>
    </div>
  );
};

export default Footer;
