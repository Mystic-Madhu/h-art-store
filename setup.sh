#!/bin/bash
# H Art Store - Mac/Linux Setup Script

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║      H Art Store - Complete Setup                              ║"
echo "║      Setting up your art e-commerce platform...                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ ERROR: Node.js is not installed!"
    echo ""
    echo "Please download and install Node.js from: https://nodejs.org/"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Node.js found!"
node --version
echo ""

# Navigate to backend
cd backend

echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ ERROR: Failed to install npm packages!"
    exit 1
fi

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║      ✅ Setup Complete!                                        ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "Next steps:"
echo ""
echo "1. Keep this terminal open and run:"
echo "   npm start"
echo ""
echo "2. In another terminal, open your project in a browser:"
echo "   - VS Code: Right-click index.html → Open with Live Server"
echo "   - Python: python -m http.server 8000 then http://localhost:8000"
echo "   - Direct: Open index.html in your browser"
echo ""
echo "3. Visit http://localhost:3000/api/health to verify backend"
echo ""
echo "4. Open admin.html in your browser to upload images"
echo ""
echo "📖 For detailed instructions, see QUICKSTART.md"
echo ""
