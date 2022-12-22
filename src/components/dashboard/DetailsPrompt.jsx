import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import Modal from "../Modal";

const DetailsPrompt = () => {
  const { currentUser, logout } = useAuth();
  const [incompleteData, setIncompleteData] = useState(false);
  const navigate = useNavigate();
  const name = useRef();
  const age = useRef();
  const height = useRef();
  const weight = useRef();
  const gender = useRef();

  const getUserData = async () => {
    const { data } = await axios.get(`/user/info/${currentUser.uid}`);
    return data;
  };

  const updateData = async () => {
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

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

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
