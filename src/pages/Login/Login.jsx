import "./Login.css";
import { useState } from "react";

function Login(user, pass) {
  const [icon, setIcon] = useState("ai-eye-slashed");
  const [type_pass, setType_pass] = useState("password");
  const hidden_pass = (e) => {
    e.preventDefault();

    if (icon === "ai-eye-slashed") {
      setIcon("ai-eye-open");
      setType_pass("text");
    } else {
      setIcon("ai-eye-slashed");
      setType_pass("password");
    }
  };

  return (
    <div className="body-login">
      <header className="header-login">
        <a href="/"><img
          className="img-header-login"
          src="./planet.png"
          alt="planet logo"
        /></a>
        <h1 className="header-title-login">Spaces</h1>
      </header>
      <div className="div-main">
        <main className="main-login">
          <h1 className="title-main-login">Sign-in</h1>
          <div className="buttons">
            <button className="button-main-login">
              <i href="#" class="fa fa-apple"></i> LOGIN WITH APPLE
            </button>
            <button className="button-main-login">
              <i href="#" class="fa fa-google"></i> LOGIN WITH GOOGLE
            </button>
          </div>

          <form className="form-login">
            <input
              type="email"
              className="input-form-login user"
              id="user"
              placeholder="E-MAIL"
            />
            <input
              type={type_pass}
              className="input-form-login pass"
              id="pass"
              placeholder="PASSWORD"
            />
            <button onClick={hidden_pass} className="hidden-pass">
              <i id="hidde-pass" class={icon}></i>
            </button>
            <div className="footer-input">
              <a href="forgot.com" className="forgot-pass">
                FORGOT PASSWORD?
              </a>
            </div>
            <div className="buttons">
              <button className="button-login " type="submit" id="login">
                LOGIN
              </button>
              <button className="button-sign-up" type="submit" id="sign-up">
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
