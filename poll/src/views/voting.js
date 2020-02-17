import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import BAUStep from "../components/steps/bau";
import ContactStep from "../components/steps/contact";
import PPLStep from "../components/steps/ppl";
import InfraStep from "../components/steps/infra";
import PickContext from "../components/HOC/vote";
import { TextField } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#053099"
  },
  wrapper: {
    width: "60%",
    height: "50vh",
    backgroundColor: "white",
    padding: theme.spacing(4)
  },
  paper: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {},
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px"
  },
  login: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  }
}));

const VoteParent = props => {
  const classes = useStyles();

  function getSteps() {
    return ["Communication", "BAU", "PPL Management", "Infrastructure"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ContactStep />;
      case 1:
        return <BAUStep />;
      case 2:
        return <PPLStep />;
      case 3:
        return <InfraStep />;
      default:
        return "Unknown step";
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const goToResults = () => {
    props.history.push("/results");
  };

  console.log(props);

  return (
    <PickContext.Consumer>
      {({ state, actions }) => {
        if (state.name) {
          return (
            <div className={classes.root}>
              <div className={classes.wrapper}>
                <div className={classes.header}>
                  <Typography variant="h6" className={classes.title}>
                    SSD improvement poll
                  </Typography>
                </div>

                <Stepper activeStep={activeStep}>
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        Thanks for voting,
                      </Typography>
                      <Button onClick={goToResults} className={classes.button}>
                        Results
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Typography className={classes.instructions}>
                        {getStepContent(activeStep)}
                      </Typography>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        {activeStep === steps.length - 1 ? (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              actions.submit();
                              handleNext();
                            }}
                            className={classes.button}
                          >
                            Send Vote
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Next
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/*         <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              SSD poll to decide which raised issue should have more awareness
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>BAU</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>PPL Management</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Communication</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Infrastructure</Paper>
          </Grid>
        </Grid> */}
              </div>
            </div>
          );
        } else {
          return (
            <div className={classes.root}>
              <div className={classes.wrapper}>
                <div className={classes.header}>
                  <Typography variant="h6" className={classes.title}>
                    SSD improvement poll
                  </Typography>
                </div>
                <div className={classes.login}>
                  <TextField
                    id="time"
                    type="text"
                    label="Cognizant ID"
                    value={state.preName}
                    onChange={actions.setName}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={actions.login}
                  >
                    Join{" "}
                  </Button>
                </div>
              </div>
            </div>
          );
        }
      }}
    </PickContext.Consumer>
  );
};

export default withRouter(VoteParent);
