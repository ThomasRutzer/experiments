# 👋 Hello my friend,

nice to see you! This is public source code of my
personal experiments hub*! Started with a single experiment to show, 
I hope I have time and creativity (and skills😉) to add some more from now on.
And since it´s kind of experimental, please be aware of that:

**During my daytime job, I´m really focused to provide a good
crossbrowser and a11y experience. So at 🌃night, when I should sleep but ⚒️work
on something like this, I really want to have some fun and work with
some of the latest browser features — so if you want to have fun as well,
use a browser with decent WebGl support. If you are really, really annoyed by
your personal experiment, feel free to get in touch (or wait for one of the upcoming feature
to be finished)** 

*<sup>It started as one repo for all experiments, before I decided that this will end up in a wildness
I don´t want to control, but this is why, the first and only experiment atm is not fully seperated from
the repo that I call `experiments hub`</sup> 

## Next steps

Talking about upcoming features, I plan to work
on this site from time to time. This are some of my next steps.

### Features

* LoFi Mode — which users can toggle on, to make animations less
consuming and maybe visualize background experiment in another way (without need of WebGL)

* Add more of a listing for all upcoming experiments

### Code & Architecture

* make a proper and general Mock for DI
* move entire Mntns Experiment to other [Repo](https://github.com/ThomasRutzer/mntns) — initially,
my plan was, to provide the code of the other repo as a WebGL experiment, which 
accepts Data and generates its Object. But now, I´d like to have all the Github Api
Connection to take place their as well. Makes things easier

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
