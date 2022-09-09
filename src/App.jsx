import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign-up/Sign-up";
import Main from "./pages/main/main";
import { AuthProvider } from "./contexts/auth";




const Private = ({Item}) => {
  const signed = false;
  return signed > 0 ? <Item /> : <Home />;
}


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
          <Fragment>
              <Routes>
                <Route path="/myNotes" element={<Private Item={Main} />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="+" element={<Home />}/>
              </Routes>
            </Fragment>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
