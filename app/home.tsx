//index.tsx
import { Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Categories from '../Components/Categories';
import Restaurants from '../Components/Restaurants';
import Colors from '@/constants/Colors';
import CustomHeader from '@/Components/CustomHeader';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      <CustomHeader/>
      <Categories />
      <Text style={styles.header}>Phổ biến</Text>
      <Restaurants />
      <Text style={styles.header}>Gần bạn</Text>
      <Restaurants />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Home;