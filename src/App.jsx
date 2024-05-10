import AppRoutes from "./routes/routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/ReactToastify.css";
import "./styles/global.styles.css";

function App() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <AppRoutes />
    </div>
  );
}

export default App;
