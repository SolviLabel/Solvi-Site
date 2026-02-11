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
do {npm install then npm install express multer uuid} which should work though i have heard of somethings that often go wrong. I will update this later to solve those issues but if you use git to clone this repo you should be fine


then in your power shell cd .. untill your at C:\ and cd C:\Users\"yourusername"\Downloads\Solvi-Site
and then node server.js

If their are any question feel free to ask but don't expect an immedate response

One last thing you dont need npm unless you edit the file structer if not you only need nodejs

Quick warning this does give people access to download and upload files to and from your pc. this not only means you need port forwarding but also dont share to everyone. i might add passwords later but for now use play.it for tunneling as it doesn't expose your ip.