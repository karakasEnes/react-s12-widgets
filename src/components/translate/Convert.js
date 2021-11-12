import React, { useState, useEffect } from "react";
import axios from "axios";

const POST_API = "https://translation.googleapis.com/language/translate/v2";
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    console.log("new language or text");

    const doTranslate = async () => {
      const { data } = await axios.post(
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

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
