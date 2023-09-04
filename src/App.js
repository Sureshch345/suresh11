
import './App.css';
import{Routes,Route, BrowserRouter} from "react-router-dom";
import CreateNewAccount from "./Components/CreateNewAccount";
import ForgotPassword from "./Components/ForgotPassword";
import UIform from './Components/UIform';



function App() {
  return(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateNewAccount/>}></Route>
      <Route path="/forgot" element={<ForgotPassword/>}></Route>
      <Route path="/uiform" element={<UIform/>}></Route>
    </Routes>
    </BrowserRouter>

    
  );
  }

export default App;
