/* Site behaviour, moved from the original inline scripts. */
(function(){var w=window,o=w.addEventListener;if(document.readyState==='complete'){w.__aaRestore=function(){w.addEventListener=o};w.addEventListener=function(t,f,p){if(t==='load'){setTimeout(f,0);return}return o.call(this,t,f,p)}}})();

    (function(){var el=document.getElementById('greet');if(!el)return;var t;
    function g(h){return h>=5&&h<12?'hey, good morning!':h>=12&&h<17?'hey, good afternoon!':'hey, good evening!'}
    function set(){var d=new Date(),txt=g(d.getHours());if(el.textContent!==txt)el.textContent=txt;
     var n=new Date(d),hs=[5,12,17],nx=null;for(var i=0;i<3;i++){n.setHours(hs[i],0,0,0);if(n>d){nx=new Date(n);break}}
     if(!nx){nx=new Date(d);nx.setDate(nx.getDate()+1);nx.setHours(5,0,0,0)}
     clearTimeout(t);t=setTimeout(set,Math.max(1000,nx-d+500))}
    set();
    document.addEventListener('visibilitychange',function(){if(!document.hidden)set()});
    addEventListener('pageshow',set);addEventListener('pagehide',function(){clearTimeout(t)});
    })();
    
;

(function(){
var d=document,r=d.documentElement;
d.getElementById('tg').onclick=function(){var n=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('aa-theme',n)}catch(e){}};

var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
d.querySelectorAll('.st').forEach(function(s){
 var ox,oy,sx=0,sy=0,dr=false;
 s.addEventListener('pointermove',function(e){var b=s.getBoundingClientRect();
  s.style.setProperty('--x',((e.clientX-b.left)/b.width*100)+'%');s.style.setProperty('--y',((e.clientY-b.top)/b.height*100)+'%');
  if(dr){sx=e.clientX-ox;sy=e.clientY-oy;s.style.setProperty('--dx',sx+'px');s.style.setProperty('--dy',sy+'px')}});
 if(fine){
  s.addEventListener('pointerdown',function(e){dr=true;ox=e.clientX-sx;oy=e.clientY-sy;s.setPointerCapture(e.pointerId);s.classList.add('drag')});
  s.addEventListener('pointerup',function(){dr=false;s.classList.remove('drag')});
 }else s.addEventListener('click',function(){s.classList.toggle('peeled')});
});
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
 d.querySelectorAll('.rv').forEach(function(x){io.observe(x)});
 var links={};d.querySelectorAll('nav a[href^="#"]').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
 var so=new IntersectionObserver(function(es){es.forEach(function(e){var a=links[e.target.id];if(a){a.classList.toggle('on',e.isIntersecting);if(e.isIntersecting)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')}})},{rootMargin:'-40% 0px -50% 0px'});
 Object.keys(links).forEach(function(k){var el=d.getElementById(k);if(el)so.observe(el)});
}else d.querySelectorAll('.rv').forEach(function(x){x.classList.add('in')});
})();

;

(function(){var t=document.getElementById('trk');if(!t)return;var dn=false,sx=0,sl=0,mv=0;
t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;dn=true;mv=0;sx=e.clientX;sl=t.scrollLeft});
addEventListener('pointermove',function(e){if(!dn)return;var dx=e.clientX-sx;if(Math.abs(dx)>3){mv=1;t.classList.add('drag')}t.scrollLeft=sl-dx});
addEventListener('pointerup',function(){dn=false;t.classList.remove('drag')});
})();

;

(function(){var d=document,r=d.querySelector('.hero');if(!r)return;
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,wms=[].slice.call(d.querySelectorAll('.wm')),L=[];
wms.forEach(function(p){p.textContent='';p.dataset.t.split('|').forEach(function(line){var wl=d.createElement('span');wl.className='wl';
 line.split('').forEach(function(c){var s=d.createElement('span');s.textContent=c===' '?'\u00a0':c;wl.appendChild(s);L.push({el:s,p:p,w:800,v:''})});p.appendChild(wl)})});
function fit(){wms.forEach(function(p){if(!p.offsetParent)return;var C=p.parentNode.clientWidth,sp=[].slice.call(p.querySelectorAll('.wl>span')),m=0;
 sp.forEach(function(s){s.style.width='';s.style.fontVariationSettings='"wght" 800'});p.style.fontSize='100px';
 [].slice.call(p.children).forEach(function(l){m=Math.max(m,l.getBoundingClientRect().width)});
 p.style.fontSize=Math.min(200,100*C/m)+'px';p.classList.add('ok');
 sp.forEach(function(s){s.style.width=s.getBoundingClientRect().width+'px'})});
 L.forEach(function(o){o.w=800;o.v=''})}
var mx=0,my=0,on=false,raf=0;
function tick(){raf=0;var busy=false;
 L.forEach(function(o){if(!o.p.offsetParent)return;var b=o.el.getBoundingClientRect(),t=on?Math.max(0,1-Math.hypot(mx-(b.left+b.width/2),my-(b.top+b.height/2))/400):0;
  t=t*t*(3-2*t);var tg=800-600*t;o.w+=(tg-o.w)*.18;if(Math.abs(tg-o.w)>.6)busy=true;else o.w=tg;
  var v='"wght" '+o.w.toFixed(0);if(v!==o.v){o.v=v;o.el.style.fontVariationSettings=v}});
 if(busy||on)raf=requestAnimationFrame(tick)}
if(!reduce){
 r.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;mx=e.clientX;my=e.clientY;on=true;if(!raf)raf=requestAnimationFrame(tick)});
 r.addEventListener('pointerleave',function(){on=false;if(!raf)raf=requestAnimationFrame(tick)});
}
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(fit,120)});
addEventListener('load',fit);(d.fonts&&d.fonts.ready?d.fonts.ready:Promise.resolve()).then(fit);fit();
d.querySelectorAll('.sk').forEach(function(s){
 s.addEventListener('pointermove',function(e){var b=s.getBoundingClientRect();s.style.setProperty('--x',((e.clientX-b.left)/b.width*100)+'%');s.style.setProperty('--y',((e.clientY-b.top)/b.height*100)+'%')});
 s.addEventListener('click',function(){s.classList.toggle('peeled')})});
})();

