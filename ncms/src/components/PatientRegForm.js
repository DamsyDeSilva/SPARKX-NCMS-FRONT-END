import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles(() => ({
  patientRegForm: {
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

export default function PatientRegForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [district, setDistrict] = useState("Kandy");
  const [locationX, setLocationX] = useState("");
  const [locationY, setLocationY] = useState("");

  const [regStatus, setRegStatus] = useState("");
  const [patientName, setPatientName] = useState("");
  const [serialID, setSerialID] = useState("");
  const [hospitalID, setHospitalID] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [bedNumber, setBedNumber] = useState("");
  const [queueNumber, setQueueNumber] = useState("");

  const { patientRegForm, regLabel, formTitle, forminput, formButton } =
    useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regData = {
      firstName,
      lastName,
      gender,
      district,
      locationX,
      locationY,
    };
    // console.log(regData);
    const reqBody = JSON.stringify(regData);
    axios.post("http://localhost:8080/ncms/patient", reqBody).then((res) => {
      // console.log(res);
      console.log(res.data);
      setRegStatus(res.data.status);
      setSerialID(res.data.SerialId);
      setPatientName(res.data.patientName);

      setHospitalID(res.data.hospitalID);
      setHospitalName(res.data.hospitalName);
      setBedNumber(res.data.bedNumber);

      setQueueNumber(res.data.QueueNumber);
    });
  };

  if (regStatus === "") {
    return (
      <div className={patientRegForm}>
        <h2 className={formTitle}>Patient Registration</h2>

        <form onSubmit={handleSubmit}>
          <label className={regLabel}>First Name : </label>
          <input
            className={forminput}
            required
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className={regLabel}>Last Name : </label>
          <input
            className={forminput}
            required
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className={regLabel}>Gender : </label>
          <select
            className={forminput}
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

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
  } else if (regStatus === "BED_ALLOCATED") {
    return (
      <div className={patientRegForm}>
        <h2 className={formTitle}>Successful Registration</h2>

        <p> Patient Name : {patientName}</p>
        <p> Serial Number : {serialID}</p>
        <p> Hospital Number : {hospitalID}</p>
        <p> Hospital Name : {hospitalName}</p>
        <p> Bed Number : {bedNumber}</p>
      </div>
    );
  } else if (regStatus === "WATING_IN_QUEUE") {
    return (
      <div className={patientRegForm}>
        <h2 className={formTitle}>Unfortunately No Beds are Available...</h2>
        <h2 className={formTitle}>Please Wait in the Queue</h2>
        <p> Patient Name : {patientName}</p>
        <p> Serial Number : {serialID}</p>
        <p> Queue Number : {queueNumber}</p>
      </div>
    );
  }
}
