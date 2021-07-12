import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles(() => ({
  loginForm: {
    maxWidth: "300px",
    margin: "10",
    textAlign: "center",
  },
  formLabel: {
    textAlign: "left",
    display: "block",
  },
  formTitle: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  },
  forminput: {
    width: "400px",
    height: "35px",
    paddingTop: "6px",
    marginTop: "10px",
    marginBottom: "10px",
    border: "1px",
    borderStyle: "solid",
    borderColor: "#ddd",
    boxSizing: "border-box",
    borderRadius: "8px",
    display: "block",
    color: "#818a84",
  },
  formButton: {
    background: "#f1356d",
    color: "#fff",
    border: "0",
    padding: "8px",
    borderRadius: "8px",
    marginTop: "10px",
  },
}));

export default function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("Doctor");
  
	const [status, setStatus] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const { loginForm, formLabel, formTitle, forminput, formButton } =
    useStyles();

  // login submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { username, password, role };
    // console.log(loginData);

    const reqBody = JSON.stringify(loginData);
    axios.post("http://localhost:8080/ncms/login", reqBody).then((res) => {
      // console.log(res);
      console.log(res.data);
      setUsername(res.data.username);
      setRole(res.data.role);
      setStatus(res.data.status);

			localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("role", res.data.role);
    });
  };

	// use effect for satus
  useEffect(() => {
    if (status === "SUCCESS_LOGIN") {
      setLoggedIn(true);
			console.log("satus success useeffect");
    } else if (status === "FAILED_LOGIN") {
      setLoggedIn(false);
			console.log("satus failed useeffect");
      localStorage.setItem("LoggedIn", false);
    }
  }, [status]);

	useEffect(() => {
    if (loggedIn) {
      // --> render next page
			localStorage.setItem("LoggedIn", true);
			console.log("loggedIn updated");
    } else {
      // setLoggedIn(false);
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
			localStorage.setItem("LoggedIn", false);
			console.log("local storage removed");
    }

  }, [loggedIn]);

  return (
    <div className={loginForm}>
      <h2 className={formTitle}>User Login</h2>

      <form onSubmit={handleSubmit}>
        <label className={formLabel}>Username : </label>
        <input
          className={forminput}
          required
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className={formLabel}>Password : </label>
        <input
          className={forminput}
          required
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <label className={formLabel}>Role : </label>
        <select
          className={forminput}
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Doctor">Doctor</option>
          <option value="MoH">MoH</option>
          <option value="Director">Director</option>
        </select>

        <button className={formButton}> Login </button>
      </form>
    </div>
  );
}
