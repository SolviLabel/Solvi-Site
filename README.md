# Dependencies
## Node.js
### Windows
- Download Scoop with:
   ```shell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
   ```
- Then run:
   ```shell
   Scoop install git
   scoop bucket add extras
   scoop install main/nodejs
   # Verify the Node.js version:
   node -v 
   # Should print "vx.x.x".
   # Verify npm version:
   npm -v 
   # Should print "x.x.x".
   ```
   or [download manually](https://nodejs.org/en/download)
### Linux
- Their are tons of ways one can install node.js via Linux so if you something different that is fine
```shell
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 24
# Verify the Node.js version:
node -v 
# Should print "v24.13.1".
# Verify npm version:
npm -v 
# Should print "11.8.0".
```

[Manual install instructions](https://nodejs.org/en/download)
# Installation
Once you have done all of that run:
```
#navigate to where you installed the github repo
npm install
npm install then npm install express multer uuid
#this should update and fix any of the other dependencies automattically
#if nodejs outputs error codes try redownloading repo and just continue
#to next step
```
after make sure you are inside the file as shown below:
<p align="left">
   <img width="487" height="19" alt="Screenshot 2026-02-12 141428" src="https://github.com/user-attachments/assets/979a3d6f-6756-469c-b350-5fd3573243ad" />
</p>
run `node server/app.js`
which should output `Server running on http://localhost:3000`
and your file sharing server should be good to go
check server/models/User.js for usernames and passwords
