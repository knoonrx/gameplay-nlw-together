import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  action?: ReactNode;
}

const Header: React.FC<Props> = ({ title, action }) => {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name='arrow-left'
          size={24}
          color={heading}
        />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {
        action &&
        <View>
          {action}
        </View>
      }
    </LinearGradient>
  );
}

export default Header;