import { StyleSheet, Platform } from "react-native";

export const COLORS = {
    bg: "#FFF6F7",
    primary: "#FF6B6B",
    text: "#222222",
    gray: "#999",
    card: "#FFFFFF",
    outline: "#E6E6E6",
};
const HEADER_H = 120;

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.bg, // 핑크 바탕
        position: "relative",
    },

    container: {
        flex: 1,
        position: "relative",
        zIndex: 1, // 본문 레이어
    },

    bgCurveBox: {
        position: "absolute",
        top: HEADER_H,        // ⬅️ 헤더만큼 내리면 위쪽 분홍색 영역이 남음
        left: 0,
        right: 0,
        height: 1300,
        backgroundColor: "#fff",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        zIndex: 0,            // 분홍색(wrapper) 위, 컨텐츠 아래
    },

    // ✅ 헤더를 배경 위로 올리기
    header: {
        height: 56,
        paddingHorizontal: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 3, // ⬆️ 헤더가 맨 위
    },

    // 본문 컨텐츠도 배경 위로
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 12,                 // 곡선 아래 살짝 여백
    },

    chatBubbleLeft: {
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 16,
        marginVertical: 8,
        maxWidth: "80%",
        position: "relative",

        // 그림자 → 여기만 적용
        shadowColor: "rgba(0,0,0,0.12)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 4,
    },

    bubbleTailLeft: {
        position: "absolute",
        left: -9,  // 크기랑 위치 살짝 조정
        bottom: 14,
        width: 0,
        height: 0,
        borderTopWidth: 12,
        borderTopColor: "transparent",
        borderRightWidth: 16,
        borderRightColor: "#fff",   // 배경색 통일
        borderBottomWidth: 12,
        borderBottomColor: "transparent",
    },

    chatBubbleRightGroup: {
        alignSelf: "flex-end",
        gap: 12,
        marginTop: 10,
        maxWidth: "85%",
    },
    chatText: { fontSize: 14, color: COLORS.text, lineHeight: 20 },

    cardBtn: {
        backgroundColor: COLORS.card,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.outline,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardSelected: { borderColor: COLORS.primary, backgroundColor: "#FFEFF1" },
    cardText: { fontSize: 14, color: COLORS.text },

    radioGroup: { gap: 12, marginTop: 8 },
    radioBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.card,
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.outline,
    },
    radioSelected: { borderColor: COLORS.primary, backgroundColor: "#FFEFF1" },
    radioCircle: {
        width: 18, height: 18, borderRadius: 9,
        borderWidth: 2, borderColor: COLORS.primary,
        marginRight: 10, alignItems: "center", justifyContent: "center",
    },
    radioInner: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.primary },
    radioText: { fontSize: 14, color: COLORS.text },

    nextBtn: {
        marginTop: 20,
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    nextText: { color: "#fff", fontWeight: "700", fontSize: 15 },
    /* 분석 오버레이 */
  analysisOverlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(255,255,255,0.9)", // 전체를 희게 덮기
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 99,
  },
  overlayGradient: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: 420,
  },
  analysisBox: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 80, // 하단 여백
  },
  analysisEyes: {
    width: 96,
    height: 96,
    marginBottom: 14,
    resizeMode: "contain",
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.text,
  },
  analysisHighlight: {
    color: COLORS.primary,
    fontWeight: "900",
  },
  analysisSub: {
    marginTop: 8,
    fontSize: 12,
    color: "#B7B7B7",
  },
  
});
