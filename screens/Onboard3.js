import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Margin, Color, Border } from "../GlobalStyles";

const Onboard3 = ({ navigation }) => {
  return (
    <View style={styles.onboard3}>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      {/* <View style={[styles.bringYourTeamContainer]}>
         <Text>Bring your team work</Text>
         <Text>Together</Text>
      </View> */}
      <View style={[styles.bringYourTeamContainer, styles.linkMeIsFlexBox]}>
        <Text style={styles.bringYourTeamWork}>
          <Text style={styles.bringYourTeam}>Bring your team work</Text>
        </Text>

        <Text style={styles.together}>Together</Text>

      </View>
      <Text style={[styles.linkMeIs, styles.linkMeIsFlexBox]}>
        Link Me is a platform which enables Australian Healthcare clients and
        their healthcare providers to communicate and collaborate, bringing back
        a multidisciplinary approach to your health.
      </Text>
      <TouchableOpacity style={styles.tabGoodRelaxation} onPress={() => navigation.navigate("Onboard4")}>
        <Text style={[styles.nextTypo]}>Next</Text>
      </TouchableOpacity>
      <View style={styles.tabGoodRelaxationParent}>
        <View
          style={[styles.tabGoodRelaxation1, styles.tabGoodRelaxation1Position]}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('wellcome')}>
        <Text style={[styles.skip]}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.onboard3Child} />

    </View>
  );
};

const styles = StyleSheet.create({
  linkMeIsFlexBox: {
    textAlign: "center",
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
  tabGoodRelaxation1Position: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  bringYourTeam: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.inter,
    fontWeight: "500",

  },
  bringYourTeamWork: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  together: {
    margin: Margin.m_md,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.inter,
    
  },
  bringYourTeamContainer: {
    top: "52.96%",
    left: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  linkMeIs: {

    width: "89.33%",
    top: "65.64%",
    left: "5.33%",
    fontWeight: "300",
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inter,
    textAlign: "auto",

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
    borderRadius: Border.br_md,
  },
  skip: {
    top: "21.88%",
    left: "16%",
    fontSize: FontSize.size_sm,
    color: Color.headlineColor,
  },
  tabGoodRelaxationParent: {
    height: "3.94%",
    width: "13.33%",
    top: "6.16%",
    right: "4.27%",
    bottom: "89.9%",
    left: "82.4%",
    position: "absolute",
  },
  frameIcon: {
    top: 119,
    left: 3,
    width: 382,
    height: 231,
    overflow: "hidden",
  },
  onboard3Child: {
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

  onboard3: {
    backgroundColor: Color.white,
    flex: 1,
    height: '100%',
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboard3;
