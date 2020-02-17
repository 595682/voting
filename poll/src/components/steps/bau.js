import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Paper, Checkbox, Typography } from "@material-ui/core";
import PickContext from "../HOC/vote";
import Axios from "axios";
console.log(PickContext);

const useStyles = makeStyles(theme => ({
  root: {
    margin: `20px 0`
  },
  opContainer: {
    display: "grid",
    gridTemplateColumns: `1fr 1fr`,
    gridGap: "10px",
    width: "100%"
  },
  optionWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
}));

export default props => {
  const classes = useStyles();

  const [bauOptions, setBauOptions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("http://localhost:8081/get2");
      setBauOptions(result.data);
    };
    fetchData();
  }, []);

  /*   const bauOptions = [
    { id: "op1", name: "option1" },
    { id: "op2", name: "option1" },
    { id: "op3", name: "option1" },
    { id: "op4", name: "option1" }
  ]; */

  const { state, actions } = useContext(PickContext);

  const Options = ({ options }) => {
    return options.map(option => {
      console.log(option);
      return (
        <div className={classes.optionWrapper} key={option._id}>
          <Checkbox
            name="bauPicks"
            onChange={actions.setPicks}
            color="primary"
            checked={state.bauPicks.includes(option._id)}
            value={option._id}
          />
          <Typography>{option.name}</Typography>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.opContainer}>
          <Options options={bauOptions} />
        </div>
      </Grid>
    </div>
  );
};

{
  /*  {({ state, actions }) => {
            console.log(state);
            console.log(actions);
            return (
              <div className={classes.optionWrapper}>
                <Checkbox onChange={actions.setComPicks} />
                <Typography>{option.name}</Typography>
              </div>
            );
          }} */
}
