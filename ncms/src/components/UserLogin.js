import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  patientRegForm: {
    maxWidth: "300px",
    margin: "10",
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
    marginTop: "10px",
  },
}));

export default function UserLogin() {
  const [Username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("Male");

  const { patientRegForm, regLabel, formTitle, forminput, formButton } =
    useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regData = {Username, password, role};
    console.log(regData);
  };

  return (
    <div className={patientRegForm}>
      <h2 className={formTitle}>User Login</h2>

      <form onSubmit={handleSubmit}>
        <label className={regLabel}>Username : </label>
        <input
          className={forminput}
          required
          placeholder="Username"
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className={regLabel}>Password : </label>
        <input
          className={forminput}
          required
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <label className={regLabel}>Role : </label>
        <select className={forminput} required value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Doctor">Doctor</option>
            <option value="MoH">MoH</option>
            <option value="Director">Director</option>
        </select>

        <button className={formButton}> Login </button>
      </form>
    </div>
  );
}
