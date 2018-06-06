# 👋 Hello my friend,

nice to see you! This is public source code of my
personal experiment, I call **mntns**! Its currently seperated into two 
repositories. This one and [mntns landscape](https://github.com/ThomasRutzer/mntns).

[View it](https://thomasrutzer.github.io/mntns/dist/)

With "ship early, ship often" in mind, I released a first working version, which
is currently undergoing some refactoring.
After that, I hope I will find some time (and ideas😉) to add some more features from now on.
And since it´s kind of experimental, please be aware of that:

**During my daytime job, I´m really focused to provide a good
crossbrowser and a11y experience. So at 🌃night, when I should sleep but ⚒️work
on something like this, I really want to have some fun and work with
some of the latest browser features — so if you want to have fun as well,
use a browser with decent WebGl support. If you are really, really annoyed by
my personal experiment, feel free to get in touch** 

## Next steps

Talking about upcoming features,this are some of my next steps focused:

### Features

* LoFi Mode — which users can toggle on, to make animations less
consuming and maybe visualize background experiment in another way (without need of WebGL)

* Think about hosting it somewhere else, since Github Pages is a pain to host SPAs

### Code & Architecture

* make a proper and general Mock for DI
* movel **all** business logic from Vue components to services or providers
* increase test coverage

### Build Setup

It´s open source, so if you really want to check at Code on your own,
here are some tips:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# lint the Typescript
npm run lint

# run the tests
npm test

# run the tests on changes
npm run test:watch

# run the test suite and generate a coverage report
npm run coverage

# build for production with minification
npm run build

# clean the production build
npm run clean
```

👋 That´s it! Thanks for reading that far. Hope to see you soon
