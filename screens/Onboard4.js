import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Border, FontFamily, FontSize, Margin, Color } from "../GlobalStyles";

const Onboard4 = ({navigation}) => {
  return (
    <View style={styles.onboard4}>
       <Image
        style={[styles.frameIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />    
      <View
        style={[
          styles.securelyStoreYourContainer,
        
        ]}
      >
        <View style={styles.securelyStoreYourHealthcare}>
          <Text style={styles.securelyStoreYour}>
            Securely store your healthcare
          </Text>
        </View>
        <Text style={styles.information}>
          <Text style={styles.information1}>Information</Text>
        </Text>
      </View>
      <Text style={[styles.linkMeProvides, styles.linkMeProvidesFlexBox]}>
        Link Me provides Australian Healthcare clients a central platform to
        store and use your healthcare information.
      </Text>
      <TouchableOpacity style={styles.tabGoodRelaxation} onPress={() => navigation.navigate("wellcome")}>
        <Text style={[styles.nextTypo]}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.tabGoodRelaxationParent}>
        <View
          style={[
            styles.tabGoodRelaxation1,
            styles.tabGoodRelaxation1Position,
            styles.tabLayout,
          ]}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Onboard3")}>
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.onboard4Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  linkMeProvidesFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  tabLayout: {
    borderRadius: Border.br_md,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.inter,
    alignContent: 'center',
    color : Color.white,
    fontWeight: "500",
    fontSize : 16
    
  },
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  tabGoodRelaxation1Position: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  securelyStoreYour: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inter,
    fontWeight: "500",
  },
  securelyStoreYourHealthcare: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  information1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.inter,
  },
  information: {
    margin: Margin.m_md,
  },
  securelyStoreYourContainer: {
    top: "52.96%",
    color: Color.black,
    display : 'flex',
    justifyContent  : 'center',
    alignItems : 'center'
  },
  linkMeProvides: {
    width: "82.93%",
    top: "65.64%",
    left: "8.53%",
    fontWeight: "300",
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inter,
  },
  tabGoodRelaxation: {
    height: "4.93%",
    width: "47.47%",
    top: "89.29%",
    right: "26.13%",
    bottom: "5.79%",
    left: "26.4%",
    backgroundColor: Color.shadeOfPrimary,
    borderRadius: Border.br_md,
    position: "absolute",
    flex : 1,
    justifyContent : 'center'
  },

  tabGoodRelaxation1: {
    height: "100%",
    bottom: "0%",
  },
  back: {
    top: "21.88%",
    left: "16%",
    fontSize: FontSize.size_sm,
    color: Color.headlineColor,
  },
  tabGoodRelaxationParent: {
    height: "3.94%",
    width: "13.33%",
    top: "6.16%",
    right: "82.4%",
    bottom: "89.9%",
    left: "4.27%",
    position: "absolute",
  },
  frameIcon: {
    width: "90.13%",
    top: "13.05%",
    right: "5.07%",
    bottom: "56.9%",
    left: "4.8%",
  },
  onboard4Child: {
    height: "0.62%",
    width: "36.8%",
    top: "98.71%",
    right: "31.33%",
    bottom: "0.68%",
    left: "31.87%",
    borderStyle: "solid",
    borderColor: "#1e1e1e",
    borderTopWidth: 5,
    position: "absolute",
  },
  onboard4: {
    backgroundColor: Color.white,
    flex: 1,
    height : '100%',
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboard4;
