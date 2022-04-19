import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
				<Route path="sign-up" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