;

(function(){var n=document.querySelector('nav'),h=document.querySelector('.hero'),t=0;if(!n||!h)return;
function f(){t=0;n.classList.toggle('show',h.getBoundingClientRect().bottom<innerHeight*.8)}
function q(){if(!t)t=requestAnimationFrame(f)}
addEventListener('scroll',q,{passive:true});addEventListener('resize',q);f();
})();

;

(function(){var d=document;
var pu=[].slice.call(d.querySelectorAll('.pu')),ft=d.getElementById('contact'),vis=true;
if('IntersectionObserver' in window&&ft)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(ft);
addEventListener('pointermove',function(e){if(!vis)return;pu.forEach(function(p){var b=p.parentNode.getBoundingClientRect(),dx=e.clientX-(b.left+b.width/2),dy=e.clientY-(b.top+b.height/2),m=Math.min(1,Math.hypot(dx,dy)/180),a=Math.atan2(dy,dx);
 p.style.transform='translate(calc(-50% + '+(Math.cos(a)*b.width*.2*m).toFixed(1)+'px),calc(-50% + '+(Math.sin(a)*b.height*.26*m).toFixed(1)+'px))'})},{passive:true});
})();

;

(function(){var d=document,B=[].slice.call(d.querySelectorAll('.stt')).map(function(t){return{t:t,st:t.querySelector('.stp'),ws:[].slice.call(t.querySelectorAll('.w')),free:false}}),tk=0;if(!B.length)return;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){B.forEach(function(b){b.t.classList.add('free');b.ws.forEach(function(w){w.style.opacity=1})});return}
function chk(){B.forEach(function(b){b.t.classList.remove('free');b.free=b.st.scrollHeight>innerHeight+2;if(b.free)b.t.classList.add('free')})}
function f(){tk=0;var vh=innerHeight;B.forEach(function(b){var r=b.t.getBoundingClientRect(),n=b.ws.length,p;if(r.bottom<-50||r.top>vh+50)return;
p=b.free?(vh*.85-r.top)/(r.height*.9):-r.top/(r.height-vh)/.8;p=Math.min(1,Math.max(0,p));
for(var i=0;i<n;i++){var q=Math.min(1,Math.max(0,(p*(n+3)-i)/3));b.ws[i].style.opacity=(.16+.84*q).toFixed(3)}})}
function q(){if(!tk)tk=requestAnimationFrame(f)}
addEventListener('scroll',q,{passive:true});
addEventListener('resize',function(){chk();q()});addEventListener('load',function(){chk();q()});
if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){chk();q()});
chk();f();
})();

