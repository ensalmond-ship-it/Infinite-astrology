# Getting Started with Infinite Astrology Hub

## What You Need to Install First

Before we start, you need to install these tools on your computer. Don't worry - they're free!

### Step 1: Install Node.js (JavaScript runtime)
- Go to: https://nodejs.org/
- Click the big green button (LTS version)
- Follow the installer
- Restart your computer

### Step 2: Install Python
- Go to: https://www.python.org/downloads/
- Download the latest version
- When installing, **CHECK the box that says "Add Python to PATH"**
- Follow the installer

### Step 3: Install Git
- Go to: https://git-scm.com/download
- Download for your computer type (Windows/Mac/Linux)
- Follow the installer

### Step 4: Install Visual Studio Code (where you'll write code)
- Go to: https://code.visualstudio.com/
- Download and install
- This is the editor where you'll see and edit code

---

## Setting Up the Project

Once you have everything installed:

### 1. Open Command Prompt (Windows) or Terminal (Mac/Linux)
- **Windows:** Press `Windows Key + R`, type `cmd`, press Enter
- **Mac:** Press `Command + Space`, type `terminal`, press Enter
- **Linux:** Press `Ctrl + Alt + T`

### 2. Go to where you want to save the project
```
cd Desktop
```
(This puts you on your desktop)

### 3. Clone (download) the project from GitHub
```
git clone https://github.com/Ensalmond-ship-it/Infinite-astrology.git
```

### 4. Go into the project folder
```
cd Infinite-astrology
```

### 5. Open the project in VS Code
```
code .
```
(The period means "open this folder")

---

## Running the Project

### For the Website (Frontend)

1. Open a new terminal in VS Code (View → Terminal)
2. Go to the frontend folder:
   ```
   cd frontend
   ```
3. Install what the project needs:
   ```
   npm install
   ```
4. Start the website:
   ```
   npm start
   ```
5. Your website opens at: `http://localhost:3000`

### For the Server (Backend)

1. Open a new terminal
2. Go to the backend folder:
   ```
   cd backend
   ```
3. Install what the project needs:
   ```
   pip install -r requirements.txt
   ```
4. Start the server:
   ```
   python app.py
   ```
5. The server runs at: `http://localhost:5000`

---

## Understanding the Code

Each file has **comments** that explain what it does. Comments start with `//` or `#` and are there just for humans to read - the computer ignores them.

Example:
```javascript
// This is a comment - the computer ignores it
// It explains what the code does
const name = "Astrology Hub"; // This is our app name
```

---

## Troubleshooting

**"npm: command not found"**
- You didn't install Node.js or need to restart your computer

**"python: command not found"**
- You didn't install Python or need to restart your computer

**"Port already in use"**
- Another program is using port 3000 or 5000
- Close other programs and try again

Need more help? Check GitHub issues or ask!