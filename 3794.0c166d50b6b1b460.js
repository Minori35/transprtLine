"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[3794],{3794:(U,r,o)=>{o.r(r),o.d(r,{UtilitiesModule:()=>Z});var p=o(6814),l=o(2058),i=o(9212),u=o(4528),a=o(3714);function m(e,d){if(1&e&&(i.TgZ(0,"div",11),i._UZ(1,"i"),i.TgZ(2,"div"),i._uU(3),i.qZA()()),2&e){const t=d.$implicit;i.xp6(1),i.Gre("text-2xl pi pi-",t.properties.name,""),i.xp6(2),i.hij("pi-",t.properties.name,"")}}let h=(()=>{class e{constructor(t){this.iconService=t,this.icons=[],this.filteredIcons=[]}ngOnInit(){this.iconService.getIcons().subscribe(t=>{let n=t=t.filter(s=>-1===s.icon.tags.indexOf("deprecate"));n.sort((s,c)=>s.properties.name<c.properties.name?-1:s.properties.name<c.properties.name?1:0),this.icons=n,this.filteredIcons=t})}onFilter(t){const n=t.target.value;this.filteredIcons=n?this.icons.filter(s=>s.icon.tags[0].includes(n)):this.icons}static#i=this.\u0275fac=function(n){return new(n||e)(i.Y36(u.C))};static#e=this.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:59,vars:1,consts:[[1,"card"],[1,"app-code"],[1,"pi","pi-check",2,"margin-right",".5rem"],[1,"pi","pi-times"],[1,"pi","pi-check"],[1,"pi","pi-check",2,"font-size","2rem"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],["href","https://github.com/primefaces/primeicons/issues",1,"text-primary","hover:underline"],["pInputText","","placeholder","Search an icon",1,"w-full","p-3","mt-3","mb-5","w-full","p-3","mt-3","mb-5",3,"input"],[1,"grid","text-center"],["class","col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",4,"ngFor","ngForOf"],[1,"col-6","sm:col-4","lg:col-3","xl:col-2","pb-5"]],template:function(n,s){1&n&&(i.TgZ(0,"div",0)(1,"h2"),i._uU(2,"Icons"),i.qZA(),i.TgZ(3,"h4"),i._uU(4,"Download"),i.qZA(),i.TgZ(5,"pre",1)(6,"code"),i._uU(7,"npm install primeicons --save"),i.qZA()(),i.TgZ(8,"h4"),i._uU(9,"Getting Started"),i.qZA(),i.TgZ(10,"p"),i._uU(11,"PrimeIcons use the "),i.TgZ(12,"strong"),i._uU(13,"pi pi-{icon}"),i.qZA(),i._uU(14," syntax such as "),i.TgZ(15,"strong"),i._uU(16,"pi pi-check"),i.qZA(),i._uU(17,". A standalone icon can be displayed using an element such as "),i.TgZ(18,"i"),i._uU(19,"i"),i.qZA(),i._uU(20," or "),i.TgZ(21,"i"),i._uU(22,"span"),i.qZA()(),i.TgZ(23,"pre",1)(24,"code"),i._uU(25,'<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>'),i.qZA()(),i._UZ(26,"i",2)(27,"i",3),i.TgZ(28,"h4"),i._uU(29,"Size"),i.qZA(),i.TgZ(30,"p"),i._uU(31,"Size of the icons can easily be changed using font-size property."),i.qZA(),i.TgZ(32,"pre",1)(33,"code"),i._uU(34,'<i class="pi pi-check"></i>'),i.qZA()(),i._UZ(35,"i",4),i.TgZ(36,"pre",1)(37,"code"),i._uU(38,'<i class="pi pi-check" style="font-size: 2rem"></i>'),i.qZA()(),i._UZ(39,"i",5),i.TgZ(40,"h4"),i._uU(41,"Spinning Animation"),i.qZA(),i.TgZ(42,"p"),i._uU(43,"Special pi-spin class applies infinite rotate to an icon."),i.qZA(),i.TgZ(44,"pre",1)(45,"code"),i._uU(46,'<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>'),i.qZA()(),i._UZ(47,"i",6),i.TgZ(48,"h4"),i._uU(49,"List of Icons"),i.qZA(),i.TgZ(50,"p"),i._uU(51,"Here is the current list of PrimeIcons, more icons will be added periodically. You may also "),i.TgZ(52,"a",7),i._uU(53,"request new icons"),i.qZA(),i._uU(54," at the issue tracker."),i.qZA(),i.TgZ(55,"div")(56,"input",8),i.NdJ("input",function(f){return s.onFilter(f)}),i.qZA()(),i.TgZ(57,"div",9),i.YNc(58,m,4,4,"div",10),i.qZA()()),2&n&&(i.xp6(58),i.Q6J("ngForOf",s.filteredIcons))},dependencies:[p.sg,a.o],encapsulation:2})}return e})(),g=(()=>{class e{static#i=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=i.oAB({type:e});static#t=this.\u0275inj=i.cJS({imports:[l.Bz.forChild([{path:"icons",data:{breadcrumb:"Prime Icons"},component:h},{path:"**",redirectTo:"/notfound"}]),l.Bz]})}return e})(),Z=(()=>{class e{static#i=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=i.oAB({type:e});static#t=this.\u0275inj=i.cJS({imports:[p.ez,g,a.j]})}return e})()}}]);