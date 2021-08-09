import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class ProjectsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Text> ProjectsScreen </Text>
      </Container>
    );
  }
}

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
`;
const Text = styled.Text``;
