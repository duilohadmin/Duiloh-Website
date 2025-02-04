import { useState, useEffect } from "react";
import { ValidationError, useForm } from "@formspree/react";
import Image from "next/image";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Effect to reset form when submission is successful
  useEffect(() => {
    if (state.succeeded) {
      resetForm();
    }
  }, [state.succeeded]); // Dependency on the submission success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="lg:flex text-white font-mont
                    bg-tert bg-opacity-90 bg-gradient-to-b from-prim
                    pt-6 
                    "
    >
      <form onSubmit={handleSubmit} className="flex flex-col px-8 w-full">
        <div className="flex w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="name">NAME</label>
            <input
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 
              bg-cream text-black
              h-8 focus:outline-none px-2
              w-full"
            />
          </div>
          <div className="w-2 sm:w-24" />
          <div className="flex flex-col w-full">
            <label htmlFor="email">EMAIL</label>
            <input
              name="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 h-8 
              bg-cream text-black
              focus:outline-none px-2
              w-full"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <label htmlFor="message" className="mt-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-400 
          bg-cream text-black
          h-80 focus:outline-none p-2"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className="bg-tert w-44 h-12 rounded-xl my-16 
            text-white font-bold tracking-wider
             shadow-md"
          >
            {state.succeeded ? "GOT IT!" : "SEND"}
          </button>
        </div>
      </form>
      <div className="relative h-[300px] md:w-full md:h-auto">
        <Image
          src="/d-contact.jpg"
          alt="contact-paperplane"
          fill={true}
          className="absolute inset-0 w-full h-full object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
