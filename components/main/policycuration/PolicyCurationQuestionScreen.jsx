import React, { useMemo, useState,useRef } from "react";
import { View, Text, Pressable, ScrollView, Image,Animated } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { styles, COLORS } from "./style/PolicyCurationQuestionScreen.styles";

// ✅ 리스트 기반 질문 정의
// type: "choice"(버튼 2개 이상), "radio"(라디오 목록)
const QUESTIONS = [
  {
    key: "hasChild",
    type: "choice",
    prompt: "현재 아이가 있으신가요?",
    options: [
      { label: "아니요, 준비(임신)중이에요 🥲", value: false },
      { label: "네, 아이가 있어요 😮", value: true },
    ],
  },
  {
    key: "income",
    type: "radio",
    prompt: "월 소득은 어느 정도인가요?",
    options: [
      { label: "200만원이하", value: "lt200" },
      { label: "200~400만원", value: "200to400" },
      { label: "기타", value: "etc" },
    ],
  },
];

export default function PolicyCurationQuestionScreen({ navigation }) {
  // 진행 상태
  const [step, setStep] = useState(0); // 0..QUESTIONS.length
  const [answers, setAnswers] = useState({}); // { [key]: value }

  const [hasChild, setHasChild] = useState(null);
  const [income, setIncome] = useState(null);

  const isLastStep = step >= QUESTIONS.length;


  // ⬇️ 오버레이 상태
  const [analyzing, setAnalyzing] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [matchedCount, setMatchedCount] = useState(5); // 예시값. 실제 API 결과로 치환

  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const handleSelectChild = (v) => { setHasChild(v); setStep(1); };
  const handleSelectIncome = (idx) => { setIncome(idx); setStep(2); };


  const handleSelect = (q, value) => {
    setAnswers((prev) => ({ ...prev, [q.key]: value }));
    setStep((s) => Math.min(s + 1, QUESTIONS.length));
  };

   // "다음" 누르면 분석 오버레이 표시 후 자동 이동
   const handleNext = () => {
    // (선택) 여기서 서버 호출/필터링해서 matchedCount 계산
    setAnalyzing(true);
    setCountdown(4);

    // 페이드 인
    Animated.timing(overlayOpacity, {
      toValue: 1,
      duration: 220,
      useNativeDriver: true,
    }).start();

    // 카운트다운
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timer);
          navigation.navigate("PolicyCurationResult", {
            hasChild, income, matchedCount,
          });
        }
        return c - 1;
      });
    }, 1000);
  };

  // 현재까지 보여줄 질문들 (채팅처럼 순차 노출)
  const visibleQuestions = useMemo(() => QUESTIONS.slice(0, step + 1), [step]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.bgCurveBox} />

      <SafeAreaView style={styles.container}>
        {/* 헤더 */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation?.goBack?.()} hitSlop={8}>
            <Ionicons name="chevron-back" size={26} color={COLORS.primary} />
          </Pressable>
          <Image
            source={require("../../../assets/main/namelogo.png")}
            style={{ width: 100, height: 40, resizeMode: "contain" }}
          />
          <Feather name="bell" size={20} color={COLORS.text} />
        </View>

        {/* 채팅형 설문 */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* 안내 문구 */}
          <View style={styles.chatBubbleLeft}>
            <Text style={styles.chatText}>
              몇 가지 정보만 알려주시면{"\n"}잼잼수달님께 딱 맞는 정책을 알려드릴게요  
            </Text>
            <View style={styles.bubbleTailLeft} />
          </View>

          {visibleQuestions.map((q, idx) => {
            const answered = answers[q.key] !== undefined;
            const isCurrent = idx === step;
            return (
              <View key={q.key}>
                {/* 질문 버블 */}
                <View style={styles.chatBubbleLeft}>
                  <Text style={styles.chatText}>{q.prompt}</Text>
                  <View style={styles.bubbleTailLeft} />
                </View>

                {/* 답변 UI (현재 스텝일 때만 노출) */}
                {isCurrent && !isLastStep && (
                  q.type === "choice" ? (
                    <View style={styles.chatBubbleRightGroup}>
                      {q.options.map((opt) => (
                        <Pressable
                          key={opt.label}
                          style={[styles.cardBtn, answers[q.key] === opt.value && styles.cardSelected]}
                          onPress={() => handleSelect(q, opt.value)}
                        >
                          <Text style={styles.cardText}>{opt.label}</Text>
                        </Pressable>
                      ))}
                    </View>
                  ) : (
                    <View style={styles.radioGroup}>
                      {q.options.map((opt, i) => (
                        <Pressable
                          key={opt.label}
                          style={[styles.radioBtn, answers[q.key] === opt.value && styles.radioSelected]}
                          onPress={() => handleSelect(q, opt.value)}
                        >
                          <View style={styles.radioCircle}>
                            {answers[q.key] === opt.value && <View style={styles.radioInner} />}
                          </View>
                          <Text style={styles.radioText}>{opt.label}</Text>
                        </Pressable>
                      ))}
                    </View>
                  )
                )}

                {/* 과거 답변 요약 (선택) */}
                {answered && !isCurrent && (
                  <View style={styles.chatBubbleRightGroup}>
                    <View style={[styles.cardBtn, styles.cardSelected]}>
                      <Text style={styles.cardText}>
                        {(() => {
                          const opt = q.options.find((o) => o.value === answers[q.key]);
                          return opt ? opt.label : String(answers[q.key]);
                        })()}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}

          {/* 마지막: 다음 버튼 */}
          {isLastStep && (
            <Pressable style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextText}>다음</Text>
            </Pressable>
          )}
        </ScrollView>
      </SafeAreaView>
       
        {analyzing && (
        <Animated.View style={[styles.analysisOverlay, { opacity: overlayOpacity }]}>
          <LinearGradient
            colors={["rgba(255,107,107,0.18)", "rgba(255,107,107,0.06)", "rgba(255,255,255,0)"]}
            style={styles.overlayGradient}
          />

          {/* 중앙 메시지 박스 */}
          <View style={styles.analysisBox}>
            <Image
              source={require("../../../assets/main/policycuration/eye.png")}
              style={styles.analysisEyes}
            />
            <Text style={styles.analysisTitle}>
              지금 신청할 수 있는 지원정책이{" "}
              <Text style={styles.analysisHighlight}>{matchedCount}</Text>건 있어요
            </Text>
            <Text style={styles.analysisSub}> {countdown}초 후 페이지가 이동합니다 </Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
}
