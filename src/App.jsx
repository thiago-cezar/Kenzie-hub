import Routes from "./routes";
import Global from "./style/globalStyle";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Global />
      <Toaster />
      <Routes />
    </div>
  );
}

export default App;
