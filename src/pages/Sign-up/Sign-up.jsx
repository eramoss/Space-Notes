import { useState } from "react";
import './Sign-up.css'
import useAuth from "../../hooks/useAuth";


function SignUp() {

    // eslint-disable-next-line
    const [confirm_pass,setConfirm_pass] = useState("")
    const [error,setError] = useState("")
    const [pass,setPass] = useState("")
    // eslint-disable-next-line 
    const [email,setEmail] = useState("")
    const {signup} = useAuth()
    //sistema de verificação de email e senha
  
    const handleSubmit_sign= (e) =>{
      e.preventDefault()
      if(!email| !pass | !confirm_pass){
        setError('preencha todos os campos')
      } else if (pass !== confirm_pass){
        setError('As senhas não são iguais')
        return;
      }
      const res = signup(email,pass)

      if (res) {
        setError(res)
        return;
      }
      alert('Usuário cadastrado com sucesso!')
      window.location.href = 'login'
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
    const toLogin = () => {
      window.location.href = 'Login'
    }
    return (
        <div className="body-sign-up">
          <header className="header-sign-up">
            <a href="/">
              <img
                className="img-header-sign-up"
                src="./planet.png"
                alt="planet logo"
              />
            </a>
            <h1 className="header-title-sign-up">Spaces</h1>
          </header>
          <div className="div-main">
            <main className="main-sign-up">
              <h1 className="title-main-sign-up">Sign-up</h1>
              <div className="buttons">
                <button onClick={toLogin} className="button-main-sign-up">
                <i class="ai-person-check"></i> ALREADY REGISTERED?
                </button>
                <button className="button-main-sign-up">
                <i href="#" className="fa fa-github"></i> REPOSITORY
                </button>
              </div>
    
              <form onSubmit={handleSubmit_sign} className="form-sign-up">
                <input
                  type="email"
                  className="input-form-sign-up user"
                  id="user"
                  value={email}
                  onChange= {(e) => setEmail(e.target.value)}
                  placeholder="E-MAIL"
                />
                <input
                  type={type_pass}
                  className="input-form-sign-up pass"
                  id="pass"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="PASSWORD"
                />
                <button onClick={hidden_pass} className="hidden-pass">
                  <i id="hidde-pass" className={icon}></i>
                </button>
                <input
                  type={type_pass}
                  className="input-form-sign-up pass"
                  id="confirm-pass"
                  value={confirm_pass}
                  onChange={(e) => setConfirm_pass(e.target.value)}
                  placeholder="CONFIRM PASSWORD"
                />
                <div>{error}</div>
                <div className="buttons">
                  <button className="button-sign-up-page" id="sign-up" >
                    SIGN UP
                  </button>
                </div>
              </form>
            </main>
          </div>
        </div>
      );
    }
    
    export default SignUp;
