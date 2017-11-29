# E-Starter kit
This is the repo to start web projects in ECreativo

### Webpack 3 + Bootstrap 4 beta 2 example
### Try out
Download the repo and run:
```powershell
npm install # Install nodejs dependencies
npm run build
# Open `\public\index.html`-file in browser and watch the result.
```
#### 

## Credits
This repo includes some references of differents demos:

- Gulp 4 with Webpack by [Pascal Klau](http://www.artofmyself.com) in [CSS Tricks article](https://css-tricks.com/combine-webpack-gulp-4) here the [Github Repo](https://github.com/PascalAOMS/gulp4-webpack) if the repo don't exist [here my fork](https://github.com/Camiloruiiz/gulp4-webpack).

- Use ES6 in webpack config [stackoverflow](https://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js)

- Webpack 3 + Bootstrap 4 beta example by [xdvarpunen](https://github.com/xdvarpunen) here the [Github Repo](https://github.com/xdvarpunen/webpackboot) if the repo don't exist [here my fork](https://github.com/Camiloruiiz/webpackboot).

#### Notes
- Webpack command line [-p flag](https://webpack.js.org/api/cli/#shortcuts) and [-p flag behind the scenes](https://webpack.js.org/guides/production/#cli-alternatives)

#### To-do's
1. [Specify the Environment](https://webpack.js.org/guides/production/#specify-the-environment)
2. Divide the environment in [Production](https://webpack.js.org/guides/production/#source-mapping) and [Development](https://webpack.js.org/guides/development/)
3. Add inline source maps in production [Source Mapping](https://webpack.js.org/guides/production/#source-mapping)
4. [Optimize css](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
5.look into
	- If it's necessary a complex pipe with gulp [webpack-stream](https://github.com/shama/webpack-stream)
	- [Fixing our local environment with Browsersync](https://gist.github.com/robinrendle/0bb0b9e55fafa1cc0c64ff4b5776df05)
	- [browser-sync-config.js](https://gist.github.com/christopher4lis/3358d92395d686375c50f7ebb218f1dc)
	- [browser-sync-webpack-plugin](https://www.npmjs.com/package/browser-sync-webpack-plugin)
	- [Tree Shaking Webpack](https://webpack.js.org/guides/tree-shaking/)
	- [hot reload to use whit vue.js](https://stackoverflow.com/questions/24581873/what-exactly-is-hot-module-replacement-in-webpack)




