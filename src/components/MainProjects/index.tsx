// eslint-disable-next-line no-use-before-define
import React from "react";
import { Container } from "./style";

export default function MainProjects() {
  return (
    <Container className="md:container md:mx-auto">
      <h2 className="title-projects">Projects</h2>
      <div className="container-projects">
        <div>projeto 1</div>
        <div>projeto 2</div>
        <div>projeto 3</div>
        <div>projeto 4</div>
      </div>
    </Container>
  );
}
