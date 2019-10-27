Progress:
- Add a Next.js frontend
- Add a custom Express and Mongo backend
- Add common code sharing using Lerna

Installation
- Clone the repository using `git clone https://github.com/junibrosas/node-devbox.git`
- Install Lerna. Check more information here https://github.com/lerna/lerna
- Run `lerna bootstrap`

When run, this command will:

`npm install` all external dependencies of each package.
Symlink together all Lerna packages that are dependencies of each other.
`npm run prepublish` in all bootstrapped packages (unless --ignore-prepublish is passed).
`npm run prepare` in all bootstrapped packages.

- This project is composed of two application; frontend and backend. Run `npm run dev` and `npm start` in /web and /api respectively. Read more about it in the Usage section of their own README file.

TODO:
- Deploy to Zeit Now