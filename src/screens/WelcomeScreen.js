import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();

  const [layouts, setLayout] = React.useState(null);

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/bg_welcome.png')}
      style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.wrapper}>
        <View style={styles.logoView}>
          <View onLayout={({nativeEvent}) => setLayout(nativeEvent?.layout)}>
            {layouts && (
              <Image
                source={require('../assets/card_welcome_1.png')}
                style={[
                  styles.cardImg1,
                  {width: layouts.width, height: layouts.height},
                ]}
                resizeMode="contain"
              />
            )}
            <Image source={require('../assets/card_welcome_2.png')} />
          </View>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.textTitle}>
            Payments anywhere and anytime easily
          </Text>
          <Text
            style={
              styles.textDesc
            }>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}</Text>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDesc: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 30,
  },
  wrapText: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    paddingBottom: 100,
    marginTop: 40,
  },
  cardImg1: {
    position: 'absolute',
    zIndex: 2,
    bottom: 30,
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
