/* Accès privé par code (démo). Protection légère, côté navigateur. */
(function(){
  var CODE='PAIX2026',KEY='paix_vitrine_acces';
  var REAL='Hôtel de la Paix Brazzaville — Hébergement, restaurant et bar à Poto-Poto',T0=document.title;
  function real(){if(/Accès privé/.test(T0))document.title=REAL}
  try{if(localStorage.getItem(KEY)==='1'){real();return}}catch(e){}
  document.title='Accès privé — Hôtel de la Paix';
  var st=document.createElement('style');
  st.textContent='html.gated body>*:not(#gate-ov){visibility:hidden!important}html.gated{overflow:hidden}'+
  '#gate-ov{position:fixed;inset:0;z-index:99999;background:#f4f8f3;display:flex;align-items:center;justify-content:center;padding:1rem;font-family:"Hanken Grotesk",system-ui,sans-serif;color:#1b2a4a}'+
  '#gate-ov .bx{width:100%;max-width:24rem;text-align:center}#gate-ov img{height:4rem;width:auto;margin:0 auto 1rem}'+
  '#gate-ov h1{font:800 1.5rem/1.2 Montserrat,system-ui,sans-serif;margin:0 0 .5rem}#gate-ov p{margin:.3rem 0;color:#55637a;line-height:1.5}'+
  '#gate-ov input{width:100%;font:inherit;font-size:1.2rem;text-align:center;letter-spacing:.2em;padding:.8rem;border:1px solid #1b2a4a;border-radius:.4rem;margin:1rem 0 .5rem;background:#fff;color:#1b2a4a}'+
  '#gate-ov button{width:100%;font:700 .9rem Montserrat,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;background:#4a9a2c;color:#fff;border:0;border-radius:.4rem;padding:.9rem;cursor:pointer}#gate-ov .e{color:#b3261e;min-height:1.4rem;font-size:.95rem}';
  document.head.appendChild(st);document.documentElement.classList.add('gated');
  function build(){
    var d=document.createElement('div');d.id='gate-ov';
    d.innerHTML='<form class="bx" autocomplete="off"><img src="logo.png" alt=""><h1>Accès privé</h1><p>Cette démonstration est réservée à la direction de l\'Hôtel de la Paix. Saisissez le code reçu.</p><input type="text" autocapitalize="characters" placeholder="CODE" aria-label="Code d\'accès"><div class="e" role="alert"></div><button type="submit">Accéder</button></form>';
    document.body.appendChild(d);
    var f=d.querySelector('form'),i=d.querySelector('input'),e=d.querySelector('.e');setTimeout(function(){i.focus()},50);
    f.addEventListener('submit',function(ev){ev.preventDefault();
      if(i.value.replace(/\s/g,'').toUpperCase()===CODE){try{localStorage.setItem(KEY,'1')}catch(x){}document.documentElement.classList.remove('gated');d.remove();document.title=/Accès privé/.test(T0)?REAL:T0}
      else e.textContent='Code incorrect. Vérifiez et réessayez.'});
  }
  if(document.body)build();else document.addEventListener('DOMContentLoaded',build);
})();
