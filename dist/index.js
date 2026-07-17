"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var i=s(function(f,a){
var n=require("path").resolve,o=require('@stdlib/fs-read-file/dist').sync,u=n(__dirname,"..","data","image.jpg");function v(){var r=o(u);if(r instanceof Error)throw r;return r}a.exports=v
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
