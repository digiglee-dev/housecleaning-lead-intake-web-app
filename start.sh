#!/bin/bash

# DigiGlee Cleaning - Local Test Script
echo "🧽 Testing DigiGlee Cleaning App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies."
    exit 1
fi

# Start the server
echo "🚀 Starting DigiGlee Cleaning server..."
echo "📧 Note: Email functionality requires EMAIL_USER and EMAIL_PASS environment variables"
echo "🌐 Open http://localhost:3000 in your browser"
echo ""
npm start
