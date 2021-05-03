function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var o=0;o<n.length;o++){var b=n[o];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(t,b.key,b)}}function _createClass(t,n,o){return n&&_defineProperties(t.prototype,n),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{VWTg:function(t,n,o){"use strict";o.r(n);var b={};o.r(b),o.d(b,"ButtonGroup",(function(){return p})),o.d(b,"ButtonCollapse",(function(){return y}));var e={};o.r(e),o.d(e,"Buttons",(function(){return m})),o.d(e,"ButtonsWithIcon",(function(){return S})),o.d(e,"ButtonsIcon",(function(){return f}));var c,i,u,r,a=o("fXoL"),s=((c=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=a.Gb({type:c,selectors:[["showcase-badges"]],decls:2,vars:0,template:function(t,n){1&t&&(a.Sb(0,"p"),a.vc(1,"badges works!"),a.Rb())},styles:[""]}),c),l=o("oVZu"),p='<div class="bttn-group">\n    <button type="button" class="bttn">Opci\xf3n 1</button>\n    <button type="button" class="bttn primary">Opci\xf3n 2</button>\n    <button type="button" class="bttn">Opci\xf3n 3</button>\n</div>',y='<button type="button" class="bttn primary text-collapse">\n    <div class="text">Opciones</div>\n    <i class="material-icons">settings</i>\n</button>',h=o("OtPg"),d=o("Kkw2"),R=((i=function(t){function n(){var t;return _classCallCheck(this,n),(t=_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))).examples=b,t}return _inherits(n,t),n}(l.a)).\u0275fac=function(t){return v(t||i)},i.\u0275cmp=a.Gb({type:i,selectors:[["showcase-buttons-group"]],features:[a.yb],decls:44,vars:4,consts:[["href","#bttn-bordered",1,"example-name"],[1,"material-icons"],["id","bttn-icon"],[1,"buttons"],[1,"bttn-group"],["type","button",1,"bttn"],["type","button",1,"bttn","primary"],[1,"code"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"separator"],["type","button",1,"bttn","primary","text-collapse"],[1,"text"]],template:function(t,n){1&t&&(a.Sb(0,"a",0),a.Sb(1,"span",1),a.vc(2,"link"),a.Rb(),a.Sb(3,"h1",2),a.vc(4,"Grupo de botones"),a.Rb(),a.Rb(),a.Sb(5,"div",3),a.Sb(6,"div",4),a.Sb(7,"button",5),a.vc(8,"Opci\xf3n 1"),a.Rb(),a.Sb(9,"button",6),a.vc(10,"Opci\xf3n 2"),a.Rb(),a.Sb(11,"button",5),a.vc(12,"Opci\xf3n 3"),a.Rb(),a.Rb(),a.Sb(13,"div",4),a.Sb(14,"button",5),a.vc(15,"Opci\xf3n 1"),a.Rb(),a.Sb(16,"button",5),a.vc(17,"Opci\xf3n 2"),a.Rb(),a.Sb(18,"button",6),a.vc(19,"Opci\xf3n 3"),a.Rb(),a.Rb(),a.Rb(),a.Sb(20,"div",7),a.Sb(21,"pre"),a.Nb(22,"code",8),a.Rb(),a.Sb(23,"button",9),a.ac("copied",(function(){return n.alert("Copiado al portapapeles")})),a.Sb(24,"span",1),a.vc(25,"content_copy"),a.Rb(),a.Rb(),a.Rb(),a.Nb(26,"div",10),a.Sb(27,"a",0),a.Sb(28,"span",1),a.vc(29,"link"),a.Rb(),a.Sb(30,"h1",2),a.vc(31,"Boton con texto oculto"),a.Rb(),a.Rb(),a.Sb(32,"div",3),a.Sb(33,"button",11),a.Sb(34,"div",12),a.vc(35,"Opciones"),a.Rb(),a.Sb(36,"i",1),a.vc(37,"settings"),a.Rb(),a.Rb(),a.Rb(),a.Sb(38,"div",7),a.Sb(39,"pre"),a.Nb(40,"code",8),a.Rb(),a.Sb(41,"button",9),a.ac("copied",(function(){return n.alert("Copiado al portapapeles")})),a.Sb(42,"span",1),a.vc(43,"content_copy"),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.Bb(22),a.hc("highlight",n.examples.ButtonGroup),a.Bb(1),a.hc("copyToClipboard",n.examples.ButtonGroup),a.Bb(17),a.hc("highlight",n.examples.ButtonCollapse),a.Bb(1),a.hc("copyToClipboard",n.examples.ButtonCollapse))},directives:[h.a,d.a],styles:[""]}),i),v=a.Ub(R),m='<button type="button" class="bttn">Normal</button>\n<button type="button" class="bttn primary">Primario</button>\n<button type="button" class="bttn green">Verde</button>\n<button type="button" class="bttn red">Rojo</button>\n<button type="button" class="bttn blue">Azul</button>\n<button type="button" class="bttn light-blue">Azul claro</button>\n<button type="button" class="bttn orange">Naranja</button>\n<button type="button" class="bttn yellow">Amarillo</button>',S='<button type="button" class="bttn">\n    <i class="material-icons">home</i> Normal\n</button>\n<button type="button" class="bttn primary">\n    <i class="material-icons">home</i> Primario\n</button>\n<button type="button" class="bttn green">\n    <i class="material-icons">home</i> Verde\n</button>\n<button type="button" class="bttn red">\n    <i class="material-icons">home</i>Rojo\n</button>\n<button type="button" class="bttn blue">\n    <i class="material-icons">home</i> Azul\n</button>\n<button type="button" class="bttn light-blue">\n    <i class="material-icons">home</i> Azul claro\n</button>\n<button type="button" class="bttn orange">\n    <i class="material-icons">home</i> Naranja\n</button>\n<button type="button" class="bttn yellow">\n    <i class="material-icons">home</i> Amarillo\n</button>',f='<button type="button" class="bttn icon">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon primary">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon green">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon red">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon blue">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon light-blue">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon orange">\n    <i class="material-icons">home</i>\n</button>\n<button type="button" class="bttn icon yellow">\n    <i class="material-icons">home</i>\n</button>',g=((u=function(t){function n(){var t;return _classCallCheck(this,n),(t=_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))).examples=e,t}return _inherits(n,t),n}(l.a)).\u0275fac=function(t){return _(t||u)},u.\u0275cmp=a.Gb({type:u,selectors:[["showcase-buttons"]],features:[a.yb],decls:151,vars:8,consts:[[1,"buttons"],["type","button",1,"bttn"],["type","button",1,"bttn","primary"],["type","button",1,"bttn","green"],["type","button",1,"bttn","red"],["type","button",1,"bttn","blue"],["type","button",1,"bttn","light-blue"],["type","button",1,"bttn","orange"],["type","button",1,"bttn","orangered"],["type","button",1,"bttn","yellow"],["type","button",1,"bttn","violet"],[1,"code"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"material-icons"],[1,"separator"],["href","#bttn-icon",1,"example-name"],["id","bttn-icon"],["type","button",1,"bttn","icon"],["type","button",1,"bttn","icon","primary"],["type","button",1,"bttn","icon","green"],["type","button",1,"bttn","icon","red"],["type","button",1,"bttn","icon","blue"],["type","button",1,"bttn","icon","light-blue"],["type","button",1,"bttn","icon","orange"],["type","button",1,"bttn","icon","yellow"],["type","button",1,"bttn","icon","violet"],["type","button",1,"bttn","icon",3,"copyToClipboard","copied"],["href","#bttn-bordered",1,"example-name"],["type","button",1,"bttn","bordered"],["type","button",1,"bttn","bordered","primary"],["type","button",1,"bttn","bordered","green"],["type","button",1,"bttn","bordered","red"],["type","button",1,"bttn","bordered","blue"],["type","button",1,"bttn","bordered","light-blue"],["type","button",1,"bttn","bordered","orange"],["type","button",1,"bttn","bordered","orangered"],["type","button",1,"bttn","bordered","yellow"],["type","button",1,"bttn","bordered","violet"]],template:function(t,n){1&t&&(a.Sb(0,"h1"),a.vc(1,"Botones"),a.Rb(),a.Sb(2,"div",0),a.Sb(3,"button",1),a.vc(4,"Normal"),a.Rb(),a.Sb(5,"button",2),a.vc(6,"Primario"),a.Rb(),a.Sb(7,"button",3),a.vc(8,"Afirmativo"),a.Rb(),a.Sb(9,"button",4),a.vc(10,"Peligro"),a.Rb(),a.Sb(11,"button",5),a.vc(12,"Info 1"),a.Rb(),a.Sb(13,"button",6),a.vc(14,"Info 2"),a.Rb(),a.Sb(15,"button",7),a.vc(16,"Aviso"),a.Rb(),a.Sb(17,"button",8),a.vc(18,"Alerta"),a.Rb(),a.Sb(19,"button",9),a.vc(20,"Especial 1"),a.Rb(),a.Sb(21,"button",10),a.vc(22,"Especial 2"),a.Rb(),a.Rb(),a.Sb(23,"div",11),a.Sb(24,"pre"),a.Nb(25,"code",12),a.Rb(),a.Sb(26,"button",13),a.ac("copied",(function(){return n.alert("Copiado al portapapeles")})),a.Sb(27,"span",14),a.vc(28,"content_copy"),a.Rb(),a.Rb(),a.Rb(),a.Nb(29,"div",15),a.Sb(30,"a",16),a.Sb(31,"span",14),a.vc(32,"link"),a.Rb(),a.Sb(33,"h1",17),a.vc(34,"Botones con icono"),a.Rb(),a.Rb(),a.Sb(35,"div",0),a.Sb(36,"button",1),a.Sb(37,"i",14),a.vc(38,"home"),a.Rb(),a.vc(39," Normal "),a.Rb(),a.Sb(40,"button",2),a.Sb(41,"i",14),a.vc(42,"home"),a.Rb(),a.vc(43," Primario "),a.Rb(),a.Sb(44,"button",3),a.Sb(45,"i",14),a.vc(46,"home"),a.Rb(),a.vc(47," Verde "),a.Rb(),a.Sb(48,"button",4),a.Sb(49,"i",14),a.vc(50,"home"),a.Rb(),a.vc(51,"Rojo "),a.Rb(),a.Sb(52,"button",5),a.Sb(53,"i",14),a.vc(54,"home"),a.Rb(),a.vc(55," Azul "),a.Rb(),a.Sb(56,"button",6),a.Sb(57,"i",14),a.vc(58,"home"),a.Rb(),a.vc(59," Azul claro "),a.Rb(),a.Sb(60,"button",7),a.Sb(61,"i",14),a.vc(62,"home"),a.Rb(),a.vc(63," Naranja "),a.Rb(),a.Sb(64,"button",9),a.Sb(65,"i",14),a.vc(66,"home"),a.Rb(),a.vc(67," Amarillo "),a.Rb(),a.Sb(68,"button",10),a.Sb(69,"i",14),a.vc(70,"home"),a.Rb(),a.vc(71," Violeta "),a.Rb(),a.Rb(),a.Sb(72,"div",11),a.Sb(73,"pre"),a.Nb(74,"code",12),a.Rb(),a.Sb(75,"button",13),a.ac("copied",(function(){return n.alert("Copiado al portapapeles")})),a.Sb(76,"span",14),a.vc(77,"content_copy"),a.Rb(),a.Rb(),a.Rb(),a.Nb(78,"div",15),a.Sb(79,"a",16),a.Sb(80,"span",14),a.vc(81,"link"),a.Rb(),a.Sb(82,"h1",17),a.vc(83,"Botones solo icono"),a.Rb(),a.Rb(),a.Sb(84,"div",0),a.Sb(85,"button",18),a.Sb(86,"i",14),a.vc(87,"home"),a.Rb(),a.Rb(),a.Sb(88,"button",19),a.Sb(89,"i",14),a.vc(90,"home"),a.Rb(),a.Rb(),a.Sb(91,"button",20),a.Sb(92,"i",14),a.vc(93,"home"),a.Rb(),a.Rb(),a.Sb(94,"button",21),a.Sb(95,"i",14),a.vc(96,"home"),a.Rb(),a.Rb(),a.Sb(97,"button",22),a.Sb(98,"i",14),a.vc(99,"home"),a.Rb(),a.Rb(),a.Sb(100,"button",23),a.Sb(101,"i",14),a.vc(102,"home"),a.Rb(),a.Rb(),a.Sb(103,"button",24),a.Sb(104,"i",14),a.vc(105,"home"),a.Rb(),a.Rb(),a.Sb(106,"button",25),a.Sb(107,"i",14),a.vc(108,"home"),a.Rb(),a.Rb(),a.Sb(109,"button",26),a.Sb(110,"i",14),a.vc(111,"home"),a.Rb(),a.Rb(),a.Rb(),a.Sb(112,"div",11),a.Sb(113,"pre"),a.Nb(114,"code",12),a.Rb(),a.Sb(115,"button",27),a.ac("copied",(function(){return n.alert("Copiado al portapapeles")})),a.Sb(116,"span",14),a.vc(117,"content_copy"),a.Rb(),a.Rb(),a.Rb(),a.Nb(118,"div",15),a.Sb(119,"a",28),a.Sb(120,"span",14),a.vc(121,"link"),a.Rb(),a.Sb(122,"h1",17),a.vc(123,"Botones bordeados"),a.Rb(),a.Rb(),a.Sb(124,"div",0),a.Sb(125,"button",29),a.vc(126,"Normal"),a.Rb(),a.Sb(127,"button",30),a.vc(128,"Primario"),a.Rb(),a.Sb(129,"button",31),a.vc(130,"Verde"),a.Rb(),a.Sb(131,"button",32),a.vc(132,"Rojo"),a.Rb(),a.Sb(133,"button",33),a.vc(134,"Azul"),a.Rb(),a.Sb(135,"button",34),a.vc(136,"Azul claro"),a.Rb(),a.Sb(137,"button",35),a.vc(138,"Naranja"),a.Rb(),a.Sb(139,"button",36),a.vc(140,"Naranja - Rojo"),a.Rb(),a.Sb(141,"button",37),a.vc(142,"Amarillo"),a.Rb(),a.Sb(143,"button",38),a.vc(144,"Violeta"),a.Rb(),a.Rb(),a.Sb(145,"div",11),a.Sb(146,"pre"),a.Nb(147,"code",12),a.Rb(),a.Sb(148,"button",13),a.ac("copied",(function(){return n.alert("Copiado al portapapeles")})),a.Sb(149,"span",14),a.vc(150,"content_copy"),a.Rb(),a.Rb(),a.Rb()),2&t&&(a.Bb(25),a.hc("highlight",n.examples.Buttons),a.Bb(1),a.hc("copyToClipboard",n.examples.Buttons),a.Bb(48),a.hc("highlight",n.examples.ButtonsWithIcon),a.Bb(1),a.hc("copyToClipboard",n.examples.ButtonsWithIcon),a.Bb(39),a.hc("highlight",n.examples.ButtonsWithIcon),a.Bb(1),a.hc("copyToClipboard",n.examples.ButtonsWithIcon),a.Bb(32),a.hc("highlight",n.examples.Buttons),a.Bb(1),a.hc("copyToClipboard",n.examples.Buttons))},directives:[h.a,d.a],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] > .bttn[_ngcontent-%COMP%], [_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] > .bttn-group[_ngcontent-%COMP%]{margin:24px}"]}),u),_=a.Ub(g),C=o("tyNb"),O=[{path:"buttons",component:g},{path:"buttons-group",component:R},{path:"badges",component:s}],B=((r=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:r}),r.\u0275inj=a.Jb({factory:function(t){return new(t||r)},imports:[[C.d.forChild(O)],C.d]}),r),w=o("JHrX");o.d(n,"UiModule",(function(){return x}));var P,x=((P=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:P}),P.\u0275inj=a.Jb({factory:function(t){return new(t||P)},imports:[[w.a,B]]}),P)}}]);