"use strict";(self.webpackChunkshowcase=self.webpackChunkshowcase||[]).push([[984],{1984:(S,x,n)=>{n.r(x),n.d(x,{FormModule:()=>H});var p={};n.r(p),n.d(p,{PINExample:()=>T});var s={};n.r(s),n.d(s,{AddressCOLExample:()=>U,CurrencyExample:()=>E,NumberExample:()=>A,TextAreaExample:()=>y});var u={};n.r(u),n.d(u,{InputNumberExample:()=>Q,InputSelectExample:()=>B,InputTextExample:()=>L,InputTextareaExample:()=>D});var t=n(4182),d=n(565);const T='<ser-form-element>\n    <pin-input serControl formControlName="pin1" [codeLength]="codeLength" [onlyNumber]="onlyNumber" [isCodeHidden]="isCodeHidden"></pin-input>\n\n    <div serErrors="pin1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>';var e=n(6435),c=n(8771),g=n(3569),Z=n(7071),b=n(4293),f=n(9808),_=n(8102),v=n(8305),C=n(9983);function h(o,l){if(1&o&&(e.ynx(0),e.TgZ(1,"ser-form-element"),e._UZ(2,"pin-input",18),e.TgZ(3,"div",19)(4,"div",20),e._uU(5,"Requerido"),e.qZA()()(),e.BQk()),2&o){const i=e.oxw();e.xp6(2),e.Q6J("codeLength",i.modelForm.value.pinForm.codeLength)("onlyNumber",i.modelForm.value.pinForm.onlyNumber)("isCodeHidden",i.modelForm.value.pinForm.isCodeHidden)}}let q=(()=>{class o extends d.P{constructor(){super(...arguments),this.examples=p,this.modelForm=this._fb.group({pin1:["",[t.kI.required]],pinForm:this._fb.group({codeLength:[4,t.kI.required],onlyNumber:[!0,t.kI.required],isCodeHidden:[!1,t.kI.required]})}),this.pinShow=!0}init(){this.modelForm.get("pinForm").valueChanges.subscribe(()=>{this.pinShow=!1,setTimeout(()=>{this.pinShow=!0},500)})}}return o.\u0275fac=function(){let l;return function(r){return(l||(l=e.n5z(o)))(r||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e.qOj],decls:35,vars:4,consts:[[1,"form-example",3,"formGroup"],["href","#",1,"example-name"],[1,"material-icons"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],[1,"desc"],["formGroupName","pinForm"],[1,"row","start-center"],["serControl","","type","number","formControlName","codeLength"],[1,"checkbox"],["serControl","","type","checkbox","formControlName","onlyNumber"],["serControl","","type","checkbox","formControlName","isCodeHidden"],["type","button",1,"bttn","center-margin",3,"click"],[4,"ngIf"],["serControl","","formControlName","pin1",3,"codeLength","onlyNumber","isCodeHidden"],["serErrors","pin1"],["serError","required"]],template:function(i,r){1&i&&(e.TgZ(0,"form",0)(1,"a",1)(2,"span",2),e._uU(3,"link"),e.qZA(),e.TgZ(4,"h1"),e._uU(5,"Entrada tipo PIN"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"pre"),e._UZ(10,"code",6),e.qZA(),e.TgZ(11,"button",7),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(12,"span",2),e._uU(13,"content_copy"),e.qZA()()()(),e.TgZ(14,"div",8)(15,"div",5)(16,"div",9),e._uU(17,"Directiva para ingresar un PIN alfanum\xe9rico de longitud variable"),e.qZA(),e.ynx(18,10),e.TgZ(19,"div",11)(20,"ser-form-element")(21,"label"),e._uU(22,"Tama\xf1o"),e.qZA(),e._UZ(23,"input",12),e.qZA(),e.TgZ(24,"div",13)(25,"label"),e._UZ(26,"input",14),e._uU(27," Solo n\xfameros "),e.qZA()(),e.TgZ(28,"div",13)(29,"label"),e._UZ(30,"input",15),e._uU(31," Ocultar escritura "),e.qZA()()(),e.BQk(),e.TgZ(32,"button",16),e.NdJ("click",function(){return r.toogleFormControlDisabled("pin1")}),e._uU(33,"Habilitar / Deshabilitar"),e.qZA(),e.YNc(34,h,6,3,"ng-container",17),e.qZA()()()()),2&i&&(e.Q6J("formGroup",r.modelForm),e.xp6(10),e.Q6J("highlight",r.examples.PINExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.PINExample),e.xp6(23),e.Q6J("ngIf",r.pinShow))},directives:[t._Y,t.JL,t.sg,c.y$,g.e,t.x0,Z.n,t.wV,t.Fj,b.C,t.JJ,t.u,t.Wl,f.O5,_.r,v.P,C.r],styles:[""]}),o})();const A='<ser-form-element>\n    <label>N\xfamerico mejorada</label>\n    <ser-input-number serControl formControlName="number1"></ser-input-number>\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',E='<ser-form-element>\n    <label>Moneda</label>\n    <ser-input-currency serControl formControlName="number2"></ser-input-currency>\n\n    <div serErrors="number2">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',U='<ser-form-element>\n    <label>N\xfamerico mejorada</label>\n    <ser-input-number serControl formControlName="number1"></ser-input-number>\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',y='<ser-form-element>\n    <label>Texto</label>\n    <textarea serControl growOnInput formControlName="text1"></textarea>\n</ser-form-element>';var m=n(6114),N=n(8826),F=n(2816),J=n(4709),I=n(4920);let k=(()=>{class o extends d.P{constructor(){super(...arguments),this.examples=s,this.modelForm=this._fb.group({number1:[null,[t.kI.required]],number2:[null,[t.kI.required]],addressCOL:[null,[t.kI.required]],text1:[null]})}}return o.\u0275fac=function(){let l;return function(r){return(l||(l=e.n5z(o)))(r||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e.qOj],decls:104,vars:9,consts:[[1,"form-example",3,"formGroup"],["routerLink",".","fragment","input-number",1,"example-name"],[1,"material-icons"],["id","input-number"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],["type","button",1,"bttn","center-margin",3,"click"],[2,"width","300px"],["serControl","","formControlName","number1"],["serErrors","number1"],["serError","required"],["routerLink",".","fragment","input-currency",1,"example-name"],["id","input-currency"],["serControl","","formControlName","number2"],["serErrors","number2"],["routerLink",".","fragment","address-col",1,"example-name"],["id","address-col"],[1,"desc"],["serControl","","formControlName","addressCOL"],["serErrors","addressCOL"],["routerLink",".","fragment","grow-on-input",1,"example-name"],["id","grow-on-input"],["serControl","","growOnInput","","formControlName","text1"]],template:function(i,r){1&i&&(e.TgZ(0,"form",0)(1,"a",1)(2,"span",2),e._uU(3,"link"),e.qZA(),e.TgZ(4,"h1",3),e._uU(5,"Entrada n\xfamerica mejorada"),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre"),e._UZ(10,"code",7),e.qZA(),e.TgZ(11,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(12,"span",2),e._uU(13,"content_copy"),e.qZA()()()(),e.TgZ(14,"div",9)(15,"div",6)(16,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("number1")}),e._uU(17,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(18,"ser-form-element",11)(19,"label"),e._uU(20,"N\xfamerico mejorada"),e.qZA(),e._UZ(21,"ser-input-number",12),e.TgZ(22,"div",13)(23,"div",14),e._uU(24,"Requerido"),e.qZA()()()()()(),e.TgZ(25,"a",15)(26,"span",2),e._uU(27,"link"),e.qZA(),e.TgZ(28,"h1",16),e._uU(29,"Entrada tipo moneda"),e.qZA()(),e.TgZ(30,"div",4)(31,"div",5)(32,"div",6)(33,"pre"),e._UZ(34,"code",7),e.qZA(),e.TgZ(35,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(36,"span",2),e._uU(37,"content_copy"),e.qZA()()()(),e.TgZ(38,"div",9)(39,"div",6)(40,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("number2")}),e._uU(41,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(42,"ser-form-element",11)(43,"label"),e._uU(44,"Moneda"),e.qZA(),e._UZ(45,"ser-input-currency",17),e.TgZ(46,"div",18)(47,"div",14),e._uU(48,"Requerido"),e.qZA()()()()()(),e.TgZ(49,"a",19)(50,"span",2),e._uU(51,"link"),e.qZA(),e.TgZ(52,"h1",20),e._uU(53,"Direcci\xf3n (COL)"),e.qZA()(),e.TgZ(54,"div",4)(55,"div",5)(56,"div",6)(57,"pre"),e._UZ(58,"code",7),e.qZA(),e.TgZ(59,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(60,"span",2),e._uU(61,"content_copy"),e.qZA()()()(),e.TgZ(62,"div",9)(63,"div",6)(64,"div",21),e._uU(65,"Directiva para ingresar una direcci\xf3n guiada en formato colombiano"),e.qZA(),e.TgZ(66,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("addressCOL")}),e._uU(67,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(68,"ser-form-element",11)(69,"label"),e._uU(70,"Direcci\xf3n"),e.qZA(),e._UZ(71,"address-col-input",22),e.TgZ(72,"div",23)(73,"div",14),e._uU(74,"Requerido"),e.qZA()()()()()(),e.TgZ(75,"a",24)(76,"span",2),e._uU(77,"link"),e.qZA(),e.TgZ(78,"h1",25),e._uU(79,"\xc1rea de texto de alto din\xe1mico"),e.qZA()(),e.TgZ(80,"div",4)(81,"div",5)(82,"div",6)(83,"pre"),e._UZ(84,"code",7),e.qZA(),e.TgZ(85,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(86,"span",2),e._uU(87,"content_copy"),e.qZA()()()(),e.TgZ(88,"div",9)(89,"div",6)(90,"div",21),e._uU(91,"Directiva "),e.TgZ(92,"code"),e._uU(93,"growOnInput"),e.qZA(),e._uU(94," para aumentar y disminuir el alto de un "),e.TgZ(95,"code"),e._uU(96,"textarea"),e.qZA(),e._uU(97," seg\xfan el contenido"),e.qZA(),e.TgZ(98,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("text1")}),e._uU(99,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(100,"ser-form-element",11)(101,"label"),e._uU(102,"Texto"),e.qZA(),e._UZ(103,"textarea",26),e.qZA()()()()()),2&i&&(e.Q6J("formGroup",r.modelForm),e.xp6(10),e.Q6J("highlight",r.examples.NumberExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.NumberExample),e.xp6(23),e.Q6J("highlight",r.examples.CurrencyExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.CurrencyExample),e.xp6(23),e.Q6J("highlight",r.examples.AddressCOLExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.AddressCOLExample),e.xp6(25),e.Q6J("highlight",r.examples.TextAreaExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.TextAreaExample))},directives:[t._Y,t.JL,t.sg,m.yS,c.y$,g.e,Z.n,N.l,b.C,t.JJ,t.u,v.P,C.r,F.e,J.X,t.Fj,I.p],encapsulation:2}),o})();const L='<ser-form-element>\n    <label>Texto</label>\n    <input type="text" serControl formControlName="text1">\n\n    <div serErrors="text1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',Q='<ser-form-element>\n    <label>N\xfamerico</label>\n    <input type="number" serControl formControlName="number1">\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',D='<ser-form-element>\n    <label>\xc1rea de texto</label>\n    <textarea serControl formControlName="text2"></textarea>\n\n    <div serErrors="number1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',B='<ser-form-element>\n    <label>Lista desplegable</label>\n    <select serControl formControlName="select1">\n        <option [value]="item" *ngFor="let item of options.simpleDropdown">{{ item }}</option>\n    </select>\n\n    <div serErrors="select1">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>';function O(o,l){if(1&o&&(e.TgZ(0,"option",26),e._uU(1),e.qZA()),2&o){const i=l.$implicit;e.Q6J("value",i),e.xp6(1),e.Oqu(i)}}const P=[{path:"basic",component:(()=>{class o extends d.P{constructor(){super(...arguments),this.examples=u,this.modelForm=this._fb.group({text1:["",[t.kI.required]],text2:["",[t.kI.required]],number1:[null,[t.kI.required]],select1:[null,[t.kI.required]]})}}return o.\u0275fac=function(){let l;return function(r){return(l||(l=e.n5z(o)))(r||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e.qOj],decls:93,vars:10,consts:[[1,"form-example",3,"formGroup"],["href","#bttn-bordered",1,"example-name"],[1,"material-icons"],["id","bttn-icon"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],["type","button",1,"bttn","center-margin",3,"click"],[2,"width","300px"],["type","text","serControl","","formControlName","text1"],["serErrors","text1"],["serError","required"],["type","number","serControl","","formControlName","number1"],["serErrors","number1"],["routerLink",".","fragment","textarea",1,"example-name"],["id","textarea"],["serControl","","formControlName","text2"],["serErrors","text2"],["routerLink",".","fragment","select",1,"example-name"],["id","select"],["serControl","","formControlName","select1"],[3,"value",4,"ngFor","ngForOf"],["serErrors","select1"],[3,"value"]],template:function(i,r){1&i&&(e.TgZ(0,"form",0)(1,"a",1)(2,"span",2),e._uU(3,"link"),e.qZA(),e.TgZ(4,"h1",3),e._uU(5,"Entrada de texto b\xe1sico"),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre"),e._UZ(10,"code",7),e.qZA(),e.TgZ(11,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(12,"span",2),e._uU(13,"content_copy"),e.qZA()()()(),e.TgZ(14,"div",9)(15,"div",6)(16,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("text1")}),e._uU(17,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(18,"ser-form-element",11)(19,"label"),e._uU(20,"Texto"),e.qZA(),e._UZ(21,"input",12),e.TgZ(22,"div",13)(23,"div",14),e._uU(24,"Requerido"),e.qZA()()()()()(),e.TgZ(25,"div",4)(26,"div",5)(27,"div",6)(28,"pre"),e._UZ(29,"code",7),e.qZA(),e.TgZ(30,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(31,"span",2),e._uU(32,"content_copy"),e.qZA()()()(),e.TgZ(33,"div",9)(34,"div",6)(35,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("number1")}),e._uU(36,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(37,"ser-form-element",11)(38,"label"),e._uU(39,"N\xfamerico"),e.qZA(),e._UZ(40,"input",15),e.TgZ(41,"div",16)(42,"div",14),e._uU(43,"Requerido"),e.qZA()()()()()(),e.TgZ(44,"a",17)(45,"span",2),e._uU(46,"link"),e.qZA(),e.TgZ(47,"h1",18),e._uU(48,"Textarea"),e.qZA()(),e.TgZ(49,"div",4)(50,"div",5)(51,"div",6)(52,"pre"),e._UZ(53,"code",7),e.qZA(),e.TgZ(54,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(55,"span",2),e._uU(56,"content_copy"),e.qZA()()()(),e.TgZ(57,"div",9)(58,"div",6)(59,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("text2")}),e._uU(60,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(61,"ser-form-element",11)(62,"label"),e._uU(63,"\xc1rea de texto"),e.qZA(),e._UZ(64,"textarea",19),e.TgZ(65,"div",20)(66,"div",14),e._uU(67,"Requerido"),e.qZA()()()()()(),e.TgZ(68,"a",21)(69,"span",2),e._uU(70,"link"),e.qZA(),e.TgZ(71,"h1",22),e._uU(72,"Select"),e.qZA()(),e.TgZ(73,"div",4)(74,"div",5)(75,"div",6)(76,"pre"),e._UZ(77,"code",7),e.qZA(),e.TgZ(78,"button",8),e.NdJ("copied",function(){return r.alert("Copiado al portapapeles")}),e.TgZ(79,"span",2),e._uU(80,"content_copy"),e.qZA()()()(),e.TgZ(81,"div",9)(82,"div",6)(83,"button",10),e.NdJ("click",function(){return r.toogleFormControlDisabled("select1")}),e._uU(84,"Habilitar / Deshabilitar"),e.qZA(),e.TgZ(85,"ser-form-element",11)(86,"label"),e._uU(87,"Lista desplegable"),e.qZA(),e.TgZ(88,"select",23),e.YNc(89,O,2,2,"option",24),e.qZA(),e.TgZ(90,"div",25)(91,"div",14),e._uU(92,"Requerido"),e.qZA()()()()()()()),2&i&&(e.Q6J("formGroup",r.modelForm),e.xp6(10),e.Q6J("highlight",r.examples.InputTextExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.InputTextExample),e.xp6(18),e.Q6J("highlight",r.examples.InputNumberExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.InputNumberExample),e.xp6(23),e.Q6J("highlight",r.examples.InputTextareaExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.InputTextareaExample),e.xp6(23),e.Q6J("highlight",r.examples.InputSelectExample),e.xp6(1),e.Q6J("copyToClipboard",r.examples.InputSelectExample),e.xp6(11),e.Q6J("ngForOf",r.options.simpleDropdown))},directives:[t._Y,t.JL,t.sg,c.y$,g.e,Z.n,t.Fj,b.C,t.JJ,t.u,v.P,C.r,t.wV,m.yS,t.EJ,f.sg,t.YN,t.Kr],encapsulation:2}),o})()},{path:"extras",component:k},{path:"pin",component:q}];let R=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(P)],m.Bz]}),o})();var j=n(1115);let H=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[j.m,R]]}),o})()}}]);