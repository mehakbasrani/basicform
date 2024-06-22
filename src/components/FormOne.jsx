import React, { useState } from "react";
import useFormValidate from "../hooks/useFormValidate";

const FromOne = () => {
  const formData = {
    name: "",
    age: "",
    email: "",
    guestName: "",
  };
  const { values, handleChange, handleSubmit, errors, submittedValues } =
    useFormValidate(formData);

  const [showInput, setShowInput] = useState(false);

  const handleRadioChange = (event) => {
    setShowInput(event.target.value === "yes");
  };

  return (
    <>
      <nav className="bg-gray-800 py-4 w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">
                Basic Dynamic Form
              </span>
            </div>
            <div className="flex items-en">
              <button
                onClick={(e) => handleSubmit(e, showInput)}
                className="border border-2 border-white px-5 py-2 text-white  rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className=" pt-20 gap-6">
        <form className="flex gap-6 gap-y-2  max-w-7xl mx-auto sm:px-6 lg:px-8  ">
          <div className=" grid w-[90%]  grid-cols-2 gap-6 gap-y-2  max-w-7xl mx-auto sm:px-6 lg:px-8  ">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.name ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.name && <p> {errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                // type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.email ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.email && <p> {errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={values.age}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.age ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.age && <p> {errors.age}</p>}
            </div>
            <div className="mb-4 opacity-0">
              <label htmlFor="age" className="block font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={values.age}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.age ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.age && <p> {errors.age}</p>}
            </div>
            <div className="mb-4 mt-8 ">
              <label htmlFor="age" className="font-bold mb-2 mr-5">
                Are you attending with a guest?
              </label>
              <label className="mr-5 font-bold">
                <input
                  type="radio"
                  value="yes"
                  name="guest"
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="font-bold">
                <input
                  type="radio"
                  value="no"
                  name="guest"
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
            <div>
              {showInput && (
                <div className="mb-4">
                  <label htmlFor="age" className="block font-bold mb-2">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    name="guestName"
                    value={values.guestName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                      errors.guestName ? "border border-red-600 bg-red-100" : ""
                    }`}
                  />
                  {errors.guestName && <p> {errors.guestName}</p>}
                </div>
              )}
            </div>
          </div>
        </form>

        {submittedValues && (
          <div className="flex items-center justify-center w-screen h-screen bg-gray-600 overflow-x-hidden">
            <div className="w-full md:pt-24  pb-0 max-w-md">
              <div className="bg-gray-800 shadow-md rounded-xl md:px-8 px-4  pb-10 mb-4">
                <div className=" flex  justify-center pt-10">
                  <div className="bg-gray-900 rounded-lg shadow-lg p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center">
                        <svg
                          className="text-gray-400 w-12 h-12"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="text-left text-white">
                      <p>
                        <span className="font-bold">Name:</span>{" "}
                        {submittedValues.name}
                      </p>
                      <p>
                        <span className="font-bold">Email:</span>{" "}
                        {submittedValues.email}
                      </p>
                      <p>
                        <span className="font-bold text-white">Age:</span>{" "}
                        {submittedValues.age}
                      </p>
                      {submittedValues.guestName && (
                        <p>
                          <span className="font-bold">Guest Name:</span>{" "}
                          {submittedValues.guestName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FromOne;
