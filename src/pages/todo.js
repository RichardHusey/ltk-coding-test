import * as React from "react";
import Container from "@mui/material/Container";

import AccountMenu from "../components/AccountMenu";
import BasicForm from "../components/BasicForm";
import  TodoTable  from "../components/todoTable";

export const Todo = () => {
  return (
    <Container maxWidth="sm">
      <AccountMenu page="Todo" />
      <BasicForm />
      <TodoTable></TodoTable>
    </Container>
  );
};
