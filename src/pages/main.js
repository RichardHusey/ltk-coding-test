import * as React from "react";
import Container from "@mui/material/Container";
import AccountMenu from "../components/AccountMenu";

export const Main = () => {
  return (
    <Container maxWidth="sm">
      <AccountMenu page="Main" />
      <h1>This is a LTK Coding Test !!!</h1>
    </Container>
  );
};
