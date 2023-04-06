import React from "react";

import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-orange-500">
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="flex md:items-center mb-3">
            <h1 className="text-3xl md:text-2xl">
              Best <span className="text-black font-bold">Food</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-3xl md:text-2xl font-bold">Contact</h1>
            <ul>
              <li>Location: TP.HCM</li>
              <li>Phone: 09090909</li>
              <li>Email: dung@gmail.com</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-3xl md:text-2xl font-bold">Follow us</h1>
            <ul>
              <li className="flex gap-2 items-center">
                <AiOutlineFacebook size={20} />
                <span>Facebook</span>
              </li>
              <li className="flex gap-2 items-center">
                <AiOutlineInstagram size={20} />
                <span>Instagarm</span>
              </li>
              <li className="flex gap-2 items-center">
                <AiOutlineYoutube size={20} />
                <span>Youtube</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-3xl md:text-2xl font-bold">Time</h1>
            <ul>
              <li>Sunday-Thursday: 7.00am - 8.00pm</li>
              <li>Friday-Saturday: Off</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
