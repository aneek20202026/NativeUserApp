# React Native User Info App

## Overview
This is a simple React Native application that fetches user information from a public API and displays it in a user-friendly interface. The app demonstrates handling API data, rendering UI components, and managing application state efficiently.

## Features
- Fetches user data from a public API.
- Displays user details in a clean and structured layout.
- Optimized for performance and smooth user experience.

## Technologies Used
- React Native
- React

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- React Native CLI or Expo CLI (depending on your setup)
- Android Studio (for Android builds)
- Android Build Tools 35.0.0
- NDK version 27.0.12077973

### Steps to Run the Application Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/aneek20202026/NativeUserApp
   cd NativeUserApp
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Install CocoaPods dependencies (for iOS):
   ```sh
   cd ios
   pod install
   cd ..
   ```
4. Start the application:
   - For Android:
     ```sh
     npx react-native run-android
     ```
   - For iOS (on macOS):
     ```sh
     npx react-native run-ios
     ```
   - If using Expo:
     ```sh
     expo start
     ```

## API Information
The application fetches user data from a public API. Make sure you have an active internet connection while running the app.

## Additional Notes
- The app layout is designed to resemble the provided UI reference image.
- You can customize the UI styles further using React Native's styling system.

## License
This project is open-source and free to use.

