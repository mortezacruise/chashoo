import React from "react";
import { View } from "react-native";
import StepIconContainer from "./StepIconContainer";

export default class CartScreen extends React.Component {
  constructor() {
    super();
    this.state = { Ticket: false, MemberId: null };
  }
  componentDidMount() {
    const ticket = this.props.navigation.getParam("ticket", "NO-ID");
    this.setState({ Ticket: ticket });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StepIconContainer
          navigation={this.props.navigation}
          ticket={this.state.Ticket}
          memberId={this.state.MemberId}
        />
      </View>
    );
  }
}
