(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a9b7"],{bbde:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"profile"},[e("h2",{staticClass:"section-title"},[t._v("Authorized Apps")]),e("div",{staticClass:"obico-table break-md mt-3"},[t._m(0),e("div",{staticClass:"table-body"},t._l(t.authorizedApps,(function(s){return e("div",{key:s.id,staticClass:"table-row"},[e("div",[t._v(t._s(s.app))]),e("div",[t._v(t._s(s.printer.name))]),e("div",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeAccess(s.id)}}},[t._v("Remove Access")])])])})),0)])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-head"},[e("div",{staticClass:"table-row"},[e("div",[t._v("App Name")]),e("div",[t._v("Printer to Access")]),e("div")])])}],r=s("cee4"),c=s("c7f6"),o={name:"AuthorizedApps",data(){return{authorizedApps:[]}},created(){r["a"].get(c["a"].tunnels()).then(t=>{this.authorizedApps=t.data}).catch(t=>{this._logError(t,"Failed to fetch authorized apps")})},methods:{removeAccess(t){r["a"].delete(c["a"].tunnel(t)).then(()=>{this.authorizedApps=this.authorizedApps.filter(e=>e.id!==t)}).catch(t=>{this._logError(t,"Failed to remove access")})}}},d=o,n=s("2877"),l=Object(n["a"])(d,a,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21a9b7.js.map