(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageModule",(function(){return b}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),c=n("fXoL");const s=["expandWrapper"],d=["*"];let p=(()=>{class e{constructor(e){this.renderer=e,this.expanded=!1,this.expandHeight="500px",this.icon=this.expanded?"chevron-forward-outline":"chevron-down-outline",this.accordionExapanded=this.expanded}ngOnInit(){this.accordionExapanded="false"!==String(this.expanded),this.toggleAccordion()}toggleAccordion(){this.accordionExapanded?(this.renderer.setStyle(this.expandWrapper.nativeElement,"max-height",this.expandHeight),this.renderer.setStyle(this.expandWrapper.nativeElement,"padding","13px 16px")):(this.renderer.setStyle(this.expandWrapper.nativeElement,"max-height","0px"),this.renderer.setStyle(this.expandWrapper.nativeElement,"padding","0px 16px")),this.accordionExapanded=!this.accordionExapanded,this.icon=this.accordionExapanded?"chevron-forward-outline":"chevron-down-outline"}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(c.D))},e.\u0275cmp=c.Db({type:e,selectors:[["app-accordian"]],viewQuery:function(e,t){var n;1&e&&c.bc(s,!0,c.l),2&e&&c.Yb(n=c.Ub())&&(t.expandWrapper=n.first)},inputs:{expanded:"expanded",expandHeight:"expandHeight",title:"title"},ngContentSelectors:d,decls:10,vars:2,consts:[["button","","detail","false",3,"click"],[2,"color","#fff"],["slot","end","color","light",3,"name"],["expandWrapper",""]],template:function(e,t){1&e&&(c.Wb(),c.Mb(0,"ion-card"),c.Mb(1,"div"),c.Mb(2,"ion-item",0),c.Tb("click",(function(){return t.toggleAccordion()})),c.Mb(3,"ion-label"),c.Mb(4,"b",1),c.cc(5),c.Lb(),c.Lb(),c.Kb(6,"ion-icon",2),c.Lb(),c.Lb(),c.Mb(7,"ion-card-content",null,3),c.Vb(9),c.Lb(),c.Lb()),2&e&&(c.zb(5),c.dc(t.title),c.zb(1),c.Xb("name",t.icon))},directives:[r.b,r.g,r.h,r.f,r.c],styles:[".expand-wrapper[_ngcontent-%COMP%]{transition:max-height .4s ease-in-out;overflow:hidden;height:auto}.collapsed[_ngcontent-%COMP%]{max-height:0!important}ion-item[_ngcontent-%COMP%]{--background:var(--ion-color-primary)}"]}),e})();const u=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-home"]],decls:14,vars:1,consts:[[3,"translucent"],["title","Your Title 1","expanded",""],["title","Your Title 2"],["title","Your Title 3"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.cc(3,"Home"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"app-accordian",1),c.Mb(6,"p"),c.cc(7," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed velit iure, ea officia numquam provident suscipit, eius quis, fugit rem modi minus. Nemo fuga nesciunt a non? Ut, vero veritatis? "),c.Lb(),c.Lb(),c.Mb(8,"app-accordian",2),c.Mb(9,"p"),c.cc(10," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed velit iure, ea officia numquam provident suscipit, eius quis, fugit rem modi minus. Nemo fuga nesciunt a non? Ut, vero veritatis? "),c.Lb(),c.Lb(),c.Mb(11,"app-accordian",3),c.Mb(12,"p"),c.cc(13," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed velit iure, ea officia numquam provident suscipit, eius quis, fugit rem modi minus. Nemo fuga nesciunt a non? Ut, vero veritatis? "),c.Lb(),c.Lb(),c.Lb()),2&e&&c.Xb("translucent",!0)},directives:[r.e,r.k,r.j,r.d,p],styles:[""]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(u)],a.i]}),e})(),b=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.a,r.l,l]]}),e})()}}]);