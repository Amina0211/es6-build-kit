# ES6 Build Kit

Build system scaffolding for bundling JS for delivery in a webapge.

## Dependencies

1. Install [Node.js](https://nodejs.org)
2. Install [Gulp](http://gulpjs.com)

## Installation

1. In Terminal, navigate to your projects directory, such as:

  ```bash
  cd ~/Projects
  ```

  > **NOTE:** The path (`~/Projects`) may be different on your machine.
    Use `pwd` to see which directory you are in.

2. Clone the repository with:

  ```bash
  git clone git@github.com/BenningtonCS/es6-build-kit.git
  ```

3. Go inside the cloned project with:

  ```bash
  cd es6-build-kit
  ```

4. Download required node modules with:

  ```bash
  npm install
  ```

5. Build the project with:

  ```bash
  gulp build
  ```

  A webpage should open up with "Hello World" text on a white background.

## Usage

### Gulp tasks:

Most of the time you should just need to run `gulp build`,
but this runs some additional tasks (which you can see with `gulp --tasks`).

1. Run `gulp lint` to run a linter on the JavaScript source code (in `src`).
2. Run `gulp scripts` to bundle the JavaScript source code.
3. Run `gulp copy` to move the HTML/CSS to the distribution (`dist`) directory.
4. Run `gulp open` to open the `index.html` page in the distribution directory.
