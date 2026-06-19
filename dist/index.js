"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var l=f(function(p,h){"use strict";var m=require("@stdlib/assert-is-array"),o=require("@stdlib/array-base-resolve-getter");function c(e,r){var a,g,i,n,v,s,u,t;if(i=e.length,r.length!==i)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(a=o(e),g=o(r),n={},t=0;t<i;t++)u=a(e,t),v=g(r,t).toString(),s=n[v],m(s)?s.push(u):n[v]=[u];return n}h.exports=c});var d=l();module.exports=d;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
