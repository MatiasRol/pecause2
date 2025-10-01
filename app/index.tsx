import CustomText from "@/components/ui/CustomText";
import "@/global.css";
import { View } from "react-native";
export default function Index() {
  return (
    <View className="bg-[#026A75] w-screen h-screen">
       <CustomText variant="large" dark>
        Hello World
      </CustomText>
    </View>
  );
}