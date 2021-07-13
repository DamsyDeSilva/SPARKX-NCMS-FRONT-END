import { makeStyles } from "@material-ui/core";
import { useState,useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles(() => ({
  hospitalRegForm: {
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

export default function HospitalRegForm() {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("Kandy");
  const [locationX, setLocationX] = useState("");
  const [locationY, setLocationY] = useState("");

  const [regStatus, setRegStatus] = useState("");

  const { hospitalRegForm, regLabel, formTitle, forminput, formButton } =
    useStyles();

  // use effect for satus
  useEffect(() => {
    setRegStatus("")
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regData = {
      name,
      district,
      locationX,
      locationY,
    };
    // console.log(regData);
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const reqBody = JSON.stringify(regData);
    axios
      .post("http://localhost:8080/ncms/hospital", reqBody, config)
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setRegStatus(res.data);
      });
  };

  if (regStatus === "") {
    return (
      <div className={hospitalRegForm}>
        <h2 className={formTitle}>Hospital Registration</h2>

        <form onSubmit={handleSubmit}>
          <label className={regLabel}>Hospital Name : </label>
          <input
            className={forminput}
            required
            placeholder="Hospital Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className={regLabel}>District : </label>
          <select
            className={forminput}
            required
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="Kandy">Kandy</option>
            <option value="Colombo">Colombo</option>
            <option value="Galle">Galle</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kurunegala">Kurunegala</option>
          </select>

          <label className={regLabel}>Location X: </label>
          <input
            className={forminput}
            placeholder="0"
            required
            type="number"
            pattern="[0-9]"
            value={locationX}
            onChange={(e) => setLocationX(e.target.value)}
          />

          <label className={regLabel}>Location Y: </label>
          <input
            className={forminput}
            placeholder="0"
            required
            type="number"
            pattern="[0-9]"
            value={locationY}
            onChange={(e) => setLocationY(e.target.value)}
          />

          <button className={formButton}> Register </button>
        </form>
      </div>
    );
  } else if (regStatus === "Hospital Created") {
    return (
      <div className={hospitalRegForm}>
        <h2 className={formTitle}>Successful Hospital Registration</h2>
      </div>
    );
  }
}
