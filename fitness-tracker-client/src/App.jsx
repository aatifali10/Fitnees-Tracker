// // Login.js
// import { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();
//   const [error, setError] = useState();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post("mongodb://localhost:27017/login", { username, password })
//       .then((user) => console.log(user))
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div style={{ backgroundColor: "gray" }}>
//       <h2>Login</h2>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default App;
// DataFetching.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await axios.get("mongodb://localhost:27017/login");
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data</h2>
      {error && <div>{error}</div>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
