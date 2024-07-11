import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../components/ProductCard';

const menuIcon = require('../assets/images/Menu.png');
const logoIcon = require('../assets/images/Logo.png');
const searchIcon = require('../assets/images/Search.png');
const shoppingBagIcon = require('../assets/images/shoppingBag.png');
const gridIcon = require('../assets/images/Listview.png');
const filterIcon = require('../assets/images/Filter.png');
const cancelIcon = require('../assets/images/Cancel.png');

const drawerItems = [
  { label: 'Store', onPress: () => console.log('Store pressed') },
  { label: 'Locations', onPress: () => console.log('Locations pressed') },
  { label: 'Blog', onPress: () => console.log('Blog pressed') },
  { label: 'Jewellery', onPress: () => console.log('Jewellery pressed') },
  { label: 'Electronic', onPress: () => console.log('Electronic pressed') },
  { label: 'Clothing', onPress: () => console.log('Clothing pressed') },
];

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    const loadCart = async () => {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };

    fetchProducts();
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleGridPress = () => {
    console.log('Grid button pressed');
  };

  const handleFilterPress = () => {
    console.log('Filter button pressed');
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image source={menuIcon} style={styles.menuIcon} />
      </TouchableOpacity>
      <Image source={logoIcon} style={styles.logo} />
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={shoppingBagIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderOurStoryHeader = () => (
    <View style={styles.ourStoryHeader}>
      <Text style={styles.ourStoryText}>OUR STORY</Text>
      <View style={styles.storyIcons}>
        <TouchableOpacity onPress={handleGridPress}>
          <Image source={gridIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFilterPress}>
          <Image source={filterIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderHeader()}
      {renderOurStoryHeader()}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard key={item.id} product={item} onAddToCart={addToCart} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
      {drawerVisible && (
        <View style={styles.drawer}>
          <View style={styles.drawerHeader}>
            <TouchableOpacity onPress={toggleDrawer} style={styles.cancelIconWrapper}>
              <Image source={cancelIcon} style={styles.cancelIcon} />
            </TouchableOpacity>
            <Text style={styles.drawerHeaderText}>ERIC ATSU</Text>
          </View>
          {/* Render drawer items from the drawerItems array */}
          {drawerItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.onPress}>
              <Text style={styles.drawerItem}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginTop: 5,
   
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  menuIcon: {
    width: 28,
    height: 24,
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  ourStoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 7,
  },
  ourStoryText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  storyIcons: {
    flexDirection: 'row',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '60%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 20,
    zIndex: 1000,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 20,
    marginBottom: 20,
  },
  drawerHeaderText: {
    fontSize: 18,
    borderBottomWidth: 3,
    marginTop: 20,
    letterSpacing: 3,
    marginLeft: -40,
    borderBottomColor: 'orange'

    
  
  },
  cancelIconWrapper: {
    marginRight: 20,
    marginTop: -40,
  },
  cancelIcon: {
    width: 26,
    height: 26,
    
  },
  drawerItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HomeScreen;
