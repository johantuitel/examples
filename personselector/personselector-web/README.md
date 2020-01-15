**source:**\
https://cli.angular.io/\
https://ngrx.io/guide/store/install\
https://ngrx.io/guide/store-devtools/install\
https://ngrx.io/guide/effects/install

**steps:**\
initialize app: **ng new personselector-web**\
install ngrx-core: **npm install @ngrx/core --save**\
install ngrx-store: **npm install @ngrx/store --save**\
install ngrx-store-devtools: **npm install @ngrx/store-devtools --save**\
install ngrx-effects: **npm install @ngrx/effects --save**

**setup NGRX-store:**\
create folder structure:
+ src\app\store
+ src\app\store\state
+ src\app\store\reducer

create the application state:\
create a new file called **app.state.ts**

create the application reducer:\
create a new file called **app.reducer.ts**

next is to create the store for the person-feature.\
first we create a new component within our application: **ng g c person-feature**\
within this feature we going to create a store to store our persons.\
create folder structure:
+ src\app\person-feature\store
+ src\app\person-feature\store\action
+ src\app\person-feature\store\effect
+ src\app\person-feature\store\type
+ src\app\person-feature\store\model
+ src\app\person-feature\store\reducer
+ src\app\person-feature\store\selector
+ src\app\person-feature\store\service
+ src\app\person-feature\store\state

# PersonselectorWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