;

(function(){document.querySelectorAll('.acc .ah').forEach(function(b){b.addEventListener('click',function(){
 var li=b.parentNode,open=!li.classList.contains('open');
 document.querySelectorAll('.acc li').forEach(function(x){x.classList.remove('open');x.querySelector('.ah').setAttribute('aria-expanded','false')});
 if(open){li.classList.add('open');b.setAttribute('aria-expanded','true')}})})})();

;

/* Rotating footer phrase. Edit the list in the data-phrases attribute of .rot (separate phrases with |). */
(function(){var root=document.querySelector('.rot');if(!root)return;
var list=root.dataset.phrases.split('|'),cols=['var(--lime)','var(--pink)','var(--lav)'],INTERVAL=2600,
 win=root.querySelector('.rw'),sr=document.querySelector('.rsr'),h2=root.closest('h2'),
 reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
win.textContent='';
var ps=list.map(function(t,i){var s=document.createElement('span');s.className='rp'+(i?'':' on');s.textContent=t;win.appendChild(s);return s});
if(sr)sr.textContent='So, what are we '+list.slice(0,-1).join(', ')+' or '+list[list.length-1]+' today?';
root.style.setProperty('--c',cols[0]);
if(reduce||list.length<2)return;
var i=0,tm=0,seen=true,io=null,tidy=0;
function next(){var p=ps[i];p.classList.remove('on');p.classList.add('out');
 i=(i+1)%ps.length;var n=ps[i];n.classList.remove('out');n.classList.add('on');root.style.setProperty('--c',cols[i%cols.length]);
 clearTimeout(tidy);tidy=setTimeout(function(){p.classList.remove('out')},800)}
function stop(){clearTimeout(tm);tm=0}
function start(){if(tm||!seen||document.hidden)return;tm=setTimeout(function(){tm=0;next();start()},INTERVAL)}
document.addEventListener('visibilitychange',function(){document.hidden?stop():start()});
if('IntersectionObserver' in window){io=new IntersectionObserver(function(e){seen=e[0].isIntersecting;seen?start():stop()});io.observe(h2)}else start();
addEventListener('pagehide',function(){stop();clearTimeout(tidy);if(io)io.disconnect()});
})();

;

