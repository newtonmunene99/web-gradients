System.register(["./p-e5b31868.system.js"],function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var n=function(){function t(t){e(this,t);this.gradients=[];this.pagination=1e3}t.prototype.componentWillLoad=function(){for(var t=0;t<this.pagination;t++){this.gradients=this.gradients.concat([{from:this.randomHex(),to:this.randomHex()}])}};t.prototype.randomHex=function(){var t=256*256*256;return"#"+Math.floor(Math.random()*t).toString(16).toUpperCase().padStart(6,"0")};t.prototype.render=function(){return r("div",{class:"app-home"},this.gradients.map(function(t){return r("gradient-box",{from:t.from,to:t.to})}))};Object.defineProperty(t,"style",{get:function(){return".app-home{padding:10px;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;background-color:#f6f6f6}.app-home gradient-box{margin:20px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}"},enumerable:true,configurable:true});return t}();t("app_home",n)}}});