import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/Signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/home');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left side */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-white text-4xl text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-teal-950 via-cyan-900 to-sky-950 rounded-lg">
              SnapScribe
            </span>
          </Link>
          <h1 className="mt-3 font-semibold text-gray-700">
            Where Words Come to Life
          </h1>
          <p className="text-sm mt-7 text-gray-600 font-sans sm:mb-8">
            We believe in the power of words to connect, inspire, and transform.
            Immerse yourself in a rich tapestry of thoughts, ideas, and
            narratives as our diverse community of writers shares their unique
            perspectives on life, culture, and everything in between.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm mb-5">
            You can sign in with your email and password!
          </p>
          {/* right side */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="EMAIL" />
              <TextInput
                type="email"
                placeholder="Enter your Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="PASSWORD" />
              <TextInput
                type="password"
                placeholder="Enter your Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="border-2 border-teal-900 bg-gradient-to-r from-teal-950 via-cyan-900 to-sky-950" disabled={loading}
            >
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className="pl-3"> Loading... </span>
                  </>
                ) : 'Sign In'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-3 justify-center">
            <span>Dont't have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {" "}
              {errorMessage}{" "}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
