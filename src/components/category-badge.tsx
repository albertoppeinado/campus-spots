
import { StyleSheet, Text, View } from "react-native";
import { Category } from "@/data/spots";

interface Props {
  category: Category;
}

const CATEGORY_COLORS: Record<Category, string> = {
  sight: "#f70505",
  food: "#ec8f0d",
  park: "#f6f60c",
  museum: "#30e81f",
  campus: "#35c2e5",
  supermarket: "#c32ae9",
};

export function CategoryBadge({ category }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: CATEGORY_COLORS[category] }]}>
      <Text style={styles.text}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
});
