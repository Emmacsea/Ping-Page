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
    <div className="bg-white flex justify-center items-center py-12 h-screen w-fu">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-5">
          <img className="w-14" src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center space-y-1 mb-5">
          <h1 className="text-neutral-gray text-3xl font-light">
            We are launching{" "}
            <span className="text-neutral-vdarkblue"> soon!</span>
          </h1>
          <p className="text-neutral-vdarkblue text-lg font-medium">
            Subscribe and get notified
          </p>
        </div>

        <form onSubmit={handleSubmit} action="" method="get">
          <div className="flex justify-center items-start space-x-3 mb-6 w-full">
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
              className="bg-primary-blue rounded-full py-3 px-6 text-neutral-vdarkblue text-sm font-light placeholder:text-neutral-gray placeholder:text-sm"
              type="submit"
            >
              Notify Me
            </button>
          </div>
        </form>

        <div>
          <img className="w-96" src={dash} alt="" />
        </div>

        <div className="flex space-x-3 items-center mt-7">
            <a className="rounded-full border-2 border-secondary-paleblue p-1" href="http://www.fb.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className=" text-primary-blue text-xl flex justify-center items-center " />
            </a>
            <a className="rounded-full border-2 border-secondary-paleblue p-1" href="http://www.fb.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className=" text-primary-blue text-xl flex justify-center items-center " />
            </a>
            <a className="rounded-full border-2 border-secondary-paleblue p-1" href="http://www.fb.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className=" text-primary-blue text-xl flex justify-center items-center " />
            </a>
        </div>

        <div>
          <p className="text-neutral-gray text=sm font-semibold mt-8">
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
