"use strict";(self.webpackChunkshowcase=self.webpackChunkshowcase||[]).push([[747],{3747:(Gt,W,c)=>{c.r(W),c.d(W,{SelectModule:()=>$t});var P={};c.r(P),c.d(P,{BadgeExample:()=>Te,BadgeItemCompExample:()=>xe,BadgeItemExample:()=>Ce,ItemExample:()=>Me});var F={};c.r(F),c.d(F,{PLExample:()=>Oe,SimpleExample:()=>ke});var L={};c.r(L),c.d(L,{DefaultExample:()=>Fe,MultipleExample:()=>Le});var S={};c.r(S),c.d(S,{RemoteExample:()=>je});var C=c(565);const Te='<ser-form-element style="width: 300px;">\n    <label>Solo insignia</label>\n    <ser-select serControl formControlName="badgeTemplate" [data]="options.dropdown">\n\n        <ng-template sd-badge let-item="item">\n            <div class="select-template">\n                <div class="img" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}"></div>\n                <div>\n                    <div>{{ item.name }}</div>\n                    <strong>{{ item.desc }}</strong>\n                </div>\n            </div>\n        </ng-template>\n\n    </ser-select>\n</ser-form-element>',Me='<ser-form-element style="width: 300px;">\n    <label>Solo insignia</label>\n    <ser-select serControl formControlName="itemTemplate" [data]="options.dropdown">\n\n        <ng-template sd-item let-item="item">\n            <div class="select-template">\n                <div class="img" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}"></div>\n                <div>\n                    <div>{{ item.name }}</div>\n                    <strong>{{ item.desc }}</strong>\n                </div>\n            </div>\n        </ng-template>\n\n    </ser-select>\n</ser-form-element>',Ce='<ser-form-element style="width: 300px;">\n    <label>Solo insignia</label>\n    <ser-select serControl formControlName="badgeItemTemplate" [data]="options.dropdown">\n\n        <ng-template sd-badge let-item="item">\n            <div class="select-template">\n                <div class="img" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}"></div>\n                <div>\n                    <div>{{ item.name }}</div>\n                    <strong>{{ item.desc }}</strong>\n                </div>\n            </div>\n        </ng-template>\n\n        <ng-template sd-item let-item="item">\n            <div class="select-template">\n                <div class="img" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}"></div>\n                <div>\n                    <div>{{ item.name }}</div>\n                    <strong>{{ item.desc }}</strong>\n                </div>\n            </div>\n        </ng-template>\n\n    </ser-select>\n</ser-form-element>',xe='<ser-form-element style="width: 300px;">\n    <label>Solo insignia</label>\n    <ser-select serControl formControlName="badgeItemCompTemplate" [data]="options.dropdown">\n\n        <ng-template sd-badge-item let-item="item">\n            <div class="select-template">\n                <div class="img" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}"></div>\n                <div>\n                    <div>{{ item.name }}</div>\n                    <strong>{{ item.desc }}</strong>\n                </div>\n            </div>\n        </ng-template>\n\n    </ser-select>\n</ser-form-element>';var n=c(5062),f=c(6895),u=c(4719),x=c(8216),E=c(3569),D=c(7071),I=c(4293),R=c(1321),N=c(7862);const v=function(i){return{"background-image":i}};function Ee(i,e){if(1&i&&(n.TgZ(0,"div",19),n._UZ(1,"div",20),n.TgZ(2,"div")(3,"div"),n._uU(4),n.qZA(),n.TgZ(5,"strong"),n._uU(6),n.qZA()()()),2&i){const t=e.item;n.xp6(1),n.Q6J("ngStyle",n.VKq(3,v,"url("+t.image+")")),n.xp6(3),n.Oqu(t.name),n.xp6(2),n.Oqu(t.desc)}}function De(i,e){if(1&i&&(n.TgZ(0,"div",19),n._UZ(1,"div",20),n.TgZ(2,"div")(3,"div"),n._uU(4),n.qZA(),n.TgZ(5,"strong"),n._uU(6),n.qZA()()()),2&i){const t=e.item;n.xp6(1),n.Q6J("ngStyle",n.VKq(3,v,"url("+t.image+")")),n.xp6(3),n.Oqu(t.name),n.xp6(2),n.Oqu(t.desc)}}function Ie(i,e){if(1&i&&(n.TgZ(0,"div",19),n._UZ(1,"div",20),n.TgZ(2,"div")(3,"div"),n._uU(4),n.qZA(),n.TgZ(5,"strong"),n._uU(6),n.qZA()()()),2&i){const t=e.item;n.xp6(1),n.Q6J("ngStyle",n.VKq(3,v,"url("+t.image+")")),n.xp6(3),n.Oqu(t.name),n.xp6(2),n.Oqu(t.desc)}}function Ae(i,e){if(1&i&&(n.TgZ(0,"div",19),n._UZ(1,"div",20),n.TgZ(2,"div")(3,"div"),n._uU(4),n.qZA(),n.TgZ(5,"strong"),n._uU(6),n.qZA()()()),2&i){const t=e.item;n.xp6(1),n.Q6J("ngStyle",n.VKq(3,v,"url("+t.image+")")),n.xp6(3),n.Oqu(t.name),n.xp6(2),n.Oqu(t.desc)}}function Re(i,e){if(1&i&&(n.TgZ(0,"div",19),n._UZ(1,"div",20),n.TgZ(2,"div")(3,"div"),n._uU(4),n.qZA(),n.TgZ(5,"strong"),n._uU(6),n.qZA()()()),2&i){const t=e.item;n.xp6(1),n.Q6J("ngStyle",n.VKq(3,v,"url("+t.image+")")),n.xp6(3),n.Oqu(t.name),n.xp6(2),n.Oqu(t.desc)}}let we=(()=>{class i extends C.P{constructor(){super(...arguments),this.examples=P,this.modelForm=this._fb.group({badgeTemplate:[null],itemTemplate:[null],badgeItemTemplate:[null],badgeItemCompTemplate:[null]})}}return i.\u0275fac=function(){let e;return function(o){return(e||(e=n.n5z(i)))(o||i)}}(),i.\u0275cmp=n.Xpm({type:i,selectors:[["ng-component"]],features:[n.qOj],decls:90,vars:13,consts:[[1,"form-example",3,"formGroup"],["href","#badge",1,"example-name"],[1,"material-symbols-rounded"],["id","badge"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],["type","button",1,"bttn","center-margin",3,"click"],[2,"width","300px"],["serControl","","formControlName","badgeTemplate",3,"data"],["sd-badge",""],["serControl","","formControlName","itemTemplate",3,"data"],["sd-item",""],["serControl","","formControlName","badgeItemTemplate",3,"data"],["serControl","","formControlName","badgeItemCompTemplate","multiple","",3,"data"],["sd-badge-item",""],[1,"select-template"],[1,"img",3,"ngStyle"]],template:function(t,o){1&t&&(n.TgZ(0,"form",0)(1,"a",1)(2,"span",2),n._uU(3,"link"),n.qZA(),n.TgZ(4,"h1",3),n._uU(5,"Insignia"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre"),n._UZ(10,"code",7),n.qZA(),n.TgZ(11,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(12,"span",2),n._uU(13,"content_copy"),n.qZA()()()(),n.TgZ(14,"div",9)(15,"div",6)(16,"button",10),n.NdJ("click",function(){return o.toogleFormControlDisabled("badgeTemplate")}),n._uU(17,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(18,"ser-form-element",11)(19,"label"),n._uU(20,"Insignia"),n.qZA(),n.TgZ(21,"ser-select",12),n.YNc(22,Ee,7,5,"ng-template",13),n.qZA()()()()(),n.TgZ(23,"a",1)(24,"span",2),n._uU(25,"link"),n.qZA(),n.TgZ(26,"h1",3),n._uU(27,"Elemento"),n.qZA()(),n.TgZ(28,"div",4)(29,"div",5)(30,"div",6)(31,"pre"),n._UZ(32,"code",7),n.qZA(),n.TgZ(33,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(34,"span",2),n._uU(35,"content_copy"),n.qZA()()()(),n.TgZ(36,"div",9)(37,"div",6)(38,"button",10),n.NdJ("click",function(){return o.toogleFormControlDisabled("itemTemplate")}),n._uU(39,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(40,"ser-form-element",11)(41,"label"),n._uU(42,"Elemento"),n.qZA(),n.TgZ(43,"ser-select",14),n.YNc(44,De,7,5,"ng-template",15),n.qZA()()()()(),n.TgZ(45,"a",1)(46,"span",2),n._uU(47,"link"),n.qZA(),n.TgZ(48,"h1",3),n._uU(49,"Insignia + Elemento"),n.qZA()(),n.TgZ(50,"div",4)(51,"div",5)(52,"div",6)(53,"pre"),n._UZ(54,"code",7),n.qZA(),n.TgZ(55,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(56,"span",2),n._uU(57,"content_copy"),n.qZA()()()(),n.TgZ(58,"div",9)(59,"div",6)(60,"button",10),n.NdJ("click",function(){return o.toogleFormControlDisabled("badgeItemTemplate")}),n._uU(61,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(62,"ser-form-element",11)(63,"label"),n._uU(64,"Insignia + Elemento"),n.qZA(),n.TgZ(65,"ser-select",16),n.YNc(66,Ie,7,5,"ng-template",13),n.YNc(67,Ae,7,5,"ng-template",15),n.qZA()()()()(),n.TgZ(68,"a",1)(69,"span",2),n._uU(70,"link"),n.qZA(),n.TgZ(71,"h1",3),n._uU(72,"Insignia + Elemento compacto"),n.qZA()(),n.TgZ(73,"div",4)(74,"div",5)(75,"div",6)(76,"pre"),n._UZ(77,"code",7),n.qZA(),n.TgZ(78,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(79,"span",2),n._uU(80,"content_copy"),n.qZA()()()(),n.TgZ(81,"div",9)(82,"div",6)(83,"button",10),n.NdJ("click",function(){return o.toogleFormControlDisabled("badgeItemCompTemplate")}),n._uU(84,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(85,"ser-form-element",11)(86,"label"),n._uU(87,"Insignia + Elemento compacto"),n.qZA(),n.TgZ(88,"ser-select",17),n.YNc(89,Re,7,5,"ng-template",18),n.qZA()()()()()()),2&t&&(n.Q6J("formGroup",o.modelForm),n.xp6(10),n.Q6J("highlight",o.examples.BadgeExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.BadgeExample),n.xp6(10),n.Q6J("data",o.options.dropdown),n.xp6(11),n.Q6J("highlight",o.examples.ItemExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.ItemExample),n.xp6(10),n.Q6J("data",o.options.dropdown),n.xp6(11),n.Q6J("highlight",o.examples.BadgeItemExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.BadgeItemExample),n.xp6(10),n.Q6J("data",o.options.dropdown),n.xp6(12),n.Q6J("highlight",o.examples.BadgeItemCompExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.BadgeItemCompExample),n.xp6(10),n.Q6J("data",o.options.dropdown))},dependencies:[f.PC,u._Y,u.JJ,u.JL,u.sg,u.u,x.y$,E.e,D.n,I.C,R.z,N.YT,N.BK,N.FK],encapsulation:2}),i})();const ke='<ser-form-element>\n    <label>Simple</label>\n    <ser-select serControl formControlName="simpleSelect" [data]="options.dropdown" simple></ser-select>\n</ser-form-element>',Oe='<ser-form-element>\n    <ser-select serControl formControlName="plTemplate" [data]="options.dropdown" labelKey="desc" primaryKey="name"></ser-select>\n</ser-form-element>';let Pe=(()=>{class i extends C.P{constructor(){super(...arguments),this.examples=F,this.modelForm=this._fb.group({simpleSelect:[null],simpleMultiSelect:[null],plTemplate:[null],badgeItemCompTemplate:[null]})}}return i.\u0275fac=function(){let e;return function(o){return(e||(e=n.n5z(i)))(o||i)}}(),i.\u0275cmp=n.Xpm({type:i,selectors:[["ng-component"]],features:[n.qOj],decls:60,vars:7,consts:[[1,"form-example",3,"formGroup"],["href","#badge",1,"example-name"],[1,"material-symbols-rounded"],["id","badge"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],[1,"desc"],["type","button",1,"bttn","center-margin",3,"click"],[2,"width","300px"],["serControl","","formControlName","simpleSelect","simple","",3,"data"],["serControl","","formControlName","plTemplate","labelKey","desc","primaryKey","name",3,"data"]],template:function(t,o){1&t&&(n.TgZ(0,"form",0)(1,"a",1)(2,"span",2),n._uU(3,"link"),n.qZA(),n.TgZ(4,"h1",3),n._uU(5,"Simple"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre"),n._UZ(10,"code",7),n.qZA(),n.TgZ(11,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(12,"span",2),n._uU(13,"content_copy"),n.qZA()()()(),n.TgZ(14,"div",9)(15,"div",6)(16,"div",10),n._uU(17,"Usa el atributo "),n.TgZ(18,"code"),n._uU(19,"simple"),n.qZA(),n._uU(20," para deshabilitar la funci\xf3n de busqueda y el bot\xf3n de limpiar"),n.qZA(),n.TgZ(21,"button",11),n.NdJ("click",function(){return o.toogleFormControlDisabled("simpleSelect")}),n._uU(22,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(23,"ser-form-element",12)(24,"label"),n._uU(25,"Simple"),n.qZA(),n._UZ(26,"ser-select",13),n.qZA()()()(),n.TgZ(27,"a",1)(28,"span",2),n._uU(29,"link"),n.qZA(),n.TgZ(30,"h1",3),n._uU(31,"Valor - Insignia"),n.qZA()(),n.TgZ(32,"div",4)(33,"div",5)(34,"div",6)(35,"pre"),n._UZ(36,"code",7),n.qZA(),n.TgZ(37,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(38,"span",2),n._uU(39,"content_copy"),n.qZA()()()(),n.TgZ(40,"div",9)(41,"div",6)(42,"div",10),n._uU(43,"Usa el atributo "),n.TgZ(44,"code"),n._uU(45,"primaryKey"),n.qZA(),n._uU(46," para indicar el nombre de la propiedad que se usar\xe1 como valor seleccionado y "),n.TgZ(47,"code"),n._uU(48,"labelKey"),n.qZA(),n._uU(49," para la clave que se usar\xe1 como insignia, por defecto los valores con "),n.TgZ(50,"i"),n._uU(51,"id"),n.qZA(),n._uU(52," y "),n.TgZ(53,"i"),n._uU(54,"name"),n.qZA(),n._uU(55," respectivamente"),n.qZA(),n.TgZ(56,"button",11),n.NdJ("click",function(){return o.toogleFormControlDisabled("plTemplate")}),n._uU(57,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(58,"ser-form-element",12),n._UZ(59,"ser-select",14),n.qZA()()()()()),2&t&&(n.Q6J("formGroup",o.modelForm),n.xp6(10),n.Q6J("highlight",o.examples.SimpleExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.SimpleExample),n.xp6(15),n.Q6J("data",o.options.dropdown),n.xp6(10),n.Q6J("highlight",o.examples.PLExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.PLExample),n.xp6(22),n.Q6J("data",o.options.dropdown))},dependencies:[u._Y,u.JJ,u.JL,u.sg,u.u,x.y$,E.e,D.n,I.C,R.z],encapsulation:2}),i})();var B=c(1584);const Fe='<ser-form-element>\n    <label>Por defecto</label>\n    <ser-select serControl formControlName="selectDefault" [data]="options.dropdown"></ser-select>\n\n    <div serErrors="selectDefault">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>',Le='<ser-form-element>\n    <label>Multiple</label>\n    <ser-select serControl formControlName="selectMultiple" [data]="options.dropdown" multiple></ser-select>\n\n    <div serErrors="selectMultiple">\n        <div serError="required">Requerido</div>\n    </div>\n</ser-form-element>';var Se=c(8305),Ne=c(9983);let Be=(()=>{class i extends C.P{constructor(){super(...arguments),this.examples=L,this.modelForm=this._fb.group({selectDefault:[null,u.kI.required],selectMultiple:[null,u.kI.required]}),this.settingsb={canItemSelected:(t,o)=>this.canSelect(t,o)}}canSelect(t,o){return console.log(o),!1}}return i.\u0275fac=function(){let e;return function(o){return(e||(e=n.n5z(i)))(o||i)}}(),i.\u0275cmp=n.Xpm({type:i,selectors:[["ng-component"]],features:[n.qOj],decls:49,vars:8,consts:[[1,"form-example",3,"formGroup"],["routerLink",".","fragment","default",1,"example-name"],[1,"material-symbols-rounded"],["id","default"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],["type","button",1,"bttn","center-margin",3,"click"],[2,"width","300px"],["serControl","","formControlName","selectDefault",3,"data","settings"],["serErrors","selectDefault"],["serError","required"],["routerLink",".","fragment","multiple",1,"example-name"],["id","multiple"],["serControl","","formControlName","selectMultiple","multiple","",3,"data"],["serErrors","selectMultiple"]],template:function(t,o){1&t&&(n.TgZ(0,"form",0)(1,"a",1)(2,"span",2),n._uU(3,"link"),n.qZA(),n.TgZ(4,"h1",3),n._uU(5,"Default"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre"),n._UZ(10,"code",7),n.qZA(),n.TgZ(11,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(12,"span",2),n._uU(13,"content_copy"),n.qZA()()()(),n.TgZ(14,"div",9)(15,"div",6)(16,"button",10),n.NdJ("click",function(){return o.toogleFormControlDisabled("selectDefault")}),n._uU(17,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(18,"ser-form-element",11)(19,"label"),n._uU(20,"Por defecto"),n.qZA(),n._UZ(21,"ser-select",12),n.TgZ(22,"div",13)(23,"div",14),n._uU(24,"Requerido"),n.qZA()()()()()(),n.TgZ(25,"a",15)(26,"span",2),n._uU(27,"link"),n.qZA(),n.TgZ(28,"h1",16),n._uU(29,"Multiple"),n.qZA()(),n.TgZ(30,"div",4)(31,"div",5)(32,"div",6)(33,"pre"),n._UZ(34,"code",7),n.qZA(),n.TgZ(35,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(36,"span",2),n._uU(37,"content_copy"),n.qZA()()()(),n.TgZ(38,"div",9)(39,"div",6)(40,"button",10),n.NdJ("click",function(){return o.toogleFormControlDisabled("selectMultiple")}),n._uU(41,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(42,"ser-form-element",11)(43,"label"),n._uU(44,"M\xfaltiple"),n.qZA(),n._UZ(45,"ser-select",17),n.TgZ(46,"div",18)(47,"div",14),n._uU(48,"Requerido"),n.qZA()()()()()()()),2&t&&(n.Q6J("formGroup",o.modelForm),n.xp6(10),n.Q6J("highlight",o.examples.DefaultExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.DefaultExample),n.xp6(10),n.Q6J("data",o.options.dropdown)("settings",o.settingsb),n.xp6(13),n.Q6J("highlight",o.examples.MultipleExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.MultipleExample),n.xp6(10),n.Q6J("data",o.options.dropdown))},dependencies:[u._Y,u.JJ,u.JL,u.sg,u.u,x.y$,E.e,D.n,I.C,Se.P,Ne.r,R.z,B.yS],encapsulation:2}),i})();var Ze=c(7384);const je='<ser-form-element>\n    <label>Lista remota</label>\n    <ser-select serControl formControlName="selectRemote" [settings]="settings"></ser-select>\n</ser-form-element>';var K=c(2986);const Ue=[{path:"basic",component:Be},{path:"templates",component:we},{path:"remote",component:(()=>{class i extends C.P{constructor(){super(...arguments),this.examples=S,this.modelForm=this._fb.group({selectRemote:[]}),this.settings={badgeShowLimit:3,remote:!0,groupBy:"state_name",paginationState:{listPath:["results"],rowCountPath:["row_count"],hasNextPagePath:["has_next_page"],getList:t=>this.getCityListData(t)}}}getCityListData(t){let o={take:t.paginationState?.pageSize,page:t.paginationState?.currentPage};return(0,Ze.U)(t.paginationState?.searchTerm)&&(o.searchTerm=t.paginationState?.searchTerm),this._http.get("http://192.168.1.170:5000/admin/country/143/city",{params:o}).pipe((0,K.q)(1))}}return i.\u0275fac=function(){let e;return function(o){return(e||(e=n.n5z(i)))(o||i)}}(),i.\u0275cmp=n.Xpm({type:i,selectors:[["showcase-remote"]],features:[n.qOj],decls:22,vars:4,consts:[[1,"form-example",3,"formGroup"],["href","#default",1,"example-name"],[1,"material-symbols-rounded"],["id","default"],[1,"example-snippet"],[1,"code"],[1,"body"],[3,"highlight"],["type","button",1,"bttn","icon","copy",3,"copyToClipboard","copied"],[1,"preview"],["type","button",1,"bttn","center-margin",3,"click"],[2,"min-width","300px"],["serControl","","formControlName","selectRemote","multiple","",3,"settings"]],template:function(t,o){1&t&&(n.TgZ(0,"form",0)(1,"a",1)(2,"span",2),n._uU(3,"link"),n.qZA(),n.TgZ(4,"h1",3),n._uU(5,"Listas remotas"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"pre"),n._UZ(10,"code",7),n.qZA(),n.TgZ(11,"button",8),n.NdJ("copied",function(){return o.alert("Copiado al portapapeles")}),n.TgZ(12,"span",2),n._uU(13,"content_copy"),n.qZA()()()(),n.TgZ(14,"div",9)(15,"div",6)(16,"button",10),n.NdJ("click",function(){return o.toogleFormControlDisabled("selectRemote")}),n._uU(17,"Habilitar / Deshabilitar"),n.qZA(),n.TgZ(18,"ser-form-element",11)(19,"label"),n._uU(20,"Lista remota"),n.qZA(),n._UZ(21,"ser-select",12),n.qZA()()()()()),2&t&&(n.Q6J("formGroup",o.modelForm),n.xp6(10),n.Q6J("highlight",o.examples.RemoteExample),n.xp6(1),n.Q6J("copyToClipboard",o.examples.RemoteExample),n.xp6(10),n.Q6J("settings",o.settings))},dependencies:[u._Y,u.JJ,u.JL,u.sg,u.u,x.y$,E.e,D.n,I.C,R.z],encapsulation:2}),i})()},{path:"options",component:Pe}];let He=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[B.Bz.forChild(Ue),B.Bz]}),i})();var $e=c(1115);let j;try{j=typeof Intl<"u"&&Intl.v8BreakIterator}catch{j=!1}let z=(()=>{class i{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,f.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!j)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(n.Lbi))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Je=(()=>{class i{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[Je]}),i})();function X(i){return Array.isArray(i)?i:[i]}var et=c(8929),tt=c(3426),it=c(1221),nt=c(6498),ot=c(3489);class rt{constructor(e){this.total=e}call(e,t){return t.subscribe(new st(e,this.total))}}class st extends ot.L{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){++this.count>this.total&&this.destination.next(e)}}var lt=c(13),ee=c(4850),ct=c(1059),dt=c(7625);const te=new Set;let g,ut=(()=>{class i{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):pt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&function ht(i){if(!te.has(i))try{g||(g=document.createElement("style"),g.setAttribute("type","text/css"),document.head.appendChild(g)),g.sheet&&(g.sheet.insertRule(`@media ${i} {body{ }}`,0),te.add(i))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(z))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function pt(i){return{matches:"all"===i||""===i,media:i,addListener:()=>{},removeListener:()=>{}}}let mt=(()=>{class i{constructor(t,o){this._mediaMatcher=t,this._zone=o,this._queries=new Map,this._destroySubject=new et.xQ}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return ie(X(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){const a=ie(X(t)).map(s=>this._registerQuery(s).observable);let r=(0,tt.aj)(a);return r=(0,it.z)(r.pipe((0,K.q)(1)),r.pipe(function at(i){return e=>e.lift(new rt(i))}(1),(0,lt.b)(0))),r.pipe((0,ee.U)(s=>{const l={matches:!1,breakpoints:{}};return s.forEach(({matches:d,query:p})=>{l.matches=l.matches||d,l.breakpoints[p]=d}),l}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const o=this._mediaMatcher.matchMedia(t),r={observable:new nt.y(s=>{const l=d=>this._zone.run(()=>s.next(d));return o.addListener(l),()=>{o.removeListener(l)}}).pipe((0,ct.O)(o),(0,ee.U)(({matches:s})=>({query:t,matches:s})),(0,dt.R)(this._destroySubject)),mql:o};return this._queries.set(t,r),r}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(ut),n.LFG(n.R0b))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function ie(i){return i.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}const re="cdk-high-contrast-black-on-white",se="cdk-high-contrast-white-on-black",H="cdk-high-contrast-active";let le=(()=>{class i{constructor(t,o){this._platform=t,this._document=o,this._breakpointSubscription=(0,n.f3M)(mt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const o=this._document.defaultView||window,a=o&&o.getComputedStyle?o.getComputedStyle(t):null,r=(a&&a.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove(H,re,se),this._hasCheckedHighContrastMode=!0;const o=this.getHighContrastMode();1===o?t.add(H,re):2===o&&t.add(H,se)}}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(z),n.LFG(f.K0))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Ct=(()=>{class i{constructor(t){t._applyBodyHighContrastModeCssClasses()}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(le))},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[J]}),i})(),It=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({}),i})(),ce=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({}),i})();const kt=new n.OlP("mat-sanity-checks",{providedIn:"root",factory:function wt(){return!0}});let O=(()=>{class i{constructor(t,o,a){this._sanityChecks=o,this._document=a,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return!function qe(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[t])}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(le),n.LFG(kt,8),n.LFG(f.K0))},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[ce,ce]}),i})(),St=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[O,O]}),i})(),Ht=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[f.ez,O,It,St,J,Ct,O]}),i})(),$t=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[$e.m,Ht,He]}),i})()}}]);