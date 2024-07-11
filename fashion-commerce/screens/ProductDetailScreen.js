import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuIcon = require('../assets/images/Menu.png');
const logoIcon = require('../assets/images/Logo.png');
const searchIcon = require('../assets/images/Search.png');
const shoppingBagIcon = require('../assets/images/shoppingBag.png');

const handleFilterPress = () => {
  console.log('Filter button pressed');
};

const toggleDrawer = () => {
  setDrawerVisible(!drawerVisible);
};
// Other components and imports...

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

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

  const { width, height } = Dimensions.get('window');
  const imageHeight = height * 0.4;

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderHeader()}
      <View style={[styles.imageContainer, { height: imageHeight }]}>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productDetail}>{product.detail}</Text>
          <Text style={styles.materialsHeading}>MATERIALS</Text>
          <Text style={styles.materialsDescription}>
            We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
          </Text>
          <View style={styles.iconRow}>
            <Image source={require('../assets/images/Do Not Bleach.png')} style={styles.icon} />
            <Text style={styles.iconText}>Do not use bleach</Text>
          </View>
          <View style={styles.iconRow}>
            <Image source={require('../assets/images/Do Not Tumble Dry.png')} style={styles.icon} />
            <Text style={styles.iconText}>Do not tumble dry</Text>
          </View>
          <View style={styles.iconRow}>
            <Image source={require('../assets/images/Do Not Wash.png')} style={styles.icon} />
            <Text style={styles.iconText}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.iconRow}>
            <Image source={require('../assets/images/Iron Low Temperature.png')} style={styles.icon} />
            <Text style={styles.iconText}>Iron at a maximum of 110°C/230°F</Text>
          </View>
          <View style={styles.shippingContainer}>
            <Image source={require('../assets/images/Shipping.png')} style={styles.shippingIcon} />
            <View style={styles.shippingTextContainer}>
              <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
              <Text style={styles.shippingEstimate}>Estimated to be delivered on </Text>
              <Text style={styles.shippingEstimate}>09/11/2021 - 12/11/2021</Text>
            </View>
          </View>
        </View>
        <View style={styles.addToCartContainer}>
          <TouchableOpacity style={styles.addToCartButton}>
            <Image source={require('../assets/images/Plus.png')} style={styles.cartIcon} />
            <Text style={styles.addToCartButtonText}>Add to Basket</Text>
            <Image source={require('../assets/images/Heart.png')} style={styles.likeIconInButton} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 0,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    marginTop: 5,
  },
  productImage: {
    width: '120%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    marginTop: 20,
    zIndex: 0,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'medium',
  },
  productPrice: {
    fontSize: 20,
    color: '#FC9959',
  },
  productDetail: {
    fontSize: 16,
    marginBottom: 10,
  },
  materialsHeading: {
    fontSize: 18,
    fontWeight: 'medium',
  },
  materialsDescription: {
    fontSize: 14,
    marginBottom: 3,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  iconText: {
    fontSize: 14,
  },
  shippingContainer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shippingIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  shippingTextContainer: {
    flex: 1,
  },
  shippingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shippingEstimate: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  likeIconInButton: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default ProductDetailScreen;
