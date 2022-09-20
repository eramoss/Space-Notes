import "./Login.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate()
  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if(recoveredUser){
      Navigate('/mynotes')
    }
  });
  
  

  const {Login} = useContext(AuthContext)

  // usando State para atualizar as variaveis do campo de input

  // eslint-disable-next-line
  const [password, setpassword] = useState("");
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");

  //sistema de verificação de email e senha

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email | !password) {
      setError("preencha todos os campos");
      return;
    }
    Login(email,password)
  };

  // usando State para atualizar as variaveis do campo de input
  const [icon, setIcon] = useState("ai-eye-slashed");
  const [type_password, setType_password] = useState("password");

  //função para desabilitar e habilitar o hidden da senha
  const hidden_password = (e) => {
    e.preventDefault();

    if (icon === "ai-eye-slashed") {
      setIcon("ai-eye-open");
      setType_password("text");
    } else {
      setIcon("ai-eye-slashed");
      setType_password("password");
    }
  };

  //função que leva pra pagina de sign up
  const changeWindowRepository = (e) => {
    e.preventDefault();
    window.location.href = "https://github.com/eramoss/Space-notes";
  };
  const changeWindowSignup = (e) => {
    e.preventDefault();
    window.location.href = "/Sign-up";
  };

  // div que retorna pro APP

  return (
    <div className="body-login">
      <header className="header-login">
        <a href="/">
          <img
            className="img-header-login"
            src="./planet.png"
            alt="planet logo"
          />
        </a>
        <h1 className="header-title-login">Spaces</h1>
      </header>
      <div className="div-main">
        <main className="main-login">
          <h1 className="title-main-login">Sign-in</h1>
          <div className="buttons">
            <button className="button-main-login">ACCESS WITHOUT LOGIN</button>
            <button
              onClick={changeWindowRepository}
              className="button-main-login"
            >
              <i href="#" className="fa fa-github"></i> REPOSITORY
            </button>
          </div>

          <form onSubmit={handleSubmit} className="form-login">
            <input
              type="email"
              className="input-form-login user"
              id="user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-MAIL"
            />
            <input
              type={type_password}
              className="input-form-login password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="PASSWORD"
            />
            <button onClick={hidden_password} className="hidden-password">
              <i id="hidde-password" className={icon}></i>
            </button>
            <div className="footer-input">
              <div>{error}</div>
              <a href="forgot.com" className="forgot-password">
                FORGOT PASSWORD?
              </a>
            </div>
            <div className="buttons">
              <button className="button-login " type="submit" id="login">
                LOGIN
              </button>
              <button
                onClick={changeWindowSignup}
                className="button-sign-up"
                id="sign-up"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;
