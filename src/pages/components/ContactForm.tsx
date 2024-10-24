import React from "react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Buttom";

export const ContactForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-fit py-[55px] px-[40px] bg-white rounded-[5px] border border-black">
        <h3 className="font-epilogue text-[50px] font-medium uppercase leading-tight">
          BETTER CALL NERDS
        </h3>
        <p className="text-center mb-16">
          Contact us and we will respond to you promptly.
        </p>

        <form>
          <Input type="text" id="name" placeholder="Name" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <Input type="email" id="email" placeholder="Email" />
            <Input type="tel" id="phone" placeholder="Phone" />
          </div>

          <div className="mb-16">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border-b-[1.5px] border-gray-400 outline-none text-gray-600 placeholder:text-gray-400 focus:border-black"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
