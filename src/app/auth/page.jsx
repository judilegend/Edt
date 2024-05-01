"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import "react-toastify/dist/ReactToastify.css";

// import Footer from '../composant/footer'
import Identifiant from "./Identifiant";
function Authentifier() {
  return (
    <>
      <main className=" h-[80vh]  w-full  flex justify-center items-center">
        <div className="flex flex-col  justify-center items-center pt-20">
          <div>
            <a href="/">
              <img src="/logo.svg" alt="" />
            </a>
          </div>
          <h1 className="text-[16px] max-w-[450px] mt-5 text-gray-600">
            Veillez choisir une option
            <span className="text-[#F8A700]">
              {" "}
              ou vous voulez s'Authentifier
            </span>
          </h1>
          <div className="flex flex-col mt-5 justify-center items-center ">
            <Tabs color={"warning"} aria-label="Tabs colors" radius="full">
              <Tab key="enseignant" title="Enseignant">
                <Identifiant />
              </Tab>
              <Tab key="etudiant" title="Etudiant">
                <Identifiant />
              </Tab>
            </Tabs>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Authentifier;
