# Learning Objectives
### At the end of this project, I expect to be able to explain to anyone, without the help of Google:
### How to do the following with NodeJS:

- run javascript using NodeJS
- use NodeJS modules
- use specific Node JS module to read files
- use process to access command line arguments and the environment
- create a small HTTP server using Node JS
- create a small HTTP server using Express JS
- create advanced routes with Express JS
- use ES6 with Node JS with Babel-node
- use Nodemon to develop faster

# Setting up the environment
Setting up your project environment in VS Code for a Node.js project involves a few straightforward steps. Here's how to get your project folder ready to go:

### Step 1: Initialize a New Node.js Project

1. **Open your Terminal**: You can do this within VS Code by using the integrated terminal (View -> Terminal).

2. **Navigate to your project directory**:
   ```bash
   cd /Users/kwabenasapong/Documents/Programming/Projects/Mac_Projects/NodeJS_projects/simple_js
   ```

3. **Initialize a new Node.js project**:
   This will create a `package.json` file in your project directory, which will keep track of all your dependencies and project settings.
   ```bash
   npm init -y
   ```

### Step 2: Create Your Project Structure

While Node.js projects can have many different structures depending on their complexity, a simple setup might look like this:

- **`/src`**: Directory for your source files.
- **`index.js`**: Main application file.

Here's how to set it up:

1. **Create a source directory and main file**:
   ```bash
   mkdir src
   touch src/index.js
   ```

2. **Open your project in VS Code**:
   If you're not already working in VS Code, you can open your project directly from the terminal:
   ```bash
   code .
   ```

### Step 3: Install Essential Packages

You mentioned several Node.js capabilities and tools, including Express, Babel, and Nodemon. Here's how to install them:

1. **Install Express**:
   ```bash
   npm install express
   ```

2. **Install Babel** for using ES6 features:
   ```bash
   npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
   ```

3. **Configure Babel** by creating a `.babelrc` file in your project root:
   ```bash
   echo '{ "presets": ["@babel/preset-env"] }' > .babelrc
   ```

4. **Install Nodemon**:
   ```bash
   npm install --save-dev nodemon
   ```

5. **Update `package.json`** to include a start script that uses Nodemon:
   Edit your `package.json` file to include a script entry:
   ```json
   "scripts": {
       "start": "nodemon --exec babel-node src/index.js"
   }
   ```

Now, your project is set up with a basic structure and the necessary tools. You can start writing your Node.js code in `src/index.js` and run it with the command `npm start` to see the effects of your changes in real time, thanks to Nodemon.

If you need further assistance setting up more specific parts of your project or understanding how these tools work together, feel free to ask!