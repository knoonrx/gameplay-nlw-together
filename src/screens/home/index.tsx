import React from "react";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Appointments } from "../../components/Appointments";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider/indes";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../profile";
import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ];

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
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

            <FlatList
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                data={appointments}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ListDivider}
                renderItem={({ item }) => (
                    <Appointments data={item} />
                )}
            />
        </View>
    );
}