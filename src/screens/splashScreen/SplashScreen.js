import React, {useEffect} from 'react';
import {View, TextView, Text, Image, StyleSheet} from 'react-native';
import AppIcon from '../../assets/mipmap/appIcon120-1.png';
 
import {appVersion} from '../../utils/AppVersion';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabNavigator');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContiner}>
        <Image
          style={{height: '100%', width: '100%', marginBottom: 250}}
          source={AppIcon}
        />
        <Text style={{textAlign: 'center'}}>{appVersion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: "white",
    justifyContent: 'center',
    paddingHorizontal: 140,
  },
  imageContiner: {
    height: 80,
    width: 80,
    display: 'flex',
  },
});

export default SplashScreen;
