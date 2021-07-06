import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../components/Avatar/indes";
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage={'https://avatars.githubusercontent.com/u/1470943?v=4'} />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Rodrigo
                    </Text>

                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}