/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import PageWrapper from "../CoursePageWrapper/CoursePageWrapper";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const CourseContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email.");
    }

    // Here, you would typically send the data to an email service or server endpoint.
  };

  return (
    <div className="p-4 py-8 mb-36 mt-16">
      <div className="flex items-center justify-center bg-white p-16 flex-col">
        <h2 className="text-5xl font-bold mb-24 ">
          Got Questions? We've got answers!
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg w-full text-gray-600"
        >
          <div className="mb-4">
            <label className="block text-2xl font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded-md outline-none focus:shadow-outline-gray"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">Name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded-md outline-none focus:shadow-outline-gray"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">Email is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-medium mb-2">Message</label>
            <textarea
              name="message"
              {...register("message", { required: true })}
              className="w-full px-3 py-2 border rounded-md outline-none focus:shadow-outline-gray"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs">Message is required</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-700 text-white text-2xl px-16 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-blue-600"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseContactForm;
