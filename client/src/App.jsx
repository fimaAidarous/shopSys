import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn"
import Header from "./components/Header";
import SignUp from "./pages/signUp";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
