(function(){"use strict";function c(f,r,s){return f.forEach(l=>{let i=[+l[0],+l[1]],o=0,u=r[s].length-1;for(;o<=u;){const n=Math.floor((o+u)/2);if(i[0]===+r[s][n][0]){i[1]?r[s][n]=i:r[s].splice(n,1);break}if(i[1]){if(n===0&&i[0]<+r[s][n][0]+10){r[s].unshift(i);break}else if(n===r[s].length-1&&i[0]>+r[s][n][0]-10){r[s].push(i);break}}else break;+r[s][n][0]<i[0]?u=n-1:o=n+1}}),r}function k(f,r){return f[r]=f[r].map((s,l)=>l===0?(s[2]=+s[1]+10,s):(s[2]=+s[1]+f[r][l-1][2],s)),r==="asks"&&f.asks.reverse(),f}onmessage=f=>{const r=JSON.parse(f.data[1]);let s=f.data[0];c(r.a,s,"asks"),c(r.b,s,"bids"),k(s,"asks"),k(s,"bids"),postMessage(s)}})();