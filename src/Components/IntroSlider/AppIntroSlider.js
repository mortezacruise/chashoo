import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import DefaultSlide from './DefaultSlider';

const {width, height} = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812);

const AppIntroSlider = (props) => {
  const bottomButton = null;

  let flatList = useRef();

  const activeDotColor = 'rgba(255, 255, 255, .9)';
  const dotColor = 'rgba(0, 0, 0, .2)';
  const skipLabel = 'Skip';
  const doneLabel = 'Done';
  const nextLabel = 'Next';
  const prevLabel = 'Back';

  const [state, setState] = useState({
    width,
    height,
    activeIndex: 0,
  });
  console.log({state});

  const goToSlide = (pageNum) => {
    console.log({pageNum});

    setState({...state, activeIndex: pageNum});
    flatList.scrollToOffset({offset: pageNum * state.width});
  };

  const onNextPress = () => {
    goToSlide(state.activeIndex + 1);
    // props.onSlideChange && props.onSlideChange(state.activeIndex + 1, state.activeIndex);
  };
  const onPrevPress = () => {
    goToSlide(state.activeIndex - 1);
    props.onSlideChange &&
      props.onSlideChange(state.activeIndex - 1, state.activeIndex);
  };

  const renderItem = (item) => {
    const {width, height} = state;
    const bottomSpacer =
      (bottomButton ? (props.showSkipButton ? 44 : 0) + 44 : 0) +
      (isIphoneX ? 34 : 0) +
      64;
    const topSpacer =
      (isIphoneX ? 44 : 0) +
      (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight);
    const props = {...item.item, bottomSpacer, topSpacer, width, height};

    return props.renderItem ? (
      props.renderItem(props)
    ) : (
      <DefaultSlide {...props} />
    );
  };

  const renderButton = (name, onPress) => {
    const show =
      name === 'Skip' || name === 'Prev'
        ? props[`show${name}Button`]
        : !props[`hide${name}Button`];
    const content = props[`render${name}Button`]
      ? props[`render${name}Button`]()
      : renderDefaultButton(name);
    return show && renderOuterButton(content, name, onPress);
  };

  const renderDefaultButton = (name) => {
    let content = (
      <Text style={styles.buttonText}>
        {props[`${name.toLowerCase()}Label`]}
      </Text>
    );
    if (bottomButton) {
      content = (
        <View
          style={[
            styles.bottomButton,
            (name === 'Skip' || name === 'Prev') && {
              backgroundColor: 'transparent',
            },
          ]}>
          {content}
        </View>
      );
    }
    return content;
  };

  const renderOuterButton = (content, name, onPress) => {
    const style =
      name === 'Skip' || name === 'Prev'
        ? styles.leftButtonContainer
        : styles.rightButtonContainer;
    return (
      <View style={bottomButton ? styles.bottomButtonContainer : style}>
        <TouchableOpacity
          onPress={onPress}
          style={bottomButton && styles.flexOne}>
          {content}
        </TouchableOpacity>
      </View>
    );
  };

  const renderNextButton = () => renderButton('Next', onNextPress);

  const renderPrevButton = () => renderButton('Prev', onPrevPress);

  const renderDoneButton = () =>
    renderButton('Done', props.onDone && props.onDone);

  const renderSkipButton = () =>
    renderButton('Skip', props.onSkip && props.onSkip);

  const renderPagination = () => {
    const isFirstSlide = state.activeIndex === 0;
    const isLastSlide = state.activeIndex === props.slides.length - 1;

    const skipBtn =
      (!isFirstSlide && renderPrevButton()) ||
      (!isLastSlide && renderSkipButton());
    const btn = isLastSlide ? renderDoneButton() : renderNextButton();

    return (
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          {/* {!bottomButton && skipBtn} */}
          {props.slides.length > 1 &&
            props.slides.map((_, i) => {
              console.log({i});

              return (
                <View
                  key={i}
                  style={[
                    {
                      backgroundColor:
                        i === state.activeIndex ? activeDotColor : dotColor,
                    },
                    styles.dot,
                  ]}
                />
              );
            })}
          {/* {!bottomButton && btn} */}
        </View>
        {/* {bottomButton && btn} */}
        {/* {bottomButton && skipBtn} */}
      </View>
    );
  };
  const [toch, setToch] = useState(false);
  const [moori, setMot] = useState(null);
  useEffect(() => {
    if (!toch) {
      let intrval = setInterval(() => {
        setState((state) => ({
          ...state,
          activeIndex:
            state.activeIndex === props.slides.length - 1
              ? 0
              : state.activeIndex + 1,
        }));
      }, 7000);
      setMot(intrval);
    } else {
      clearInterval(moori);
    }
    () => {
      return clearInterval(intrval);
    };
  }, [toch]);
  console.log({moori, toch});
  useEffect(() => {
    if (toch) {
      setTimeout(() => {
        setToch(false);
      }, 10000);
    }
  });
  useEffect(() => {
    flatList.scrollToOffset({
      offset: state.activeIndex * state.width,
      animated: true,
      duration: 2000,
    });
  }, [state.activeIndex]);
  const onMomentumScrollEnd = (e) => {
    clearInterval(moori);
    setToch(true);
    const offset = e.nativeEvent.contentOffset.x;
    console.log({offset, state});

    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    const newIndex = Math.round(offset / state.width);

    if (newIndex === state.activeIndex) {
      // No page change, don't do anything
      return;
    }
    const lastIndex = state.activeIndex;
    console.log({newIndex, lastIndex});
    setState({...state, activeIndex: newIndex});
    props.onSlideChange && props.onSlideChange(newIndex, lastIndex);
  };

  const onLayout = () => {
    const {width, height} = Dimensions.get('window');
    if (width !== state.width || height !== state.height) {
      // Set new width to update rendering of pages
      setState({...state, width, height});
      // Set new scroll position
      const func = () => {
        flatList.scrollToOffset({
          offset: state.activeIndex * width,
          animated: true,
        });
      };
      Platform.OS === 'android' ? setTimeout(func, 0) : func();
    }
  };

  return (
    <View style={styles.flexOne}>
      <FlatList
        inverted
        ref={(ref) => (flatList = ref)}
        data={props.slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={styles.flexOne}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        extraData={state.width}
        onLayout={onLayout}
      />
      {renderPagination()}
    </View>
  );
};
export default AppIntroSlider;
const styles = StyleSheet.create({
  flexOne: {
    height: height / 3,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16 + (isIphoneX ? 34 : 0),
    left: 0,
    right: 0,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  leftButtonContainer: {
    position: 'absolute',
    left: 0,
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 0,
  },
  bottomButtonContainer: {
    height: 44,
    marginHorizontal: 16,
  },
  bottomButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    padding: 16,
  },
});
