import { APP_COLOR } from "@/utils/constant";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SectionList,
  View,
  ViewToken
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const { height: sHeight, width: sWidth } = Dimensions.get("window");

const HEADER_HEIGHT = 120;
const IMAGE_HEIGHT = 220;
const INFO_HEIGHT = 250;
const SLIDE_MENU_HEIGHT = 50;

const RMain = () => {
  const scrollY = useSharedValue(0);

  const sectionListRef = useRef<SectionList>(null);
  const flatListRef = useRef<FlatList>(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | string>();
  const blockUpdateRef = useRef<boolean>(false);

  // Scroll handler to update the scrollY value
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    // console.log(scrollY.value)
  });

  // Fade-in effect for the rstaurant header
  const animatedStickyHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      //   thanh cuộn ở vị trí 0, sau khi cuộn đến 100 thì opacity thành 1 sẽ ra hiệu ứng xuất hiện khi cuộn
      [0, 100],
      [0, 1],
      Extrapolation.CLAMP
    );
    const pointerEvents = opacity === 0 ? "none" : "auto"; // không thấy thi không click được

    return {
      opacity,
      pointerEvents //on / off click input
    };
  });

  // Sticky póitioning for the menu below the header
  const animatedInfoStyle = useAnimatedStyle(() => {
    const range = IMAGE_HEIGHT + INFO_HEIGHT - HEADER_HEIGHT;
    const translateY = interpolate(
      scrollY.value,
      [0, range], //define scroll range
      [0, -range],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }],
      position: "absolute",
      top: IMAGE_HEIGHT + INFO_HEIGHT,
      zIndex: 2,
      widthL: "100%"
    };
  });

  // Animated styles for background
  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 100],
        ["rgba(0,0,0,0.3", "transparent"]
      )
    };
  });

  // Animation arrow color
  const animatedArrowColorStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [0, 100],
        ["white", APP_COLOR.ORANGE] // Arrow color range
      )
    };
  });

  const DATA = [
    {
      title: "Main dishes",
      data: ["pizza", "burger", "rasotto"],
      ixdex: 0,
      key: "menu-0"
    },
    {
      title: "Main dishes 2",
      data: ["pizza", "burger", "rasotto"],
      ixdex: 1,
      key: "menu-1"
    },
    {
      title: "Main dishes 3",
      data: ["pizza", "burger", "rasotto"],
      ixdex: 2,
      key: "menu-2"
    },
    {
      title: "Main dishes 4",
      data: ["pizza", "burger", "rasotto"],
      ixdex: 3,
      key: "menu-3"
    },
    {
      title: "Main dishes 5",
      data: ["pizza", "burger", "rasotto"],
      ixdex: 4,
      key: "menu-4"
    }
  ];

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && !blockUpdateRef.current) {
        const visibleSectionIndex = viewableItems[0].section?.index;
        if (visibleSectionIndex !== undefined) {
          setActiveMenuIndex(visibleSectionIndex);
          flatListRef.current?.scrollToIndex({
            index: visibleSectionIndex,
            animated: true
          });
        }
      }
    }
  ).current;

  return (
    <View>
      {/* Sticky Header */}
      <StickyHeader
        headerHeight={HEADER_HEIGHT}
        animatedBackgroundStyle={animatedBackgroundStyle}
        animatedArrowColorStyle={animatedArrowColorStyle}
        animatedStickyHeaderStyle={animatedStickyHeaderStyle}
      />

      {/* Image */}
      <View style={styles.header}>
        <Image
          source={require("src/assets/images/react-logo.png")}
          style={styles.headerImage}
        />
      </View>

      {/* Info */}
      <Animated.View style={[animatedInfoStyle]}>
        <Info infoHeight={INFO_HEIGHT} />
      </Animated.View>

      {/* Sticky Menu */}
      <Animated.FlatList style={[animatedInfoStyle]}>
        <Info infoHeight={INFO_HEIGHT} />
      </Animated.FlatList>
    </View>
  );
};

export default RMain;
