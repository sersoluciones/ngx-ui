!function(){function t(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&n(t,o)}function n(t,o){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,o)}function o(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,i=u(t);if(n){var r=u(this).constructor;o=Reflect.construct(i,arguments,r)}else o=i.apply(this,arguments);return e(this,o)}}function e(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(self.webpackChunk_sersol_ngx=self.webpackChunk_sersol_ngx||[]).push([[139],{2139:function(n,e,u){"use strict";u.r(e),u.d(e,{UiModule:function(){return x}});var b={};u.r(b),u.d(b,{ButtonCollapse:function(){return g},ButtonGroup:function(){return Z}});var a={};u.r(a),u.d(a,{Buttons:function(){return T},ButtonsIcon:function(){return q},ButtonsWithIcon:function(){return m}});var c,s=u(7368),p=function(){var t=function(){function t(){i(this,t)}var n,o,e;return n=t,(o=[{key:"ngOnInit",value:function(){}}])&&r(n.prototype,o),e&&r(n,e),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["showcase-badges"]],decls:2,vars:0,template:function(t,n){1&t&&(s.TgZ(0,"p"),s._uU(1,"badges works!"),s.qZA())},styles:[""]}),t}(),l=u(3836),Z='<div class="bttn-group">\n    <button type="button" class="bttn">Opci\xf3n 1</button>\n    <button type="button" class="bttn primary">Opci\xf3n 2</button>\n    <button type="button" class="bttn">Opci\xf3n 3</button>\n</div>',g='<button type="button" class="bttn primary text-collapse">\n    <div class="text">Opciones</div>\n    <i class="material-icons">settings</i>\n</button>',A=u(7792),y=u(9038),d=function(){var n,e=function(n){t(u,n);var e=o(u);function u(){var t;return i(this,u),(t=e.apply(this,arguments)).examples=b,t}return u}(l.P);return e.\u0275fac=function(t){return(n||(n=s.n5z(e)))(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["showcase-buttons-group"]],features:[s.qOj],decls:44,vars:4,consts:[["href","#bttn-bordered",1,"example-name"],[1,"material-icons"],["id","bttn-icon"],[1,"buttons"],[1,"bttn-group"],["type","button",1,"bttn"],["type","button",1,"bttn","primary"],[1,"code"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"separator"],["type","button",1,"bttn","primary","text-collapse"],[1,"text"]],template:function(t,n){1&t&&(s.TgZ(0,"a",0),s.TgZ(1,"span",1),s._uU(2,"link"),s.qZA(),s.TgZ(3,"h1",2),s._uU(4,"Grupo de botones"),s.qZA(),s.qZA(),s.TgZ(5,"div",3),s.TgZ(6,"div",4),s.TgZ(7,"button",5),s._uU(8,"Opci\xf3n 1"),s.qZA(),s.TgZ(9,"button",6),s._uU(10,"Opci\xf3n 2"),s.qZA(),s.TgZ(11,"button",5),s._uU(12,"Opci\xf3n 3"),s.qZA(),s.qZA(),s.TgZ(13,"div",4),s.TgZ(14,"button",5),s._uU(15,"Opci\xf3n 1"),s.qZA(),s.TgZ(16,"button",5),s._uU(17,"Opci\xf3n 2"),s.qZA(),s.TgZ(18,"button",6),s._uU(19,"Opci\xf3n 3"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(20,"div",7),s.TgZ(21,"pre"),s._UZ(22,"code",8),s.qZA(),s.TgZ(23,"button",9),s.NdJ("copied",function(){return n.alert("Copiado al portapapeles")}),s.TgZ(24,"span",1),s._uU(25,"content_copy"),s.qZA(),s.qZA(),s.qZA(),s._UZ(26,"div",10),s.TgZ(27,"a",0),s.TgZ(28,"span",1),s._uU(29,"link"),s.qZA(),s.TgZ(30,"h1",2),s._uU(31,"Boton con texto oculto"),s.qZA(),s.qZA(),s.TgZ(32,"div",3),s.TgZ(33,"button",11),s.TgZ(34,"div",12),s._uU(35,"Opciones"),s.qZA(),s.TgZ(36,"i",1),s._uU(37,"settings"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(38,"div",7),s.TgZ(39,"pre"),s._UZ(40,"code",8),s.qZA(),s.TgZ(41,"button",9),s.NdJ("copied",function(){return n.alert("Copiado al portapapeles")}),s.TgZ(42,"span",1),s._uU(43,"content_copy"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(22),s.Q6J("highlight",n.examples.ButtonGroup),s.xp6(1),s.Q6J("copyToClipboard",n.examples.ButtonGroup),s.xp6(17),s.Q6J("highlight",n.examples.ButtonCollapse),s.xp6(1),s.Q6J("copyToClipboard",n.examples.ButtonCollapse))},directives:[A.y$,y.e],styles:[""]}),e}(),T='<button type="button" class="bttn">Normal</button>\n<button type="button" class="bttn primary">Primario</button>\n<button type="button" class="bttn green">Verde</button>\n<button type="button" class="bttn red">Rojo</button>\n<button type="button" class="bttn blue">Azul</button>\n<button type="button" class="bttn light-blue">Azul claro</button>\n<button type="button" class="bttn orange">Naranja</button>\n<button type="button" class="bttn yellow">Amarillo</button>',m='<button type="button" class="bttn">\n    <i class="material-icons">home</i> Normal\n</button>\n<button type="button" class="bttn primary">\n    <i class="material-icons">home</i> Primario\n</button>\n<button type="button" class="bttn green">\n    <i class="material-icons">home</i> Verde\n</button>\n<button type="button" class="bttn red">\n    <i class="material-icons">home</i>Rojo\n</button>\n<button type="button" class="bttn blue">\n    <i class="material-icons">home</i> Azul\n</button>\n<button type="button" class="bttn light-blue">\n    <i class="material-icons">home</i> Azul claro\n</button>\n<button type="button" class="bttn orange">\n    <i class="material-icons">home</i> Naranja\n</button>\n<button type="button" class="bttn yellow">\n    <i class="material-icons">home</i> Amarillo\n</button>',q='<button type="button" class="bttn icon">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon primary">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon green">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon red">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon blue">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon light-blue">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon orange">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon yellow">\n    <i class="material-icons">home</i>\n</button>',h=function(){var n,e=function(n){t(u,n);var e=o(u);function u(){var t;return i(this,u),(t=e.apply(this,arguments)).examples=a,t}return u}(l.P);return e.\u0275fac=function(t){return(n||(n=s.n5z(e)))(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["showcase-buttons"]],features:[s.qOj],decls:151,vars:8,consts:[[1,"buttons"],["type","button",1,"bttn"],["type","button",1,"bttn","primary"],["type","button",1,"bttn","green"],["type","button",1,"bttn","red"],["type","button",1,"bttn","blue"],["type","button",1,"bttn","light-blue"],["type","button",1,"bttn","orange"],["type","button",1,"bttn","orangered"],["type","button",1,"bttn","yellow"],["type","button",1,"bttn","violet"],[1,"code"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"material-icons"],[1,"separator"],["href","#bttn-icon",1,"example-name"],["id","bttn-icon"],["type","button",1,"bttn","icon"],["type","button",1,"bttn","icon","primary"],["type","button",1,"bttn","icon","green"],["type","button",1,"bttn","icon","red"],["type","button",1,"bttn","icon","blue"],["type","button",1,"bttn","icon","light-blue"],["type","button",1,"bttn","icon","orange"],["type","button",1,"bttn","icon","yellow"],["type","button",1,"bttn","icon","violet"],["type","button",1,"bttn","icon",3,"copyToClipboard","copied"],["href","#bttn-bordered",1,"example-name"],["type","button",1,"bttn","bordered"],["type","button",1,"bttn","bordered","primary"],["type","button",1,"bttn","bordered","green"],["type","button",1,"bttn","bordered","red"],["type","button",1,"bttn","bordered","blue"],["type","button",1,"bttn","bordered","light-blue"],["type","button",1,"bttn","bordered","orange"],["type","button",1,"bttn","bordered","orangered"],["type","button",1,"bttn","bordered","yellow"],["type","button",1,"bttn","bordered","violet"]],template:function(t,n){1&t&&(s.TgZ(0,"h1"),s._uU(1,"Botones"),s.qZA(),s.TgZ(2,"div",0),s.TgZ(3,"button",1),s._uU(4,"Normal"),s.qZA(),s.TgZ(5,"button",2),s._uU(6,"Primario"),s.qZA(),s.TgZ(7,"button",3),s._uU(8,"Afirmativo"),s.qZA(),s.TgZ(9,"button",4),s._uU(10,"Peligro"),s.qZA(),s.TgZ(11,"button",5),s._uU(12,"Info 1"),s.qZA(),s.TgZ(13,"button",6),s._uU(14,"Info 2"),s.qZA(),s.TgZ(15,"button",7),s._uU(16,"Aviso"),s.qZA(),s.TgZ(17,"button",8),s._uU(18,"Alerta"),s.qZA(),s.TgZ(19,"button",9),s._uU(20,"Especial 1"),s.qZA(),s.TgZ(21,"button",10),s._uU(22,"Especial 2"),s.qZA(),s.qZA(),s.TgZ(23,"div",11),s.TgZ(24,"pre"),s._UZ(25,"code",12),s.qZA(),s.TgZ(26,"button",13),s.NdJ("copied",function(){return n.alert("Copiado al portapapeles")}),s.TgZ(27,"span",14),s._uU(28,"content_copy"),s.qZA(),s.qZA(),s.qZA(),s._UZ(29,"div",15),s.TgZ(30,"a",16),s.TgZ(31,"span",14),s._uU(32,"link"),s.qZA(),s.TgZ(33,"h1",17),s._uU(34,"Botones con icono"),s.qZA(),s.qZA(),s.TgZ(35,"div",0),s.TgZ(36,"button",1),s.TgZ(37,"i",14),s._uU(38,"home"),s.qZA(),s._uU(39," Normal "),s.qZA(),s.TgZ(40,"button",2),s.TgZ(41,"i",14),s._uU(42,"home"),s.qZA(),s._uU(43," Primario "),s.qZA(),s.TgZ(44,"button",3),s.TgZ(45,"i",14),s._uU(46,"home"),s.qZA(),s._uU(47," Verde "),s.qZA(),s.TgZ(48,"button",4),s.TgZ(49,"i",14),s._uU(50,"home"),s.qZA(),s._uU(51,"Rojo "),s.qZA(),s.TgZ(52,"button",5),s.TgZ(53,"i",14),s._uU(54,"home"),s.qZA(),s._uU(55," Azul "),s.qZA(),s.TgZ(56,"button",6),s.TgZ(57,"i",14),s._uU(58,"home"),s.qZA(),s._uU(59," Azul claro "),s.qZA(),s.TgZ(60,"button",7),s.TgZ(61,"i",14),s._uU(62,"home"),s.qZA(),s._uU(63," Naranja "),s.qZA(),s.TgZ(64,"button",9),s.TgZ(65,"i",14),s._uU(66,"home"),s.qZA(),s._uU(67," Amarillo "),s.qZA(),s.TgZ(68,"button",10),s.TgZ(69,"i",14),s._uU(70,"home"),s.qZA(),s._uU(71," Violeta "),s.qZA(),s.qZA(),s.TgZ(72,"div",11),s.TgZ(73,"pre"),s._UZ(74,"code",12),s.qZA(),s.TgZ(75,"button",13),s.NdJ("copied",function(){return n.alert("Copiado al portapapeles")}),s.TgZ(76,"span",14),s._uU(77,"content_copy"),s.qZA(),s.qZA(),s.qZA(),s._UZ(78,"div",15),s.TgZ(79,"a",16),s.TgZ(80,"span",14),s._uU(81,"link"),s.qZA(),s.TgZ(82,"h1",17),s._uU(83,"Botones solo icono"),s.qZA(),s.qZA(),s.TgZ(84,"div",0),s.TgZ(85,"button",18),s.TgZ(86,"i",14),s._uU(87,"home"),s.qZA(),s.qZA(),s.TgZ(88,"button",19),s.TgZ(89,"i",14),s._uU(90,"home"),s.qZA(),s.qZA(),s.TgZ(91,"button",20),s.TgZ(92,"i",14),s._uU(93,"home"),s.qZA(),s.qZA(),s.TgZ(94,"button",21),s.TgZ(95,"i",14),s._uU(96,"home"),s.qZA(),s.qZA(),s.TgZ(97,"button",22),s.TgZ(98,"i",14),s._uU(99,"home"),s.qZA(),s.qZA(),s.TgZ(100,"button",23),s.TgZ(101,"i",14),s._uU(102,"home"),s.qZA(),s.qZA(),s.TgZ(103,"button",24),s.TgZ(104,"i",14),s._uU(105,"home"),s.qZA(),s.qZA(),s.TgZ(106,"button",25),s.TgZ(107,"i",14),s._uU(108,"home"),s.qZA(),s.qZA(),s.TgZ(109,"button",26),s.TgZ(110,"i",14),s._uU(111,"home"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(112,"div",11),s.TgZ(113,"pre"),s._UZ(114,"code",12),s.qZA(),s.TgZ(115,"button",27),s.NdJ("copied",function(){return n.alert("Copiado al portapapeles")}),s.TgZ(116,"span",14),s._uU(117,"content_copy"),s.qZA(),s.qZA(),s.qZA(),s._UZ(118,"div",15),s.TgZ(119,"a",28),s.TgZ(120,"span",14),s._uU(121,"link"),s.qZA(),s.TgZ(122,"h1",17),s._uU(123,"Botones bordeados"),s.qZA(),s.qZA(),s.TgZ(124,"div",0),s.TgZ(125,"button",29),s._uU(126,"Normal"),s.qZA(),s.TgZ(127,"button",30),s._uU(128,"Primario"),s.qZA(),s.TgZ(129,"button",31),s._uU(130,"Verde"),s.qZA(),s.TgZ(131,"button",32),s._uU(132,"Rojo"),s.qZA(),s.TgZ(133,"button",33),s._uU(134,"Azul"),s.qZA(),s.TgZ(135,"button",34),s._uU(136,"Azul claro"),s.qZA(),s.TgZ(137,"button",35),s._uU(138,"Naranja"),s.qZA(),s.TgZ(139,"button",36),s._uU(140,"Naranja - Rojo"),s.qZA(),s.TgZ(141,"button",37),s._uU(142,"Amarillo"),s.qZA(),s.TgZ(143,"button",38),s._uU(144,"Violeta"),s.qZA(),s.qZA(),s.TgZ(145,"div",11),s.TgZ(146,"pre"),s._UZ(147,"code",12),s.qZA(),s.TgZ(148,"button",13),s.NdJ("copied",function(){return n.alert("Copiado al portapapeles")}),s.TgZ(149,"span",14),s._uU(150,"content_copy"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(25),s.Q6J("highlight",n.examples.Buttons),s.xp6(1),s.Q6J("copyToClipboard",n.examples.Buttons),s.xp6(48),s.Q6J("highlight",n.examples.ButtonsWithIcon),s.xp6(1),s.Q6J("copyToClipboard",n.examples.ButtonsWithIcon),s.xp6(39),s.Q6J("highlight",n.examples.ButtonsWithIcon),s.xp6(1),s.Q6J("copyToClipboard",n.examples.ButtonsWithIcon),s.xp6(32),s.Q6J("highlight",n.examples.Buttons),s.xp6(1),s.Q6J("copyToClipboard",n.examples.Buttons))},directives:[A.y$,y.e],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] > .bttn[_ngcontent-%COMP%], [_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] > .bttn-group[_ngcontent-%COMP%]{margin:24px}"]}),e}(),_=u(5534),f=[{path:"buttons",component:h},{path:"buttons-group",component:d},{path:"badges",component:p}],U=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[_.Bz.forChild(f)],_.Bz]}),t}(),v=u(4476),x=((c=function t(){i(this,t)}).\u0275fac=function(t){return new(t||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[[v.m,U]]}),c)}}])}();