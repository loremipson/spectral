# [Spectral](https://github.com/Implemint/spectral.git)

Spectral is a very simple starter theme for the [Ghost](http://ghost.org) blogging platform. It utilizes [Grunt](http://gruntjs.com) for [SASS](http://sass-lang.com) compiling and [LiveReloading](http://livereload.com).

## Getting started

Spectrals goal is to keep it simple and make no assumptions about the way you code and set up your themes. Right now, Grunt is compiling only SASS files, but will add the option for LESS soon.

## Installation

1. Clone this repository down to your Ghost themes folder.
2. There is no second step, it was that easy.

Currently Ghost needs to be restarted for new themes to show up, so make sure you have done that step if Spectral isn't showing up in your theme option on the settings page.

## Development

Once Spectral is cloned down, change into the directory and run `npm install`. You should be familiiar with this, assuming you installed Ghost. Once your node modules have finished, run `grunt`. Grunt will start "watching" your files for changes.

By default, Grunt watches for SASS files under the `assets/sass` directory with the .sass extension. If you'd like to change that, or use .scss instead, you can modify the `Gruntfile.js` accordingly. Any SASS file prefixed with an underscore won't be compiled as a separate .css file, so you can create and import them, making it more modular.
