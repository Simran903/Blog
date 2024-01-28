import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-950 via-cyan-900 to-sky-950 rounded-lg">
              SnapScribe
            </span>
          </Link>
          <h1 className="mt-3 font-semibold text-gray-700">Where Words Come to Life</h1>
          <p className="text-sm mt-7 text-gray-600 font-sans sm:mb-8">
            We believe in the power of words to connect, inspire, and transform.
            Immerse yourself in a rich tapestry of thoughts, ideas, and
            narratives as our diverse community of writers shares their unique
            perspectives on life, culture, and everything in between.
          </p>
        </div>
      <div className="flex-1">
        {/* right side */}
          <form className="flex flex-col gap-4 ">
            <div>
              <Label value="USERNAME" />
              <TextInput type="text" placeholder="Enter your Username" id="username" />
            </div>
            <div>
              <Label value="EMAIL" />
              <TextInput type="text" placeholder="Enter your Email" id="email" />
            </div>
            <div>
              <Label value="PASSWORD" />
              <TextInput type="text" placeholder="Enter your Password" id="password" />
            </div>
            <Button type="submit" className="border-2 border-teal-900 bg-gradient-to-r from-teal-950 via-cyan-900 to-sky-950">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-3 justify-center">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Signup;
