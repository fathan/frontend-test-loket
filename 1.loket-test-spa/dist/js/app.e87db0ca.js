(function(t){function e(e){for(var n,r,l=e[0],o=e[1],c=e[2],u=0,h=[];u<l.length;u++)r=l[u],a[r]&&h.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);p&&p(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0527":function(t,e,i){t.exports=i.p+"img/people.33022f18.jpg"},"24c1":function(t,e,i){t.exports=i.p+"img/films.03a9a1af.jpg"},4570:function(t,e,i){t.exports=i.p+"img/logo-starwars.1ccb373a.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loket-starwars-wrapper"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo--top"},[n("img",{attrs:{alt:"Starwars",src:i("4570")}})])]),n("router-view"),n("div",{staticClass:"footer--bottom"},[n("div",{domProps:{innerHTML:t._s("Frontend Engineer testing for apply <a href='http://loket.com' target='_blank'>@Loket.com</a> - By Fathan Rohman (karir.fathan@gmail.com)")}})]),n("loader")],1)},s=[],r=(i("5c0b"),i("2877")),l={},o=Object(r["a"])(l,a,s,!1,null,null,null);o.options.__file="App.vue";var c=o.exports,p=i("8c4f"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-home"},[i("div",{staticClass:"container-home__list-action"},t._l(t.categories,function(e,n){return i("div",{key:n,staticClass:"listing"},[i("router-link",{attrs:{to:{path:e.url}}},[i("div",{staticClass:"listing__image"},[i("img",{attrs:{src:e.path,alt:e.title}}),i("div",{staticClass:"title"},[t._v(t._s(e.title))])])])],1)}))])},h=[],f=i("0527"),v=i.n(f),d=i("24c1"),m=i.n(d),_=i("6f50"),g=i.n(_),b=i("7ca0"),y=i.n(b),x=i("f4a9"),$=i.n(x),U=i("7a7e"),A=i.n(U),F={data:function(){return{lists:{},categories:[{title:"People",path:v.a,url:"/people"},{title:"Films",path:m.a,url:"/film"},{title:"Planets",path:g.a,url:"/planet"},{title:"Species",path:y.a,url:"/species"},{title:"Starships",path:$.a,url:"/starship"},{title:"Vehicles",path:A.a,url:"/vehicle"}]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/")).then(function(e){t.lists=e})}},S=F,C=Object(r["a"])(S,u,h,!1,null,null,null);C.options.__file="Home.vue";var O=C.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},j=[],P={},w=Object(r["a"])(P,D,j,!1,null,null,null);w.options.__file="Film.vue";var L=w.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("loket-lists",{attrs:{"list-data":t.films,category:"Film"}})],1)},k=[],B={data:function(){return{films:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/films")).then(function(e){t.films=e.results})}},I=B,V=Object(r["a"])(I,E,k,!1,null,null,null);V.options.__file="FilmIndex.vue";var R=V.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"box-detail"},[i("pre",[t._v(t._s(t.film))])])])},T=[],H={data:function(){return{film:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/films/").concat(e,"/")).then(function(e){var i=e;t.film=i;var n=t.getDataFromListUrlPeople(i.characters);t.film.characters=n;var a=t.getDataFromListUrlPlanets(i.planets);t.film.characters=a;var s=t.getDataFromListUrlStarships(i.starships);t.film.starships=s;var r=t.getDataFromListUrlVehicle(i.vehicles);t.film.vehicles=r;var l=t.getDataFromListUrlSpecies(i.species);t.film.vehicles=l})}},q=H,J=Object(r["a"])(q,M,T,!1,null,null,null);J.options.__file="FilmDetail.vue";var N=J.exports,G={path:"/film",component:L,children:[{path:"/",name:"Film Index",component:R},{path:"/film/:id",name:"Film Detail",component:N}]},z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},K=[],Q={},W=Object(r["a"])(Q,z,K,!1,null,null,null);W.options.__file="People.vue";var X=W.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("loket-lists",{attrs:{"list-data":t.peoples,category:"People"}})],1)},Z=[],tt={data:function(){return{peoples:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/people/")).then(function(e){t.peoples=e.results})}},et=tt,it=Object(r["a"])(et,Y,Z,!1,null,null,null);it.options.__file="PeopleIndex.vue";var nt=it.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"box-detail"},[i("pre",[t._v(t._s(t.people))])])])},st=[],rt={data:function(){return{people:{},films:[],species:[],vehicles:[],starships:[]}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/people/").concat(e,"/")).then(function(e){var i=e;t.people=i;var n=t.getDataFromListUrlFilm(i.films);t.people.films=n;var a=t.getDataFromListUrlSpecies(i.species);t.people.species=a;var s=t.getDataFromListUrlVehicle(i.vehicles);t.people.vehicles=s;var r=t.getDataFromListUrlStarships(i.starships);t.people.starships=r})}},lt=rt,ot=Object(r["a"])(lt,at,st,!1,null,null,null);ot.options.__file="PeopleDetail.vue";var ct=ot.exports,pt={path:"/people",component:X,children:[{path:"/",name:"People Index",component:nt},{path:"/people/:id",name:"People Detail",component:ct}]},ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},ht=[],ft={},vt=Object(r["a"])(ft,ut,ht,!1,null,null,null);vt.options.__file="Planet.vue";var dt=vt.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("loket-lists",{attrs:{"list-data":t.planets,category:"Planet"}})],1)},_t=[],gt={data:function(){return{planets:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/planets/")).then(function(e){t.planets=e.results})}},bt=gt,yt=Object(r["a"])(bt,mt,_t,!1,null,null,null);yt.options.__file="PlanetIndex.vue";var xt=yt.exports,$t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"box-detail"},[i("pre",[t._v(t._s(t.planet))])])])},Ut=[],At={data:function(){return{planet:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/planets/").concat(e,"/")).then(function(e){var i=e;t.planet=i;var n=t.getDataFromListUrlPeople(i.residents);t.planet.residents=n;var a=t.getDataFromListUrlFilm(i.films);t.planet.films=a})}},Ft=At,St=Object(r["a"])(Ft,$t,Ut,!1,null,null,null);St.options.__file="PlanetDetail.vue";var Ct=St.exports,Ot={path:"/planet",component:dt,children:[{path:"/",name:"Planet Index",component:xt},{path:"/planet/:id",name:"Planet Detail",component:Ct}]},Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},jt=[],Pt={},wt=Object(r["a"])(Pt,Dt,jt,!1,null,null,null);wt.options.__file="Species.vue";var Lt=wt.exports,Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("loket-lists",{attrs:{"list-data":t.species,category:"Species"}})],1)},kt=[],Bt={data:function(){return{species:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/species/")).then(function(e){t.species=e.results})}},It=Bt,Vt=Object(r["a"])(It,Et,kt,!1,null,null,null);Vt.options.__file="SpeciesIndex.vue";var Rt=Vt.exports,Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"box-detail"},[i("pre",[t._v(t._s(t.species))])])])},Tt=[],Ht={data:function(){return{species:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/species/").concat(e,"/")).then(function(e){var i=e;t.species=i;var n=t.getDataFromListUrlPeople(i.people);t.species.people=n;var a=t.getDataFromListUrlFilm(i.films);t.species.films=a})}},qt=Ht,Jt=Object(r["a"])(qt,Mt,Tt,!1,null,null,null);Jt.options.__file="SpeciesDetail.vue";var Nt=Jt.exports,Gt={path:"/species",component:Lt,children:[{path:"/",name:"Species Index",component:Rt},{path:"/species/:id",name:"Species Detail",component:Nt}]},zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},Kt=[],Qt={},Wt=Object(r["a"])(Qt,zt,Kt,!1,null,null,null);Wt.options.__file="Starship.vue";var Xt=Wt.exports,Yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("loket-lists",{attrs:{"list-data":t.starships,category:"Starship"}})],1)},Zt=[],te={data:function(){return{starships:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/starships/")).then(function(e){t.starships=e.results})}},ee=te,ie=Object(r["a"])(ee,Yt,Zt,!1,null,null,null);ie.options.__file="StarshipIndex.vue";var ne=ie.exports,ae=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"box-detail"},[i("pre",[t._v(t._s(t.starship))])])])},se=[],re={data:function(){return{starship:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/starships/").concat(e,"/")).then(function(e){var i=e;t.starship=i;var n=t.getDataFromListUrlPeople(i.pilots);t.starship.pilots=n;var a=t.getDataFromListUrlFilm(i.films);t.starship.films=a})}},le=re,oe=Object(r["a"])(le,ae,se,!1,null,null,null);oe.options.__file="StarshipDetail.vue";var ce=oe.exports,pe={path:"/starship",component:Xt,children:[{path:"/",name:"Starship Index",component:ne},{path:"/starship/:id",name:"Starship Detail",component:ce}]},ue=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},he=[],fe={},ve=Object(r["a"])(fe,ue,he,!1,null,null,null);ve.options.__file="Vehicle.vue";var de=ve.exports,me=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("loket-lists",{attrs:{"list-data":t.vehicles,category:"Vehicle"}})],1)},_e=[],ge={data:function(){return{vehicles:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/vehicles/")).then(function(e){t.vehicles=e.results})}},be=ge,ye=Object(r["a"])(be,me,_e,!1,null,null,null);ye.options.__file="VehicleIndex.vue";var xe=ye.exports,$e=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"box-detail"},[i("pre",[t._v(t._s(t.vehicle))])])])},Ue=[],Ae={data:function(){return{vehicle:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/vehicles/").concat(e,"/")).then(function(e){var i=e;t.vehicle=i;var n=t.getDataFromListUrlPeople(i.pilots);t.vehicle.pilots=n;var a=t.getDataFromListUrlFilm(i.films);t.vehicle.films=a})}},Fe=Ae,Se=Object(r["a"])(Fe,$e,Ue,!1,null,null,null);Se.options.__file="VehicleDetail.vue";var Ce=Se.exports,Oe={path:"/vehicle",component:de,children:[{path:"/",name:"Vehicle Index",component:xe},{path:"/vehicle/:id",name:"Vehicle Detail",component:Ce}]};n["default"].use(p["a"]);var De=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:O},G,pt,Ot,Gt,pe,Oe]}),je=i("2f62"),Pe=(i("96cf"),i("1da1")),we=i("bc3a"),Le=i.n(we),Ee={loader:!1},ke={loader:function(t){return t.loader}},Be={LOADER:function(t,e){t.loader=e}},Ie={getByUrlApi:function(){var t=Object(Pe["a"])(regeneratorRuntime.mark(function t(e,i){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("LOADER",!0),a={headers:{"Content-Type":"application/json"}},t.next=5,Le.a.get("".concat(i),a).then(function(t){return n("LOADER",!1),t.data}).catch(function(t){console.log(t)});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(e,i){return t.apply(this,arguments)}}()},Ve={state:Ee,getters:ke,mutations:Be,actions:Ie};n["default"].use(je["a"]);var Re=new je["a"].Store({modules:{Global:Ve}}),Me=(i("a481"),{data:function(){return{api_url:"https://swapi.co/api"}},methods:{urlApi:function(){return this.api_url},getIdOnUrlString:function(t,e){var i,n=t,a=new URL(n),s=a.pathname;"Film"===e&&(i=s.replace("/api/films/","")),"People"===e&&(i=s.replace("/api/people/","")),"Planet"===e&&(i=s.replace("/api/planets/","")),"Species"===e&&(i=s.replace("/api/species/","")),"Starship"===e&&(i=s.replace("/api/starships/","")),"Vehicle"===e&&(i=s.replace("/api/vehicles/",""));var r=i.replace("/","");return r},getDataFromListUrlFilm:function(t){for(var e=[],i=t,n=0;n<i.length;n++){var a=this.getIdOnUrlString(i[n],"Film");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/films/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlPeople:function(t){for(var e=[],i=t,n=0;n<i.length;n++){var a=this.getIdOnUrlString(i[n],"People");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/people/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlPlanets:function(t){for(var e=[],i=t,n=0;n<i.length;n++){var a=this.getIdOnUrlString(i[n],"Planet");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/planets/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlSpecies:function(t){for(var e=[],i=t,n=0;n<i.length;n++){var a=this.getIdOnUrlString(i[n],"Species");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/species/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlVehicle:function(t){for(var e=[],i=t,n=0;n<i.length;n++){var a=this.getIdOnUrlString(i[n],"Vehicle");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/vehicles/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlStarships:function(t){for(var e=[],i=t,n=0;n<i.length;n++){var a=this.getIdOnUrlString(i[n],"Starship");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/starships/").concat(a,"/")).then(function(t){e.push(t)})}return e}}}),Te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box-lists columns is-multiline"},[i("div",{staticClass:"column is-12"},[i("router-link",{attrs:{to:{path:"/"}}},[t._v("\n      Home\n    ")]),t._v("\n    /\n    "),"Film"===t.category?i("span",[t._v("Film")]):t._e(),"People"===t.category?i("span",[t._v("People")]):t._e(),"Planet"===t.category?i("span",[t._v("Planet")]):t._e(),"Species"===t.category?i("span",[t._v("Species")]):t._e(),"Starship"===t.category?i("span",[t._v("Starship")]):t._e(),"Vehicle"===t.category?i("span",[t._v("Vehicle")]):t._e()],1),t._l(t.listData,function(e,n){return i("div",{key:n,staticClass:"column is-one-quarter"},[i("div",{staticClass:"box-lists__listing",on:{click:function(i){t.handleDetail(e.url,t.category)}}},[t._m(0,!0),"Film"===t.category?i("div",{staticClass:"title"},[t._v(t._s(e.title))]):i("div",{staticClass:"title"},[t._v(t._s(e.name))])])])})],2)},He=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image"},[i("img",{attrs:{src:"https://www.oclaro.com/wp-content/themes/oclaro/images/placeholder-general.png",alt:""}})])}],qe={props:{listData:{type:Array},category:{type:String}},methods:{handleDetail:function(t,e){var i=this.getIdOnUrlString(t,e);"Film"===e&&this.$router.push({path:"/film/".concat(i)}),"People"===e&&this.$router.push({path:"/people/".concat(i)}),"Planet"===e&&this.$router.push({path:"/planet/".concat(i)}),"Species"===e&&this.$router.push({path:"/species/".concat(i)}),"Starship"===e&&this.$router.push({path:"/starship/".concat(i)}),"Vehicle"===e&&this.$router.push({path:"/vehicle/".concat(i)})}}},Je=qe,Ne=Object(r["a"])(Je,Te,He,!1,null,null,null);Ne.options.__file="LoketLists.vue";var Ge=Ne.exports,ze=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loader?i("div",{staticClass:"loader--page"},[t._m(0)]):t._e()},Ke=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loader--page__box"},[i("div",{staticClass:"spinner"},[i("div",{staticClass:"rect1"}),i("div",{staticClass:"rect2"}),i("div",{staticClass:"rect3"}),i("div",{staticClass:"rect4"}),i("div",{staticClass:"rect5"})]),i("div",{staticClass:"title"},[t._v("Please wait...")])])}],Qe={computed:{loader:function(){return this.$store.getters.loader}}},We=Qe,Xe=Object(r["a"])(We,ze,Ke,!1,null,null,null);Xe.options.__file="Loader.vue";var Ye=Xe.exports;n["default"].component("loket-lists",Ge),n["default"].component("loader",Ye);var Ze=i("8a03"),ti=i.n(Ze);i("5abe");n["default"].use(ti.a);var ei=i("9483");Object(ei["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["default"].config.productionTip=!1,n["default"].mixin(Me),new n["default"]({router:De,store:Re,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),a=i.n(n);a.a},"5e27":function(t,e,i){},"6f50":function(t,e,i){t.exports=i.p+"img/planets.d28c9986.jpg"},"7a7e":function(t,e,i){t.exports=i.p+"img/vehicles.788b92b8.jpg"},"7ca0":function(t,e,i){t.exports=i.p+"img/species.469d9d37.jpg"},f4a9:function(t,e,i){t.exports=i.p+"img/starships.19706559.jpg"}});
//# sourceMappingURL=app.e87db0ca.js.map