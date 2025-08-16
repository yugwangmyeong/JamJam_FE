import { StyleSheet } from "react-native";

export const COLORS = {
  bg: "#FDF2F5",
  primary: "#000000",
  text: "#222",
  subtext: "#8C8C8C",
  card: "#FFFFFF",
  border: "#F0E6E8",
  pill: "#F3F4F6",
};

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    height: 56,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: { width: 40, height: 40, justifyContent: "center" },
  logo: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.primary,
    letterSpacing: 1,
  },

  container: { paddingHorizontal: 16, paddingBottom: 24, gap: 14 },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: COLORS.card,
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: "#F0F0F0" },
  nickname: { fontSize: 18, fontWeight: "800", color: COLORS.text },
  email: { fontSize: 12, color: COLORS.subtext, marginTop: 2 },

  editBtn: {
    marginTop: 10,
    alignSelf: "stretch",
    height: 40,
    borderRadius: 999,
    backgroundColor: "#F0B9C2",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    flexDirection: "row",
  },
  editBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  label: {
    fontSize: 12,
    color: COLORS.subtext,
    fontWeight: "700",
    marginBottom: 8,
  },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: COLORS.text,
    marginBottom: 8,
  },
  smallLabel: {
    marginTop: 10,
    marginBottom: 6,
    color: COLORS.subtext,
    fontSize: 12,
    fontWeight: "600",
  },

  ghostPill: {
    backgroundColor: COLORS.pill,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E9E9EE",
  },
  ghostText: { color: COLORS.text, fontSize: 14 },

  dueText: { fontSize: 18, fontWeight: "900", color: COLORS.text },
});
