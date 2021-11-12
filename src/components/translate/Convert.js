import React, { useState, useEffect } from "react";
import axios from "axios";

const POST_API = "https://translation.googleapis.com/language/translate/v2";
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("new language or text");

    axios.post(
      POST_API,
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: KEY,
        },
      }
    );
  }, [language, text]);

  return <div />;
};

export default Convert;
