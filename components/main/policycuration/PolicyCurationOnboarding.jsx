import React, { useRef } from "react";
import { View, Text, Image, Pressable, Animated, Dimensions, SafeAreaView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles, COLORS } from "./style/PolicyCurationOnboarding.styles";

const { width } = Dimensions.get("window");

const SLIDES = [
    {
        title: "육아 맞춤 정책을 한눈에!",
        subtitle: "복잡한 정보,\n내 상황에 딱 맞는 것만 알려드릴게요.",
        image: require("../../../assets/main/policycuration/policy-1.png"),
    },
    {
        title: "몇 가지 질문만 답해주세요",
        subtitle: "아이 유무, 소득, 거주지 등\n간단한 정보로 맞춤 추천을 받을 수 있어요.",
        image: require("../../../assets/main/policycuration/policy-2.png"),
    },
    {
        title: "걱정 마세요!",
        subtitle: "입력하신 정보는 저장되지 않으며,\n추천용도로만 사용됩니다.",
        image: require("../../../assets/main/policycuration/policy-3.png"),
    },
];

export default function PolicyCurationOnboarding({ navigation, onDone }) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollRef = useRef(null);

    const handleDone = () => {
        if (onDone) return onDone();
        navigation?.replace?.("PolicyCurationQuestionScreen");
    };

    const currentSlideIndex = scrollX.interpolate({
        inputRange: SLIDES.map((_, i) => i * width),
        outputRange: SLIDES.map((_, i) => i),
        extrapolate: "clamp",
    });

    return (
        <SafeAreaView style={styles.container}>
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

            <Animated.ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )
                }
            >
                {SLIDES.map((s, idx) => (
                    <View key={idx} style={{ width }}>
                        <View style={styles.textWrapper}>
                            <Text style={styles.title}>{s.title}</Text>
                            <Text style={styles.subtitle}>{s.subtitle}</Text>
                        </View>

                        <View style={styles.card}>
                            <Image
                                source={s.image}
                                style={styles.image}
                            />
                        </View>

                        {/* Dots */}
                        <View style={styles.dotsWrapper}>
                            {SLIDES.map((_, i) => {
                                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                                const dotW = scrollX.interpolate({ inputRange, outputRange: [6, 22, 6], extrapolate: "clamp" });
                                const opacity = scrollX.interpolate({ inputRange, outputRange: [0.35, 1, 0.35], extrapolate: "clamp" });
                                return (
                                    <Animated.View
                                        key={`dot-${i}`}
                                        style={[styles.dot, { width: dotW, opacity }]}
                                    />
                                );
                            })}
                        </View>

                        {/* 시작하기 버튼 - 3번째 슬라이드일 때만 */}
                        {idx === SLIDES.length - 1 && (
                            <Pressable onPress={handleDone} style={[styles.ctaButton, { marginLeft:250, marginTop: 20 }]}>
                                <Text style={styles.ctaText}>시작하기</Text>
                            </Pressable>
                        )}
                    </View>
                ))}

            </Animated.ScrollView>

            {/* 하단 CTA */}
            <Animated.View
                style={[
                    styles.ctaWrapper,
                    {
                        opacity: scrollX.interpolate({
                            inputRange: [(SLIDES.length - 2) * width, (SLIDES.length - 1) * width],
                            outputRange: [0, 1],
                            extrapolate: "clamp",
                        }),
                        transform: [
                            {
                                translateY: scrollX.interpolate({
                                    inputRange: [(SLIDES.length - 2) * width, (SLIDES.length - 1) * width],
                                    outputRange: [20, 0],
                                    extrapolate: "clamp",
                                }),
                            },
                        ],
                    },
                ]}
            >
            </Animated.View>
        </SafeAreaView>
    );
}
