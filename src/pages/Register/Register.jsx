import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/image/logofix.png";

function Register() {
  return (
    <div className="h-screen md:flex font-Montserrat">
      <div
        className="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden"
        style={{
          background:
            "linear-gradient(to top right, #02607E 0%, #48A8AD 50%, #66C7C2 100%)",
        }}
      >
        <div>
          <img src={logo} alt="" width={390} />
        </div>
      </div>

      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white ">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-5">
            Daftar Akun Sekarang
          </h1>
          <div className="flex space-x-4 justify-center items-end bg-white border-2 text-gray-600 py-2 rounded-md transition duration-100 mb-5">
            <img
              className="h-6 cursor-pointer"
              src="https://i.imgur.com/arC60SB.png"
              alt=""
            />
            <button>Masuk dengan Google</button>
          </div>
          <p className="text-sm font-normal text-gray-600 mb-7">
            ------------- Atau masuk dengan E-mail -------------
          </p>
          <label className="block text-md mb-2 my-3" htmlFor="email">
            Nama Lengkap
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-4 w-full">
            <input
              className="pl-2 outline-none border-none w-full"
              type="text"
              name="Nama Lengkap"
              id="namaLengkap"
              placeholder=""
            />
          </div>
          <label className="block text-md mb-2 my-3" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder=""
            />
          </div>
          <label className="block text-md mb-2 my-3" htmlFor="email">
            No handphone
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-4">
            <input
              className="pl-2 outline-none border-none"
              type="nohp"
              name="nohp"
              id="nohp"
              placeholder=""
            />
          </div>
          <label className="block text-md mb-2 my-3" htmlFor="email">
            Kata Sandi
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded-1xl mb-5">
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
          </div>
          <div className="flex justify-between">
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                name="rememberme"
                style={{
                  accentColor: "#02607E",
                }}
              />
              <span className="text-sm ml-1">Ingat saya</span>
            </div>
            <span className="text-sm ml-1 text-[#3431A2] hover:underline cursor-pointer">
              Lupa Kata Sandi?
            </span>
          </div>

          <Link to="/Login">
            <button
              type="submit"
              className="block w-full bg-[#02607E] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Daftar
            </button>
          </Link>
          <div>
            <span className="text-sm ml-8"> Sudah Punya Akun?</span>
            <Link to="/Login">
              <span className="text-sm ml-2 text-[#3431A2] hover:text-blue-500 cursor-pointer">
              Masuk Sekarang
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
