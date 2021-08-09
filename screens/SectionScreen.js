import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar, Linking } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }
  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }
  webview = null;
  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={{ uri: section.image.url }} />
          <Wrapper>
            <Logo source={{ uri: section.logo.url }} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          style={{ position: "absolute", top: 20, right: 20 }}
          onPress={() => this.props.navigation.goBack()}
        >
          <CloseView>
            <Ionicons name="ios-close" size={30} color="#4475f2" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          <WebView
            source={{ html: htmlContent + htmlStyles }}
            scalesPageToFit={false}
            scrollEnabled={false}
            ref={(ref) => (this.webview = ref)}
            onNavigationStateChange={(event) => {
              if (event.url != "about:blank") {
                this.webview.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default SectionScreen;

const htmlContent = `
<h2>This is a title</h2>
<p>This <strong>
is
</strong> a <a href="http://designcode.io">
link
</a></p>
<img src="https://avatars.githubusercontent.com/u/22226881?s=400&u=648bd908ad332a93d528f2b9bea3e4cbd3586503&v=4" alt="avatar" />
`;
const htmlStyles = `
<style>
  * {
    font-family: -apple-system; 
    margin: 0;
    padding: 0;
    font-size: 17px; 
    font-weight: normal; 
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 30px;
  }

    p {
      margin-top: 20px;
  }
  img {
    width: 100%;
    margin-top: 20px;
      border-radius: 10px;
  }
  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }

</style>
`;
const Content = styled.View`
  height: 100%;
`;

const Container = styled.View`
  flex: 1;
`;
const Cover = styled.View`
  height: 375px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;
const Caption = styled.Text`
  font-size: 17px;
  color: white;
  width: 300px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
const CloseView = styled.View`
  width: 33px;
  height: 33px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;
const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin-left: 5px;
  text-transform: uppercase;
`;
