import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  ListItemAvatar,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import { type } from "@testing-library/user-event/dist/type";
function List() {
  const classes = useStyles();
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 100,
      date: "Thu Feb 10 2022",
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: 50,
      date: "Wed Feb 09 2022",
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: 100,
      date: "TUE Feb 08 2022",
    },
    {
      id: 4,
      type: "Expense",
      category: "Some",
      amount: 100,
      date: "MON Feb 07 2022",
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" arial-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;
