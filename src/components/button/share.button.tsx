import { APP_COLOR } from "@/utils/constant";
import { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View
} from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: APP_COLOR.ORANGE
  },
});

interface IProps {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  pressStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<TextStyle>;
  icons?: ReactNode;
}

const ShareButton = (props: IProps) => {
  const { title, onPress, textStyle, pressStyle, btnStyle, icons } = props;
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed === true ? 0.5 : 1,
          alignItems: "flex-start"
        },
        pressStyle
      ]}
      onPress={onPress}
    >
      <View style={[styles.btnContainer, btnStyle]}>
        {icons}
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ShareButton;
