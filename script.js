(function(){
var o=document.getElementById('overlay'),b=document.getElementById('menuBtn'),x=document.getElementById('menuClose');
function set(v){if(!o)return;o.hidden=!v;b.setAttribute('aria-expanded',v?'true':'false');document.body.style.overflow=v?'hidden':''}
if(b){b.addEventListener('click',function(){set(true)});x.addEventListener('click',function(){set(false)});o.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)})}
var f=document.querySelector('.filters');
if(f){f.addEventListener('click',function(e){var t=e.target.closest('button');if(!t)return;var v=t.getAttribute('data-f');[].forEach.call(f.children,function(c){c.setAttribute('aria-pressed',c===t?'true':'false')});[].forEach.call(document.querySelectorAll('.gal figure'),function(g){g.hidden=!(v==='all'||g.getAttribute('data-c')===v)})})}
})();
