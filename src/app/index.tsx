import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>App developed by Alberto Perez</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Alberto Pérez Peinado</Text>
        <Text style={styles.extra}>Alicante, Spain</Text>
        <Text style={styles.extra}>The San Juan's Beach is my favourite!</Text>
      </View>
      <View style={styles.squares}>
        <View style={styles.blue}></View>
        <View style={styles.red}></View>
        <View style={styles.yellow}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
    backgroundColor: "#1082ed",
    borderRadius: 50,
    padding: 15,
    marginTop: 25,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  extra: {
    fontSize: 10,
  },
  squares: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 20,
    width: "20%",
  },
  blue: {
    backgroundColor: "#1082ed",
    width: 25,
    height: 25,
  },
  red: {
    backgroundColor: "#ed1010",
    width: 25,
    height: 25,
    flex: 1,
  },
  yellow: {
    backgroundColor: "#edda10",
    width: 25,
    height: 25,
  },
});