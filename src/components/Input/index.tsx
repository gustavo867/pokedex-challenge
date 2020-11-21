import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, TextInputProps, TextInput } from "react-native";

import styles from "./styles";

interface InputProps extends TextInputProps {
  icon: "search1";
}

const Input: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <View style={styles.container}>
      <AntDesign name={icon} size={24} color="#666360" />
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor="#666360"
      />
    </View>
  );
};

export default Input;
