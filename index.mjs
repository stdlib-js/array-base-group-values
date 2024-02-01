// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.1.0-esm/index.mjs";function r(r,s){var n,a,i,d,h,m,o,g;if(i=r.length,s.length!==i)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(n=t(r),a=t(s),d={},g=0;g<i;g++)o=n(r,g),m=d[h=a(s,g).toString()],e(m)?m.push(o):d[h]=[o];return d}export{r as default};
//# sourceMappingURL=index.mjs.map
