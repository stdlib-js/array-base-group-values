"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=f(function(p,h){
var m=require('@stdlib/assert-is-array/dist'),o=require('@stdlib/array-base-resolve-getter/dist');function c(e,r){var u,g,n,a,i,v,s,t;if(n=e.length,r.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(u=o(e),g=o(r),a={},t=0;t<n;t++)s=u(e,t),i=g(r,t).toString(),v=a[i],m(v)?v.push(s):a[i]=[s];return a}h.exports=c
});var d=l();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
