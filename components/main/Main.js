import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import BottomTab from "../main/BottomTab";

const colors = {
  bg: "#FFF6F7",
  primary: "#FF6B6B",
  primaryDark: "#FF685E",
  text: "#222222",
  card: "#FFFFFF",
  outline: "#E6E6E6",
  subtle: "#F6EDEF",
  shadow: "rgba(0,0,0,0.08)",
};

export default function Main({ navigation }) {
  const userName = "수달프린스";

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
      {/* 헤더 */}
      <View style={styles.header}>
        <View style={{ width: 28 }} />
        <Image
          source={require("../../assets/main/namelogo.png")} // 경로 맞게 수정
          style={{ width: 100, height: 40, resizeMode: "contain" }}
        />
        <Feather name="bell" size={20} color={colors.text} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* 인사 */}
        <Text style={styles.hello}>
          <Text style={{ fontWeight: "700" }}>{userName}</Text> 님
        </Text>
        {/* 인사 + 말풍선 카드 */}
        <View style={styles.chatCard}>
          <View style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <View style={[styles.bubble, { width: "100%" }]} />
            <View style={[styles.bubble, { width: "55%", backgroundColor: colors.primaryDark, marginTop: 10, alignSelf: "flex-end", }]} />
          </View>
        </View>

        {/* CTA 버튼들 */}
        <View style={{ gap: 12, marginTop: 8 }}>
          <Pressable
            style={styles.primaryBtn}
            onPress={() => navigation?.navigate?.("Chat")}>
            <Text style={styles.primaryBtnText}>잼잼이와 대화하기</Text>
            <Feather name="chevron-right" size={20} color="#fff" />
          </Pressable>

          <Pressable
            style={styles.outlineBtn}
            onPress={() => navigation?.navigate?.("Policy")}>
            <Text style={styles.outlineBtnText}>지원정책제도 신청하기</Text>
            <Feather name="chevron-right" size={20} color={colors.text} />
          </Pressable>
        </View>

        {/* 두 개 타일 */}
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Pressable
            style={[styles.tile, { flex: 1 }]}
            onPress={() => navigation?.navigate?.("Test")}
          >
            <Image
              source={require("../../assets/main/test.png")}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
            <Text style={styles.tileTitle}>잼잼이 검사</Text>
            <Text style={styles.tileSub}>나는 어떤 부모일까?</Text>
            <Feather
              name="chevron-right"
              size={26}
              color={colors.text}
              style={{ position: "absolute", right: 12, bottom: 12 }}
            />
          </Pressable>

          <Pressable
            style={[styles.tile, { flex: 1 }]}
            onPress={() => navigation?.navigate?.("Community")}
          >
            <Image
              source={require("../../assets/main/sudal.png")}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
            <Text style={[styles.tileTitle, { color: colors.text }]}>
              잼잼 놀이터
            </Text>
            <Text style={styles.tileSub}>육아잼잼 커뮤니티</Text>
            <Feather
              name="chevron-right"
              size={26}
              color={colors.text}
              style={{ position: "absolute", right: 12, bottom: 12 }}
            />
          </Pressable>
        </View>


        {/* 정책 브리핑 카드 */}
        <View style={styles.newsCard}>
          <View style={styles.newsThumb} />
          <View style={{ flex: 1 }}>
            <View style={styles.newsTagRow}>
              <Text style={styles.newsTag}>잼잼 브리핑</Text>
              <Feather name="volume-2" size={14} color={colors.primaryDark} />
            </View>
            <Text style={styles.newsTitle} numberOfLines={2}>
              올해부터 달라지는 육아지원제도
            </Text>
            <Text style={styles.newsBody} numberOfLines={2}>
              일하는 엄마, 아빠를 돕기 위한 2025년 변경사항을 요약해 드려요…
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 탭 (목업) */}
      <BottomTab active="home" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    height: 56,
    paddingHorizontal: 18,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.primaryDark,
    letterSpacing: 1,
  },
  scroll: {
    paddingHorizontal: 18,
    paddingBottom: 120,
    gap: 16,
  },

  hello: { fontSize: 20, color: colors.text, marginTop: 4 },

  chatCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    gap: 12,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.subtle,
  },
  bubble: {
    height: 16,
    borderRadius: 8,
    backgroundColor: "#EFEFEF",
  },

  primaryBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: colors.primaryDark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  primaryBtnText: { color: "#fff", fontSize: 15, fontWeight: "700" },

  outlineBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  outlineBtnText: { color: colors.text, fontSize: 15, fontWeight: "700" },

  tileRow: { flexDirection: "row", gap: 12 },
  tile: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    gap: 8,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
    alignItems: "center",        // ✅ 가로 중앙
    justifyContent: "center",    // ✅ 세로 중앙
  },
  tileTitle: { fontSize: 15, fontWeight: "700", color: colors.text },
  tileSub: { fontSize: 12, color: "#151515" },

  newsCard: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  newsThumb: {
    width: 96,
    height: 72,
    borderRadius: 12,
    backgroundColor: colors.subtle,
  },
  newsTagRow: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 4 },
  newsTag: { fontSize: 11, color: colors.primaryDark, fontWeight: "700" },
  newsTitle: { fontSize: 14, fontWeight: "700", color: colors.text },
  newsBody: { fontSize: 12, color: "#666", marginTop: 4 },

  tabbar: {
    position: "absolute",
    left: 0, right: 0, bottom: 0,
    height: 66,
    backgroundColor: "#fff",
    borderTopWidth: 1, borderTopColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },
  tabItem: { alignItems: "center", gap: 4 },
  tabText: { fontSize: 10, color: "#666" },
  tabActive: {},
  tabActiveText: { color: colors.primaryDark, fontWeight: "700" },
});
