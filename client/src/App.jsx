import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndxPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacePage from "./pages/PlacePage";
import PlacesFormPage from "./pages/PlacesFormPage";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndxPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />}/>
          <Route path="/account/places" element={<PlacesPage />}/>
          <Route path="/account/places/new" element={<PlacesFormPage />}/>
          <Route path="/account/places/:id" element={<PlacesFormPage />}/>
          <Route path="/place/:id" element={<PlacePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;