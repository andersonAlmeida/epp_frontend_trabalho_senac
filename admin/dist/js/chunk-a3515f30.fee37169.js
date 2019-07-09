(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3515f30"],{"2e77":function(t,a){var e={api:"https://epp2019.herokuapp.com/cms",token:localStorage.getItem("epp_adm_tk"),options:null,setHeaders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Headers;r.append("Content-type","application/json;charset=UTF-8"),o||r.append("Authorization","Bearer "+e.token),e.options={method:t,headers:r},a&&(e.options.body=JSON.stringify(a))},connect:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(t,a).then(function(t){switch(t.status){case 401:localStorage.removeItem("epp_adm_tk"),localStorage.removeItem("epp_adm_name"),localStorage.removeItem("epp_adm_email"),window.location="/login";break;case 400:window.location="/400";break;case 500:window.location="/500";break}return t.json()}).catch(function(t){return console.log("An error ocurred in your fetch request: "+t.message)})},login:function(){return e.connect(e.api+"/admin/login",e.options)},getAtracoes:function(){return e.connect(e.api+"/atracao",e.options)},getAtracao:function(t){return e.connect(e.api+"/atracao/"+t,e.options)},updateAtracao:function(t){return e.connect(e.api+"/atracao/"+t,e.options)},salvaAtracao:function(){return e.connect(e.api+"/atracao/",e.options)},deletaAtracao:function(t){return e.connect(e.api+"/atracao/"+t,e.options)},getCategorias:function(){return e.connect(e.api+"/categoria",e.options)},getCategoria:function(t){return e.connect(e.api+"/categoria/"+t,e.options)},updateCategoria:function(t){return e.connect(e.api+"/categoria/"+t,e.options)},salvaCategoria:function(){return e.connect(e.api+"/categoria/",e.options)},deletaCategoria:function(t){return e.connect(e.api+"/categoria/"+t,e.options)}};t.exports=e},"7f7f":function(t,a,e){var o=e("86cc").f,r=Function.prototype,n=/^\s*function ([^ (]*)/,c="name";c in r||e("9e1e")&&o(r,c,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},a6a3:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"animated fadeIn"},[e("b-row",[e("b-col",{attrs:{sm:"8"}},[e("b-card",[e("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.salvaAtracao(a)}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("strong",[t._v("Nova atração")])]),e("b-row",[e("b-col",{attrs:{sm:"6"}},[e("b-form-group",[e("label",{attrs:{for:"nome"}},[t._v("Nome")]),e("b-form-input",{attrs:{type:"text",id:"nome",name:"nome",required:""}})],1)],1),e("b-col",{attrs:{sm:"6"}},[e("b-form-group",[e("label",{attrs:{for:"categoria"}},[t._v("Categoria")]),e("select",{staticClass:"form-control custom-select",attrs:{name:"cod_atracao_categoria",id:"categoria",required:""}},[e("option",{attrs:{value:""}},[t._v("Selecione")]),t._l(t.categorias,function(a){return e("option",{domProps:{value:a.cod_atracao_categoria}},[t._v(t._s(a.nome))])})],2)])],1)],1),e("b-form-group",[e("label",{attrs:{for:"descricao"}},[t._v("Descrição")]),e("b-form-textarea",{attrs:{type:"text",id:"descricao",rows:"10",name:"descricao",required:""},model:{value:t.atracao.descricao,callback:function(a){t.$set(t.atracao,"descricao",a)},expression:"atracao.descricao"}})],1),e("b-form-group",[e("label",{attrs:{for:"endereco"}},[t._v("Endereço")]),e("b-form-input",{attrs:{type:"text",id:"endereco",name:"endereco",required:""}})],1),e("b-row",[e("b-col",{attrs:{sm:"4"}},[e("b-form-group",[e("label",{attrs:{for:"inicio"}},[t._v("Data de início")]),e("b-form-input",{attrs:{type:"date",id:"inicio",name:"data_inicio"}})],1)],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",[e("label",{attrs:{for:"final"}},[t._v("Data de encerramento")]),e("b-form-input",{attrs:{type:"date",id:"final",name:"data_fim"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{sm:"4"}},[e("b-form-group",[e("label",{attrs:{for:"lat"}},[t._v("Lat")]),e("b-form-input",{attrs:{type:"text",id:"lat",name:"lat",required:""}})],1)],1),e("b-col",{attrs:{sm:"4"}},[e("b-form-group",[e("label",{attrs:{for:"lng"}},[t._v("Lng")]),e("b-form-input",{attrs:{type:"text",id:"lng",name:"lng",required:""}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("b-form-group",[e("label",{attrs:{for:"imagem"}},[t._v("Imagem")]),e("input",{staticClass:"form-control",attrs:{type:"file",name:"imagem",id:"imagem"}})])],1)],1),e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[e("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" Salvar\n              ")])],1)],1)],1)])],1)],1)],1)},r=[],n=(e("7f7f"),e("ac6a"),e("2e77")),c=e.n(n),i={name:"nova_atracao",data:function(){return{atracao:{descricao:null},categorias:null}},created:function(){this.buscaCategorias()},methods:{buscaCategorias:function(){var t=this;c.a.setHeaders();var a=c.a.getCategorias();a.then(function(a){t.categorias=a})},salvaAtracao:function(t){var a={};t.currentTarget.querySelectorAll("input, textarea, select").forEach(function(t){"date"==t.type&&t.value?a[t.name]=t.value+" 00:00:00":a[t.name]=t.value}),c.a.setHeaders("POST",a),c.a.salvaAtracao()&&(alert("Salvo com sucesso!"),this.$router.push("/atracoes"))}}},s=i,l=e("2877"),u=Object(l["a"])(s,o,r,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-a3515f30.fee37169.js.map