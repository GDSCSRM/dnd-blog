# Design and Develop

## Getting started with this project
This can be done in two ways, either by forking/cloning the repo or by using this template to create a remix app

#### Fork and clone the branch
- [Fork](https://github.com/GDSCSRM/dnd-blog/fork) this repository
- Clone `starter-code` branch from the forked repository 
```sh
git clone -b starter-code https://github.com/<your-username>/dnd-blog.git
```

#### Create a new Remix app with this template
```sh
npx create-remix@latest --template https://github.com/GDSCSRM/dnd-blog/tree/starter-code dnd-blog
cd dnd-blog
```

### Install dependencies
```sh
npm install
```

### Prisma setup

#### Make sure to include `.env` file in the root directory with `DATABASE_URL` before running the following command.

Alternatively you can copy the `.env.example`
```sh
cp .env.example .env
```
#### Run the database migrations
```sh
npm run db:migrate
```
#### Seed the database (This step can be skipped, migrate does the seeding)
```sh
npm run db:seed
```

### Start the development server
```sh
npm run dev
```
