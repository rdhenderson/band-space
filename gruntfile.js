// const PORT = 3000;
//
// module.exports = function(grunt) {
//   //Load webpack and webpack config
//   const webpack = require("webpack");
// 	const webpackConfig = require("./webpack.config.js");
//
//   //Load grunt tasks
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-contrib-nodemon');
//   grunt.loadNpmTasks('grunt-concurrent');
//   grunt.loadNpmTasks('grunt-contrib-sass');
//
//   grunt.initConfig({
// 		webpack: {
// 			options: webpackConfig,
// 			build: {
// 				plugins: webpackConfig.plugins.concat(
// 					new webpack.DefinePlugin({
// 						"process.env": {
// 							// This has effect on the react lib size
// 							"NODE_ENV": JSON.stringify("production")
// 						}
// 					}),
// 					new webpack.optimize.DedupePlugin(),
// 					new webpack.optimize.UglifyJsPlugin()
// 				)
// 			},
// 			"build-dev": {
// 				devtool: "sourcemap",
// 				debug: true
// 			}
// 		},
// 		"webpack-dev-server": {
// 			options: {
// 				webpack: webpackConfig,
// 				publicPath: "/" + webpackConfig.output.publicPath
// 			},
// 			start: {
// 				keepAlive: true,
// 				webpack: {
// 					devtool: "eval",
// 					debug: true
// 				}
// 			}
// 		},
//     pkg: grunt.file.readJSON('package.json'),
//     concurrent: {
//       dev: {
//         tasks: ['nodemon', 'watch'],
//         options: {
//           logConcurrentOutput: true
//         }
//       }
//   },
//   sass: {
//     dist: {
//       files: {
//         './public/assets/css/style.css': './sass/style.scss'
//       }
//     }
//   },
//   nodemon: {
//     dev: {
//       script: 'server.js',
//       options: {
//         //  nodeArgs: [],
//         env: {
//           PORT: PORT,
//           // DB_NAME: "rtfm"
//         },
//         // omit this property if you aren't serving HTML files and
//         // don't want to open a browser tab on start
//         callback: function (nodemon) {
//           nodemon.on('log', function (event) {
//             console.log(event.colour);
//           });
//
//           // opens browser on initial server start
//           nodemon.on('config:update', function () {
//             // Delay before server listens on port
//             setTimeout(function() {
//               require('open')(`http://localhost:${PORT}`);
//             }, 1000);
//           });
//
//           // refreshes browser when server reboots
//           nodemon.on('restart', function () {
//             // Delay before server listens on port
//             setTimeout(function() {
//               require('fs').writeFileSync('.rebooted', 'rebooted');
//             }, 1000);
//           });
//         }
//       }
//     }
//   },
//     watch: {
//       options: {
//         spawn: false,
//       },
//       css: {
//         files: '**/*.scss',
//         tasks: ['sass'],
//         options: {
//           livereload: true
//         },
//       },
//       server: {
//         files: ['.rebooted'],
//       },
//       livereload: {
//       // Here we watch the files the sass task will compile to
//       // These files are sent to the live reload server after sass compiles to them
//         options: { livereload: true },
//         files: ['**/css/*.css', 'server.js','controllers/*.js', 'public/*.html']
//     },
// 	});
//
// 	// The development server (the recommended option for development)
// 	grunt.registerTask("default", ["webpack-dev-server:start", 'sass', 'concurrent']);
//
// 	// Production build
// 	grunt.registerTask("build", ["webpack:build"]);
// };
// Contact GitHub API Training Shop Blog About
