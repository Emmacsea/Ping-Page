import { useState } from "react";
import logo from "../assets/images/logo.svg";
import dash from "../assets/images/illustration-dashboard.png";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import PropTypes from "prop-types";

export default function Ping({ email, onChangeEmail, onSubmitEmail }) {
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setError(`Please provide a valid email address`);
      return;
    }

    setError(null);
    onSubmitEmail();
  };

  return (
    <div className="bg-white flex justify-center items-center py-12 h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-5">
          <img className="md:w-14 sm:w-11" src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center space-y-1 mb-5">
          <h1 className="text-neutral-gray md:text-3xl sm:text-xl font-light">
            We are launching{" "}
            <span className="text-neutral-vdarkblue font-semibold"> soon!</span>
          </h1>
          <p className="text-neutral-vdarkblue md:text-lg sm:text-sm md:font-medium sm:font-semibold">
            Subscribe and get notified
          </p>
        </div>

        <form onSubmit={handleSubmit} action="" method="get">
          <div className="flex md:flex-row sm:flex-col justify-center md:items-start sm:items-center space-x-3 mb-6 w-full">
            <div >
              <input
                className={`rounded-full outline-none text-neutral-gray text-xs py-2 px-5 w-full ${
                  error
                    ? "border-secondary-lightred"
                    : "border-secondary-paleblue"
                } border-2`}
                type="text"
                value={email}
                onChange={onChangeEmail}
                placeholder="Your email address"
              />
              {error && (
                <p className="text-secondary-lightred text-sm font-medium ml-4">
                  {error}
                </p>
              )}
            </div>
            <button
              className="bg-primary-blue rounded-full md:py-3 sm:py-1 px-6 text-sm text-white font-light placeholder:text-neutral-gray placeholder:text-sm sm:w-full md:w-32 md:mt-0 sm:mt-4 " 
              type="submit"
            >
              Notify Me
            </button>
          </div>
        </form>

        <div>
          <img className="w-96 sm:h-44 md:h-auto md:mt-4 sm:mt-8" src={dash} alt="" />
        </div>

        <div className="flex space-x-3 items-center md:mt-7 sm:mt-16">
            <a className="icon-links" href="http://www.fb.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon-details" />
            </a>
            <a className="icon-links" href="http://www.x.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon-details" />
            </a>
            <a className="icon-links" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon-details" />
            </a>
        </div>

        <div>
          <p className="text-neutral-gray md:text=sm sm:text-xs font-semibold md:mt-8 sm:mt-3">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

Ping.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSubmitEmail: PropTypes.func.isRequired,
};
