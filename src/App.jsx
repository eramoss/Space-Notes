import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign-up/Sign-up";
import Main from "./pages/main/main";

import { AuthProvider, AuthContext } from "./contexts/auth";

function App() {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading" > carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="/Login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/myNotes"
            element={
              <Private>
                <Main />
              </Private>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
