import { APP_COLOR } from "@/utils/constant";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const styles = StyleSheet.create({
  inputGroup: {
    padding: 5,
    gap: 10
  },
  text: {
    fontSize: 18
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10
  },
  eye: {
    position: "absolute",
    right: 10,
    top: 10
  }
});

interface IProps {
  title?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value: any;
  setValue: (v: any) => void;
}

const ShareInput = (props: IProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const {
    title,
    keyboardType,
    secureTextEntry = false,
    value,
    setValue
  } = props;
  return (
    <View style={styles.inputGroup}>
      {title && <Text style={styles.text}>{title}</Text>}
      <View>
        <TextInput
          style={[
            styles.input,
            { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY }
          ]}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !isShowPassword}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        {secureTextEntry && (
          <FontAwesome5
            style={styles.eye}
            name={isShowPassword ? "eye" : "eye-slash"}
            size={15}
            color="black"
            onPress={() => setIsShowPassword(!isShowPassword)}
          />
        )}
      </View>
    </View>
  );
};

export default ShareInput;
