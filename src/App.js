import "./App.css";

import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import newsPic from "./assets/illustration-sign-up-desktop.svg";
import Feature from "./components/Feature";
import { useNavigate } from "react-router-dom";

function App() {
  // Refrences
  let errorMsgRef = useRef();
  let emailFieldRef = useRef();
  let formRef = useRef();
  let newsRef = useRef();

  let [email, setemail] = useState("");
  let features = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  // Feature component
  let featuresJSX = features.map((e, index) => (
    <Feature key={index} content={e} />
  ));
  // Check the Email Expreison
  let validateEmail = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // navigation
  let navigate = useNavigate();
  // Form Handling
  let handleForm = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Send Email Here
      if (errorMsgRef.current.classList.contains("opacity-1")) {
        errorMsgRef.current.classList.remove("opacity-1");
        errorMsgRef.current.classList.add("opacity-0");
        emailFieldRef.current.classList.remove("border-red-500");
        emailFieldRef.current.classList.add("border-[#aaa]");
        emailFieldRef.current.classList.remove("bg-red-100");
        emailFieldRef.current.classList.add("bg-transparent");
        // you have to set your email configs here
        // Sending Email
        // emailjs
        //   .sendForm("", "", formRef.current, {
        //     publicKey: "",
        //   })
        //   .then(
        //     () => {
        //       console.log("SUCCESS!");
        //     },
        //     (error) => {
        //       console.log("FAILED...", error.text);
        //     }
        //   );
        newsRef.current.classList.toggle("hidden");
      }

      // Route to success message
      navigate("/success");
    } else {
      // give an error
      errorMsgRef.current.classList.remove("opacity-0");
      errorMsgRef.current.classList.add("opacity-1");
      emailFieldRef.current.classList.remove("border-[#aaa]");
      emailFieldRef.current.classList.add("border-red-500");
      emailFieldRef.current.classList.remove("bg-transparent");
      emailFieldRef.current.classList.add("bg-red-100");
    }
  };
  // JSX
  return (
    <div className="App w-full h-[100vh] bg-[#36384d] flex items-center justify-center">
      <div
        ref={newsRef}
        className="card w-[100%] md:w-[55%] md:p-4 bg-white md:rounded-2xl flex items-center justify-between flex-col-reverse md:flex-row"
      >
        <div className="form p-4 text-center basis-[45%]">
          <h1 className="font-[700] text-4xl text-[#232742] mb-5 ">
            Stay updated!
          </h1>
          <p className="text-left text-sm font-[400] text-[#333] mb-5">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          {featuresJSX}
          <form ref={formRef} className="text-left" onSubmit={handleForm}>
            <div className="w-full flex justify-between items-center ">
              <label className="block mb-2 text-[#333]"> Email Address </label>
              <label
                className="block mb-2 text-red-500 opacity-0 transition-all duration-200"
                ref={errorMsgRef}
              >
                Valid email required
              </label>
            </div>
            <input
              ref={emailFieldRef}
              className="border-solid mb-3 border-[#aaa] border-[1px] focus:border-[#232742] rounded-lg outline-none p-3 w-full bg-transparent"
              type="text"
              placeholder="email@company.com"
              onChange={(e) => setemail(e.target.value)}
            />
            <button
              className="block rounded-lg w-full p-3 text-center text-white bg-gradient-to-r from-[#232742] to-[#232742] hover:from-pink-500 hover:to-yellow-500"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="image basis-[45%]">
          <div className="max-w-full rounded-3xl">
            <img src={newsPic} alt="news-letter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
