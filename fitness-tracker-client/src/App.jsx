// import Login from "./component/Login";
// import Registration from "./component/Registration";

const App = () => {
  fetch("http://localhost:8000/api/auth/register")
    .then((res) => res.json())
    .then((res) => console.log(res));
  return (
    <div>
      {/* <Registration/> */}
      {/* <Login/> */}
    </div>
  );
};

export default App;
