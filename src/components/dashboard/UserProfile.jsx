import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import './UserProfile.scoped.css'

const UserProfile = (props) => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const getUserData = async () => {
    const { data } = await axios.get(`/user/info/${currentUser.uid}`);

    console.log(data)
    if (data.complete) {
      props.setUserData(data);
    } else {
      props.setUserData();
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container">
      <img
        src={props.userData && props.userData.photoUrl}
        alt={props.userData.gender}
      />
      <div>Name : {props.userData && props.userData.name}</div>
      <div>Age : {props.userData  && props.userData.age}</div>
      <div>Gender : {props.userData && props.userData.gender}</div>
      <div>Weight : {props.userData  && props.userData.weight}</div>
      <div>Height : {props.userData && props.userData.height}</div>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
