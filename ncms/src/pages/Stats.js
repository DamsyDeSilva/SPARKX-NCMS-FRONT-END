import "./pageStyles.css";
import Header from "../components/Header";
import DistrictStats from "../components/DistrictStat";
import CountryStat from "../components/CountryStat";
import DailyStat from "../components/DailyStat";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  },
}));

const Stats = () => {
  const classes = useStyles();

  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>
      <h1 className={classes.title}> Patient Statistics</h1>

      <div className="div_Home_Content">

        <div className="div_countryStat">
          <CountryStat />
        </div>
        
        <div className="div_DistrictStat" >
          <DistrictStats />
        </div>

        <div className="div_dailyStat">
          <DailyStat />
        </div>

      </div>
    </div>
  );
};
export default Stats;
