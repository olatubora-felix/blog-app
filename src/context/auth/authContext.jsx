import axios from "axios";
import { createContext, useState } from "react";

const currentUser = JSON.parse(localStorage.getItem("users"));

const AuthContext = createContext({
  handleUsername: () => {},
  handlePassword: () => {},
  handleSubmit: () => {},
  username: "",
  password: "",
  users: {},
  loading: false,
  error: "",
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(currentUser ? currentUser : {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  setTimeout(() => {
    if (error) {
      setError("");
    }
  }, 5000);

  //   Sign In
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "" || password === "") {
      return setError(
        "UserName or Password cannot be empty"
      );
    }
    if (username.trim().length < 4) {
      return setError(
        `Username must be greater than 11 Not  ${username.length}`
      );
    }

    if (password.length < 4) {
      return setError(
        `Password must be greater than 10 Not ${password.length}`
      );
    }
    setLoading(true);
    try {
      const data = {
        username,
        password,
      };
      const res = await axios.post("https://dummyjson.com/auth/login", data);
      if (res.data) {
        setUsers(res.data);
        setLoading(false);
        const jsonString = JSON.stringify(res.data);
        localStorage.setItem("users", jsonString);
        setError("");
      }
    } catch (error) {
      const data = error.response.data;
      setError(data.message);
      setLoading(false);
    }
    setUsername("");
    setPassword("");
  };

  //   Logout
  const logout = () => {
    localStorage.removeItem("users");
    return setUsers({});
  };

  return (
    <AuthContext.Provider
      value={{
        handleUsername,
        handlePassword,
        username,
        password,
        handleSubmit,
        error,
        users,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
