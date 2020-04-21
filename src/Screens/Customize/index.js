import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import mantoBlackChar from "../../Assets/mantomodel/mantoBlackCharkhoone.png";
import mantoBlackHash from "../../Assets/mantomodel/mantoBlackHashtag.png";
import mantoBlue4 from "../../Assets/mantomodel/mantoBlueCharkhoone.png";
import mantoBlue8 from "../../Assets/mantomodel/mantoBlueHashtag.png";
import mantoRed4 from "../../Assets/mantomodel/mantoRedCharkhoone.png";
import mantoRed8 from "../../Assets/mantomodel/mantoRedHashtag.png";
import manto from "../../Assets/OK/manto2.png";
import manto4 from "../../Assets/OK/manto4.png";
import styels from "./styles";
const colorARRAY = [
  "red",
  "blue",
  "green",
  "orange",
  "black",
  "yellow",
  "pink",
  "transparent",
  "transparent",
  "transparent",
  "transparent"
];

const ImageArray = [manto, manto4];
const SCREEN_WIDTH = Dimensions.get("window").width;
let imagePosition = { x: 0, y: 0 };
let curColor = "red";
curTarh = 4;
const Customize = () => {
  const [showImage, setImage] = useState(mantoRed4);
  // const [curColor, setCurColor] = useState("blue");

  const resetPosition = () => {
    Animated.spring(pos, {
      toValue: { x: 0, y: 0 }
    }).start();
  };

  //=============================== RedColor =========================
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (gesture.dx >= imagePosition.x && gesture.dy >= imagePosition.y) {
        if (curTarh === 4) {
          setImage(mantoRed4);
        } else {
          setImage(mantoRed8);
        }
        curColor = "red";
        // setCurColor("red");
      }
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {
      resetPosition();
    }
  });

  let position = new Animated.ValueXY();
  const [respod, setRespond] = useState(panResponder);
  const [pos, setPos] = useState(position);
  const [price, setPrice] = useState("150000");

  const getCardStyleRed = i => {
    const rotate = pos.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ["0deg", "0deg", "0deg"]
    });
    return { ...pos.getLayout(), transform: [{ rotate: rotate }] };
  };
  //=============================== RedColor =========================

  //=============================== BlueColor =========================
  let positionBlue = new Animated.ValueXY();

  const panResponderBlue = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      positionBlue.setValue({ x: gesture.dx, y: gesture.dy });
      if (gesture.dx >= imagePosition.x) {
        console.log("SALAM");
        if (curTarh === 4) {
          setImage(mantoBlue4);
        } else {
          setImage(mantoBlue8);
        }
        curColor = "blue";
      }
    },
    onPanResponderRelease: () => {
      Animated.spring(posBlue, {
        toValue: { x: 0, y: 0 }
      }).start();
    }
  });
  const [respondBlue, setRespondBlue] = useState(panResponderBlue);
  const [posBlue, setPosBlue] = useState(positionBlue);

  const getCardStyleBlue = i => {
    const rotate = posBlue.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 3, 0, SCREEN_WIDTH * 10],
      outputRange: ["0deg", "0deg", "0deg"]
    });
    return { ...posBlue.getLayout(), transform: [{ rotate: rotate }] };
  };
  //=============================== BlueColor =========================

  //=============================== blackColor =========================
  let positionBlack = new Animated.ValueXY();

  const panResponderBlack = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      positionBlack.setValue({ x: gesture.dx, y: gesture.dy });

      if (gesture.dx >= imagePosition.x) {
        if (curTarh === 4) {
          setImage(mantoBlackChar);
        } else {
          setImage(mantoBlackHash);
        }
        console.log("MORI");

        // setCurColor("black");
        curColor = "black";
      }
    },
    onPanResponderRelease: () => {
      Animated.spring(posBlack, {
        toValue: { x: 0, y: 0 }
      }).start();
    }
  });
  const [respondBlack, setRespondBlack] = useState(panResponderBlack);
  const [posBlack, setPosBlack] = useState(positionBlack);

  const getCardStyleBlack = i => {
    const rotate = posBlack.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 3, 0, SCREEN_WIDTH * 10],
      outputRange: ["0deg", "0deg", "0deg"]
    });
    return { ...posBlack.getLayout(), transform: [{ rotate: rotate }] };
  };
  //=============================== blackColor =========================

  //==================================== TYPES =========================

  //=============================== blackType ==========================
  let positionBlackType = new Animated.ValueXY();

  const panResponderBlackType = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      positionBlackType.setValue({ x: gesture.dx, y: gesture.dy });
      if (Math.abs(gesture.dx) >= imagePosition.x) {
        console.log({ curColor });
        console.log("Mehrad");

        if (curColor === "red") setImage(mantoRed4);
        if (curColor === "blue") setImage(mantoBlue4);
        if (curColor === "black") setImage(mantoBlackChar);
        curTarh = 4;
        // if (curColor("black")) setImage(mantoBlackHash);
      }
    },
    onPanResponderRelease: () => {
      Animated.spring(posBlackType, {
        toValue: { x: 0, y: 0 }
      }).start();
    }
  });
  const [respondBlackType, setRespondBlackType] = useState(
    panResponderBlackType
  );
  const [posBlackType, setPosBlackType] = useState(positionBlackType);

  const getCardStyleBlackType = i => {
    const rotate = posBlackType.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 3, 0, SCREEN_WIDTH * 10],
      outputRange: ["0deg", "0deg", "0deg"]
    });
    return { ...posBlackType.getLayout(), transform: [{ rotate: rotate }] };
  };
  //=============================== redType =========================
  let positionRedType = new Animated.ValueXY();

  const panResponderRedType = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      positionRedType.setValue({ x: gesture.dx, y: gesture.dy });
      if (
        Math.abs(gesture.dx) >= imagePosition.x &&
        Math.abs(gesture.dy) >= imagePosition.y
      ) {
        if (curColor === "red") setImage(mantoRed4);
        if (curColor === "blue") setImage(mantoBlue4);
        if (curColor === "black") setImage(mantoBlackChar);
        curTarh = 4;
        // setImage(mantoRed8);
      }
    },
    onPanResponderRelease: () => {
      Animated.spring(posRedType, {
        toValue: { x: 0, y: 0 }
      }).start();
    }
  });
  const [respondRedType, setRespondRedType] = useState(panResponderRedType);
  const [posRedType, setPosRedType] = useState(positionRedType);
  const getCardStyleRedType = i => {
    const rotate = posRedType.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 3, 0, SCREEN_WIDTH * 10],
      outputRange: ["0deg", "0deg", "0deg"]
    });
    return { ...posRedType.getLayout(), transform: [{ rotate: rotate }] };
  };
  //=============================== blueType =========================
  let positionBlueType = new Animated.ValueXY();

  const panResponderBlueType = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      positionBlueType.setValue({ x: gesture.dx, y: gesture.dy });
      if (Math.abs(gesture.dx) >= imagePosition.x) {
        if (curColor === "red") setImage(mantoRed8);
        if (curColor === "blue") setImage(mantoBlue8);
        if (curColor === "black") setImage(mantoBlackHash);
        curTarh = 8;
      }
    },
    onPanResponderRelease: () => {
      Animated.spring(posBlueType, {
        toValue: { x: 0, y: 0 }
      }).start();
    }
  });
  const [respondBlueType, setRespondBlueType] = useState(panResponderBlueType);
  const [posBlueType, setPosBlueType] = useState(positionBlueType);
  const getCardStyleBlueType = i => {
    const rotate = posBlueType.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 3, 0, SCREEN_WIDTH * 10],
      outputRange: ["0deg", "0deg", "0deg"]
    });
    return { ...posBlueType.getLayout(), transform: [{ rotate: rotate }] };
  };

  console.log({ meh: curColor });

  return (
    <View style={styels.container}>
      <View style={styels.left}>
        <Text
          style={{
            position: "absolute",
            top: 10,
            left: 20,
            fontFamily: "iran_sans"
          }}
        >
          رنگ
        </Text>
        <Animated.View style={[getCardStyleRed()]} {...respod.panHandlers}>
          <View style={[styels.colorCircle, { backgroundColor: "red" }]} />
        </Animated.View>

        <Animated.View
          style={[getCardStyleBlue()]}
          {...respondBlue.panHandlers}
        >
          <View style={[styels.colorCircle, { backgroundColor: "blue" }]} />
        </Animated.View>

        <Animated.View
          style={[getCardStyleBlack()]}
          {...respondBlack.panHandlers}
        >
          <View style={[styels.colorCircle, { backgroundColor: "black" }]} />
        </Animated.View>
      </View>
      <View style={styels.middle}>
        <Image
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            imagePosition.x = Math.abs(layout.x);
            imagePosition.y = Math.abs(layout.y);
          }}
          source={showImage}
          style={styels.cloth}
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          {ImageArray.map(image => {
            return (
              <TouchableOpacity style={styels.dress}>
                <Image source={image} style={{ width: 60, height: 90 }} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styels.Price}>
          <Text
            style={{ color: "white", fontSize: 14, fontFamily: "iran_sans" }}
          >
            قیمت : {price}تومان{" "}
          </Text>
          <Text
            style={{ color: "white", fontFamily: "iran_sans", fontSize: 10 }}
          >
            افزودن به سبد خرید{" "}
          </Text>
        </View>
      </View>
      <View style={styels.right}>
        <Text
          style={{
            position: "absolute",
            top: 10,
            right: 20,
            fontFamily: "iran_sans"
          }}
        >
          طرح
        </Text>

        <Animated.View
          style={[getCardStyleRedType()]}
          {...respondRedType.panHandlers}
        >
          <Image
            source={require("../../Assets/charkhoone.jpg")}
            style={[styels.colorCircle]}
          />
        </Animated.View>
        <Animated.View
          style={[getCardStyleBlueType()]}
          {...respondBlueType.panHandlers}
        >
          <Image
            source={require("../../Assets/hashtag.jpg")}
            style={[styels.colorCircle]}
          />
        </Animated.View>
        <Animated.View
          style={[getCardStyleBlackType()]}
          {...respondBlackType.panHandlers}
        >
          <Image
            source={require("../../Assets/charkhoone.jpg")}
            style={[styels.colorCircle]}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Customize;

// const Customize = () => {
//   return (
//     <View style={styels.container}>
//       <View style={styels.leftCircle}>
//         {/* <FlatList
//           horizontal
//           showsVerticalScrollIndicator={false}
//           data={colorARRAY}
//           renderItem={item => <Morteza item1={item} />}
//         /> */}
//       </View>

//       <View style={styels.rightCircles}>
//         <FlatList
//           horizontal
//           showsVerticalScrollIndicator={false}
//           data={colorARRAY}
//           renderItem={item => <Morteza item1={item} />}
//         />
//       </View>

//       {/* <View style={styels.middleContent}>
//         <Text>ax lebas</Text>
//       </View> */}
//     </View>
//   );
// };
// export default Customize;
// {
//   /* <ScrollView horizontal style={styels.colorHolder}>
// {colorARRAY.map(color => (
//   <View style={[styels.colorCircles, { backgroundColor: color }]} />
// ))}
// </ScrollView> */
// }
// {
//   /* <View style={styels.colorHolder}>
//         <FlatList
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           inverted
//           data={colorARRAY}
//           renderItem={item => {
//             console.log({ item });
//             return (
//               <View
//                 style={[styels.colorCircles, { backgroundColor: item.item }]}
//               />
//             );
//           }}
//         />
//       </View> */
// }
