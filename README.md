Windows Setup:
Node & NPM Installation:
• Install node Latest LTS version from below link:
-> https://nodejs.org/en/download
• Check node version in command prompt if node is installed using below command
-> node --version
• Once node version is displayed, use below command to install npm
-> npm install -g npm
• Check npm version using below command
-> npm --version
Git Installation:
• Install git using below command
-> npm install -g git
• To check git version use below command
-> git --version
Code Setup in local:
• Navigate to the directory where you want to download the code in command prompt
• Use below command to clone git into your local machine. Please replace the
username with personal github username.
-> git clone https://github.com/[username]/research-group-app.git
• Once the code is available in local, open “package.json” file, replace “username”
placeholder with your own github username for homepage variable
-> "homepage": https://[username].github.io/research-group-app/
• Navigate to research-group-app path from command prompt. Use below commands:
-> npm install
-> npm run build
-> npm run deploy
• After the final command is executed, go to your github repository in web
• Click on Settings -> Pages
• Under "Branch" select "gh-pages" and click on "Save"
• Now your deployment will be started and to see the progress navigate to "Actions" at
the top.
