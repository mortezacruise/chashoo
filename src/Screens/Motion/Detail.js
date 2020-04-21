import React, { PureComponent } from "react";
import { Easing, FlatList, StyleSheet, Text, View } from "react-native";
import { SharedElement, TranslateYAndOpacity } from "react-native-motion";
import ListItem from "./ListItem";
import Toolbar from "./Toolbar";
import FlatListSpecialDetailContainer from "../../components/FlatListSpecialDetailContainer";

export default class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { opacityOfDestinationItem: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.phase === "phase-2" && nextProps.phase === "phase-3") {
      this.sharedElementRef.moveToSource();
    }
  }

  onMoveToDestinationDidFinish = () => {
    this.setState({ opacityOfDestinationItem: 1 });
    this.props.onSharedElementMovedToDestination();
  };

  onMoveToSourceWillStart = () => {
    this.setState({ opacityOfDestinationItem: 0 });
  };
  onPressed1 = event => {};
  render() {
    const {
      selectedItem,
      phase,
      onBackPress,
      onSharedElementMovedToSource
    } = this.props;
    const { opacityOfDestinationItem } = this.state;

    if (!selectedItem) return null;

    return (
      <View style={styles.container}>
        <Toolbar isHidden={phase === "phase-3"} onBackPress={onBackPress} />
        <SharedElement
          ref={node => (this.sharedElementRef = node)}
          sourceId={selectedItem.name}
          easing={Easing.in(Easing.back())}
          onMoveToDestinationDidFinish={this.onMoveToDestinationDidFinish}
          onMoveToSourceWillStart={this.onMoveToSourceWillStart}
          onMoveToSourceDidFinish={onSharedElementMovedToSource}
        >
          <View
            style={{
              opacity: opacityOfDestinationItem,
              backgroundColor: "transparent"
            }}
          >
            <ListItem
              item={selectedItem}
              onPressed={this.onPressed1}
              animateOnDidMount={false}
              isHidden={false}
            />
          </View>
        </SharedElement>
        <View style={{ flex: 1 }}>
          <FlatListSpecialDetailContainer
            selectedItem={this.props.selectedItem}
            phase={this.props.phase}
            navigattion={this.props.Navigation}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1
  },
  titleContainer: {},
  itemContainer: {
    marginHorizontal: 16,
    marginVertical: 8
  },
  rowContainer: {
    alignItems: "center"
  },
  titleText: {},
  amountText: {
    fontSize: 18,
    fontWeight: "900"
  },
  vatText: {
    fontSize: 10,
    color: "gray"
  }
});

// renderItem = ({ item, index }) => {
//   const { phase, selectedItem } = this.props;
//   let delay = index;
//   // we need it to go from the end
//   if (phase === "phase-3") {
//     delay = selectedItem.items.length - index;
//   }

//   return (
//     <TranslateYAndOpacity isHidden={phase !== "phase-2"} delay={56 * delay}>
//       <View style={styles.itemContainer}>
//         <View style={styles.rowContainer}>
//           <View style={styles.titleContainer}>
//             <Text style={styles.titleText}>{item.name}</Text>
//           </View>
//           <Text style={styles.amountText}>{item.amount}</Text>
//         </View>
//         <Text style={styles.vatText}>{`${item.amount} X1 (Including VAT 10%)`}</Text>
//       </View>
//     </TranslateYAndOpacity>
//   );
// };
