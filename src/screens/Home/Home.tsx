import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.homeCont}>
    <Image source={require("../../../assets/yelp.png")} style={styles.image} />
    <ImageBackground
      source={require("../../../assets/background.png")}
      resizeMode={"cover"}
      style={styles.background}
    >
      <View style={styles.inputCont}>
        <Text style={styles.Txt}>I want to go</Text>
        {/* this attributes in placeholder from API */}
        <TextInput style={styles.inputTxt} placeholder={"locale"} />
        <Text style={styles.Txt}>In</Text>
        <TextInput style={styles.inputTxt} placeholder={"location"} />
        <Text style={styles.Txt}>And I'm in the mood for</Text>
        <TextInput style={styles.inputTxt} placeholder={"categories"} />
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
        <Text>Categories</Text>
      </TouchableOpacity> */}
    </ImageBackground>
    <Image
      source={require("../../../assets/crowd3.png")}
      style={{
        position: "absolute",
        height: 180,
        width: 170,
        zIndex: 1,
        bottom: "8%",
        right: "15%",
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  homeCont: {},
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    height: 90,
    width: 120,
    zIndex: 1,
    margin: 10,
  },
  inputCont: {
    marginHorizontal: 20,
  },
  inputTxt: {
    height: 50,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D9D9D8",
    fontFamily: "Quicksand-Medium",
    fontSize: 16,
  },
  Txt: {
    margin: 10,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 16,
  },
});

export default Home;
