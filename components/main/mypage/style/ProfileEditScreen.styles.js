import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { paddingBottom: 40 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: "#FFF5F7",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginLeft:"20"
  },
  saveText: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  label: {
    marginTop: 20,
    marginBottom: 6,
    marginHorizontal: 20,
    fontSize: 14,
    color: "#222",
    fontWeight: "600",
  },
  input: {
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    fontSize: 14,
    color: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 8,
  },
  statusBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  statusBtnActive: {
    backgroundColor: "#FF685E",
    borderColor: "#FF685E",
  },
  statusText: {
    fontSize: 13,
    color: "#888",
  },
  statusTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  childBlock: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    gap: 12,
  },
});
