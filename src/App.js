import { AuthProvider } from "./context/authContext";
import { Signup } from "./pages/Sininup";

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  )
}

export default App;
