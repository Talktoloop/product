# OurloopUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2. Currently, it uses 15.1.3 version of Angular.

## Development server

Run `yarn` to install dependencies. Run `ng serve` for a dev server. Navigate to `http://localhost:4200`. The app will automatically reload if you change any of the source files.

## Docker build

To build docker image run `docker build -t outloop-ui .`.

### Build args

Available `--build-arg env=`:

- development
- staging
- production

Default in Dockerfile is staging.

Than run the container `docker run -p <YOUR_PORT>:80 outloop-ui`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## To use playwright test framework  

Open playwright-src/README.MD
Open and read playwright-src/CODING_STANDARDS.md

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Adding new icons to project

Open [https://icomoon.io/](https://icomoon.io/) page and click IcoMoon App button which placed on top-right corner.
You should see default set of icons. You can remove this set by clicking hamburger, and select remove set.

To import our set of icons you should click Import Icons and next find file `selection.json` placed in `loop-icon/icomoon` folder.
Now you should see our set of icons.

To add some icons you should click on set's hamburger and click Import to set and choose .svg file that represent our icon.
Now, before exporting icons we need to change name of icon. To do this, you should click on the pen on the top of site, and next choose te icon.
On visible modal you can modify icon. After edit, just click outside to save.

To import our icons to project click on Generate Font at the bottom of site and next click Download.
To `icomoon` folder you should copy only `fonts` folder and `style.css` and `selection.json` files.

The last thing it is to add our name of icon to `loop-icon.enum.ts`.

## Colors variables

All colors variables we need to use in project we're storing in `app/styles/loop-design-system/_colors.scss` and new version of color variables in `app/styles/loop-design-system-v2/_colors.scss`;
It strongly recommended to successively use colors from the `app/styles/loop-design-system-v2/_colors.scss` file in whole app.
