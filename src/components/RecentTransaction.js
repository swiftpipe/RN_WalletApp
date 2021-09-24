import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const listTransations = [
  {
    type: 'Spotify',
    icon: require('../assets/ic_spotify.png'),
    date: 'Jun 12, 12:30',
    payment: '+ $12',
  },
  {
    type: 'Paypal',
    icon: require('../assets/ic_paypal.png'),
    date: 'Jun 12, 12:30',
    payment: '+ $12',
  },
  {
    type: 'Dribble',
    icon: require('../assets/ic_dribble.png'),
    date: 'Jun 12, 12:30',
    payment: '+ $14',
  },
];

const renderTransactionItem = item => (
  <View key={item.type} style={styles.items}>
    <View style={styles.icon}>
      <Image source={item.icon} />
    </View>
    <View style={styles.itemBody}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
    <View>
      <Text style={styles.payment}>{item.payment}</Text>
    </View>
  </View>
);

const RecentTransaction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Transaction</Text>
      <View style={styles.list}>
        {listTransations.map(renderTransactionItem)}
      </View>
    </View>
  );
};

export default RecentTransaction;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    marginTop: 12,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
  },
  icon: {
    padding: 10,
    backgroundColor: 'white',
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {height: 10, width: 2},
    shadowOpacity: 0.7,
    shadowRadius: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBody: {
    flex: 1,
    paddingLeft: 14,
  },

  type: {
    fontWeight: '500',
    fontSize: 16,
  },

  date: {
    marginTop: 5,
  },

  payment: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
