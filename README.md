# MYSQL <--> EXPRESS (Node/JS)

Let's build shit with MYSQL

## Initialize a new project

1. In terminal, navigate to your code folder

2. Lets create a new directory, and cd into it:\
```mkdir mysql-meets-express && cd mysql-meets-express```

3. Let's &nbsp; `git init`

4. Shall we &nbsp; `npm init -y` &nbsp; yes?

5. And a few other things that we'll need, let's  see 🤔

   ```touch .gitignore``` \
   ```mkdir src```\
   ```touch src/index.js``` \
   ``` code . ```

## We totally forgot packages

We are going to build an express api connecting to mysql. Guess what `npm` packages we need?

```shell
npm install express
npm i mysql2
```

While we are at it, we should also update our `package.json` making sure `main` reflects this

```code
"main" : "src/index.js"
```

> Dont forget to show **.gitignore** some love. Make sure you add **node_modules**

### First let's connect to the database


