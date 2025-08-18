import React, { useState } from "react";
import { View, Text, TextInput, Pressable, SafeAreaView } from "react-native";
import { styles, TABS } from "./style/Community.styles";
import { createPost } from "../community/api/community";

export default function PostCreateScreen({ navigation }) {
  const [category, setCategory] = useState("free");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async () => {
    if (!title.trim() || !content.trim()) return;
    const res = await createPost({ title, content, category });
    if (res.ok) navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Text style={styles.headerBack}>〈</Text>
        </Pressable>
        <Text style={styles.headerTitle}>글쓰기</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 카테고리 선택 */}
      <View style={[styles.tabs, { paddingTop: 12 }]}>
        {TABS.filter((t) => t.key !== "all").map((t) => (
          <Pressable
            key={t.key}
            style={[styles.tabBtn, category === t.key && styles.tabBtnActive]}
            onPress={() => setCategory(t.key)}
          >
            <Text
              style={[styles.tabText, category === t.key && styles.tabTextActive]}
            >
              {t.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={{ padding: 16, gap: 12 }}>
        <TextInput
          placeholder="제목을 입력하세요"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="내용을 입력하세요"
          value={content}
          onChangeText={setContent}
          style={[styles.input, { height: 180, textAlignVertical: "top" }]}
          multiline
        />
        <Pressable style={[styles.btnPrimary, { height: 52, borderRadius: 14 }]} onPress={onSubmit}>
          <Text style={styles.btnPrimaryText}>등록</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
