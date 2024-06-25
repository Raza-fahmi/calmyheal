import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";

export default function MencatatBuku({ link }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="bg-fourt text-primary font-Montserrat p-5">
      <p className="text-base mx-7 font-semibold">
        "Ketenangan batin dan kebahagiaan sejati tercapai ketika kita fokus pada
        kebajikan dan mengelola pikiran serta tindakan kita. Untuk mencapai itu
        kita perliu mengendalikan apa yang bisa kota kendalikan dan terima apa
        yang tidak bisa kita kendalikan."
      </p>
      <h1 className="text-xl font-bold mt-5 text-center">
        Catat Hasil Kemajuan Harian Kamu Disini
      </h1>
      <div className="lg:w-[1080px] mx-auto mt-5">
        <textarea
          className="bg-eighth text-fourt h-52 w-full lg:h-[398px] px-1 align-top rounded-lg"
          style={{
            resize: "none",
            overflowY: "auto",
            paddingTop: "0.5rem",
            paddingRight: "0.5rem",
          }}
        />
        <div className="flex justify-end mt-5">
          <button
            onClick={handleOpenPopup}
            className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-lg w-[135px] lg:text-lg lg:w-[150px] lg:py-3 lg:font-semibold lg:rounded-2xl text-center no-underline"
          >
            Kirim
          </button>
          <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />
        </div>
      </div>
    </div>
  );
}
