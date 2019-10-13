- lerna init
- npx create-next-app --example custom-server-express web
- git clone https://github.com/madhums/node-express-mongoose.git api
- grabbed a sample nextjs .gitignore file
- changed npm version from 5.x to to 6.x using command `nodist npm local 6.x`. Found out it creates a `.npm-version` file.
- changed node version locally from 8.x to 10.x using command `nodist local 10.x`.
- created a mongo database name called `node-devbox`.
- added a new folder called `common` which will contain all our common code that will be used in both api and web.
- bootstrap those 3 packages using `lerna bootstrap`.

