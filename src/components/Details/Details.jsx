import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Drought } from "react-chartjs-2";
import useStyles from "./styles";

function Details({ title }) {
  const classes = useStyles();
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Drought data="Data"/> */}
      </CardContent>
    </Card>
  );
}

export default Details;
