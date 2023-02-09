import Routes from "./routes";
import Global from "./style/globalStyle";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Providers/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Global />
      <Toaster />
      <Routes />
    </AuthProvider>
  );
}

export default App;