(function(){var ps=document.querySelector('.ps');if(!ps)return;
var cs=[].slice.call(ps.querySelectorAll('.pc')),tabs=cs.map(function(c){return c.querySelector('.pc-tab')}),N=cs.length,
 reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,tk=0,top=92,front=null;
function flat(){return ps.classList.contains('flat')}
function size(){ps.style.setProperty('--bh','0px');var bh=0,h=0;cs.forEach(function(c){bh=Math.max(bh,c.querySelector('.pc-body').offsetHeight)});
 ps.style.setProperty('--bh',bh+'px');cs.forEach(function(c){var b=c.querySelector('.pc-body');h=Math.max(h,b.offsetTop+b.offsetHeight)});return h}
function settled(){return !flat()&&cs[N-1].getBoundingClientRect().top<=top+1}
function reset(){front=null;ps.classList.remove('sw');cs.forEach(function(c){c.style.zIndex=''})}
function marks(){var on=settled()?(front===null?N-1:front):-1;tabs.forEach(function(t,k){if(k===on)t.setAttribute('aria-current','true');else t.removeAttribute('aria-current')})}
var PILL=100;
function copyNeed(){var m=0;cs.forEach(function(c){var cb=c.getBoundingClientRect(),cp=c.querySelector('.pc-copy').getBoundingClientRect();m=Math.max(m,cp.bottom-cb.top)});return m}
function lvl(a){ps.classList.remove('c1','c2');a.forEach(function(c){ps.classList.add(c)});top=parseFloat(getComputedStyle(ps).getPropertyValue('--top'))||92}
function chk(){reset();var lv=[[],['c1'],['c1','c2']],ok=false;ps.classList.remove('flat','c1','c2','fit');ps.style.removeProperty('--imh');
 /* Stacking is scroll-position layout, not animation, so it stays on with Reduce Motion. */
 for(var i=0;i<lv.length&&!ok;i++){lvl(lv[i]);ok=top+size()+PILL<=innerHeight}
 /* tightest level: allow the floating menu to cover only the bottom of the image */
 if(!ok){lvl(lv[2]);var sz=size(),im=cs[0].querySelector('.pc-img').offsetHeight;ok=top+sz-.3*im+PILL<=innerHeight;
  /* phones: shrink the image until the card fits the screen, instead of switching stacking off */
  if(!ok&&innerWidth<768){var nh=Math.max(96,Math.floor(im-(top+sz+PILL-innerHeight)));ps.style.setProperty('--imh',nh+'px');ps.classList.add('fit');size();ok=true}}
 if(!ok){lvl([]);ps.classList.add('flat');size()}}
function f(){tk=0;
 if(flat()){cs.forEach(function(c){c.style.setProperty('--q',0)});return}
 if(front!==null){if(settled()){marks();return}reset()}
 for(var i=0;i<N-1;i++){var nt=cs[i+1].getBoundingClientRect().top,h=cs[i].offsetHeight,q=1-(nt-top)/(h*.9);cs[i].style.setProperty('--q',Math.max(0,Math.min(1,q)).toFixed(3))}
 cs[N-1].style.setProperty('--q',0);marks()}
function bring(i){
 if(flat()){cs[i].scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});return}
 if(!settled()){var gap=parseFloat(getComputedStyle(cs[0]).marginBottom)||0,y=ps.getBoundingClientRect().top+scrollY+i*(cs[0].offsetHeight+gap)-top;scrollTo({top:y,behavior:reduce?'auto':'smooth'});return}
 front=i;ps.classList.add('sw');
 cs.forEach(function(c,k){var on=k===i;c.style.zIndex=on?20:k+1;c.style.setProperty('--q',on?0:1)});marks()}
tabs.forEach(function(t,i){t.addEventListener('click',function(){bring(i)})});
function q(){if(!tk)tk=requestAnimationFrame(f)}
addEventListener('scroll',q,{passive:true});
addEventListener('resize',function(){chk();q()});addEventListener('load',function(){chk();q()});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){chk();q()});
chk();
if(window.visualViewport){var vw0=innerWidth,vt=0;visualViewport.addEventListener('resize',function(){if(innerWidth!==vw0){vw0=innerWidth;return}clearTimeout(vt);vt=setTimeout(function(){chk();q()},150)})};f();
})();

;

(function(){
var cs=document.getElementById('cs');if(!cs)return;
var pages=[].slice.call(cs.querySelectorAll('.cp')),RE=/^#case\/([\w-]+)$/,opened=false,deep=false,last=null,
 reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,locked=[].slice.call(document.querySelectorAll('header,main,footer,nav'));
function show(slug){var pg=null;pages.forEach(function(p){var on=p.dataset.slug===slug;p.hidden=!on;if(on)pg=p});if(!pg){hide();return}
 var ml=pg.querySelector('.cx-mail');if(ml)ml.href='mailto:adeolaadeyoyin@gmail.com?subject='+encodeURIComponent('About '+pg.dataset.title);
 if(opened)return;opened=true;cs.hidden=false;cs.scrollTop=0;
 requestAnimationFrame(function(){requestAnimationFrame(function(){cs.classList.add('open')})});
 document.documentElement.classList.add('lock');locked.forEach(function(e){e.inert=true});
 setTimeout(function(){cs.querySelector('.cs-x').focus()},60)}
function hide(){if(!opened)return;opened=false;cs.classList.remove('open');
 setTimeout(function(){if(!opened)cs.hidden=true},reduce?0:380);document.documentElement.classList.remove('lock');locked.forEach(function(e){e.inert=false});
 if(last&&last.focus)last.focus({preventScroll:true})}
function route(){var m=RE.exec(location.hash);if(m){if(!opened&&!last)deep=true;show(m[1]);return}hide()}
function closeCase(){deep=false;location.hash='projects'}
[].slice.call(document.querySelectorAll('.pc-body .btn.link')).forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();last=a;location.hash=a.getAttribute('href').slice(1)})});
cs.querySelector('.cs-x').addEventListener('click',closeCase);
document.addEventListener('keydown',function(e){if(!opened)return;
 if(e.key==='Escape'){e.preventDefault();closeCase()}
 else if(e.key==='Tab'){var f=[].slice.call(cs.querySelectorAll('a[href],button')).filter(function(x){return x.offsetParent!==null});if(!f.length)return;
  var a=f[0],b=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus()}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus()}}});
