import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const Jackets = () => {
  return <h1>Jackets</h1>;
};

const Sneakers = () => {
  return <h1>Sneakers</h1>;
};

const Womens = () => {
  return <h1>Womens</h1>;
};

const Mens = () => {
  return <h1>Mens</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={"shop"} element={<Shop />} />
        <Route path={"sneakers"} element={<Sneakers />} />
        <Route path={"jackets"} element={<Jackets />} />
        <Route path={"womens"} element={<Womens />} />
        <Route path={"mens"} element={<Mens />} />
      </Route>
    </Routes>
  );
};

export default App;
