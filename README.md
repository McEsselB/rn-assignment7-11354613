# -rn-assignment7-11354613

# DCIT 202 (MOBILE APPLICATION DEVELOPMENT)

### Assignment 7

### STUDENT ID : 11354613

# Description of Task

This is the seventh assignment for the DCIT 202 (Mobile Application Development) course. The task involves developing a mobile application as part of an assignment for a mobile application development course. The application is an e-commerce app that allows users to view a list of products, view product details, add products to a cart, remove products from the cart, and view the items in their cart. The task requires the implementation of several components and features, including data fetching, local storage, and asynchronous operations.

# App Overview

The e-commerce mobile application allows users to browse through a list of available products fetched from an external API. Users can view detailed information about each product, add products to their cart, remove products from their cart, and view the contents of their cart. The app provides a seamless shopping experience with an easy-to-navigate interface and persistent local storage to maintain the cart's state.

# Development Tools Used for App Build.

- Expo Go, for real-time preview.
- Android Studio Emulator, for
- Expo CLI, for lanching development server.
- Visual Studio Code, for writing code managing files and folders.

## Steps I used to create a new React Native blank template project using Expo CLI.

- Run `npm install -g expo-cli`
- Run `expo init  fashion-commerce -- template blank`
- Run `cd fashion-commerce` to navigate into the project directory
- Run `npm run android` to start the development server
- Enter `a` to select `open on android`

## Features

### Product List Display (HomeScreen)

- Displays a list of available products fetched from an external API.
- Each product is presented with a brief description and image.

### Product Detail Display (ProductDetailScreen)

- Shows detailed information about a selected product.
- Provides an option to add the product to the cart.

### Cart Display (CartScreen)

- Displays the products that the user has added to their cart.
- Allows users to remove items from the cart.
- Shows the total cost of the items in the cart.

### Data Fetching

- Fetches data from an external API using fetch .

### Local Storage

- Uses AsyncStorage, SecureStore, or FileSystem to store selected items locally on the device.

### Persistent Storage

- The app uses AsyncStorage to persist the cart data across sessions.

## Components

### HomeScreen

- Displays a list of available products.
- Each product card includes an image, name, and price.
- Each product card has an "Add to cart" button.

### ProductDetailScreen

- Shows detailed information about a selected product, including an image, name, description, and price.
- Provides an option to add the product to the cart.

### CartScreen

- Displays the products added to the cart.
- Each cart item includes an image, name, and price.
- Each cart item has a "Remove from cart" button.
- Shows the estimated total cost of the items in the cart.
- Includes a checkout button.

### Drawer/Navigation Menu

- Provides easy navigation between different screens of the app.

### Functionlity

- Users can view a list of available products from an external API.
- Users can preview detailed information about a product.
- Users can add products to their cart.
- Users can remove products from their cart.
- Users can view the items in their cart.

## Tools and Libraries

- **React Native**

  - The primary framework for building the app.
  - Provides fundamental UI components and APIs for mobile development.

- **React Navigation**

  - Handles the navigation within the app.
  - Used for implementing stack-based navigation.

- **AsyncStorage**

  - A local storage solution for persisting data across app sessions.
  - Used to save and load the cart data.

- **Expo**
  - A set of tools and services for building React Native apps.
  - Used for real-time preview, testing, and building the app.

## Screenshots of fashion-commerce app

![Home](<Screenshot 2024-07-11 192755.png>)
![Cart](<Screenshot 2024-07-11 194448.png>) ![Drawer](<Screenshot 2024-07-11 194331.png>) ![Product Detail](<Screenshot 2024-07-11 192832.png>)

## How to run app if cloning from this repo.

1. Clone the repository: `git clone https://github.com/McEsselB/-rn-assignment7-11354613.git`
2. Install Expo CLI: `npm install -g expo-cli`
3. Install various dependencies needed using: `npm install`
4. Start the development
   server: `expo start`
5. Open Expo Go app on your mobile device and scan the QR code displayed on the terminal OR to use an emulator, run command `a` after `expo start`, to live preview on android emulator.

### How to Setup Android Emulator Using Android Studio or VS Code

Watch👁️👁️ these two YouTube videos:

- How to setup in Android Studio

👉 https://www.youtube.com/watch?v=4rCNc3uhLJE

- How to setup emulator in vs code

👉 https://www.youtube.com/watch?v=as_HHSFT304

###### You can follow me on github 😉 @ https://github.com/McEsselB
