"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  interface FormData {
    fullname: string;
    email: string;
    subject: string;
    message: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data:FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <main>
      <br />
      <br />
      <br />
      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-[#111111]/30 md:h-96 md:px-8">
        <div className="mx-auto mb-10 md:mt-20">
          <div className="badge bg-[#fcb040] inline-block rounded-xl">
            <p className="font-light text-base px-4 py-1 text-gray-50">
              Lets talk
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-4 text-gray-50">
            Lets talk about your projects.
          </h1>
          <p className="text-sm text-gray-200 mt-4 font-light ">
            Fill the form and send in your queries. We will respond as soon as
            we can. Alternatively, You can reach out to us at our email address.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-[#111111]"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>

          <label htmlFor="fullname" className="font-light mt-8 text-gray-50">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("fullname", { required: true })}
            className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#fcb040] font-light text-gray-500 ${
              errors.fullname ? "border-red-500" : ""
            }`}
          />
          {errors.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label htmlFor="email" className="font-light mt-4 text-gray-50">
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#fcb040] font-light text-gray-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label htmlFor="subject" className="font-light mt-4 text-gray-50">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("subject", { required: true })}
            className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#fcb040] font-light text-gray-500 ${
              errors.subject ? "border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}

          <label htmlFor="message" className="font-light mt-4 text-gray-50">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-[#fcb040] font-light text-gray-500 ${
              errors.message ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}

          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#fcb040] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              Send
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-white ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {/* ... success and failure messages ... */}
          </div>
        </form>
      </header>
      <section className="">
        <h1
          className={`text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-50 ${
            errors ? "md:mt-80" : "md:mt-60"
          }`}
        >
          Reach out
        </h1>
        <div className="flex justify-center gap-4 items-center md:mx-auto my-20">
          <Link
            href="https://wa.me/971554079685"
            className="font-sans text-white"
            target="_blank"
          >
            <div className="card bg-red-900 hover:bg-red-800 p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
              <div className="flex flex-row items-center">
                <Image
                  src={"/phone.png"}
                  alt="Phone Icon"
                  width={18}
                  height={18}
                  className="object-contain mr-2"
                />
                +971554079685
              </div>
            </div>
          </Link>

          <Link
            href="mailto:arif.tech79@gmail.com"
            className="font-sans text-white"
          >
            <div className="card bg-red-900 hover:bg-red-800 p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
              <div className="flex flex-row items-center">
                <Image
                  src={"/mail.png"}
                  alt="Mail Icon"
                  width={20}
                  height={20}
                  className="object-contain mr-2"
                />
                arif.tech79@gmail.com
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
