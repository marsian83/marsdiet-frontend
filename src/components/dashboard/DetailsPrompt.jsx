import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Modal from "../Modal";
import "./DetailsPrompt.scoped.css"
const DetailsPrompt = () => {
  const { currentUser, logout } = useAuth();
  const [incompleteData, setIncompleteData] = useState(false);
  const [error, setError] = useState({ type: null, message: "" });
  const name = useRef();
  const age = useRef();
  const height = useRef();
  const weight = useRef();
  const gender = useRef();

  const getUserData = async () => {
    const { data } = await axios.get(`/user/info/${currentUser.uid}`);
    return data;
  };

  const clearError = () => {
    setError({ type: null, message: "" });
  };



  const updateData = async () => {
    clearError();
    await new Promise((r) => setTimeout(r, 1));
    if (!(name.current.value && age.current.value && gender.current.value && height.current.value && weight.current)) {
      return setError({
        type: "Update",
        message: "Please fill out all the fields",
      });
    }

    if (isNaN(age.current.value)){
      return setError({
        type: "Update",
        message: "Age should be a number"
      })
    }

    if (isNaN(height.current.value)){
      return setError({
        type: "Update",
        message: "Height should be a number"
      })
    }

    if (isNaN(weight.current.value)){
      return setError({
        type: "Update",
        message: "Weight should be a number"
      })
    }

    await axios.put(`/user/info/set/${currentUser.uid}`, {
      name: name.current.value,
      age: age.current.value,
      gender: gender.current.value,
      height: height.current.value,
      weight: weight.current.value,
    });
    getLatestData()
  };

  useEffect(() => {
    getLatestData();
  }, [updateData]);


  //functions
  const getLatestData = async () => {
    const data = await getUserData();
    if (!data.complete) {
      setIncompleteData(true);
    } else {
      setIncompleteData(false);
    }
    data.name && (name.current.value = data.name);
    data.age && (age.current.value = data.age);
    data.gender && (gender.current.value = data.gender);
    data.weight && (weight.current.value = data.weight);
    data.height && (height.current.value = data.height);
  };

  return (
    <div>
      <Modal visible={incompleteData} setVisible={incompleteData} fixed={true}>
        <div className="modal-heading">Complete Your Profile</div>
        <div className="error-display">{error.message}</div>
        <input placeholder="Name" ref={name} />
        <input placeholder="Age" ref={age} />
        <input placeholder="Gender" ref={gender} />
        <input placeholder="Weight" ref={weight} />
        <input placeholder="Height" ref={height} />
        <button onClick={updateData}>Update Data</button>
      </Modal>
    </div>
  );
};

export default DetailsPrompt;
