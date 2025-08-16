import React, { useState } from "react";
import {
    Image,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    SafeAreaView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./style/ProfileEditScreen.styles";

export default function ProfileEditScreen({ navigation }) {
    const [nickname, setNickname] = useState("");
    const [status, setStatus] = useState("출산예정");
    const [dueDate, setDueDate] = useState("2026-05-13");
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [children, setChildren] = useState([
        { name: "", birth: "", gender: "" },
    ]);

    const onSave = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5F7" }}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={26} color="#000000" />
                </Pressable>

                <Image
                    source={require("../../../assets/main/namelogo.png")}
                    style={{ width: 100, height: 40, resizeMode: "contain" }}
                />
                <Pressable onPress={onSave}>
                    <Text style={styles.saveText}>저장</Text>
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>프로필 편집하기</Text>

                {/* 닉네임 */}
                <Text style={styles.label}>닉네임</Text>
                <TextInput
                    value={nickname}
                    onChangeText={setNickname}
                    placeholder="닉네임을 입력하세요"
                    style={styles.input}
                />

                {/* 육아 상태 */}
                <Text style={styles.label}>육아 상태</Text>
                <View style={styles.statusRow}>
                    {["출산예정", "육아 중", "해당사항 없음", "둘다"].map((opt) => (
                        <Pressable
                            key={opt}
                            style={[
                                styles.statusBtn,
                                status === opt && styles.statusBtnActive,
                            ]}
                            onPress={() => setStatus(opt)}
                        >
                            <Text
                                style={[
                                    styles.statusText,
                                    status === opt && styles.statusTextActive,
                                ]}
                            >
                                {opt}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                {/* 출산예정일 */}
                {(status === "출산예정" || status === "둘다") && (
                    <>
                        <Text style={styles.label}>출산 예정일</Text>
                        <Pressable
                            onPress={() => setShowDatePicker(true)}
                            style={styles.input}
                        >
                            <Text>{dueDate}</Text>
                            <Feather name="calendar" size={16} color="#888" />
                        </Pressable>
                        {showDatePicker && (
                            <DateTimePicker
                                value={new Date(dueDate)}
                                mode="date"
                                display="spinner"
                                onChange={(e, date) => {
                                    setShowDatePicker(false);
                                    if (date) setDueDate(date.toISOString().slice(0, 10));
                                }}
                            />
                        )}
                    </>
                )}

                {/* 자녀 정보 */}
                {(status === "육아 중" || status === "둘다") && (
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.label}>자녀 프로필</Text>
                        {children.map((c, i) => (
                            <View key={i} style={styles.childBlock}>
                                <TextInput
                                    placeholder="이름"
                                    value={c.name}
                                    onChangeText={(text) => {
                                        const newList = [...children];
                                        newList[i].name = text;
                                        setChildren(newList);
                                    }}
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="생년월일"
                                    value={c.birth}
                                    onChangeText={(text) => {
                                        const newList = [...children];
                                        newList[i].birth = text;
                                        setChildren(newList);
                                    }}
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="성별"
                                    value={c.gender}
                                    onChangeText={(text) => {
                                        const newList = [...children];
                                        newList[i].gender = text;
                                        setChildren(newList);
                                    }}
                                    style={styles.input}
                                />
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
