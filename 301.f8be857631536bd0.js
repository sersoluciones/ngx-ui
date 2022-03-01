"use strict";(self.webpackChunkshowcase=self.webpackChunkshowcase||[]).push([[301],{8301:(E,C,c)=>{c.r(C),c.d(C,{UtilsModule:()=>j});var m={};c.r(m),c.d(m,{LongClickExample:()=>y});var u={};c.r(u),c.d(u,{CookiesExample:()=>P});var g={};c.r(g),c.d(g,{PrefersColorSchemeExample:()=>O});var Z=c(1115),e=c(6435);let v=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["showcase-password"]],decls:2,vars:0,template:function(n,t){1&n&&(e.TgZ(0,"p"),e._uU(1,"password works!"),e.qZA())},styles:[""]}),o})(),x=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["showcase-snackbar"]],decls:2,vars:0,template:function(n,t){1&n&&(e.TgZ(0,"p"),e._uU(1,"snackbar works!"),e.qZA())},styles:[""]}),o})(),U=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["showcase-fullscreen"]],decls:2,vars:0,template:function(n,t){1&n&&(e.TgZ(0,"p"),e._uU(1,"fullscreen works!"),e.qZA())},styles:[""]}),o})();var d=c(565);const y='<div longPress (onLongPress)="longClick()" (onShortPress)="singleClick()"></div>';var A=c(8316),h=c(8771);let b=(()=>{class o extends d.P{constructor(){super(...arguments),this.examples=m,this.messageTypeClick="Clic aqu\xed para probar"}singleClick(){this.messageTypeClick="Clic corto",this.clearMessageTypeClick()}longClick(){this.messageTypeClick="Clic prolongado",this.clearMessageTypeClick()}clearMessageTypeClick(){setTimeout(()=>{this.messageTypeClick="Clic aqu\xed para probar"},2e3)}}return o.\u0275fac=function(){let s;return function(t){return(s||(s=e.n5z(o)))(t||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["showcase-click"]],features:[e.qOj],decls:14,vars:2,consts:[["href","#cookies",1,"bttn","icon"],[1,"material-icons"],[1,"description"],["href","https://sersoluciones.github.io/ngx-doc/directives/LongPressDirective.html","target","_blank","rel","noopener noreferrer"],["longPress","",1,"long-click",3,"onLongPress","onShortPress"],[3,"highlight"]],template:function(n,t){1&n&&(e.TgZ(0,"h2")(1,"a",0)(2,"span",1),e._uU(3,"link"),e.qZA()(),e._uU(4," Clic \xf3 Toque prolongado\n"),e.qZA(),e.TgZ(5,"p",2),e._uU(6," ("),e.TgZ(7,"a",3),e._uU(8,"longPress"),e.qZA(),e._uU(9,") Directiva para detectar click cortos \xf3 prolongados para eventos de mouse o pantallas t\xe1ctiles\n"),e.qZA(),e.TgZ(10,"div",4),e.NdJ("onLongPress",function(){return t.longClick()})("onShortPress",function(){return t.singleClick()}),e._uU(11),e.qZA(),e.TgZ(12,"pre"),e._UZ(13,"code",5),e.qZA()),2&n&&(e.xp6(11),e.hij(" ",t.messageTypeClick,"\n"),e.xp6(2),e.Q6J("highlight",t.examples.LongClickExample))},directives:[A.T,h.y$],styles:[".long-click[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;background-color:red;padding:32px;border-radius:12px;color:#fff;cursor:pointer}"]}),o})();const P="import { Cookies } from '@sersol/ngx';\n\nCookies.get('Test'); // Obtiene el valor de una cookie\nCookies.set('Test', '123'); // Setea valor de una cookie\nCookies.delete('Test'); // Elimina una cookie\nCookies.deleteAll(); // Elimina todas las cookies";let S=(()=>{class o{constructor(){}getAll(){const n={};if(document.cookie&&""!==document.cookie){const t=document.cookie.split("; ");for(let r=0;r<t.length;r+=1){const a=t[r].split("="),i=decodeURIComponent(a[0].trim()),p=decodeURIComponent(a.slice(1,t[r].length-1).join("="));if("true"===p)n[i]=!0;else if("false"===p)n[i]=!1;else try{n[i]=JSON.parse(p)}catch(f){n[i]=p}}}return n}get(n){const t=this.getAll();return t.hasOwnProperty(n)?t[n]:null}set(n,t,r,a,i,p,f){"object"==typeof t&&(t=JSON.stringify(t));let l=encodeURIComponent(n)+"="+encodeURIComponent(t)+";";r&&(l+="number"==typeof r?"expires="+new Date(1e3*r).toUTCString()+";":"expires="+r.toUTCString()+";"),a&&(l+="path="+a+";"),i&&(l+="domain="+i+";"),p&&(l+="secure;"),f&&(l+="sameSite="+f+";"),document.cookie=l}delete(n,t,r){this.set(n,"",new Date("Thu, 01 Jan 1970 00:00:01 GMT"),t,r)}deleteAll(){const n=document.cookie.split(";");for(let t=0;t<n.length;t++){const r=n[t],a=r.indexOf("="),i=a>-1?r.substr(0,a):r;document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),w=(()=>{class o extends d.P{constructor(n,t){super(n),this.injectorObj=n,this.cookies=t,this.examples=u}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(e.zs3),e.Y36(S))},o.\u0275cmp=e.Xpm({type:o,selectors:[["showcase-cookies"]],features:[e.qOj],decls:12,vars:1,consts:[["href","#cookies",1,"bttn","icon"],[1,"material-icons"],[1,"description"],["href","https://sersoluciones.github.io/ngx-ui-doc/classes/_cookie_.cookies.html","target","_blank","rel","noopener noreferrer"],[3,"highlight"]],template:function(n,t){1&n&&(e.TgZ(0,"h2")(1,"a",0)(2,"span",1),e._uU(3,"link"),e.qZA()(),e._uU(4," Cookies\n"),e.qZA(),e.TgZ(5,"p",2),e._uU(6," ("),e.TgZ(7,"a",3),e._uU(8,"Cookies"),e.qZA(),e._uU(9,") Clase abstracta para obtener, actualizar y borrar cookies en el navegador web\n"),e.qZA(),e.TgZ(10,"pre"),e._UZ(11,"code",4),e.qZA()),2&n&&(e.xp6(11),e.Q6J("highlight",t.examples.CookiesExample))},directives:[h.y$],styles:[""]}),o})();var k=c(6114);const O="import { PrefersColorScheme } from '@sersol/ngx';\n\nconstructor(colorscheme: PrefersColorSchemeService) {\n    colorscheme.init();\n    colorscheme.watch();\n}";var _=c(1009),q=c(9808);const T=function(o){return{blue:o}},M=[{path:"theme",component:(()=>{class o extends d.P{constructor(n,t){super(n),this.injectorObj=n,this.colorscheme=t,this.examples=g}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(e.zs3),e.Y36(_.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e.qOj],decls:40,vars:7,consts:[["href","#color-schema",1,"bttn","icon"],[1,"material-icons"],[1,"description"],["href","n-ui-doc/classes/_prefers_color_scheme_.preferscolorscheme.html","target","_blank","rel","noopener noreferrer"],[1,"dark-os-config"],[1,"item"],["href","assets/dark-mac.png","target","_blank","rel","noopener noreferrer"],["src","assets/dark-mac.png","alt","macOS"],["href","assets/dark-windows.png","target","_blank","rel","noopener noreferrer"],["src","assets/dark-windows.png","alt","Windows"],["href","assets/dark-ios.jpeg","target","_blank","rel","noopener noreferrer"],["src","assets/dark-ios.jpeg","alt","iOS"],["href","assets/dark-android.png","target","_blank","rel","noopener noreferrer"],["src","assets/dark-android.png","alt","Android"],[1,"bttn-group"],["type","button",1,"bttn",3,"ngClass","click"],[3,"highlight"]],template:function(n,t){1&n&&(e.TgZ(0,"h2")(1,"a",0)(2,"span",1),e._uU(3,"link"),e.qZA()(),e._uU(4," Tema claro/oscuro\n"),e.qZA(),e.TgZ(5,"p",2),e._uU(6," ("),e.TgZ(7,"a",3),e._uU(8,"PrefersColorScheme"),e.qZA(),e._uU(9,") Clase para detectar, cambiar y observar el esquema de color claro/oscuro en conjunto con el sistema operativo anfitri\xf3n\n"),e.qZA(),e.TgZ(10,"div",4)(11,"div",5)(12,"h4"),e._uU(13,"macOS Mojave+"),e.qZA(),e.TgZ(14,"a",6),e._UZ(15,"img",7),e.qZA()(),e.TgZ(16,"div",5)(17,"h4"),e._uU(18,"Windows 10 (October 2018)+"),e.qZA(),e.TgZ(19,"a",8),e._UZ(20,"img",9),e.qZA()(),e.TgZ(21,"div",5)(22,"h4"),e._uU(23,"iOS 13+"),e.qZA(),e.TgZ(24,"a",10),e._UZ(25,"img",11),e.qZA()(),e.TgZ(26,"div",5)(27,"h4"),e._uU(28,"Android 10+"),e.qZA(),e.TgZ(29,"a",12),e._UZ(30,"img",13),e.qZA()()(),e.TgZ(31,"p",2),e._uU(32,"\xd3 puedes controlar de manera manual el esquema de color independiente del sistema operativo"),e.qZA(),e.TgZ(33,"div",14)(34,"button",15),e.NdJ("click",function(){return t.colorscheme.enableLight()}),e._uU(35,"Claro"),e.qZA(),e.TgZ(36,"button",15),e.NdJ("click",function(){return t.colorscheme.enableDark()}),e._uU(37,"Oscuro"),e.qZA()(),e.TgZ(38,"pre"),e._UZ(39,"code",16),e.qZA()),2&n&&(e.xp6(34),e.Q6J("ngClass",e.VKq(3,T,!t.colorscheme.dark)),e.xp6(2),e.Q6J("ngClass",e.VKq(5,T,t.colorscheme.dark)),e.xp6(3),e.Q6J("highlight",t.examples.PrefersColorSchemeExample))},directives:[q.mk,h.y$],styles:[".dark-os-config[_ngcontent-%COMP%]{width:100%;overflow-x:auto;display:flex}.dark-os-config[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{text-align:center}.dark-os-config[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;max-height:300px;margin:12px;box-shadow:2px 2px 12px #000;border-radius:4px}"]}),o})()},{path:"cookies",component:w},{path:"click",component:b},{path:"fullscreen",component:U},{path:"snackbar",component:x},{path:"password",component:v}];let F=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[k.Bz.forChild(M)],k.Bz]}),o})(),j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[Z.m,F]]}),o})()}}]);