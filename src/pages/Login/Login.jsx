import './Login.css'

function Login(user,pass){
    return(
        <form>
            <label> e-mail <input type="text" id='user'/></label>
            <label> senha <input type="text" id='pass'/></label>
            <button type="submit">submit</button>
        </form>
    )
}

export default Login