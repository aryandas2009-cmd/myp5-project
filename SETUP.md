# Mac Setup Guide for Investment Education Chat Project

This guide will help you set up a new Mac Air to run this project from scratch.

## Prerequisites

- macOS (any recent version)
- Internet connection
- Terminal access

## Step-by-Step Setup Instructions

### Step 1: Install Xcode Command Line Tools

The Command Line Tools include Git and other essential development tools.

```bash
xcode-select --install
```

**Note**: A popup will appear asking you to install. Click "Install" and wait for the installation to complete (this may take 10-15 minutes).

**Verify installation:**
```bash
git --version
python3 --version
```

### Step 2: Configure Git (First Time Setup)

Set your Git username and email (use your GitHub credentials):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Verify configuration:**
```bash
git config --global --list
```

### Step 3: Set Up SSH Key for GitHub (Recommended)

This allows you to push/pull without entering credentials each time.

#### 3.1 Check for existing SSH keys:
```bash
ls -al ~/.ssh
```

#### 3.2 Generate a new SSH key (if you don't have one):
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

Press Enter to accept the default file location, then enter a passphrase (or press Enter for no passphrase).

#### 3.3 Add SSH key to ssh-agent:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

#### 3.4 Copy your public key:
```bash
cat ~/.ssh/id_ed25519.pub
```

#### 3.5 Add the key to GitHub:
1. Go to GitHub.com → Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your public key and save

#### 3.6 Test SSH connection:
```bash
ssh -T git@github.com
```

You should see: "Hi [username]! You've successfully authenticated..."

### Step 4: Clone the Repository

Navigate to where you want to store the project and clone it:

```bash
cd ~/Code  # or any directory you prefer
mkdir -p ~/Code  # Create directory if it doesn't exist
cd ~/Code
git clone git@github.com:aryandas2009-cmd/myp5-project.git
```

**Alternative (using HTTPS if SSH isn't set up):**
```bash
git clone https://github.com/aryandas2009-cmd/myp5-project.git
```

### Step 5: Navigate to Project Directory

```bash
cd myp5-project
```

### Step 6: Verify Project Files

Check that all files are present:

```bash
ls -la
```

You should see:
- `index.html`
- `styles.css`
- `app.js`
- `README.md`
- `.gitignore`

### Step 7: Run the Project Locally

Start the local development server:

```bash
python3 -m http.server 8000
```

**Note**: The server will run in the foreground. Keep this terminal window open.

### Step 8: Access the Application

Open your web browser and navigate to:

```
http://localhost:8000
```

or

```
http://127.0.0.1:8000
```

### Step 9: Stop the Server

When you're done, stop the server by pressing:

```
Ctrl + C
```

## Quick Setup Script

For convenience, you can run these commands in sequence:

```bash
# 1. Install command line tools (if not already installed)
xcode-select --install

# 2. Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Clone repository
cd ~/Code
git clone git@github.com:aryandas2009-cmd/myp5-project.git
cd myp5-project

# 4. Start server
python3 -m http.server 8000
```

## Troubleshooting

### Issue: "xcode-select: error: command line tools are already installed"
**Solution**: Skip Step 1, you're already set up.

### Issue: "git: command not found"
**Solution**: Install Xcode Command Line Tools (Step 1).

### Issue: "Permission denied (publickey)" when cloning
**Solution**: 
- Make sure you've added your SSH key to GitHub (Step 3.5)
- Or use HTTPS instead: `git clone https://github.com/aryandas2009-cmd/myp5-project.git`

### Issue: "Port 8000 already in use"
**Solution**: Use a different port:
```bash
python3 -m http.server 8001
```
Then access at `http://localhost:8001`

### Issue: "Python not found"
**Solution**: macOS comes with Python 3. If it's missing:
```bash
# Install Homebrew first (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Python
brew install python3
```

## Making Changes and Pushing to GitHub

### 1. Check status:
```bash
git status
```

### 2. Stage changes:
```bash
git add .
# or specific files:
git add index.html app.js
```

### 3. Commit changes:
```bash
git commit -m "Description of your changes"
```

### 4. Push to GitHub:
```bash
git push
```

## Additional Notes

- **No dependencies required**: This project uses only vanilla HTML, CSS, and JavaScript. No npm, node_modules, or package managers needed.
- **Stock API**: The stock feature uses Alpha Vantage API with a demo key. For production use, get your own free API key from https://www.alphavantage.co/support/#api-key
- **Browser compatibility**: Works best in modern browsers (Chrome, Firefox, Safari, Edge)

## Summary of Commands Used

```bash
# Installation
xcode-select --install

# Git Configuration
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# SSH Setup (one-time)
ssh-keygen -t ed25519 -C "your.email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub  # Copy this to GitHub

# Clone Repository
cd ~/Code
git clone git@github.com:aryandas2009-cmd/myp5-project.git
cd myp5-project

# Run Project
python3 -m http.server 8000

# Access in browser
# http://localhost:8000
```

That's it! Your Mac Air is now set up to run the Investment Education Chat project.
