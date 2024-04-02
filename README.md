# Genezio Integration with Various HTTP Adapters

## Overview

This project demonstrates the integration of Genezio with existing Express.js applications. It features a server built with Express.js, utilizing Genezio to expose classes that can be called in a type-safe manner through an auto-generated SDK.

Additionally, the project includes two clients implemented in TypeScript (using React), and Dart (using Flutter), showcasing the versatility and ease of integration of Genezio across different platforms.

## Getting Started

### Server Setup

1. **Navigate to the Server Repository**

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Build the project**
   ```bash
   npm run build
   ```

4. **Generate SDKs for Clients**

For Dart: `npm run dart-sdk`
For TypeScript: `npm run ts-sdk`

5. **Start the server**
   ```bash
   npm start
   ```

### Client Setup

#### Typescript Client (`client-ts`)
1. **Navigate to the `client-ts` directory**

2. **Install Dependencies and Start**
   ```bash
   npm install
   npm start
   ```

#### Flutter Client (`client-flutter`)
1. **Navigate to the `client-flutter` directory**

2. **Start the app
   ```bash
   flutter run 
   ```


