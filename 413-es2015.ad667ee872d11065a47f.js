(self.webpackChunk_sersol_ngx=self.webpackChunk_sersol_ngx||[]).push([[413],{8413:function(e,o,n){"use strict";n.r(o),n.d(o,{UtilsModule:function(){return v}});var r={};n.r(r),n.d(r,{LongClickExample:function(){return g}});var t={};n.r(t),n.d(t,{CookiesExample:function(){return f}});var s={};n.r(s),n.d(s,{PrefersColorSchemeExample:function(){return C}});var c=n(4476),a=n(7368);let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["showcase-password"]],decls:2,vars:0,template:function(e,o){1&e&&(a.TgZ(0,"p"),a._uU(1,"password works!"),a.qZA())},styles:[""]}),e})(),l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["showcase-snackbar"]],decls:2,vars:0,template:function(e,o){1&e&&(a.TgZ(0,"p"),a._uU(1,"snackbar works!"),a.qZA())},styles:[""]}),e})(),p=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["showcase-fullscreen"]],decls:2,vars:0,template:function(e,o){1&e&&(a.TgZ(0,"p"),a._uU(1,"fullscreen works!"),a.qZA())},styles:[""]}),e})();var u=n(3836);const g='<div longPress (onLongPress)="longClick()" (onShortPress)="singleClick()"></div>';var d=n(8590),m=n(7792);let h=(()=>{class e extends u.P{constructor(){super(...arguments),this.examples=r,this.messageTypeClick="Clic aqu\xed para probar"}singleClick(){this.messageTypeClick="Clic corto",this.clearMessageTypeClick()}longClick(){this.messageTypeClick="Clic prolongado",this.clearMessageTypeClick()}clearMessageTypeClick(){setTimeout(()=>{this.messageTypeClick="Clic aqu\xed para probar"},2e3)}}return e.\u0275fac=function(){let o;return function(n){return(o||(o=a.n5z(e)))(n||e)}}(),e.\u0275cmp=a.Xpm({type:e,selectors:[["showcase-click"]],features:[a.qOj],decls:14,vars:2,consts:[["href","#cookies",1,"bttn","icon"],[1,"material-icons"],[1,"description"],["href","https://sersoluciones.github.io/ngx-doc/directives/LongPressDirective.html","target","_blank","rel","noopener noreferrer"],["longPress","",1,"long-click",3,"onLongPress","onShortPress"],[3,"highlight"]],template:function(e,o){1&e&&(a.TgZ(0,"h2"),a.TgZ(1,"a",0),a.TgZ(2,"span",1),a._uU(3,"link"),a.qZA(),a.qZA(),a._uU(4," Clic \xf3 Toque prolongado\n"),a.qZA(),a.TgZ(5,"p",2),a._uU(6," ("),a.TgZ(7,"a",3),a._uU(8,"longPress"),a.qZA(),a._uU(9,") Directiva para detectar click cortos \xf3 prolongados para eventos de mouse o pantallas t\xe1ctiles\n"),a.qZA(),a.TgZ(10,"div",4),a.NdJ("onLongPress",function(){return o.longClick()})("onShortPress",function(){return o.singleClick()}),a._uU(11),a.qZA(),a.TgZ(12,"pre"),a._UZ(13,"code",5),a.qZA()),2&e&&(a.xp6(11),a.hij(" ",o.messageTypeClick,"\n"),a.xp6(2),a.Q6J("highlight",o.examples.LongClickExample))},directives:[d.T,m.y$],styles:[".long-click[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;background-color:red;padding:32px;border-radius:12px;color:#fff;cursor:pointer}"]}),e})();const f="import { Cookies } from '@sersol/ngx';\n\nCookies.get('Test'); // Obtiene el valor de una cookie\nCookies.set('Test', '123'); // Setea valor de una cookie\nCookies.delete('Test'); // Elimina una cookie\nCookies.deleteAll(); // Elimina todas las cookies";let k=(()=>{class e{constructor(){}getAll(){const e={};if(document.cookie&&""!==document.cookie){const n=document.cookie.split("; ");for(let r=0;r<n.length;r+=1){const t=n[r].split("="),s=decodeURIComponent(t[0].trim()),c=decodeURIComponent(t.slice(1,n[r].length-1).join("="));if("true"===c)e[s]=!0;else if("false"===c)e[s]=!1;else try{e[s]=JSON.parse(c)}catch(o){e[s]=c}}}return e}get(e){const o=this.getAll();return o.hasOwnProperty(e)?o[e]:null}set(e,o,n,r,t,s,c){"object"==typeof o&&(o=JSON.stringify(o));let a=encodeURIComponent(e)+"="+encodeURIComponent(o)+";";n&&(a+="number"==typeof n?"expires="+new Date(1e3*n).toUTCString()+";":"expires="+n.toUTCString()+";"),r&&(a+="path="+r+";"),t&&(a+="domain="+t+";"),s&&(a+="secure;"),c&&(a+="sameSite="+c+";"),document.cookie=a}delete(e,o,n){this.set(e,"",new Date("Thu, 01 Jan 1970 00:00:01 GMT"),o,n)}deleteAll(){const e=document.cookie.split(";");for(let o=0;o<e.length;o++){const n=e[o],r=n.indexOf("="),t=r>-1?n.substr(0,r):n;document.cookie=t+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Z=(()=>{class e extends u.P{constructor(e,o){super(e),this.injectorObj=e,this.cookies=o,this.examples=t}}return e.\u0275fac=function(o){return new(o||e)(a.Y36(a.zs3),a.Y36(k))},e.\u0275cmp=a.Xpm({type:e,selectors:[["showcase-cookies"]],features:[a.qOj],decls:12,vars:1,consts:[["href","#cookies",1,"bttn","icon"],[1,"material-icons"],[1,"description"],["href","https://sersoluciones.github.io/ngx-ui-doc/classes/_cookie_.cookies.html","target","_blank","rel","noopener noreferrer"],[3,"highlight"]],template:function(e,o){1&e&&(a.TgZ(0,"h2"),a.TgZ(1,"a",0),a.TgZ(2,"span",1),a._uU(3,"link"),a.qZA(),a.qZA(),a._uU(4," Cookies\n"),a.qZA(),a.TgZ(5,"p",2),a._uU(6," ("),a.TgZ(7,"a",3),a._uU(8,"Cookies"),a.qZA(),a._uU(9,") Clase abstracta para obtener, actualizar y borrar cookies en el navegador web\n"),a.qZA(),a.TgZ(10,"pre"),a._UZ(11,"code",4),a.qZA()),2&e&&(a.xp6(11),a.Q6J("highlight",o.examples.CookiesExample))},directives:[m.y$],styles:[""]}),e})();var T=n(5534);const C="import { PrefersColorScheme } from '@sersol/ngx';\n\nconstructor(colorscheme: PrefersColorSchemeService) {\n    colorscheme.init();\n    colorscheme.watch();\n}";var _=n(861),q=n(1116);const x=function(e){return{blue:e}},A=[{path:"theme",component:(()=>{class e extends u.P{constructor(e,o){super(e),this.injectorObj=e,this.colorscheme=o,this.examples=s}}return e.\u0275fac=function(o){return new(o||e)(a.Y36(a.zs3),a.Y36(_.O))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],features:[a.qOj],decls:40,vars:7,consts:[["href","#color-schema",1,"bttn","icon"],[1,"material-icons"],[1,"description"],["href","n-ui-doc/classes/_prefers_color_scheme_.preferscolorscheme.html","target","_blank","rel","noopener noreferrer"],[1,"dark-os-config"],[1,"item"],["href","assets/dark-mac.png","target","_blank","rel","noopener noreferrer"],["src","assets/dark-mac.png","alt","macOS"],["href","assets/dark-windows.png","target","_blank","rel","noopener noreferrer"],["src","assets/dark-windows.png","alt","Windows"],["href","assets/dark-ios.jpeg","target","_blank","rel","noopener noreferrer"],["src","assets/dark-ios.jpeg","alt","iOS"],["href","assets/dark-android.png","target","_blank","rel","noopener noreferrer"],["src","assets/dark-android.png","alt","Android"],[1,"bttn-group"],["type","button",1,"bttn",3,"ngClass","click"],[3,"highlight"]],template:function(e,o){1&e&&(a.TgZ(0,"h2"),a.TgZ(1,"a",0),a.TgZ(2,"span",1),a._uU(3,"link"),a.qZA(),a.qZA(),a._uU(4," Tema claro/oscuro\n"),a.qZA(),a.TgZ(5,"p",2),a._uU(6," ("),a.TgZ(7,"a",3),a._uU(8,"PrefersColorScheme"),a.qZA(),a._uU(9,") Clase para detectar, cambiar y observar el esquema de color claro/oscuro en conjunto con el sistema operativo anfitri\xf3n\n"),a.qZA(),a.TgZ(10,"div",4),a.TgZ(11,"div",5),a.TgZ(12,"h4"),a._uU(13,"macOS Mojave+"),a.qZA(),a.TgZ(14,"a",6),a._UZ(15,"img",7),a.qZA(),a.qZA(),a.TgZ(16,"div",5),a.TgZ(17,"h4"),a._uU(18,"Windows 10 (October 2018)+"),a.qZA(),a.TgZ(19,"a",8),a._UZ(20,"img",9),a.qZA(),a.qZA(),a.TgZ(21,"div",5),a.TgZ(22,"h4"),a._uU(23,"iOS 13+"),a.qZA(),a.TgZ(24,"a",10),a._UZ(25,"img",11),a.qZA(),a.qZA(),a.TgZ(26,"div",5),a.TgZ(27,"h4"),a._uU(28,"Android 10+"),a.qZA(),a.TgZ(29,"a",12),a._UZ(30,"img",13),a.qZA(),a.qZA(),a.qZA(),a.TgZ(31,"p",2),a._uU(32,"\xd3 puedes controlar de manera manual el esquema de color independiente del sistema operativo"),a.qZA(),a.TgZ(33,"div",14),a.TgZ(34,"button",15),a.NdJ("click",function(){return o.colorscheme.enableLight()}),a._uU(35,"Claro"),a.qZA(),a.TgZ(36,"button",15),a.NdJ("click",function(){return o.colorscheme.enableDark()}),a._uU(37,"Oscuro"),a.qZA(),a.qZA(),a.TgZ(38,"pre"),a._UZ(39,"code",16),a.qZA()),2&e&&(a.xp6(34),a.Q6J("ngClass",a.VKq(3,x,!o.colorscheme.dark)),a.xp6(2),a.Q6J("ngClass",a.VKq(5,x,o.colorscheme.dark)),a.xp6(3),a.Q6J("highlight",o.examples.PrefersColorSchemeExample))},directives:[q.mk,m.y$],styles:[".dark-os-config[_ngcontent-%COMP%]{width:100%;overflow-x:auto;display:flex}.dark-os-config[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{text-align:center}.dark-os-config[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;max-height:300px;margin:12px;box-shadow:2px 2px 12px 0 #000;border-radius:4px}"]}),e})()},{path:"cookies",component:Z},{path:"click",component:h},{path:"fullscreen",component:p},{path:"snackbar",component:l},{path:"password",component:i}];let b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[T.Bz.forChild(A)],T.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[c.m,b]]}),e})()}}]);