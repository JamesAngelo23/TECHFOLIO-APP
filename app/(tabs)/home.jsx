import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.introduction}>
          Welcome to OLALA!
        </Text>
        <Text style={styles.description}>
          Thanks for signing up with OLALA. Your fast food adventure starts now—explore, order, and savor!
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  textContainer: {
    marginTop: 50, // Adjust top margin if needed
    alignItems: 'center', // Center text horizontally
  },
  introduction: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10, // Space between introduction and description
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888888',
    textAlign: 'center',
  },
});
