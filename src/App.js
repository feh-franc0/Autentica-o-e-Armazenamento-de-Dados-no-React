import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { ProtectedRoute } from "./components/PrivateRoutes";
import { AuthProvider } from "./context/authContext";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Sininup";
import { UpdateProfile } from "./pages/UpdateProfile";
import { UserProfile } from "./pages/UserProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/forgot-password" element={<ForgotPassword />}></Route>

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
