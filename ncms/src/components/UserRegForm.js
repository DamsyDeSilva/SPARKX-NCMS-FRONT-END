import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles(() => ({
  UserRegForm: {
    maxWidth: "500px",
    margin: "auto",
    textAlign: "center",
  },
  regLabel: {
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
  },
}));

export default function UserRegForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hospitalID, setHospitalID] = useState("1");
  const [role, setRole] = useState("DOCTOR");

  const [regStatus, setRegStatus] = useState("");

  const { UserRegForm, regLabel, formTitle, forminput, formButton } =
    useStyles();

  // use effect for status
  useEffect(() => {
    setRegStatus("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regData = {
      username,
      password,
      firstName,
      lastName,
      hospitalID,
      role,
    };
    // console.log(regData);
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const reqBody = JSON.stringify(regData);
    axios
      .post("http://localhost:8080/ncms/register", reqBody, config)
      .then((res) => {
        console.log(res.data);
        setRegStatus(res.data);
      });
  };

  if (regStatus === "") {
    return (
      <div className={UserRegForm}>
        <h2 className={formTitle}>User Registration</h2>

        <form onSubmit={handleSubmit}>
          <label className={regLabel}>Username</label>
          <input
            className={forminput}
            required
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className={regLabel}>Password</label>
          <input
            className={forminput}
            required
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={regLabel}>First Name</label>
          <input
            className={forminput}
            required
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className={regLabel}>Last Name</label>
          <input
            className={forminput}
            required
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className={regLabel}>Hospital ID </label>
          <input
            className={forminput}
            placeholder="0"
            required
            type="number"
            pattern="[1-9]"
            value={hospitalID}
            onChange={(e) => setHospitalID(e.target.value)}
          />

          <label className={regLabel}>Role : </label>
          <select
            className={forminput}
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="DOCTOR">DOCTOR</option>
            <option value="MOH">MOH</option>
          </select>

          <button className={formButton}> Register </button>
        </form>
      </div>
    );
  } else if (regStatus === "User Created") {
    return (
      <div className={UserRegForm}>
        <h2 className={formTitle}>Successful User Registration</h2>
      </div>
    );
  }
}
