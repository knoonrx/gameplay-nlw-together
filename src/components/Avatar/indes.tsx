import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Propos = {
    urlImage: string;
}

export function Avatar({urlImage}: Propos) {
    const { secondary50, secondary70 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}
        >
            <Image
            style={styles.image}
            source={{uri: urlImage}}
            />
        </LinearGradient>
    );
} 