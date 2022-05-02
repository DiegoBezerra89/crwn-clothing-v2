import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve("I have succeeded");
//     }, 1000);
//   } else {
//     reject("I have failed");
//   }
// });

// myPromise
//   .then((response) => {
//     const myValue = response;
//     console.log(myValue);
//   })
//   .catch((reject) => {
//     const myValue = reject;
//     console.log(myValue);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     const firstUser = users[0];
//     return fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`
//     );
//   })
//   .then((response) => response.json())
//   .then((posts) => console.log(posts));

// const myFunction = async () => {
//   try {
//     const userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     const users = await userResponse.json();
//     const secondUser = users[1];

//     const postResponse = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${secondUser.id}`
//     );
//     const posts = await postResponse.json();
//     console.log("Async Await", posts);
//   } catch (err) {
//     console.log("ERRO");
//   }
// };

// myFunction();
