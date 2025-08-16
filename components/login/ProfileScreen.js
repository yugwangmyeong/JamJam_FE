import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const COLORS = {
  bg: "#FFEFF1",
  primary: "#FF685E",
  text: "#333",
  subtext: "#888",
  card: "#FFFFFF",
  pill: "#F3F4F6",
  border: "#E9E9EE",
};

const STATUS_OPTIONS = ["출산예정", "육아 중", "해당사항 없음", "둘다"];

export default function ProfileScreen() {
  const [nickname, setNickname] = useState("");
  const [status, setStatus] = useState("출산예정");
  const [statusOpen, setStatusOpen] = useState(false);

  const [dueDate, setDueDate] = useState(new Date());
  const [showDuePicker, setShowDuePicker] = useState(false);

  const [children, setChildren] = useState([
    { id: 1, name: "", birth: "", gender: "" },
  ]);

  const onAddChild = () => {
    setChildren((prev) => [
      ...prev,
      { id: Date.now(), name: "", birth: "", gender: "" },
    ]);
  };

  const onChangeChild = (id, key, value) => {
    setChildren((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [key]: value } : c))
    );
  };

  const showChildSection =
    status === "육아 중" || status === "둘다"; // 상태에 따라 자녀 정보 표시
  const showDueDate = status === "출산예정" || status === "둘다";

  const saveProfile = () => {
    const payload = {
      nickname,
      status,
      dueDate: showDueDate ? dueDate : null,
      children: showChildSection ? children : [],
    };
    console.log("SAVE", payload);
    // TODO: 서버 전송
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.headerLeft}>
          <Ionicons name="chevron-back" size={26} color={COLORS.primary} />
        </Pressable>
        <Text style={styles.logo}>육아잼잼</Text>
        <Pressable onPress={saveProfile} style={styles.saveBtn}>
          <Text style={styles.saveText}>저장</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>프로필 입력하기</Text>

        {/* 프로필 아바타 + 닉네임 */}
        <View style={styles.profileRow}>
          <View style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>닉네임</Text>
            <TextInput
              placeholder="닉네임"
              value={nickname}
              onChangeText={setNickname}
              style={styles.inputPill}
              placeholderTextColor={COLORS.subtext}
            />
          </View>
        </View>

        {/* 육아 상태 */}
        <Text style={styles.sectionLabel}>
          육아 상태를 설정해주세요
          <Text style={styles.hint}>
            {" "}
            (육아 상태에 따라 아래 필요정보가 바뀝니다)
          </Text>
        </Text>

        <Pressable
          onPress={() => setStatusOpen(true)}
          style={[styles.selectPill, styles.rowBetween]}
        >
          <Text style={styles.selectText}>
            {status} | 육아 중 | 해당사항 없음 | 둘다
          </Text>
          <AntDesign name="down" size={16} color={COLORS.text} />
        </Pressable>

        {/* 상태 선택 모달 */}
        <Modal transparent visible={statusOpen} animationType="fade">
          <Pressable style={styles.modalDim} onPress={() => setStatusOpen(false)}>
            <View style={styles.modalSheet}>
              {STATUS_OPTIONS.map((opt) => (
                <Pressable
                  key={opt}
                  onPress={() => {
                    setStatus(opt);
                    setStatusOpen(false);
                  }}
                  style={[
                    styles.modalItem,
                    status === opt && { backgroundColor: COLORS.pill },
                  ]}
                >
                  <Text style={styles.modalText}>{opt}</Text>
                </Pressable>
              ))}
            </View>
          </Pressable>
        </Modal>

        {/* 출산 예정일 */}
        {showDueDate && (
          <>
            <Text style={[styles.sectionLabel, { marginTop: 18 }]}>
              출산예정일을 선택해주세요
              <Text style={styles.hint}>
                {" "}
                (위쪽에서 출산예정이면 선택해야함)
              </Text>
            </Text>

            <Pressable
              onPress={() => setShowDuePicker(true)}
              style={[styles.inputPill, styles.rowBetween]}
            >
              <Text style={styles.inputText}>
                {formatDate(dueDate)}
              </Text>
              <Ionicons name="calendar-outline" size={18} color={COLORS.subtext} />
            </Pressable>

            {showDuePicker && (
              <DateTimePicker
                value={dueDate}
                mode="date"
                display="spinner"
                onChange={(_, d) => {
                  setShowDuePicker(false);
                  if (d) setDueDate(d);
                }}
              />
            )}
          </>
        )}

        {/* 자녀 정보 */}
        {showChildSection && (
          <>
            <View style={styles.childHeaderRow}>
              <Text style={styles.sectionLabel}>
                자녀 정보
                <Text style={styles.hint}>
                  {" "}
                  (육아 중 상태를 체크했을 경우 선택해야함)
                </Text>
              </Text>
              <Pressable onPress={onAddChild} style={styles.addBtn}>
                <AntDesign name="plus" size={16} color={COLORS.primary} />
              </Pressable>
            </View>

            {children.map((c, idx) => (
              <View key={c.id} style={styles.childCard}>
                <Text style={styles.childTitle}>자녀 프로필{idx + 1}</Text>

                <Text style={styles.label}>이름</Text>
                <TextInput
                  placeholder="이름"
                  value={c.name}
                  onChangeText={(t) => onChangeChild(c.id, "name", t)}
                  style={styles.inputPill}
                  placeholderTextColor={COLORS.subtext}
                />

                <Text style={styles.label}>생년월일</Text>
                <TextInput
                  placeholder="YYYY-MM-DD"
                  value={c.birth}
                  onChangeText={(t) => onChangeChild(c.id, "birth", t)}
                  style={styles.inputPill}
                  placeholderTextColor={COLORS.subtext}
                />

                <Text style={styles.label}>성별</Text>
                <TextInput
                  placeholder="예: 남 / 여"
                  value={c.gender}
                  onChangeText={(t) => onChangeChild(c.id, "gender", t)}
                  style={styles.inputPill}
                  placeholderTextColor={COLORS.subtext}
                />
              </View>
            ))}
          </>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function formatDate(d) {
  const yy = d.getFullYear();
  const mm = `${d.getMonth() + 1}`.padStart(2, "0");
  const dd = `${d.getDate()}`.padStart(2, "0");
  return `${yy}.${mm}.${dd}`;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  headerLeft: { width: 40, height: 40, justifyContent: "center" },
  logo: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.primary,
  },
  saveBtn: { width: 40, alignItems: "flex-end" },
  saveText: { color: COLORS.primary, fontWeight: "700" },

  container: { paddingHorizontal: 16, paddingBottom: 16 },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
    marginTop: 4,
    marginBottom: 12,
  },

  profileRow: { flexDirection: "row", gap: 16, alignItems: "center" },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 999,
    backgroundColor: "#E8E8ED",
  },

  sectionLabel: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.text,
  },
  hint: { fontSize: 12, color: COLORS.subtext, fontWeight: "500" },

  label: {
    marginTop: 10,
    marginBottom: 6,
    color: COLORS.subtext,
    fontSize: 12,
    fontWeight: "600",
  },

  inputPill: {
    backgroundColor: COLORS.pill,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  inputText: { color: COLORS.text, fontSize: 14 },

  selectPill: {
    borderRadius: 999,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },

  modalDim: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "flex-end",
  },
  modalSheet: {
    backgroundColor: "#fff",
    padding: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalItem: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  modalText: { fontSize: 16, color: COLORS.text },

  childHeaderRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  addBtn: {
    width: 28,
    height: 28,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  childCard: {
    backgroundColor: "#FFF8F8",
    borderRadius: 16,
    padding: 14,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#FFE1E3",
  },
  childTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 6,
  },
});
