@echo off
REM H Art Store - Windows Setup Script

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║      H Art Store - Complete Setup                              ║
echo ║      Setting up your art e-commerce platform...                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo Please download and install Node.js from: https://nodejs.org/
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js found!
node --version
echo.

REM Navigate to backend
cd backend

echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ ERROR: Failed to install npm packages!
    pause
    exit /b 1
)

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║      ✅ Setup Complete!                                        ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo Next steps:
echo.
echo 1. Keep this terminal open and run:
echo    npm start
echo.
echo 2. In another terminal, open your project in a browser:
echo    - VS Code: Right-click index.html → Open with Live Server
echo    - Python: python -m http.server 8000 then http://localhost:8000
echo    - Direct: Double-click index.html
echo.
echo 3. Visit http://localhost:3000/api/health to verify backend
echo.
echo 4. Open admin.html in your browser to upload images
echo.
echo 📖 For detailed instructions, see QUICKSTART.md
echo.
pause
