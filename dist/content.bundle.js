!function(e){var t={};function n(c){if(t[c])return t[c].exports;var i=t[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(c,i,function(t){return e[t]}.bind(null,i));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){const c=n(2),i=n(3),{fetchTracksById:r}=n(4),{setSubtitle:a}=n(5),s=new c(e=>{if("change"===e.type){const{id:t,...n}=e.detail;a({...n,default:!0})}}),o=new i(e=>{"click"===e.type&&s.toggleShow()});async function l(){s.inject(),o.inject();const e=document.querySelector("[ref=video]");if(!e)return;const t=e.getAttribute("episodeid"),n=await r(t);s.replaceTracks(n),n.length>0?s.change(0):s.change(-1)}new MutationObserver(e=>{let t=0;for(let n=0;n<e.length;n+=1){const{target:c}=e[n];if("div"===c.localName?c.classList.contains("VideoPlayer__Option")&&!c.classList.contains("VideoPlayer__Option--active")&&(s.hide(),t+=1):"video"===c.localName&&c.classList.contains("VideoPlayer__Video")&&(l(),t+=1),2===t)break}}).observe(document.querySelector("body"),{attributes:!0,subtree:!0}),l()},function(e,t){const n="VideoPlayer__QualitySetting",c=n+"--active";class i{constructor(e){this.callback=e,this.tracks=[],this.tracksEl=document.createElement("ul"),this.activeTrack=null,this.el=i.createContainer(),this.el.append(this.tracksEl)}static createContainer(){const e=document.createElement("div");e.classList.add(n+"Title"),e.innerText="字幕";const t=document.createElement("div");return t.classList.add(n),t.style.marginRight="50px",t.appendChild(e),t}static createItemEl(e,t,n){const c=document.createElement("li");return c.dataset.id=t,c.innerText=e.label,c.classList.add("VideoPlayer__QualitySelector"),c.addEventListener("click",e=>{n.change(Number.parseInt(e.target.dataset.id,10))}),c}inject(){if(document.contains(this.el))return;const e=document.querySelector("[ref=videoPlayerContainer]"),t=document.querySelector("[ref=videoPlayerContainer] > .VideoPlayer__QualitySetting");e&&t&&e.insertBefore(this.el,t)}appendTracks(e){e.forEach(e=>{const t=this.tracks.length;this.tracks.push(e),this.tracksEl.appendChild(i.createItemEl(e,t,this))})}replaceTracks(e){this.tracks=[],this.tracksEl.innerHTML="",this.tracksEl.appendChild(i.createItemEl({label:"オフ"},-1,this)),this.appendTracks(e),this.activeTrack=0}getTrackData(e){return-1===e?{}:this.tracks[e]}change(e){this.activeTrack=e;const t=this.tracksEl.children;for(let n=0;n<t.length;n+=1)Number.parseInt(t[n].dataset.id,10)===e?t[n].classList.add("VideoPlayer__QualitySelector--active"):t[n].classList.remove("VideoPlayer__QualitySelector--active");this.callback(new CustomEvent("change",{detail:this.getTrackData(e)}))}show(){this.el.classList.add(c)}hide(){this.el.classList.remove(c)}toggleShow(){this.el.classList.contains(c)?this.hide():this.show()}}e.exports=i},function(e,t){class n{constructor(e){this.callback=e;const t=n.createIcon(),c=n.createIconContainer();c.appendChild(t);const i=document.createElement("div");i.classList.add("VideoPlayer__GearIcon"),i.addEventListener("click",()=>{this.callback(new Event("click"))}),i.appendChild(c),this.el=i}static createIcon(){const e=document.createElement("div");e.innerText="字";return Object.entries({margin:"0 auto",height:"30px",width:"20px",fontSize:"20px"}).forEach(([t,n])=>{e.style[t]=n}),e}static createIconContainer(){const e=document.createElement("div");return e.classList.add("SvgIcon"),e.classList.add("SvgIcon--default"),e.classList.add("SvgIcon--medium"),e}inject(){if(document.contains(this.el))return;const e=document.querySelector(".VideoPlayer__Option"),t=document.querySelector(".VideoPlayer__Option > .VideoPlayer__GearIcon");e&&t&&e.insertBefore(this.el,t)}}e.exports=n},function(e,t){let n="https://ichigo-milk-api.herokuapp.com";async function c(e){const t=await fetch(e.src).then(e=>e.text()),n=new Blob([t],{type:"text/vtt"});return{...e,src:URL.createObjectURL(n)}}e.exports={fetchTracksById:async function(e){try{const{subtitles:t}=await fetch(`${n}/episode/${Number.parseInt(e,10)}`).then(e=>e.json());return Promise.all(t.map(c))}catch(e){return[]}},setEndpoint:function(e){n=e}}},function(e,t){function n(){return document.querySelector("[ref=videoPlayerContainer] > video")}function c(e){const t=n();if(!t)return;let c=t.firstElementChild;for(;c;)t.removeChild(c),c=t.firstElementChild;!function(e){const t=n();t&&e.src&&t.appendChild(e)}(e)}e.exports={setSubtitle:function(e){c(function(e){const t=document.createElement("track");return t.kind="subtitles",t.type="text/vtt",Object.entries(e).forEach(([e,n])=>{t[e]=n}),t}(e))}}}]);