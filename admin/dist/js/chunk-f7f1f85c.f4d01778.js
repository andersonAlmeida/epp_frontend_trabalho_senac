(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7f1f85c"],{"2e77":function(t,a){var e={api:"https://epp2019.herokuapp.com/cms",token:localStorage.getItem("epp_adm_tk"),options:null,setHeaders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=new Headers;n.append("Content-type","application/json;charset=UTF-8"),o||n.append("Authorization","Bearer "+e.token),e.options={method:t,headers:n},a&&(e.options.body=JSON.stringify(a))},connect:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(t,a).then(function(t){switch(t.status){case 401:localStorage.removeItem("epp_adm_tk"),localStorage.removeItem("epp_adm_name"),localStorage.removeItem("epp_adm_email"),window.location="/login";break;case 400:window.location="/400";break;case 500:window.location="/500";break}return t.json()}).catch(function(t){return console.log("An error ocurred in your fetch request: "+t.message)})},login:function(){return e.connect(e.api+"/admin/login",e.options)},getAtracoes:function(){return e.connect(e.api+"/atracao",e.options)},getAtracao:function(t){return e.connect(e.api+"/atracao/"+t,e.options)},updateAtracao:function(t){return e.connect(e.api+"/atracao/"+t,e.options)},salvaAtracao:function(){return e.connect(e.api+"/atracao/",e.options)},deletaAtracao:function(t){return e.connect(e.api+"/atracao/"+t,e.options)},getCategorias:function(){return e.connect(e.api+"/categoria",e.options)},getCategoria:function(t){return e.connect(e.api+"/categoria/"+t,e.options)},updateCategoria:function(t){return e.connect(e.api+"/categoria/"+t,e.options)},salvaCategoria:function(){return e.connect(e.api+"/categoria/",e.options)},deletaCategoria:function(t){return e.connect(e.api+"/categoria/"+t,e.options)}};t.exports=e},"34e5":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"animated fadeIn"},[e("b-row",[e("b-col",{attrs:{sm:"8"}},[e("b-card",[e("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.atualizaCategoria(a)}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("strong",[t._v("Editar Categoria")])]),e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("b-form-group",[e("label",{attrs:{for:"nome"}},[t._v("Nome")]),e("b-form-input",{attrs:{type:"text",id:"nome",name:"nome",value:t.categoria.nome},model:{value:t.categoria.nome,callback:function(a){t.$set(t.categoria,"nome",a)},expression:"categoria.nome"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[e("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" Salvar\n              ")])],1)],1)],1)])],1)],1)],1)},n=[],r=(e("7f7f"),e("ac6a"),e("2e77")),i=e.n(r),c={name:"editar categoria",data:function(){return{categoria:null}},created:function(){this.buscaCategoria()},methods:{buscaCategoria:function(){var t=this;i.a.setHeaders();var a=this.$route.params.id,e=i.a.getCategoria(a);e.then(function(a){t.categoria=a})},atualizaCategoria:function(t){var a={};t.currentTarget.querySelectorAll("input, textarea, select").forEach(function(t){a[t.name]=t.value}),i.a.setHeaders("PUT",a),i.a.updateCategoria(this.$route.params.id)&&this.$router.push("/categorias")}}},s=c,u=e("2877"),p=Object(u["a"])(s,o,n,!1,null,null,null);a["default"]=p.exports},"7f7f":function(t,a,e){var o=e("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in n||e("9e1e")&&o(n,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-f7f1f85c.f4d01778.js.map