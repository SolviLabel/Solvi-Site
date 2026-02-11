##How To Install Server Drive?
#Prerequisites
- node.js
- npm
- powershell

If you do not have node.js or npm
- For npm
curl -qL https://www.npmjs.com/install.sh | sh
are visit https://www.npmjs.com/package/npm
for node.js you can use all sorts of downloaders like git and scoop
for windows I prefer to use scoop which is done by first typing:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression

Then after that completes do:
scoop install git
scoop bucket add extras
scoop install nodejs

Once you have all of that and npm
do npm install which should work though i have heard of somethings that often go wrong. I will update this later to solve those issues but if you use git to clone this repo you should be fine

then in your power shell cd .. untill your at C:\ and cd C:\Users\"yourusername"\Downloads\Solvi-Site
and then node server.js