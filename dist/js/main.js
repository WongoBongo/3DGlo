(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),l=()=>{let t=new Date("8 december 2023").getTime(),l=(new Date).getTime();console.log(l);let c=Math.floor((t-l)/1e3);if(c<=0)return e.textContent="00",n.textContent="00",o.textContent="00",void clearInterval(r);let m=Math.floor(c/3600%24),s=Math.floor(c/60%60),i=Math.floor(c%60);e.textContent=("0"+m).slice(-2),n.textContent=("0"+s).slice(-2),o.textContent=("0"+i).slice(-2)};l();const r=setInterval(l,1e3)})()})();