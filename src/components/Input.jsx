import React, { useState } from 'react';
import { api } from "../common/api/ApiClient";

const Input = () => {
    const [inputData, setInputData] = useState({
        name: "",
        description: ""
    });

    const handleNameChange = (e) => {
        setInputData({ ...inputData, name: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setInputData({ ...inputData, description: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        postInput();
    };

    const postInput = async () => {
        await api('/api', "POST", inputData);
    };

    return (
        <form onSubmit={submitHandler}>
            <input placeholder='name' name={inputData.name} onChange={handleNameChange} value={inputData.name} />
            <input placeholder='description' name={inputData.description} onChange={handleDescriptionChange} value={inputData.description} />
            <input type='submit' value="click" />
        </form>
    );
};

export default Input;