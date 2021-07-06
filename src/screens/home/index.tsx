import React from "react";
import { View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../profile";
import { styles } from "./styles";

export function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd/>
            </View>
            <View>
                <CategorySelect/>
            </View>
        </View>
    );
}