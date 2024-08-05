### Installing Node and NPM

#### Verifying the existing installation on Windows
1. Use the `WINKEY+r` shortcut key to open the Run window.
2. Type `cmd` in the Open: input and press Enter to open the command prompt.
3. In the command prompt, type:
   ```bash
   node --version
   ```
   - If Node.js is installed, it will return a version number like `v16.14.2`.
4. Confirm npm installation by typing:
   ```bash
   npm --version
   ```
   - If npm is installed, it will return a version number like `8.5.0`.

#### Verifying the existing Node.js and npm installation on Ubuntu (Linux)
1. Press `CTRL+ALT+t` to open a new bash (terminal) window.
2. In the bash window, type:
   ```bash
   node --version && npm --version
   ```
   - Both version numbers should appear in the bash window if installed.

#### Installing Node.js and npm
##### On Windows OS
1. Navigate to [Node.js official website](https://nodejs.org).
2. Locate the big download button for the LTS version (e.g., 16.15.0 as of May 2022) and download it.
3. Follow the installation instructions provided on the website.

##### On Mac OS - Installing Xcode and Homebrew
1. **Install Xcode**:
   - Open a terminal and run:
     ```bash
     xcode-select --install
     ```
   - A popup will appear. Click on the Install button and agree to the license agreement.

2. **Install Homebrew**:
   - Go to the [Homebrew official website](https://brew.sh/).
   - Copy the command provided on the website.
   - Open a terminal and run the command.

3. **Install Node.js using Homebrew**:
   - Once Homebrew is installed, run:
     ```bash
     brew install node
     ```
   - Confirm the installation by typing:
     ```bash
     node -v
     npm -v
     ```

##### On Ubuntu
1. Open a new bash window using the `CTRL+ALT+t` shortcut key.
2. Run the following commands:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```
3. Confirm the installation by typing:
   ```bash
   node -v
   npm -v
   ```

For more advanced setup and troubleshooting, refer to additional resources and documentation provided on the official Node.js and npm websites.