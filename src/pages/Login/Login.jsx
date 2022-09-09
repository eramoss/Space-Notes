import "./Login.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";


function Login() {
  const {signin} = useAuth()
  
  // usando State para atualizar as variaveis do campo de input

  // eslint-disable-next-line 
  const [pass,setPass] = useState("")
  // eslint-disable-next-line 
  const [email,setEmail] = useState("")
  // eslint-disable-next-line 
  const [error,setError] = useState("")


  //sistema de verificação de email e senha

  const handleSubmit= (e) =>{
    e.preventDefault()
    if (!email | !pass) {
      setError("preencha todos os campos")
      return;
    }

    const res = signin(email,pass)

    if (res) {
      setError(res)
      return;
    }

    window.location.href = "/myNotes"
  
  };

  
  // usando State para atualizar as variaveis do campo de input
  const [icon, setIcon] = useState("ai-eye-slashed");
  const [type_pass, setType_pass] = useState("password");

  //função para desabilitar e habilitar o hidden da senha
  const hidden_pass = (e) => {
    e.preventDefault();

    if (icon === "ai-eye-slashed") {
      setIcon("ai-eye-open");
      setType_pass("text");
    } else {
      setIcon("ai-eye-slashed");
      setType_pass("password");
    }
    }

  //função que leva pra pagina de sign up
  const changeWindowRepository= (e) => {
    e.preventDefault()
    window.location.href = 'https://github.com/eramoss/Space-notes';
  }
  const changeWindowSignup= (e) => {
    e.preventDefault()
    window.location.href = '/Sign-up';
  }



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
            <button className="button-main-login">
              ACCESS WITHOUT LOGIN
            </button>
            <button onClick={changeWindowRepository} className="button-main-login">
              <i href="#" className="fa fa-github"></i> REPOSITORY
            </button>
          </div>

          <form onSubmit={handleSubmit} className="form-login">
            <input
              type="email"
              className="input-form-login user"
              id="user"
              value={email}
              onChange= {(e) => setEmail(e.target.value)}
              placeholder="E-MAIL"
            />
            <input
              type={type_pass}
              className="input-form-login pass"
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="PASSWORD"
            />
            <button onClick={hidden_pass} className="hidden-pass">
              <i id="hidde-pass" className={icon}></i>
            </button>
            <div className="footer-input">
              <div>{error}</div>
              <a href="forgot.com" className="forgot-pass">
                FORGOT PASSWORD?
              </a>
            </div>
            <div className="buttons">
              <button className="button-login " type="submit" id="login">
                LOGIN
              </button>
              <button onClick={changeWindowSignup}  className="button-sign-up" id="sign-up">
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
