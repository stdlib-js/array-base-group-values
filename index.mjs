// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function e(e,n){var o,i,d,m,l,a,h,g;if(d=e.length,n.length!==d)throw new RangeError(r("1nLFI"));for(o=s(e),i=s(n),m={},g=0;g<d;g++)h=o(e,g),a=m[l=i(n,g).toString()],t(a)?a.push(h):m[l]=[h];return m}export{e as default};
//# sourceMappingURL=index.mjs.map
