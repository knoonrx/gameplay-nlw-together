import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../profile";
import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <View style={styles.content}>
                    <ListHeader
                        title='Partidas Agendadas'
                        subtitle='Total 6'
                    />
                </View>
            </View>
        </View>
    );
}