import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleTextChange(event)
  {
    let newText = event.target.value;
    setText(newText);
  }
  function HandleUpClick()
  {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","Sucess");
  }
  function HandleLwClick()
  {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","Sucess");
  }
  return (
    <>
      <form className="max-w-[40rem] mx-auto w-full">
        <label
          htmlFor="message"
          className={` ${props.mode === 'light' ? ' text-black' : ' text-white'} block mb-2 text-xl font-medium `}
        >
          Text Analyzer 
        </label>
        <textarea
          id="message"
          rows="10"
          className={` ${props.mode === 'light' ? ' text-gray-900 bg-gray-50  border-gray-300 focus:ring-blue-500 focus:border-blue-500' : ' bg-dark-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'} block p-2.5 w-full text-sm rounded-lg border `}
          value={text}
          placeholder="Enter Text Here"
          onChange={handleTextChange}
        ></textarea>
        <div className="flex flex-row justify-start mt-[0.05rem] btngrp w-[40rem]">
          <button
            type="button"
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 ${props.mode==='light' ? 'text-black bg-blue-700 hover:bg-blue-800  focus:ring-blue-300' :  'dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-white'}`}
            onClick={HandleUpClick}
          >
           Convert to Uppercase
          </button>
          <button
            type="button"
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 ${props.mode==='light' ? 'text-black bg-blue-700 hover:bg-blue-800  focus:ring-blue-300' :  'dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-white'}`}
            onClick={HandleLwClick}
          >
             Convert to Lowercase
          </button>
          {/* <button
            type="button"
            className=" text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Default
          </button> */}
        </div>
        <div className={`${props.mode === 'light' ? ' text-black' : ' text-white'} flex flex-row justify-start mt-[0.05rem] w-[40rem]`}>
        {text.length} characters, {text.split(/\s+/).filter(word => word.length > 0).length} words
        </div>
      </form>
    </>
  );
}
