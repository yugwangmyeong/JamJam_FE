import { StyleSheet, Dimensions } from "react-native";

export const COLORS = {
  bg: "#FFF6F7",
  primary: "#FF6B6B",
  text: "#222222",
  card: "#FFFFFF",
  outline: "#E6E6E6",
  shadow: "rgba(0,0,0,0.08)",
};

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.primary,
  },
  textWrapper: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 13,
    color: "#5C5C5C",
    marginTop: 6,
    lineHeight: 20,
  },
  card: {
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.outline,
    alignItems: "center",
    paddingVertical: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  image: {
    width: width - 160,
    height: width - 160,
    resizeMode: "contain",
  },
  ctaWrapper: {
    position: "absolute",
    bottom: 36,
    width: "100%",
    alignItems: "center",
  },
  
  ctaButton: {
    marginTop: 24,
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  ctaText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  dotsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
  },
  dot: {
    height: 6,
    marginHorizontal: 4,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
});