addEventListener('hashchange',route);route();
})();

;

(function(){var d=document;function fit(){d.querySelectorAll('.wm').forEach(function(p){if(!p.offsetParent)return;var cw=p.parentElement.clientWidth,w=0;[].forEach.call(p.querySelectorAll('.wl'),function(wl){var a=wl.firstElementChild,z=wl.lastElementChild;if(a&&z)w=Math.max(w,z.getBoundingClientRect().right-a.getBoundingClientRect().left)});if(w>cw+1){var k=cw/w*.97;p.style.fontSize=(parseFloat(getComputedStyle(p).fontSize)*k)+'px';[].forEach.call(p.querySelectorAll('.wl>span'),function(x){x.style.width=(x.getBoundingClientRect().width*k)+'px'})}})}
var t;function run(){clearTimeout(t);t=setTimeout(fit,220)}
addEventListener('resize',run);addEventListener('load',run);if(d.fonts&&d.fonts.ready)d.fonts.ready.then(run);setTimeout(run,400);setTimeout(run,1500);
})();

;

(function(){var d=document,z;function close(){if(!z)return;var f=z.prev;z.el.remove();z=null;if(f&&f.focus)f.focus()}
function open(img,btn){var o=d.createElement('div');o.className='fz';o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label',img.alt);var c=img.cloneNode();c.removeAttribute('loading');o.appendChild(c);var x=d.createElement('button');x.type='button';x.className='fz-x';x.setAttribute('aria-label','Close full size view');x.textContent='\u00d7';o.appendChild(x);o.addEventListener('click',close);d.body.appendChild(o);z={el:o,prev:btn};x.focus()}
d.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.cx-zoom');if(b){e.preventDefault();open(b.querySelector('img'),b)}});
d.addEventListener('keydown',function(e){if(z&&e.key==='Escape'){e.stopImmediatePropagation();e.preventDefault();close()}},true)})();

;

(function(){var d=document,el=d.getElementById('cf');if(!el)return;
/* designs: {src,alt}; the set repeats to fill the loop */
var DESIGNS=[{"src": "/images/design-nestl-nigeria-retailers-and-wholesalers-recognit.webp", "alt": "Nestlé Nigeria retailers and wholesalers recognition day backdrop"}, {"src": "/images/design-teens-hangout-event-banner-for-power-point-tribe.webp", "alt": "Teens Hangout event banner for Power Point Tribe"}, {"src": "/images/design-shopper-mania-retailer-led-shopper-promo-for-mil.webp", "alt": "Shopper Mania retailer-led shopper promo for Milo, Nescafé, Golden Morn and Nido"}, {"src": "/images/design-meet-the-team-members-game-night-flyer-for-power.webp", "alt": "Meet the Team Members game night flyer for Power Point Tribe"}, {"src": "/images/design-golden-morn-spotlight-buy-display-and-win-big-re.webp", "alt": "Golden Morn Spotlight “Buy, Display and Win Big” retailer promo flyer"}, {"src": "/images/design-occupy-mid-week-service-flyer-for-power-point-tr.webp", "alt": "Occupy mid-week service flyer for Power Point Tribe"}, {"src": "/images/design-golden-delight-wholesaler-promo-flyer-with-three.webp", "alt": "Golden Delight wholesaler promo flyer with three reward slabs"}, {"src": "/images/design-nido-retailers-win-instant-prizes-save-the-date.webp", "alt": "Nido retailers “Win Instant Prizes” save the date flyer"}],K=['#D4A7F9','#C8FF2E','#FEFAE7','#8fd0ff','#FFB48A','#E55FFE','#A6D0D2'],items=[],i;
var n=DESIGNS.length?DESIGNS.length*Math.ceil(6/DESIGNS.length):7,cards=[];
for(i=0;i<n;i++){var c=d.createElement('div');c.className='cf-c';
 if(DESIGNS.length){var ds=DESIGNS[i%DESIGNS.length],im=d.createElement('img');im.src=ds.src;im.alt=ds.alt;im.draggable=false;c.appendChild(im)}
 else{c.setAttribute('aria-hidden','true');c.innerHTML='<div class="cf-ph" style="--k:'+K[i%K.length]+'"><b>'+('0'+(i+1)).slice(-2)+'</b><span>Design</span></div>'}
 el.appendChild(c);cards.push(c)}
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,pos=0,vel=0,drag=false,lx=0,hover=false,vis=false,raf=0,last=0,G=16;
function layout(){var cw=cards[0].offsetWidth,step=cw+G,total=n*step,W=el.clientWidth,mid=W/2;
 cards.forEach(function(c,k){var rel=(((k*step-pos)%total)+total)%total;if(rel>total/2)rel-=total;
  var dd=rel/step,t=Math.min(1,Math.abs(dd)),e=t*t*(3-2*t),rot=-(dd<0?-1:1)*22*e,sc=1-.15*e;
  c.style.transform='translate3d('+(mid+rel-cw/2)+'px,-50%,0) perspective(1200px) rotateY('+rot.toFixed(2)+'deg) scale('+sc.toFixed(3)+')';
  c.style.zIndex=Math.round(1000-Math.abs(rel))})}
function tick(t){raf=0;var dt=Math.min(.05,(t-last)/1000||.016);last=t;
 if(!drag){pos+=vel*dt;vel*=Math.pow(.04,dt);if(!reduce&&!hover&&Math.abs(vel)<30)pos+=36*dt}
 layout();if(vis)raf=requestAnimationFrame(tick)}
function start(){if(!raf){last=performance.now();raf=requestAnimationFrame(tick)}}
if('IntersectionObserver' in window)new IntersectionObserver(function(en){vis=en[0].isIntersecting;if(vis)start()}).observe(el);else{vis=true;start()}
el.addEventListener('pointerdown',function(e){drag=true;lx=e.clientX;vel=0;el.classList.add('dr');try{el.setPointerCapture(e.pointerId)}catch(_){}});
el.addEventListener('pointermove',function(e){if(e.pointerType==='mouse')hover=true;if(!drag)return;var dx=e.clientX-lx;lx=e.clientX;pos-=dx;vel=-dx*60});
function up(){drag=false;el.classList.remove('dr')}
el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);
el.addEventListener('pointerleave',function(){hover=false});
el.addEventListener('keydown',function(e){var st=cards[0].offsetWidth+G;if(e.key==='ArrowRight'){pos+=st;e.preventDefault();start()}else if(e.key==='ArrowLeft'){pos-=st;e.preventDefault();start()}});
addEventListener('resize',function(){layout()});layout();
})();

;
addEventListener('hashchange',function(){var c=document.getElementById('cs');if(c&&location.hash.indexOf('#case/')===0)c.scrollTop=0});
;
(function(){var r=document.querySelector('.cx-sl');if(!r)return;var t=r.querySelector('.cx-sl-t'),bs=[];
function step(){var i=t.children[0];return i?i.getBoundingClientRect().width+16:300}
function upd(){}
bs.forEach(function(b){b.addEventListener('click',function(){t.scrollBy({left:step()*(+b.dataset.dir),behavior:'smooth'})})});
t.addEventListener('scroll',upd,{passive:true});t.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();t.scrollBy({left:step(),behavior:'smooth'})}else if(e.key==='ArrowLeft'){e.preventDefault();t.scrollBy({left:-step(),behavior:'smooth'})}});
addEventListener('resize',upd);setTimeout(upd,300);new MutationObserver(upd).observe(document.getElementById('cs')||document.body,{attributes:true,subtree:true,attributeFilter:['hidden','class']});})();
;if(window.__aaRestore){window.__aaRestore();delete window.__aaRestore}
