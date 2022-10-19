import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Sininup";
import { UserProfile } from "./pages/UserProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<UserProfile />}></Route>
          <Route
            path="*"
            element={
              <div>
                <h1>Rota não encontrada</h1>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
