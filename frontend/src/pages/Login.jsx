import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === "Sign Up") {
      const { data } = await axios.post(backendUrl + "/api/user/register", {
        name,
        email,
        phone,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    } else {
      const { data } = await axios.post(backendUrl + "/api/user/login", {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Inscription" : "Consulter votre dossier"}
        </p>
        <p>
          SVP {state === "Sign Up" ? "inscrivez-vous" : "enregistrez-vous"} pour
          réserver votre RDV.
        </p>
        {state === "Sign Up" ? (
          <div className="w-full ">
            <p>Nom et prénom</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="text"
              required
            />
          </div>
        ) : null}
        <div className="w-full ">
          <p>Courriel</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Téléphone</p>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="phone"
            required
          />
        </div>
        <div className="w-full ">
          <p>Mot de passe</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
          {state === "Sign Up" ? "Validez" : "Accédez"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Vous avez déjà un dossier avec nous ?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Accédez ici
            </span>
          </p>
        ) : (
          <p>
            Créer un dossier ?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Cliquez ici
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
