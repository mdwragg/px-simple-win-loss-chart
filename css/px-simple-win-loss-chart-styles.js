const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-simple-win-loss-chart-styles">
<template>
<style>
@charset "UTF-8";/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{background-color:var(--px-base-background-color,#fff);font-size:15px;overflow-y:scroll;min-height:100%;box-sizing:border-box}:host,html{color:var(--px-base-text-color,#2c404c);line-height:1.33333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body,figure{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}address,blockquote,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,table,ul{margin-bottom:1rem}li>ol,li>ul{margin-bottom:0}dd,ol,ul{margin-left:2rem}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}*,:after,:before{box-sizing:inherit}:host{/*! Comment to prevent cssmin munging this rule with html above and borking Safari */box-sizing:border-box}.bar{shape-rendering:crispEdges}.px-simple-win-loss-chart-svg{background:var(--px-win-loss-background-color,#fff);margin:0}.bar-chart-bottom-line{stroke:var(--px-win-loss-border-color,#000);stroke-width:1}.px-positive-fill{fill:var(--px-win-loss-positive-fill-color,green)}.px-negative-fill{fill:var(--px-win-loss-negative-fill-color,red)}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;