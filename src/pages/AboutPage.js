import React, { useEffect, useState, useContext } from "react";
import { get } from "../services/authServices";
import AdminAbout from "../components/AdminAbout";
import { AuthContext } from "../context/auth.Context";

const AboutPage = () => {
  const { user } = useContext(AuthContext);
  const [aboutInfo, setAboutInfo] = useState(null);

  useEffect(() => {
    get("/about/about")
      .then((response) => {
        setAboutInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4 text-center">MEET YOUR FLORIST</h1>
    {user?.isAdmin === true && <AdminAbout />}
    {aboutInfo ? (
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-1xl font-bold mb-1">{aboutInfo[0]?.title}</h2>
        <p className="text-lg font-medium mb-4 font-light">{aboutInfo[0]?.name}</p>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={aboutInfo[0]?.image}
            alt="About"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <p className="text-gray-600">{aboutInfo[0]?.information}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  
  );
};

export default AboutPage;
