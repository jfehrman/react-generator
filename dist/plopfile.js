module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("path")},function(e,n,t){function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=t(0),a=function(){try{return JSON.parse(s.readFileSync("./package.json","utf8"))}catch(e){throw new Error("You must have a package.json file initialized."+e)}},i=function(){try{return JSON.parse(s.readFileSync("".concat(appRoot.path,"/react.preferences.json"),"utf8"))}catch(e){return null}},c=function(e){return Object.keys(e).some((function(e){return"typescript"===e}))},p=function(e){return Object.keys(e).some((function(e){return"@storybook/cli"===e}))},u=function(e){return Object.keys(e).some((function(e){return"node-sass"===e}))},f=function(e){return Object.keys(e).some((function(e){return"jest"===e}))};e.exports={loadSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a(),t=i(),o=n.devDependencies,s=n.dependencies,l=r({},o,s);return e.isTypescript=c(l),e.isStorybook=p(l),e.isSass=u(l),e.isJest=f(l),t&&(e.isJsx=t.isJsx||!1,e.isSemicolons=t.isSemicolons,e.isSavePref=!1),e},checkIsTypescript:c,checkIsStorybook:p,checkIsSass:u,checkIsJestInstalled:f,loadPackages:a,loadReactPreferences:i}},function(e,n,t){function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw s}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t(0),t(4);var o=t(2).loadSettings,s=t(16).getFileInfo,a=t(19).generateComponentActions,i=t(18),c=(i.prompt,i.getDefaultPrompts),p=o();e.exports=function(e){var n=Object.keys(p).some((function(e){return"isSemicolons"===e})),t=c(n,p.isTypescript);e.setGenerator("component",{description:"Create a functional react component",prompts:t,actions:function(e){o(e),e.styleType=p.isSass?"sass":"css";var n=r(s(e.name,e.isTypescript,e.isJsx,e.styleType),4),t=n[0],i=n[1],c=n[2],u=n[3];e.name=i,e.styleSheetExtension=u;var f="".concat(process.cwd(),"/").concat(t),l=a("component",f,c,u,e.isJest,e.isStorybook,e.isSemicolons,e.isSavePref);return l}}),e.setGenerator("class component",{description:"Create a class based react component",prompts:t,actions:function(e){o(e),e.styleType=p.isSass?"sass":"css";var n=r(s(e.name,e.isTypescript,e.isJsx,e.styleType),4),t=n[0],i=n[1],c=n[2],u=n[3];e.name=i,e.styleSheetExtension=u;var f="".concat(process.cwd(),"/").concat(t),l=a("class component",f,c,u,e.isJest,e.isStorybook,e.isSemicolons,e.isSavePref);return l}})}},function(e,n,t){"use strict";(function(n){var r=t(5);e.exports=r(n)}).call(this,"node_modules/app-root-path")},function(e,n,t){"use strict";e.exports=function(e){var n=t(1),r=t(6)(e),o={resolve:function(e){return n.join(r,e)},require:function(e){return t(8)(o.resolve(e))},toString:function(){return r},setPath:function(e){r=n.resolve(e),o.path=r},path:r};return o}},function(e,n,t){"use strict";var r,o=t(1),s=t(7).globalPaths;r="win32"===process.platform?o.dirname(process.execPath):o.dirname(o.dirname(process.execPath));var a=o.resolve(r,"lib","node_modules"),i=o.sep,c=require;const p=function(e){const n=i+"node_modules";if(-1!==e.indexOf(n)){const t=e.split(n);if(t.length)return t[0]}return null};e.exports=function(e){if(process.env.APP_ROOT_PATH)return o.resolve(process.env.APP_ROOT_PATH);if(process.versions.pnp)try{var n=c("pnpapi");return n.getPackageInformation(n.topLevel).packageLocation}catch(e){}if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)try{return c("electron").remote.require("app-root-path").path}catch(e){}if(process.env.LAMBDA_TASK_ROOT&&process.env.AWS_EXECUTION_ENV)return process.env.LAMBDA_TASK_ROOT;var t=o.resolve(e),r=!1,u=null;return function(e){const n=i+".pnpm";for(const t of s)if(-1!==t.indexOf(n)&&-1!==e.indexOf(n))return!0;return!1}(t)&&(u=p(t))?u:(s.forEach((function(e){r||0!==t.indexOf(e)||(r=!0)})),r||(u=p(t)),(r||null==u)&&(u=o.dirname(c.main.filename)),r&&-1!==u.indexOf(a)&&u.length-4===u.indexOf(i+"bin")&&(u=u.slice(0,-4)),u)}},function(e,n){e.exports=require("module")},function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=8},function(e,n){e.exports=function(e){return"import{{#isTypescript}} * as{{/isTypescript}} React, { Component } from 'react';\nimport './{{snakeCase name}}.{{styleSheetExtension}}';\n\n{{#isTypescript}}\ninterface i{{pascalCase name}}Props {\n\n}\n\ninterface i{{pascalCase name}}State {\n\n}\n\n{{/isTypescript}}\nexport default class {{pascalCase name}} extends Component{{#isTypescript}}<i{{pascalCase name}}Props, i{{pascalCase name}}State>{{/isTypescript}} {\n  constructor(props{{#isTypescript}}: i{{pascalCase name}}Props{{/isTypescript}}) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div className=\"{{snakeCase name}}\">\n        New {{pascalCase name}} component.\n      </div>\n    );\n  }\n}\n\n{{#isTypescript}}\nexport {\n  i{{pascalCase name}}Props,\n  i{{pascalCase name}}State,\n};\n\n{{/isTypescript}}\n"}},function(e,n){e.exports=function(e){return".{{snakeCase name}} {\n\n}\n\n"}},function(e,n){e.exports=function(e){return"import{{#isTypescript}} * as{{/isTypescript}} React from 'react';\nimport './{{snakeCase name}}.{{styleSheetExtension}}';\n\n{{#isTypescript}}\ninterface i{{pascalCase name}}Props {\n\n}\n\n{{/isTypescript}}\nconst {{pascalCase name}}{{#isTypescript}}: React.FunctionComponent<i{{pascalCase name}}Props>{{/isTypescript}} = () => {\n  // State\n\n  // Effects\n\n  return (\n    <div className=\"{{snakeCase name}}\">\n      New {{pascalCase name}} component.\n    </div>\n  );\n};\n\nexport default {{pascalCase name}};\n{{#isTypescript}}\nexport { i{{pascalCase name}}Props };\n{{/isTypescript}}\n\n"}},function(e,n){e.exports=function(e){return"import React from 'react';\nimport { storiesOf } '@storybook/react';\nimport {{pascalCase name}} from '../{{snakeCase name}}';\n\nstoriesOf('{{pascalCase name}}', module)\n  .add('Render', () => (\n    <{{pascalCase name}} />\n  ));\n\n"}},function(e,n){e.exports=function(e){return"import {{#isTypescript}}* as {{/isTypescript}}React from 'react';\nimport {{pascalCase name}} from '../{{snakeCase name}}';\nimport {{#isTypescript}}* as {{/isTypescript}}renderer from 'react-test-renderer';\n\nit('Renders', () => {\n  const component = renderer.create(\n    <{{pascalCase name}} />\n  );\n  const results = component.toJSON();\n  expect(results).toMatchSnapshot();\n});\n\n"}},function(e,n){e.exports=function(e){return"import { addParameters, configure } from '@storybook/react';\nimport { themes } from '@storybook/theming';\n\nconst req = require.context('../src', true, /.story.js$/);\n\nconst sortByFileName = (filePath1, filePath2) => {\n  const file1 = filePath1.split('\\').pop().split('/').pop();;\n  const file2 = filePath2.split('\\').pop().split('/').pop();;\n  if (file1 > file2) {\n    return 1;\n  } else if ( file1 < file2) {\n    return -1;\n  } else {\n    return 0;\n  }\n}\n\nfunction loadStories() {\n  req.keys().sort(sortByFileName).forEach(fileName => req(fileName))\n}\n\naddParameters({\n  options: {\n    name: 'My Storybook',\n    theme: themes.dark,\n  },\n});\n\nconfigure(loadStories, module);\n\n"}},function(e,n){e.exports=function(e){return'const path = require("path");\n\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /.{{styleSheetExtension}}$/,\n        loaders: [\n          {{#isSass}}"style-loader",{{/isSass}}\n          "css-loader"{{#isSass}},{{/isSass}}\n          {{#isSass}}"sass-loader"{{/isSass}}\n        ],\n        include: path.resolve(__dirname, "../")\n      }\n    ]\n  }\n};\n\n'}},function(e,n){function t(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw s}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(e,n){return e?"tsx":n?"jsx":"js"},s=function(e){switch(e.toLowerCase()){case"scss":case"sass":return"scss";case"postcss":case"post-css":case"css":default:return"css"}},a=function(e){return process.cwd().indexOf("src/components")<0&&e.indexOf("src/components")<0?"src/components/".concat(e):e},i=function(e){if(e.indexOf("/")>-1){var n=r(e.split("/",-1),2),t=n[0],o=n[1];return[a(t),o]}return[a(""),e]};e.exports={getJsFileExtension:o,getStyleSheetExtension:s,extractPathAndComponentName:i,getFileInfo:function(e,n,r,a){return[].concat(t(i(e)),[o(n,r),s(a)])},generatePathWithPrefix:a}},function(e,n,t){e.exports={classComponentTemplate:t(9)(),componentStyleTemplate:t(10)(),componentTemplate:t(11)(),componentStoryTemplate:t(12)(),componentTestTemplate:t(13)(),storybookConfigTemplate:t(14)(),storybookWebpackConfigTemplate:t(15)()}},function(e,n){var t=function(e,n,t){return{type:e,name:n,message:t}};e.exports={getDefaultPrompts:function(e,n){return e?[t("input","name","What is the name of the component?")]:n?[t("input","name","What is the name of the component?"),t("confirm","isSemicolons","Do you prefer to use semicolons?"),t("confirm","isSavePref","Would you like to save these preferences?")]:[t("input","name","What is the name of the component?"),t("confirm","isJsx","Do you prefer to use the JSX file extension for React files?"),t("confirm","isSemicolons","Do you prefer to use semicolons?"),t("confirm","isSavePref","Would you like to save these preferences?")]},prompt:t}},function(e,n,t){var r=t(17),o=r.classComponentTemplate,s=r.componentStyleTemplate,a=r.componentTemplate,i=(r.componentStoryTemplate,r.componentTestTemplate),c=r.storybookConfigTemplate,p=r.storybookWebpackConfigTemplate,u=t(4),f=function(e,n,t,r){return[d("".concat(e,"/{{snakeCase name}}/{{snakeCase name}}.").concat(n),"component"===r?a:o),d("".concat(e,"/{{snakeCase name}}/{{snakeCase name}}.").concat(t),s)]},l=function(e,n,t,r,o){t&&e.push(d("".concat(n,"/{{snakeCase name}}/__test__/{{snakeCase name}}.test.").concat(o),i)),r&&(e.push(d("".concat(n,"/{{snakeCase name}}/__test__/{{snakeCase name}}.story.js"),i)),e.push(d("".concat(u.path,"/.storybook/config.js"),c,!0)),e.push(d("".concat(u.path,"/.storybook/webpack.config.js"),p,!0)))},m=function(e,n,t,r){!r&&e.push(h("".concat(n,"/{{snakeCase name}}/{{snakeCase name}}.").concat(t),/;\n/g,"\n"))},y=function(e,n,t,r){r&&e.push(d("".concat(u.path,"/react.preferences.json"),JSON.stringify({isSemicolons:n,isJsx:t},null,2)))},d=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:"add",path:e,template:n,skipIfExists:t}},h=function(e,n,t){return{type:"modify",path:e,pattern:n,template:t}};e.exports={generateComponentActions:function(e,n,t,r,o,s,a,i){var c=f(n,t,r,e);return l(c,n,o,s,t),m(c,n,t,a),y(c,a,"jsx"===t,i),c},generateBaseFiles:f,addTestFiles:l,addOtherPreferences:m,addSavePreferences:y,addAction:d,modifyAction:h}}]);