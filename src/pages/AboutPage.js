import React, { useEffect, useState, useContext } from 'react';
import { get } from "../services/authServices";
import AdminAbout from '../components/AdminAbout';
import { AuthContext } from "../context/auth.Context" 



const AboutPage = () => {
  const { user } = useContext(AuthContext)
  const [aboutInfo, setAboutInfo] = useState(null);


  useEffect(() => {
    get('/about/about')
      .then(response => {
  
        setAboutInfo(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>

      {/* <h1>About Page</h1> */}
      {user?.isAdmin === true && <AdminAbout/> }

      {aboutInfo ? (
        <div>
          <h2>{aboutInfo[0]?.title}</h2>
          <p>{aboutInfo[0]?.information}</p>
          <img src={aboutInfo[0]?.image} alt="About" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AboutPage;