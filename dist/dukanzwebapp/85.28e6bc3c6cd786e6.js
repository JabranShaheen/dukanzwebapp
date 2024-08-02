"use strict";(self.webpackChunkmatx_angular_latest_test=self.webpackChunkmatx_angular_latest_test||[]).push([[85],{60085:(j,d,s)=>{s.r(d),s.d(d,{SessionsModule:()=>G});var Z=s(62769),g=s(36895),r=s(24006),m=s(19132),v=s(61937),S=s(69814),T=s(89383),u=s(4859),l=s(73162),b=s(77579),n=s(94650),C=s(97800),A=s(77009),c=s(56709),f=s(59549),h=s(44144),p=s(73546),F=s(1576);function w(o,i){if(1&o&&(n.TgZ(0,"p",16)(1,"small",19),n._uU(2),n.qZA()()),2&o){const e=n.oxw();n.xp6(2),n.Oqu(e.errorMsg)}}function x(o,i){1&o&&(n.TgZ(0,"small",20),n._uU(1," Username is required "),n.qZA())}function U(o,i){1&o&&(n.TgZ(0,"small",20),n._uU(1," Password is required "),n.qZA())}let J=(()=>{class o{constructor(e,t,a,L){this.jwtAuth=e,this.matxLoader=t,this.router=a,this.route=L,this.errorMsg="",this._unsubscribeAll=new b.x}ngOnInit(){this.signinForm=new r.nJ({username:new r.p4("Watson",r.kI.required),password:new r.p4("12345678",r.kI.required),rememberMe:new r.p4(!0)})}ngAfterViewInit(){this.autoSignIn()}ngOnDestroy(){this._unsubscribeAll.next(1),this._unsubscribeAll.complete()}signin(){const e=this.signinForm.value;this.submitButton.disabled=!0,this.progressBar.mode="indeterminate",this.jwtAuth.signin(e.username,e.password).subscribe(t=>{this.router.navigateByUrl(this.jwtAuth.return)},t=>{this.submitButton.disabled=!1,this.progressBar.mode="determinate",this.errorMsg=t.message})}autoSignIn(){"/"!==this.jwtAuth.return&&(this.matxLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0,20)}...`,{width:"320px"}),setTimeout(()=>{this.signin(),console.log("autoSignIn"),this.matxLoader.close()},2e3))}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(C.t),n.Y36(A.P),n.Y36(m.F0),n.Y36(m.gz))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-signin"]],viewQuery:function(e,t){if(1&e&&(n.Gf(l.pW,5),n.Gf(u.lW,5)),2&e){let a;n.iGM(a=n.CRH())&&(t.progressBar=a.first),n.iGM(a=n.CRH())&&(t.submitButton=a.first)}},decls:30,vars:10,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],["mode","determinate",1,"session-progress"],[1,"text-center","pt-8","pb-16"],["width","60px","src","assets/images/logo.png","alt",""],[1,"text-muted","m-0"],["class","text-center",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,""],[1,"full-width"],["matInput","","name","username","placeholder","Username","value","",3,"formControl"],["class","form-error-msg",4,"ngIf"],["type","password","name","password","matInput","","placeholder","Password","value","",3,"formControl"],[1,"pb-16"],["name","rememberMe",1,"pb-16",3,"formControl"],["mat-raised-button","",1,"mat-primary","full-width","mb-16",3,"disabled"],[1,"text-center"],[1,"mat-primary","text-center","full-width",3,"routerLink"],["fxFlex",""],[1,"text-red"],[1,"form-error-msg"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"mat-progress-bar",2),n.TgZ(3,"mat-card")(4,"mat-card-content")(5,"div",3),n._UZ(6,"img",4),n.TgZ(7,"p",5),n._uU(8,"Sign in to your dukanz account"),n.qZA()(),n.YNc(9,w,3,1,"p",6),n.TgZ(10,"form",7),n.NdJ("ngSubmit",function(){return t.signin()}),n.TgZ(11,"div",8)(12,"mat-form-field",9),n._UZ(13,"input",10),n.qZA(),n.YNc(14,x,2,0,"small",11),n.qZA(),n.TgZ(15,"div",8)(16,"mat-form-field",9),n._UZ(17,"input",12),n.qZA(),n.YNc(18,U,2,0,"small",11),n.qZA(),n.TgZ(19,"div",13)(20,"mat-checkbox",14),n._uU(21,"Remember this computer"),n.qZA()(),n.TgZ(22,"button",15),n._uU(23,"Sign in"),n.qZA(),n.TgZ(24,"div",16)(25,"a",17),n._uU(26,"Forgot password"),n.qZA(),n._UZ(27,"span",18),n.TgZ(28,"a",17),n._uU(29,"Create a new account"),n.qZA()()()()()()()),2&e&&(n.xp6(9),n.Q6J("ngIf",t.errorMsg),n.xp6(1),n.Q6J("formGroup",t.signinForm),n.xp6(3),n.Q6J("formControl",t.signinForm.controls.username),n.xp6(1),n.Q6J("ngIf",t.signinForm.controls.username.hasError("required")&&t.signinForm.controls.username.touched),n.xp6(3),n.Q6J("formControl",t.signinForm.controls.password),n.xp6(1),n.Q6J("ngIf",t.signinForm.controls.password.hasError("required")&&t.signinForm.controls.password.touched),n.xp6(2),n.Q6J("formControl",t.signinForm.controls.rememberMe),n.xp6(2),n.Q6J("disabled",t.signinForm.invalid),n.xp6(3),n.Q6J("routerLink","/sessions/forgot-password"),n.xp6(3),n.Q6J("routerLink","/sessions/signup"))},dependencies:[g.O5,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,c.oG,u.lW,f.KE,h.Nt,p.a8,p.dn,l.pW,F.yH,m.yS]}),o})();function y(o,i){1&o&&(n.TgZ(0,"small",17),n._uU(1," Email is required "),n.qZA())}function I(o,i){1&o&&(n.TgZ(0,"small",17),n._uU(1," Invaild email address "),n.qZA())}function Q(o,i){1&o&&(n.TgZ(0,"small",17),n._uU(1," Password is required "),n.qZA())}function q(o,i){1&o&&(n.TgZ(0,"small",17),n._uU(1," You must agree to the terms and conditions "),n.qZA())}let N=(()=>{class o{constructor(){}ngOnInit(){const e=new r.p4("",r.kI.required);this.signupForm=new r.nJ({email:new r.p4("",[r.kI.required,r.kI.email]),password:e,agreed:new r.p4("",t=>t.value?null:{agreed:!0})})}signup(){console.log(this.signupForm.value),this.submitButton.disabled=!0,this.progressBar.mode="indeterminate"}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-signup"]],viewQuery:function(e,t){if(1&e&&(n.Gf(l.pW,5),n.Gf(u.lW,5)),2&e){let a;n.iGM(a=n.CRH())&&(t.progressBar=a.first),n.iGM(a=n.CRH())&&(t.submitButton=a.first)}},decls:30,vars:10,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],["mode","determinate",1,"session-progress"],[1,"text-center","pt-8","pb-16"],["width","60px","src","assets/images/logo.png","alt","",1,"mb-8"],[1,"text-muted","m-0"],[3,"formGroup","ngSubmit"],[1,""],[1,"full-width"],["matInput","","type","email","name","email","placeholder","Your Email","value","",3,"formControl"],["class","form-error-msg",4,"ngIf"],["type","password","name","password","matInput","","placeholder","Password","value","",3,"formControl"],[1,"pb-16"],["name","agreed",1,"pb-16",3,"formControl"],["mat-raised-button","",1,"mat-primary","full-width","mb-16",3,"disabled"],[1,"text-center"],[1,"text-center","full-width",3,"routerLink"],[1,"form-error-msg"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"mat-progress-bar",2),n.TgZ(3,"mat-card")(4,"mat-card-content")(5,"div",3),n._UZ(6,"img",4),n.TgZ(7,"h2"),n._uU(8,"Lets get started"),n.qZA(),n.TgZ(9,"p",5),n._uU(10,"Sign up to use our service"),n.qZA()(),n.TgZ(11,"form",6),n.NdJ("ngSubmit",function(){return t.signup()}),n.TgZ(12,"div",7)(13,"mat-form-field",8),n._UZ(14,"input",9),n.qZA(),n.YNc(15,y,2,0,"small",10),n.YNc(16,I,2,0,"small",10),n.qZA(),n.TgZ(17,"div",7)(18,"mat-form-field",8),n._UZ(19,"input",11),n.qZA(),n.YNc(20,Q,2,0,"small",10),n.qZA(),n.TgZ(21,"div",12)(22,"mat-checkbox",13),n._uU(23,"I have read and agree to the terms of service."),n.qZA(),n.YNc(24,q,2,0,"small",10),n.qZA(),n.TgZ(25,"button",14),n._uU(26,"Sign up"),n.qZA(),n.TgZ(27,"div",15)(28,"a",16),n._uU(29,"Sign in to existing account"),n.qZA()()()()()()()),2&e&&(n.xp6(11),n.Q6J("formGroup",t.signupForm),n.xp6(3),n.Q6J("formControl",t.signupForm.controls.email),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.email.hasError("required")&&t.signupForm.controls.email.touched),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.email.hasError("email")&&t.signupForm.controls.email.touched),n.xp6(3),n.Q6J("formControl",t.signupForm.controls.password),n.xp6(1),n.Q6J("ngIf",t.signupForm.controls.password.hasError("required")&&t.signupForm.controls.password.touched),n.xp6(2),n.Q6J("formControl",t.signupForm.controls.agreed),n.xp6(2),n.Q6J("ngIf",t.signupForm.controls.agreed.hasError("agreed")&&t.signupForm.controls.agreed.touched),n.xp6(1),n.Q6J("disabled",t.signupForm.invalid),n.xp6(3),n.Q6J("routerLink","/sessions/signin"))},dependencies:[g.O5,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,c.oG,u.lW,f.KE,h.Nt,p.a8,p.dn,l.pW,m.yS]}),o})();var M=s(97392);const Y=function(){return["/"]},B=[{path:"",children:[{path:"signup",component:N,data:{title:"Signup"}},{path:"signin",component:J,data:{title:"Signin"}},{path:"404",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),n._uU(4,"error"),n.qZA(),n.TgZ(5,"div",4)(6,"h1",5),n._uU(7,"404"),n.qZA(),n.TgZ(8,"div",6),n._uU(9,"Page Not Found!"),n.qZA()()(),n.TgZ(10,"div",7)(11,"button",8),n._uU(12,"Back to Dashboard"),n.qZA(),n.TgZ(13,"button",9),n._uU(14,"Report this Problem"),n.qZA()()()()),2&e&&(n.xp6(11),n.Q6J("routerLink",n.DdM(1,Y)))},dependencies:[u.lW,M.Hw,m.rH]}),o})(),data:{title:"Not Found"}}]}];let G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.ez,r.u5,T.aw,r.UX,v.m,S.o9,Z.Xd,m.Bz.forChild(B)]}),o})()}}]);