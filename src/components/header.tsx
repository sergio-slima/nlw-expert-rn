import { Image, View, Text } from "react-native";

type HeaderProps = {
    title: string
}

export function Header({ title }: HeaderProps) {
    return(
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
                <Text className="text-white text-xl font-heading mt-2">{title}</Text>
            </View>

            <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center">
                <Text className="text-slate-900 font-bold text-xs">1</Text>
            </View>
        </View>
    )
}