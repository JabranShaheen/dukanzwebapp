"use strict";(self.webpackChunkmatx_angular_latest_test=self.webpackChunkmatx_angular_latest_test||[]).push([[434],{42434:(Se,S,a)=>{a.r(S),a.d(S,{AppFormsModule:()=>Ue});var B=a(19132),v=a(36895),l=a(24006),Q=a(4859),C=a(73546),I=a(56709),G=a(3238),Z=a(99602),L=a(97392),w=a(44144),P=a(96338),k=a(73162),A=a(71948),T=a(86257),H=a(69814),N=a(15861),e=a(94650);const z={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},V=new e.OlP("config",{providedIn:"root",factory:()=>({modules:z})});var x=a(11481),W=a(49770),j=a(45191),X=a(86805),K=a(70930);function $(i,s){const t="object"==typeof s;return new Promise((n,o)=>{const r=new K.Hp({next:d=>{n(d),r.unsubscribe()},error:o,complete:()=>{t?n(s.defaultValue):o(new X.K)}});i.subscribe(r)})}var ee=a(50727),O=a(54968),te=a(23151),Y=a(95577),J=a(78372);function ie(i,s){1&i&&e._UZ(0,"div",2)}function ne(i,s){1&i&&e._UZ(0,"pre",2)}function oe(i,s){if(1&i&&(e.ynx(0),e.YNc(1,ie,1,0,"div",1),e.YNc(2,ne,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}function se(i,s){1&i&&e._UZ(0,"div",2)}function re(i,s){1&i&&e._UZ(0,"pre",2)}function le(i,s){if(1&i&&(e.ynx(0),e.YNc(1,se,1,0,"div",1),e.YNc(2,re,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}const ae=[[["","quill-editor-toolbar",""]]],de=["[quill-editor-toolbar]"];function ue(i,s){1&i&&e._UZ(0,"div",1)}function ce(i,s){1&i&&e._UZ(0,"pre",1)}const q=(i,s)=>i||s||"html";let F=(()=>{class i{constructor(t,n){var o=this;this.config=n,this.quill$=(0,W.P)((0,N.Z)(function*(){if(!o.Quill){const r=o.document.addEventListener;o.document.addEventListener=o.document.__zone_symbol__addEventListener||o.document.addEventListener;const d=yield a.e(971).then(a.t.bind(a,89971,19));o.document.addEventListener=r,o.Quill=d.default?d.default:d}return o.config.customOptions?.forEach(r=>{const d=o.Quill.import(r.import);d.whitelist=r.whitelist,o.Quill.register(d,!0,o.config.suppressGlobalRegisterWarning)}),yield o.registerCustomModules(o.Quill,o.config.customModules,o.config.suppressGlobalRegisterWarning)})).pipe((0,te.d)({bufferSize:1,refCount:!0})),this.document=t.get(v.K0),this.config||(this.config={modules:z})}getQuill(){return this.quill$}registerCustomModules(t,n,o){return(0,N.Z)(function*(){if(Array.isArray(n))for(let{implementation:r,path:d}of n)(0,j.b)(r)&&(r=yield $(r)),t.register(d,r,o);return t})()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.zs3),e.LFG(V,8))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),me=(()=>{class i{constructor(t,n,o,r,d,f,p,g){this.elementRef=n,this.cd=o,this.domSanitizer=r,this.platformId=d,this.renderer=f,this.zone=p,this.service=g,this.required=!1,this.customToolbarPosition="top",this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new e.vpe,this.onEditorChanged=new e.vpe,this.onContentChanged=new e.vpe,this.onSelectionChanged=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.disabled=!1,this.preserve=!1,this.toolbarPosition="top",this.subscription=null,this.quillSubscription=null,this.valueGetter=(m,u)=>{let c=u.querySelector(".ql-editor").innerHTML;("<p><br></p>"===c||"<div><br></div>"===c)&&(c=this.defaultEmptyValue);let h=c;const b=q(this.format,this.service.config.format);if("text"===b)h=m.getText();else if("object"===b)h=m.getContents();else if("json"===b)try{h=JSON.stringify(m.getContents())}catch{h=m.getText()}return h},this.valueSetter=(m,u)=>{const c=q(this.format,this.service.config.format);if("html"===c)return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(u=this.domSanitizer.sanitize(e.q3G.HTML,u)),m.clipboard.convert(u);if("json"===c)try{return JSON.parse(u)}catch{return[{insert:u}]}return u},this.selectionChangeHandler=(m,u,c)=>{const h=!m&&!!this.onModelTouched;!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!h||this.zone.run(()=>{null===m?this.onBlur.emit({editor:this.quillEditor,source:c}):null===u&&this.onFocus.emit({editor:this.quillEditor,source:c}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:u,range:m,source:c}),h&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(m,u,c)=>{const h=this.quillEditor.getText(),b=this.quillEditor.getContents();let E=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===E||"<div><br></div>"===E)&&(E=this.defaultEmptyValue);const y=this.trackChanges||this.service.config.trackChanges,R=("user"===c||y&&"all"===y)&&!!this.onModelChange;!this.onContentChanged.observed&&!R||this.zone.run(()=>{R&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:b,delta:m,editor:this.quillEditor,html:E,oldDelta:u,source:c,text:h}),this.cd.markForCheck()})},this.editorChangeHandler=(m,u,c,h)=>{if(this.onEditorChanged.observed)if("text-change"===m){const b=this.quillEditor.getText(),E=this.quillEditor.getContents();let y=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===y||"<div><br></div>"===y)&&(y=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:E,delta:u,editor:this.quillEditor,event:m,html:y,oldDelta:c,source:h,text:b}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:m,oldRange:c,range:u,source:h}),this.cd.markForCheck()})},this.document=t.get(v.K0)}static normalizeClassNames(t){return t.trim().split(" ").reduce((o,r)=>{const d=r.trim();return d&&o.push(d),o},[])}ngOnInit(){this.preserve=this.preserveWhitespace,this.toolbarPosition=this.customToolbarPosition}ngAfterViewInit(){(0,v.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,Y.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],o=this.beforeRender??this.service.config.beforeRender;return o&&n.push(o()),Promise.all(n).then(()=>t)})).subscribe(t=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const n=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),o=Object.assign({},this.modules||this.service.config.modules);n?o.toolbar=n:void 0===o.toolbar&&(o.toolbar=z.toolbar);let r=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===r&&(r="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(c=>{this.renderer.setStyle(this.editorElem,c,this.styles[c])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(c=>{const h=t.import(c.import);h.whitelist=c.whitelist,t.register(h,!0)});let d=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;d||(d=this.service.config.bounds?this.service.config.bounds:this.document.body);let f=this.debug;!f&&!1!==f&&this.service.config.debug&&(f=this.service.config.debug);let p=this.readOnly;!p&&!1!==this.readOnly&&(p=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let g=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(g=this.service.config.defaultEmptyValue);let m=this.scrollingContainer;!m&&null!==this.scrollingContainer&&(m=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let u=this.formats;if(!u&&void 0===u&&(u=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new t(this.editorElem,{bounds:d,debug:f,formats:u,modules:o,placeholder:r,readOnly:p,defaultEmptyValue:g,scrollingContainer:m,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const h=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");h?.dataset&&(h.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===q(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const h=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(h,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observed||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=t.defaultEmptyValue.currentValue),t.styles){const n=t.styles.currentValue,o=t.styles.previousValue;o&&Object.keys(o).forEach(r=>{this.renderer.removeStyle(this.editorElem,r)}),n&&Object.keys(n).forEach(r=>{this.renderer.setStyle(this.editorElem,r,this.styles[r])})}if(t.classes){const n=t.classes.currentValue,o=t.classes.previousValue;o&&this.removeClasses(o),n&&this.addClasses(n)}t.debounceTime&&this.addQuillEventListeners()}}addClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.addClass(this.editorElem,n)})}removeClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.removeClass(this.editorElem,n)})}writeValue(t){if(this.filterNull&&null===t||(this.content=t,!this.quillEditor))return;const n=q(this.format,this.service.config.format),o=this.valueSetter(this.quillEditor,t);if(this.compareValues){const r=this.quillEditor.getContents();if(JSON.stringify(r)===JSON.stringify(o))return}t?"text"===n?this.quillEditor.setText(t):this.quillEditor.setContents(o):this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let n=!0;const o=this.quillEditor.getText(),r=this.trimOnValidation?o.trim().length:1===o.length&&0===o.trim().length?0:o.length-1,d=this.quillEditor.getContents().ops,f=d&&1===d.length&&["\n",""].includes(d[0].insert);return this.minLength&&r&&r<this.minLength&&(t.minLengthError={given:r,minLength:this.minLength},n=!1),this.maxLength&&r>this.maxLength&&(t.maxLengthError={given:r,maxLength:this.maxLength},n=!1),this.required&&!r&&f&&(t.requiredError={empty:!0},n=!1),n?null:t}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new ee.w0,this.subscription.add((0,O.R)(this.quillEditor,"selection-change").subscribe(([o,r,d])=>{this.selectionChangeHandler(o,r,d)}));let t=(0,O.R)(this.quillEditor,"text-change"),n=(0,O.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(t=t.pipe((0,J.b)(this.debounceTime)),n=n.pipe((0,J.b)(this.debounceTime))),this.subscription.add(t.subscribe(([o,r,d])=>{this.textChangeHandler(o,r,d)})),this.subscription.add(n.subscribe(([o,r,d,f])=>{this.editorChangeHandler(o,r,d,f)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(x.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(F))},i.\u0275dir=e.lG2({type:i,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",beforeRender:"beforeRender",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[e.TTD]}),i})(),_=(()=>{class i extends me{constructor(t,n,o,r,d,f,p,g){super(t,n,o,r,d,f,p,g)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(x.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-editor"]],standalone:!0,features:[e._Bn([{multi:!0,provide:l.JU,useExisting:(0,e.Gpc)(()=>i)},{multi:!0,provide:l.Cf,useExisting:(0,e.Gpc)(()=>i)}]),e.qOj,e.jDz],ngContentSelectors:de,decls:3,vars:2,consts:[[4,"ngIf"],["quill-editor-element","",4,"ngIf"],["quill-editor-element",""]],template:function(t,n){1&t&&(e.F$t(ae),e.YNc(0,oe,3,2,"ng-container",0),e.Hsn(1),e.YNc(2,le,3,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","top"!==n.toolbarPosition),e.xp6(2),e.Q6J("ngIf","top"===n.toolbarPosition))},dependencies:[v.ez,v.O5],styles:["[_nghost-%COMP%]{display:inline-block}"]}),i})(),he=(()=>{class i{constructor(t,n){this.sanitizer=t,this.service=n,this.content="",this.innerHTML="",this.themeClass="ql-snow"}ngOnChanges(t){if(t.theme?this.themeClass=`ql-${t.theme.currentValue||(this.service.config.theme?this.service.config.theme:"snow")} ngx-quill-view-html`:this.theme||(this.themeClass=`ql-${this.service.config.theme?this.service.config.theme:"snow"} ngx-quill-view-html`),t.content){const n=t.content.currentValue,o=[!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1;this.innerHTML=o?n:this.sanitizer.bypassSecurityTrustHtml(n)}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x.H7),e.Y36(F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view-html"]],inputs:{content:"content",theme:"theme",sanitize:"sanitize"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[[1,"ql-container",3,"ngClass"],[1,"ql-editor",3,"innerHTML"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA()),2&t&&(e.Q6J("ngClass",n.themeClass),e.xp6(1),e.Q6J("innerHTML",n.innerHTML,e.oJD))},dependencies:[v.ez,v.mk],styles:[".ql-container.ngx-quill-view-html{border:0}\n"],encapsulation:2}),i})(),fe=(()=>{class i{constructor(t,n,o,r,d,f){this.elementRef=t,this.renderer=n,this.zone=o,this.service=r,this.domSanitizer=d,this.platformId=f,this.strict=!0,this.customModules=[],this.customOptions=[],this.preserveWhitespace=!1,this.onEditorCreated=new e.vpe,this.preserve=!1,this.quillSubscription=null,this.valueSetter=(p,g)=>{const m=q(this.format,this.service.config.format);let u=g;if("text"===m)p.setText(u);else{if("html"===m)([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(g=this.domSanitizer.sanitize(e.q3G.HTML,g)),u=p.clipboard.convert(g);else if("json"===m)try{u=JSON.parse(g)}catch{u=[{insert:g}]}p.setContents(u)}}}ngOnInit(){this.preserve=this.preserveWhitespace}ngOnChanges(t){!this.quillEditor||t.content&&this.valueSetter(this.quillEditor,t.content.currentValue)}ngAfterViewInit(){(0,v.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,Y.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],o=this.beforeRender??this.service.config.beforeRender;return o&&n.push(o()),Promise.all(n).then(()=>t)})).subscribe(t=>{const n=Object.assign({},this.modules||this.service.config.modules);n.toolbar=!1,this.customOptions.forEach(f=>{const p=t.import(f.import);p.whitelist=f.whitelist,t.register(p,!0)});let o=this.debug;!o&&!1!==o&&this.service.config.debug&&(o=this.service.config.debug);let r=this.formats;!r&&void 0===r&&(r=this.service.config.formats?Object.assign({},this.service.config.formats):null===this.service.config.formats?null:void 0);const d=this.theme||(this.service.config.theme?this.service.config.theme:"snow");this.editorElem=this.elementRef.nativeElement.querySelector("[quill-view-element]"),this.zone.runOutsideAngular(()=>{this.quillEditor=new t(this.editorElem,{debug:o,formats:r,modules:n,readOnly:!0,strict:this.strict,theme:d})}),this.renderer.addClass(this.editorElem,"ngx-quill-view"),this.content&&this.valueSetter(this.quillEditor,this.content),this.onEditorCreated.observers.length&&requestAnimationFrame(()=>{this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.quillSubscription?.unsubscribe(),this.quillSubscription=null}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(F),e.Y36(x.H7),e.Y36(e.Lbi))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view"]],inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",formats:"formats",sanitize:"sanitize",beforeRender:"beforeRender",strict:"strict",content:"content",customModules:"customModules",customOptions:"customOptions",preserveWhitespace:"preserveWhitespace"},outputs:{onEditorCreated:"onEditorCreated"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[["quill-view-element","",4,"ngIf"],["quill-view-element",""]],template:function(t,n){1&t&&(e.YNc(0,ue,1,0,"div",0),e.YNc(1,ce,1,0,"pre",0)),2&t&&(e.Q6J("ngIf",!n.preserve),e.xp6(1),e.Q6J("ngIf",n.preserve))},dependencies:[v.ez,v.O5],styles:[".ql-container.ngx-quill-view{border:0}\n"],encapsulation:2}),i})(),pe=(()=>{class i{static forRoot(t){return{ngModule:i,providers:[{provide:V,useValue:t}]}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_,fe,he]}),i})();var U=a(59549),D=a(44850),M=a(1576);function ge(i,s){if(1&i&&(e.TgZ(0,"small",26),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" Username require at least ",t.basicForm.controls.username.errors.minlength.requiredLength," characters ")}}function ve(i,s){if(1&i&&(e.TgZ(0,"small",26),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" Username can not contain more than ",t.basicForm.controls.username.errors.maxlength.requiredLength," characters ")}}function Ce(i,s){1&i&&(e.TgZ(0,"small",26),e._uU(1," First name is required "),e.qZA())}function be(i,s){1&i&&(e.TgZ(0,"small",26),e._uU(1," Email is required "),e.qZA())}function Ee(i,s){1&i&&(e.TgZ(0,"small",26),e._uU(1," Invaild email address "),e.qZA())}function ye(i,s){1&i&&(e.TgZ(0,"small",26),e._uU(1," Password is required "),e.qZA())}function Te(i,s){1&i&&(e.TgZ(0,"small",26),e._uU(1," You must agree to the terms and conditions "),e.qZA())}function Fe(i,s){1&i&&e._uU(0,"Fill out your name")}function Me(i,s){1&i&&e._uU(0,"Fill out your address")}function Qe(i,s){1&i&&e._uU(0,"Done")}function we(i,s){1&i&&e._uU(0,"Fill out your name")}function Ae(i,s){1&i&&e._uU(0,"Fill out your address")}function ze(i,s){1&i&&e._uU(0,"Done")}const Oe=[{path:"",children:[{path:"basic",component:(()=>{class i{constructor(){this.formData={},this.console=console}ngOnInit(){let t=new l.p4("",l.kI.required),n=new l.p4("");this.basicForm=new l.nJ({username:new l.p4("",[l.kI.minLength(4),l.kI.maxLength(9)]),firstname:new l.p4("",[l.kI.required]),email:new l.p4("",[l.kI.required,l.kI.email]),website:new l.p4(""),date:new l.p4,cardno:new l.p4(""),password:t,confirmPassword:n,gender:new l.p4(""),agreed:new l.p4("",o=>o.value?null:{agreed:!0})})}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-basic-form"]],decls:57,vars:11,consts:[[1,"p-0"],[1,""],[1,"card-title-text"],[3,"formGroup"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-xs","50",1,"pr-16"],[1,"pb-16"],[1,"full-width"],["matInput","","name","username","formControlName","username","placeholder","Username (Min Length: 4, Max Length: 9)","value",""],["class","form-error-msg",4,"ngIf"],["matInput","","name","firstname","formControlName","firstname","placeholder","First name","value",""],["matInput","","type","email","name","email","formControlName","email","placeholder","Your Email","value",""],["matInput","","name","website","formControlName","website","placeholder","Your Website (http://mhrafi.com)","value",""],["matInput","","name","date","formControlName","date","placeholder","Date",3,"matDatepicker"],["matSuffix","",3,"for"],["appDatepicker",""],["fxFlex","100","fxFlex.gt-xs","50"],["matInput","","name","cardno","formControlName","cardno","placeholder","Credit card number"],["type","password","name","password","matInput","","formControlName","password","placeholder","Password","value",""],["type","password","name","confirmPassword","matInput","","appEqualValidator","password","formControlName","confirmPassword","placeholder","Confirm Password","value",""],["name","gender","formControlName","gender"],["value","male",1,"mx-12"],["value","female"],[1,"pb-16","pt-8"],["name","agreed","formControlName","agreed",1,"pb-16"],["mat-raised-button","","color","primary",3,"disabled"],[1,"form-error-msg"]],template:function(t,n){if(1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-title",1)(2,"div",2),e._uU(3,"Form validation"),e.qZA(),e._UZ(4,"mat-divider"),e.qZA(),e.TgZ(5,"mat-card-content")(6,"form",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"mat-form-field",7),e._UZ(11,"input",8),e.qZA(),e.YNc(12,ge,2,1,"small",9),e.YNc(13,ve,2,1,"small",9),e.qZA(),e.TgZ(14,"div",6)(15,"mat-form-field",7),e._UZ(16,"input",10),e.qZA(),e.YNc(17,Ce,2,0,"small",9),e.qZA(),e.TgZ(18,"div",6)(19,"mat-form-field",7),e._UZ(20,"input",11),e.qZA(),e.YNc(21,be,2,0,"small",9),e.YNc(22,Ee,2,0,"small",9),e.qZA(),e.TgZ(23,"div",6)(24,"mat-form-field",7),e._UZ(25,"input",12),e.qZA()(),e.TgZ(26,"div",6)(27,"mat-form-field",7),e._UZ(28,"input",13)(29,"mat-datepicker-toggle",14),e.qZA(),e._UZ(30,"mat-datepicker",null,15),e.qZA()(),e.TgZ(32,"div",16)(33,"div",6)(34,"mat-form-field",7),e._UZ(35,"input",17),e.qZA()(),e.TgZ(36,"div",6)(37,"mat-form-field",7),e._UZ(38,"input",18),e.qZA(),e.YNc(39,ye,2,0,"small",9),e.qZA(),e.TgZ(40,"div",6)(41,"mat-form-field",7),e._UZ(42,"input",19),e.qZA()(),e.TgZ(43,"div",6)(44,"Label"),e._uU(45,"Gender*"),e.qZA(),e.TgZ(46,"mat-radio-group",20)(47,"mat-radio-button",21),e._uU(48,"Male"),e.qZA(),e.TgZ(49,"mat-radio-button",22),e._uU(50,"Female"),e.qZA()()(),e.TgZ(51,"div",23)(52,"mat-checkbox",24),e._uU(53,"I have read and agree to the terms of service."),e.qZA(),e.YNc(54,Te,2,0,"small",9),e.qZA()()(),e.TgZ(55,"button",25),e._uU(56,"Submit"),e.qZA()()()()),2&t){const o=e.MAs(31);e.xp6(6),e.Q6J("formGroup",n.basicForm),e.xp6(6),e.Q6J("ngIf",n.basicForm.controls.username.hasError("minlength")&&n.basicForm.controls.username.touched),e.xp6(1),e.Q6J("ngIf",n.basicForm.controls.username.hasError("maxlength")&&n.basicForm.controls.username.touched),e.xp6(4),e.Q6J("ngIf",n.basicForm.controls.firstname.hasError("required")&&n.basicForm.controls.firstname.touched),e.xp6(4),e.Q6J("ngIf",n.basicForm.controls.email.hasError("required")&&n.basicForm.controls.email.touched),e.xp6(1),e.Q6J("ngIf",n.basicForm.controls.email.hasError("email")&&n.basicForm.controls.email.touched),e.xp6(6),e.Q6J("matDatepicker",o),e.xp6(1),e.Q6J("for",o),e.xp6(10),e.Q6J("ngIf",n.basicForm.controls.password.hasError("required")&&n.basicForm.controls.password.touched),e.xp6(15),e.Q6J("ngIf",n.basicForm.controls.agreed.hasError("agreed")&&n.basicForm.controls.agreed.touched),e.xp6(1),e.Q6J("disabled",n.basicForm.invalid)}},dependencies:[v.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,U.KE,U.R9,w.Nt,D.d,C.a8,C.dn,C.n5,Z.Mq,Z.hl,Z.nW,A.VQ,A.U0,I.oG,Q.lW,M.xw,M.yH]}),i})(),data:{title:"Basic",breadcrumb:"BASIC"}},{path:"editor",component:(()=>{class i{constructor(){this.editorData='<h1>Matx | Angular material admin</h1>\n  <p><a href="http://devmatx.com" target="_blank"><strong>DevMatx</strong></a></p>\n  <p><br></p><p><strong >Lorem Ipsum</strong>\n  <span>&nbsp;is simply dummy text of the printing and typesetting industry. \n  Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a \n  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>'}ngOnInit(){}onContentChanged(){}onSelectionChanged(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-rich-text-editor"]],decls:3,vars:1,consts:[[1,"p-0"],["theme","snow","onSelectionChanged","onSelectionChanged()",3,"ngModel","ngModelChange","onContentChanged"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-content",0)(2,"quill-editor",1),e.NdJ("ngModelChange",function(r){return n.editorData=r})("onContentChanged",function(){return n.onContentChanged()}),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngModel",n.editorData))},dependencies:[l.JJ,l.On,C.a8,C.dn,_]}),i})(),data:{title:"Editor",breadcrumb:"EDITOR"}},{path:"upload",component:(()=>{class i{constructor(){this.hasBaseDropZoneOver=!1,this.console=console}ngOnInit(){}fileOverBase(t){this.hasBaseDropZoneOver=t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-file-upload"]],decls:0,vars:0,template:function(t,n){}}),i})(),data:{title:"Upload",breadcrumb:"UPLOAD"}},{path:"wizard",component:(()=>{class i{constructor(t){this.fb=t}ngOnInit(){this.firstFormGroup=this.fb.group({firstCtrl:["",l.kI.required]}),this.secondFormGroup=this.fb.group({secondCtrl:["",l.kI.required]})}submit(){console.log(this.firstFormGroup.value),console.log(this.secondFormGroup.value)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.QS))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-wizard"]],decls:75,vars:14,consts:[[1,"p-0"],[1,""],[1,"card-title-text"],[3,"linear"],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"pt-16","pb-16"],["matInput","","placeholder","Last name, First name","formControlName","firstCtrl","required",""],["mat-raised-button","","color","primary","matStepperNext",""],["matInput","","placeholder","Address","formControlName","secondCtrl","required",""],["fxLayout","row"],["mat-raised-button","","color","accent","matStepperPrevious",""],["fxFlex","8px"],[1,"pt-16"],[1,"pb-16","mb-16"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-title",1)(2,"div",2),e._uU(3,"Horizontal"),e.qZA(),e._UZ(4,"mat-divider"),e.qZA(),e.TgZ(5,"mat-card-content")(6,"mat-horizontal-stepper",3)(7,"mat-step",4)(8,"form",5),e.YNc(9,Fe,1,0,"ng-template",6),e.TgZ(10,"mat-form-field",7),e._UZ(11,"input",8),e.qZA(),e.TgZ(12,"div")(13,"button",9),e._uU(14,"Next"),e.qZA()()()(),e.TgZ(15,"mat-step",4)(16,"form",5),e.YNc(17,Me,1,0,"ng-template",6),e.TgZ(18,"mat-form-field",7),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"div",11)(21,"button",12),e._uU(22,"Back"),e.qZA(),e._UZ(23,"span",13),e.TgZ(24,"button",9),e._uU(25,"Next"),e.qZA()()()(),e.TgZ(26,"mat-step"),e.YNc(27,Qe,1,0,"ng-template",6),e.TgZ(28,"div")(29,"mat-icon",14),e._uU(30,"check"),e.qZA()(),e.TgZ(31,"div",15),e._uU(32," You Are Done."),e.qZA(),e.TgZ(33,"div",11)(34,"button",12),e._uU(35,"Back"),e.qZA(),e._UZ(36,"span",13),e.TgZ(37,"button",16),e.NdJ("click",function(){return n.submit()}),e._uU(38,"Submit"),e.qZA()()()()()(),e.TgZ(39,"mat-card",0)(40,"mat-card-title",1)(41,"div",2),e._uU(42,"Verticle"),e.qZA(),e._UZ(43,"mat-divider"),e.qZA(),e.TgZ(44,"mat-card-content")(45,"mat-vertical-stepper",3)(46,"mat-step",4)(47,"form",5),e.YNc(48,we,1,0,"ng-template",6),e.TgZ(49,"mat-form-field"),e._UZ(50,"input",8),e.qZA(),e.TgZ(51,"div")(52,"button",9),e._uU(53,"Next"),e.qZA()()()(),e.TgZ(54,"mat-step",4)(55,"form",5),e.YNc(56,Ae,1,0,"ng-template",6),e.TgZ(57,"mat-form-field"),e._UZ(58,"input",10),e.qZA(),e.TgZ(59,"div",11)(60,"button",12),e._uU(61,"Back"),e.qZA(),e._UZ(62,"span",13),e.TgZ(63,"button",9),e._uU(64,"Next"),e.qZA()()()(),e.TgZ(65,"mat-step"),e.YNc(66,ze,1,0,"ng-template",6),e.TgZ(67,"div")(68,"mat-icon",14),e._uU(69,"check"),e.qZA()(),e.TgZ(70,"div",15),e._uU(71," You Are Done."),e.qZA(),e.TgZ(72,"div")(73,"button",12),e._uU(74,"Back"),e.qZA()()()()()()),2&t&&(e.xp6(6),e.Q6J("linear",!0),e.xp6(1),e.Q6J("stepControl",n.firstFormGroup),e.xp6(1),e.Q6J("formGroup",n.firstFormGroup),e.xp6(7),e.Q6J("stepControl",n.secondFormGroup),e.xp6(1),e.Q6J("formGroup",n.secondFormGroup),e.xp6(13),e.Udp("font-size","36px"),e.xp6(16),e.Q6J("linear",!0),e.xp6(1),e.Q6J("stepControl",n.firstFormGroup),e.xp6(1),e.Q6J("formGroup",n.firstFormGroup),e.xp6(7),e.Q6J("stepControl",n.secondFormGroup),e.xp6(1),e.Q6J("formGroup",n.secondFormGroup),e.xp6(13),e.Udp("font-size","36px"))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,U.KE,w.Nt,D.d,C.a8,C.dn,C.n5,Q.lW,L.Hw,T.C0,T.VY,T.Vq,T.Ic,T.fd,M.xw,M.yH]}),i})(),data:{title:"Wizard",breadcrumb:"WIZARD"}}]}];let Ue=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[v.ez,l.u5,l.UX,w.c,P.ie,C.QW,Z.FA,G.XK,k.Cv,A.Fk,I.p9,Q.ot,L.Ps,T.T5,H.o9,pe.forRoot(),B.Bz.forChild(Oe)]}),i})()}}]);