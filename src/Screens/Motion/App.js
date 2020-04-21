import React from "react";
import {
  BackHandler,
  InteractionManager,
  StyleSheet,
  View
} from "react-native";
import { SharedElementRenderer } from "react-native-motion";
import FirstList from "./FirstList";
import Detail from "./Detail";
import ToolbarBackground from "./ToolbarBackground";
import { withNavigationFocus } from "react-navigation";

class MotionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick;
    this.state = { selectedItem: null, phase: "phase-0" };
  }

  onItemPressed = item => {
    this.setState({ phase: "phase-1", selectedItem: item });
  };

  // ---------------------- BackPress Handler --------------
  onBackPressed = () => {};
  // getSnapshotBeforeUpdate() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick);
  //   BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick);
  // }

  handleBackButtonClick = () => {
    if (this.state.phase === "phase-2") {
      this.setState({
        phase: "phase-3"
      });
    }
    return true;
  };
  // ---------------------- BackPress Handler --------------

  onSharedElementMovedToDestination = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        phase: "phase-2"
      });
    });
  };

  onSharedElementMovedToSource = () => {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        selectedItem: null,
        phase: "phase-0"
      });
    });
  };
  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  componentDidUpdate(prevProps) {
    console.log(this.state.phase);
    console.log(this.state.selectedItem);

    const focusListenerhis = this.props.navigation.addListener(
      "didFocus",
      () => {
        console.log("didfocus");
        if (this.state.phase === "phase-2") {
          console.log("phase-2");

          this.setState({
            phase: "phase-3"
          });
          if (this.state.phase === "phase-1") {
            console.log("phase-1");

            this.setState({
              phase: "phase-0"
            });
          }
        }
        return true;
        // The screen is focused
        // Call any action
      }
    );
    console.log({ focusListenerhis });

    console.log({ prevProps });
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log("salam");

      // Use the `this.props.isFocused` boolean
      // Call any action
    } else {
      console.log("lalam");
    }
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  render() {
    const { selectedItem, position, detailItem, phase } = this.state;
    return (
      <SharedElementRenderer>
        <View style={styles.container}>
          <ToolbarBackground
            isHidden={phase !== "phase-1" && phase !== "phase-2"}
          />
          <FirstList
            selectedItem={selectedItem}
            onItemPress={this.onItemPressed}
            phase={phase}
          />
          <Detail
            phase={phase}
            selectedItem={selectedItem}
            onBackPress={this.onBackPressed}
            onSharedElementMovedToDestination={
              this.onSharedElementMovedToDestination
            }
            onSharedElementMovedToSource={this.onSharedElementMovedToSource}
            Navigation={this.props.navigation}
          />
        </View>
      </SharedElementRenderer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE"
  }
});
export default withNavigationFocus(MotionScreen);
