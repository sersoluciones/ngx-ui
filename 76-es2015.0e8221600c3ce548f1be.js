(self.webpackChunk_sersol_ngx=self.webpackChunk_sersol_ngx||[]).push([[76],{1076:function(e,r,o){"use strict";o.r(r),o.d(r,{FormModule:function(){return H}});var n={};o.r(n),o.d(n,{PINExample:function(){return u}});var t={};o.r(t),o.d(t,{AddressCOLExample:function(){return v},CurrencyExample:function(){return f},NumberExample:function(){return x},TextAreaExample:function(){return C}});var i={};o.r(i),o.d(i,{InputNumberExample:function(){return J},InputSelectExample:function(){return F},InputTextExample:function(){return E},InputTextareaExample:function(){return k}});var l=o(1462),a=o(3836);const u='<ser-form-element>\n    <pin-input serControl formControlName="pin1" [codeLength]="codeLength" [onlyNumber]="onlyNumber" [isCodeHidden]="isCodeHidden"></pin-input>\n\n    <div serErrors="pin1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>';var p=o(7368),d=o(9015),Z=o(9038),s=o(2543),m=o(8355),c=o(1116),g=o(8416),q=o(4648),T=o(6627);function b(e,r){if(1&e&&(p.ynx(0),p.TgZ(1,"ser-form-element"),p._UZ(2,"pin-input",18),p.TgZ(3,"div",19),p.TgZ(4,"div",20),p._uU(5,"Requerido"),p.qZA(),p.qZA(),p.qZA(),p.BQk()),2&e){const e=p.oxw();p.xp6(2),p.Q6J("codeLength",e.modelForm.value.pinForm.codeLength)("onlyNumber",e.modelForm.value.pinForm.onlyNumber)("isCodeHidden",e.modelForm.value.pinForm.isCodeHidden)}}let A=(()=>{class e extends a.P{constructor(){super(...arguments),this.examples=n,this.modelForm=this._fb.group({pin1:["",[l.kI.required]],pinForm:this._fb.group({codeLength:[4,l.kI.required],onlyNumber:[!0,l.kI.required],isCodeHidden:[!1,l.kI.required]})}),this.pinShow=!0}init(){this.modelForm.get("pinForm").valueChanges.subscribe(()=>{this.pinShow=!1,setTimeout(()=>{this.pinShow=!0},500)})}}return e.\u0275fac=function(){let r;return function(o){return(r||(r=p.n5z(e)))(o||e)}}(),e.\u0275cmp=p.Xpm({type:e,selectors:[["ng-component"]],features:[p.qOj],decls:35,vars:4,consts:[[1,"form-example",3,"formGroup"],["href","#",1,"example-name"],[1,"material-icons"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],[1,"desc"],["formGroupName","pinForm"],[1,"row","start-center"],["serControl","","type","number","formControlName","codeLength"],[1,"checkbox"],["serControl","","type","checkbox","formControlName","onlyNumber"],["serControl","","type","checkbox","formControlName","isCodeHidden"],["type","button",1,"bttn","center-margin",3,"click"],[4,"ngIf"],["serControl","","formControlName","pin1",3,"codeLength","onlyNumber","isCodeHidden"],["serErrors","pin1"],["serError","required"]],template:function(e,r){1&e&&(p.TgZ(0,"form",0),p.TgZ(1,"a",1),p.TgZ(2,"span",2),p._uU(3,"link"),p.qZA(),p.TgZ(4,"h1"),p._uU(5,"Entrada tipo PIN"),p.qZA(),p.qZA(),p.TgZ(6,"div",3),p.TgZ(7,"div",4),p.TgZ(8,"div",5),p.TgZ(9,"pre"),p._UZ(10,"code",6),p.qZA(),p.TgZ(11,"button",7),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(12,"span",2),p._uU(13,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(14,"div",8),p.TgZ(15,"div",5),p.TgZ(16,"div",9),p._uU(17,"Directiva para ingresar un PIN alfanum\xe9rico de longitud variable"),p.qZA(),p.ynx(18,10),p.TgZ(19,"div",11),p.TgZ(20,"ser-form-element"),p.TgZ(21,"label"),p._uU(22,"Tama\xf1o"),p.qZA(),p._UZ(23,"input",12),p.qZA(),p.TgZ(24,"div",13),p.TgZ(25,"label"),p._UZ(26,"input",14),p._uU(27," Solo n\xfameros "),p.qZA(),p.qZA(),p.TgZ(28,"div",13),p.TgZ(29,"label"),p._UZ(30,"input",15),p._uU(31," Ocultar escritura "),p.qZA(),p.qZA(),p.qZA(),p.BQk(),p.TgZ(32,"button",16),p.NdJ("click",function(){return r.toogleFormControlDisabled("pin1")}),p._uU(33,"Habilitar / Deshabilitar"),p.qZA(),p.YNc(34,b,6,3,"ng-container",17),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("formGroup",r.modelForm),p.xp6(10),p.Q6J("highlight",r.examples.PINExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.PINExample),p.xp6(23),p.Q6J("ngIf",r.pinShow))},directives:[l._Y,l.JL,l.sg,d.y$,Z.e,l.x0,s.n,l.wV,l.Fj,m.C,l.JJ,l.u,l.Wl,c.O5,g.r,q.P,T.r],styles:[""]}),e})();const x='<ser-form-element>\n    <label>N\xfamerico mejorada</label>\n    <ser-input-number serControl formControlName="number1"></ser-input-number>\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',f='<ser-form-element>\n    <label>Moneda</label>\n    <ser-input-currency serControl formControlName="number2"></ser-input-currency>\n\n    <div serErrors="number2">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',v='<ser-form-element>\n    <label>N\xfamerico mejorada</label>\n    <ser-input-number serControl formControlName="number1"></ser-input-number>\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',C='<ser-form-element>\n    <label>Texto</label>\n    <textarea serControl growOnInput formControlName="text1"></textarea>\n</ser-form-element>';var _=o(5758),h=o(6411),U=o(5015),N=o(3431);let y=(()=>{class e extends a.P{constructor(){super(...arguments),this.examples=t,this.modelForm=this._fb.group({number1:[0,[l.kI.required]],number2:[0],addressCOL:[null,[l.kI.required]],text1:[null]})}}return e.\u0275fac=function(){let r;return function(o){return(r||(r=p.n5z(e)))(o||e)}}(),e.\u0275cmp=p.Xpm({type:e,selectors:[["ng-component"]],features:[p.qOj],decls:102,vars:10,consts:[[1,"form-example",3,"formGroup"],["href","#bttn-bordered",1,"example-name"],[1,"material-icons"],["id","bttn-icon"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],["type","button",1,"bttn","center-margin",3,"click"],[2,"width","300px"],["serControl","","formControlName","number1"],["serErrors","number1"],["serError","required"],["href","./#bttn-bordered",1,"example-name"],["serControl","","formControlName","number2"],["href","#address-col",1,"example-name"],["id","address-col"],[1,"desc"],["serControl","","formControlName","addressCOL"],["serErrors","addressCOL"],["serControl","","growOnInput","","formControlName","text1"]],template:function(e,r){1&e&&(p.TgZ(0,"form",0),p.TgZ(1,"a",1),p.TgZ(2,"span",2),p._uU(3,"link"),p.qZA(),p.TgZ(4,"h1",3),p._uU(5,"Entrada n\xfamerica mejorada"),p.qZA(),p.qZA(),p.TgZ(6,"div",4),p.TgZ(7,"div",5),p.TgZ(8,"div",6),p.TgZ(9,"pre"),p._UZ(10,"code",7),p.qZA(),p.TgZ(11,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(12,"span",2),p._uU(13,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(14,"div",9),p.TgZ(15,"div",6),p.TgZ(16,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("number1")}),p._uU(17,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(18,"ser-form-element",11),p.TgZ(19,"label"),p._uU(20,"N\xfamerico mejorada"),p.qZA(),p._UZ(21,"ser-input-number",12),p.TgZ(22,"div",13),p.TgZ(23,"div",14),p._uU(24,"Requerido"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(25,"a",15),p.TgZ(26,"span",2),p._uU(27,"link"),p.qZA(),p.TgZ(28,"h1",3),p._uU(29,"Entrada tipo moneda"),p.qZA(),p.qZA(),p.TgZ(30,"div",4),p.TgZ(31,"div",5),p.TgZ(32,"div",6),p.TgZ(33,"pre"),p._UZ(34,"code",7),p.qZA(),p.TgZ(35,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(36,"span",2),p._uU(37,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(38,"div",9),p.TgZ(39,"div",6),p.TgZ(40,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("number2")}),p._uU(41,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(42,"ser-form-element",11),p.TgZ(43,"label"),p._uU(44,"Moneda"),p.qZA(),p._UZ(45,"ser-input-currency",16),p.qZA(),p._uU(46),p.qZA(),p.qZA(),p.qZA(),p.TgZ(47,"a",17),p.TgZ(48,"span",2),p._uU(49,"link"),p.qZA(),p.TgZ(50,"h1",18),p._uU(51,"Direcci\xf3n (COL)"),p.qZA(),p.qZA(),p.TgZ(52,"div",4),p.TgZ(53,"div",5),p.TgZ(54,"div",6),p.TgZ(55,"pre"),p._UZ(56,"code",7),p.qZA(),p.TgZ(57,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(58,"span",2),p._uU(59,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(60,"div",9),p.TgZ(61,"div",6),p.TgZ(62,"div",19),p._uU(63,"Directiva para ingresar una direcci\xf3n guiada en formato colombiano"),p.qZA(),p.TgZ(64,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("addressCOL")}),p._uU(65,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(66,"ser-form-element",11),p.TgZ(67,"label"),p._uU(68,"Direcci\xf3n"),p.qZA(),p._UZ(69,"address-col-input",20),p.TgZ(70,"div",21),p.TgZ(71,"div",14),p._uU(72,"Requerido"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(73,"a",17),p.TgZ(74,"span",2),p._uU(75,"link"),p.qZA(),p.TgZ(76,"h1",18),p._uU(77,"\xc1rea de texto de alto din\xe1mico"),p.qZA(),p.qZA(),p.TgZ(78,"div",4),p.TgZ(79,"div",5),p.TgZ(80,"div",6),p.TgZ(81,"pre"),p._UZ(82,"code",7),p.qZA(),p.TgZ(83,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(84,"span",2),p._uU(85,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(86,"div",9),p.TgZ(87,"div",6),p.TgZ(88,"div",19),p._uU(89,"Directiva "),p.TgZ(90,"code"),p._uU(91,"growOnInput"),p.qZA(),p._uU(92," para aumentar y disminuir el alto de un "),p.TgZ(93,"code"),p._uU(94,"textarea"),p.qZA(),p._uU(95," seg\xfan el contenido"),p.qZA(),p.TgZ(96,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("text1")}),p._uU(97,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(98,"ser-form-element",11),p.TgZ(99,"label"),p._uU(100,"Texto"),p.qZA(),p._UZ(101,"textarea",22),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("formGroup",r.modelForm),p.xp6(10),p.Q6J("highlight",r.examples.NumberExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.NumberExample),p.xp6(23),p.Q6J("highlight",r.examples.CurrencyExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.CurrencyExample),p.xp6(11),p.hij(" ",r.modelForm.value.number2," "),p.xp6(10),p.Q6J("highlight",r.examples.AddressCOLExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.AddressCOLExample),p.xp6(25),p.Q6J("highlight",r.examples.TextAreaExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.TextAreaExample))},directives:[l._Y,l.JL,l.sg,d.y$,Z.e,s.n,_.l,m.C,l.JJ,l.u,q.P,T.r,h.e,U.X,l.Fj,N.p],encapsulation:2}),e})();const E='<ser-form-element>\n    <label>Texto</label>\n    <input type="text" serControl formControlName="text1">\n\n    <div serErrors="text1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',J='<ser-form-element>\n    <label>N\xfamerico</label>\n    <input type="number" serControl formControlName="number1">\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',k='<ser-form-element>\n    <label>\xc1rea de texto</label>\n    <textarea serControl formControlName="text2"></textarea>\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',F='<ser-form-element>\n    <label>Lista desplegable</label>\n    <select serControl formControlName="select1">\n        <option [value]="item" *ngFor="let item of options.simpleDropdown">{{ item }}</option>\n    </select>\n\n    <div serErrors="select1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>';function I(e,r){if(1&e&&(p.TgZ(0,"option",22),p._uU(1),p.qZA()),2&e){const e=r.$implicit;p.Q6J("value",e),p.xp6(1),p.Oqu(e)}}let Q=(()=>{class e extends a.P{constructor(){super(...arguments),this.examples=i,this.modelForm=this._fb.group({text1:["",[l.kI.required]],text2:["",[l.kI.required]],number1:[null,[l.kI.required]],select1:[null,[l.kI.required]]})}}return e.\u0275fac=function(){let r;return function(o){return(r||(r=p.n5z(e)))(o||e)}}(),e.\u0275cmp=p.Xpm({type:e,selectors:[["ng-component"]],features:[p.qOj],decls:83,vars:10,consts:[[1,"form-example",3,"formGroup"],["href","#bttn-bordered",1,"example-name"],[1,"material-icons"],["id","bttn-icon"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],["type","button",1,"bttn","center-margin",3,"click"],[2,"width","300px"],["type","text","serControl","","formControlName","text1"],["serErrors","text1"],["serError","required"],["type","number","serControl","","formControlName","number1"],["serErrors","number1"],["serControl","","formControlName","text2"],["serErrors","text2"],["serControl","","formControlName","select1"],[3,"value",4,"ngFor","ngForOf"],["serErrors","select1"],[3,"value"]],template:function(e,r){1&e&&(p.TgZ(0,"form",0),p.TgZ(1,"a",1),p.TgZ(2,"span",2),p._uU(3,"link"),p.qZA(),p.TgZ(4,"h1",3),p._uU(5,"Entrada de texto b\xe1sico"),p.qZA(),p.qZA(),p.TgZ(6,"div",4),p.TgZ(7,"div",5),p.TgZ(8,"div",6),p.TgZ(9,"pre"),p._UZ(10,"code",7),p.qZA(),p.TgZ(11,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(12,"span",2),p._uU(13,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(14,"div",9),p.TgZ(15,"div",6),p.TgZ(16,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("text1")}),p._uU(17,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(18,"ser-form-element",11),p.TgZ(19,"label"),p._uU(20,"Texto"),p.qZA(),p._UZ(21,"input",12),p.TgZ(22,"div",13),p.TgZ(23,"div",14),p._uU(24,"Requerido"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(25,"div",4),p.TgZ(26,"div",5),p.TgZ(27,"div",6),p.TgZ(28,"pre"),p._UZ(29,"code",7),p.qZA(),p.TgZ(30,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(31,"span",2),p._uU(32,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(33,"div",9),p.TgZ(34,"div",6),p.TgZ(35,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("number1")}),p._uU(36,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(37,"ser-form-element",11),p.TgZ(38,"label"),p._uU(39,"N\xfamerico"),p.qZA(),p._UZ(40,"input",15),p.TgZ(41,"div",16),p.TgZ(42,"div",14),p._uU(43,"Requerido"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(44,"div",4),p.TgZ(45,"div",5),p.TgZ(46,"div",6),p.TgZ(47,"pre"),p._UZ(48,"code",7),p.qZA(),p.TgZ(49,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(50,"span",2),p._uU(51,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(52,"div",9),p.TgZ(53,"div",6),p.TgZ(54,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("text2")}),p._uU(55,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(56,"ser-form-element",11),p.TgZ(57,"label"),p._uU(58,"\xc1rea de texto"),p.qZA(),p._UZ(59,"textarea",17),p.TgZ(60,"div",18),p.TgZ(61,"div",14),p._uU(62,"Requerido"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(63,"div",4),p.TgZ(64,"div",5),p.TgZ(65,"div",6),p.TgZ(66,"pre"),p._UZ(67,"code",7),p.qZA(),p.TgZ(68,"button",8),p.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),p.TgZ(69,"span",2),p._uU(70,"content_copy"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(71,"div",9),p.TgZ(72,"div",6),p.TgZ(73,"button",10),p.NdJ("click",function(){return r.toogleFormControlDisabled("select1")}),p._uU(74,"Habilitar / Deshabilitar"),p.qZA(),p.TgZ(75,"ser-form-element",11),p.TgZ(76,"label"),p._uU(77,"Lista desplegable"),p.qZA(),p.TgZ(78,"select",19),p.YNc(79,I,2,2,"option",20),p.qZA(),p.TgZ(80,"div",21),p.TgZ(81,"div",14),p._uU(82,"Requerido"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("formGroup",r.modelForm),p.xp6(10),p.Q6J("highlight",r.examples.InputTextExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.InputTextExample),p.xp6(18),p.Q6J("highlight",r.examples.InputNumberExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.InputNumberExample),p.xp6(18),p.Q6J("highlight",r.examples.InputTextareaExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.InputTextareaExample),p.xp6(18),p.Q6J("highlight",r.examples.InputSelectExample),p.xp6(1),p.Q6J("copyToClipboard",r.examples.InputSelectExample),p.xp6(11),p.Q6J("ngForOf",r.options.simpleDropdown))},directives:[l._Y,l.JL,l.sg,d.y$,Z.e,s.n,l.Fj,m.C,l.JJ,l.u,q.P,T.r,l.wV,l.EJ,c.sg,l.YN,l.Kr],encapsulation:2}),e})();var D=o(719);const w=[{path:"basic",component:Q},{path:"extras",component:y},{path:"pin",component:A}];let L=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[D.Bz.forChild(w)],D.Bz]}),e})();var O=o(4476);let H=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[O.m,L]]}),e})()}}]);