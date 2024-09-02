import React from "react";

export default function WebPages({ onBack }) {
  return (
    <div className="text-lg text-center">
      <button
        className="hover:bg-red-700 hover:scale-125 duration-150 bg-red-700 bg-opacity-70 hover:bg-opacity-100 fixed lg:left-0 lg:inset-x-auto lg:inset-y-auto right-0 bottom-0 lg:mr-0 mr-12 lg:top-0 lg:ml-52 lg:mt-6 mb-20"
        onClick={onBack}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
          zIndex: 50,
        }}
      >
        Volver
      </button>

      <div className="lg:text-2xl text-lg font-extrabold italic pt-6">
        ¿Necesitas una página web?
      </div>
      <p className="text-sm pr-5 pl-5 mt-2">
        Creación de páginas web simples, profesionales, modernas y con modelos
        3D.
      </p>
      <div className="bg-white bg-opacity-30 lg:w-7/12 w-11/12 mx-auto  rounded-lg pb-10 pl-5 pr-5">
        <div className="mt-10 lg:text-2xl text-lg font-extrabold  pt-6">
          Actualmente vendo y edito plantillas web
        </div>
        <p className="mt-3 ">
          Los puedes encontrar en las historias destacadas:
          <a
            href="https://www.instagram.com/evowhite99/"
            className="bg-blue-400 bg-opacity-40 hover:bg-opacity-90 p-1 rounded-xl ml-2 mr-2 "
          >
            Páginas webs
          </a>
          que tengan texto rojo.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 pl-5 pr-5 bg-white bg-opacity-30 lg:w-7/12 w-11/12 mx-auto  rounded-lg pb-10 pt-6">
        <p className=" text-3xl">50€</p>
        <p className="text-left">
          Te doy la página web sin editar. (Solo las plantillas que he creado).
        </p>

        <p className="mt-10 text-3xl">100€</p>
        <p className="text-left mt-10">
          Te edito la página web (portfolio / curriculum) y la gestiono para que
          tu página web sea pública. (Solo las plantillas que he creado).
        </p>
      </div>
      <div className="bg-white bg-opacity-30 lg:w-7/12 w-11/12 mx-auto  rounded-lg pb-10">
        <div className="mt-10 lg:text-2xl text-lg font-extrabold  pt-6"></div>
        <p className="mt-3 ">
          Acepto efectivo en Librilla y cercanías. (Alhama de Murcia, Totana,
          Alcantarilla).
        </p>
        <p className="lg:mt-3 mt-5 ">Acepto transferencia, bizum y PayPal.</p>
        <p className="lg:mt-3 mt-5 ">
          Para más preguntas, envíame un mensaje por
          <a
            href="https://www.instagram.com/evowhite99/"
            className="bg-blue-400 bg-opacity-40 hover:bg-opacity-90 p-1 rounded-xl ml-2 mr-2 "
          >
            Instagram
          </a>
          .
        </p>
      </div>
      <div className="bg-white bg-opacity-30 lg:w-7/12 w-11/12 mx-auto mt-10 pt-6 rounded-lg pb-10">
        Actualmente proyectos en cola: 2.
      </div>
    </div>
  );
}
