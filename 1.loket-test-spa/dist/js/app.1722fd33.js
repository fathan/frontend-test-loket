(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],d=0,u=[];d<l.length;d++)r=l[d],a[r]&&u.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var o=s[l];0!==a[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={app:0},n=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0527":function(t,e,s){t.exports=s.p+"img/people.33022f18.jpg"},"24c1":function(t,e,s){t.exports=s.p+"img/films.03a9a1af.jpg"},4570:function(t,e,s){t.exports=s.p+"img/logo-starwars.1ccb373a.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loket-starwars-wrapper"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"logo--top"},[i("img",{attrs:{alt:"Starwars",src:s("4570")}})])]),i("router-view"),i("div",{staticClass:"footer--bottom"},[i("div",{domProps:{innerHTML:t._s("Frontend Engineer testing for apply <a href='http://loket.com' target='_blank'>@Loket.com</a> - By Fathan Rohman (karir.fathan@gmail.com)")}})]),i("loader")],1)},n=[],r=(s("5c0b"),s("2877")),l={},o=Object(r["a"])(l,a,n,!1,null,null,null);o.options.__file="App.vue";var c=o.exports,p=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-home"},[s("div",{staticClass:"container-home__list-action"},t._l(t.categories,function(e,i){return s("div",{key:i,staticClass:"listing"},[s("router-link",{attrs:{to:{path:e.url}}},[s("div",{staticClass:"listing__image"},[s("img",{attrs:{src:e.path,alt:e.title}}),s("div",{staticClass:"title"},[t._v(t._s(e.title))])])])],1)}))])},u=[],v=s("0527"),_=s.n(v),h=s("24c1"),f=s.n(h),m=s("6f50"),g=s.n(m),b=s("7ca0"),y=s.n(b),C=s("f4a9"),x=s.n(C),S=s("7a7e"),$=s.n(S),A={data:function(){return{lists:{},categories:[{title:"People",path:_.a,url:"/people"},{title:"Films",path:f.a,url:"/film"},{title:"Planets",path:g.a,url:"/planet"},{title:"Species",path:y.a,url:"/species"},{title:"Starships",path:x.a,url:"/starship"},{title:"Vehicles",path:$.a,url:"/vehicle"}]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/")).then(function(e){t.lists=e})}},F=A,P=Object(r["a"])(F,d,u,!1,null,null,null);P.options.__file="Home.vue";var U=P.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},w=[],D={},O=Object(r["a"])(D,k,w,!1,null,null,null);O.options.__file="Film.vue";var j=O.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("loket-lists",{attrs:{"list-data":t.films,category:"Film"}})],1)},E=[],R={data:function(){return{films:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/films")).then(function(e){t.films=e.results})}},B=R,I=Object(r["a"])(B,L,E,!1,null,null,null);I.options.__file="FilmIndex.vue";var V=I.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box-detail"},[s("div",{staticClass:"box-detail__title"},[t._v("Film Title: "+t._s(t.film.title))]),s("table",{staticClass:"table"},[s("tr",[s("td",[t._v("Date Created")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.film.release_date))])]),s("tr",[s("td",[t._v("Director")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.film.director))])]),s("tr",[s("td",[t._v("Producer")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.film.producer))])]),s("tr",[s("td",[t._v("Opening Crawl")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.film.opening_crawl))])]),s("tr",[s("td",[t._v("Related Characters")]),s("td",[t._v(":")]),s("td",t._l(t.film.characters,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Planets")]),s("td",[t._v(":")]),s("td",t._l(t.film.planets,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Vehicles")]),s("td",[t._v(":")]),s("td",t._l(t.film.vehicles,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Starships")]),s("td",[t._v(":")]),s("td",t._l(t.film.starships,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Species")]),s("td",[t._v(":")]),s("td",t._l(t.film.species,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))])])])])},H=[],T={data:function(){return{film:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/films/").concat(e,"/")).then(function(e){var s=e;t.film=s;var i=t.getDataFromListUrlPeople(s.characters);t.film.characters=i;var a=t.getDataFromListUrlPlanets(s.planets);t.film.planets=a;var n=t.getDataFromListUrlStarships(s.starships);t.film.starships=n;var r=t.getDataFromListUrlVehicle(s.vehicles);t.film.vehicles=r;var l=t.getDataFromListUrlSpecies(s.species);t.film.species=l})}},N=T,G=Object(r["a"])(N,M,H,!1,null,null,null);G.options.__file="FilmDetail.vue";var W=G.exports,q={path:"/film",component:j,children:[{path:"/",name:"Film Index",component:V},{path:"/film/:id",name:"Film Detail",component:W}]},J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},Y=[],z={},K=Object(r["a"])(z,J,Y,!1,null,null,null);K.options.__file="People.vue";var Q=K.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("loket-lists",{attrs:{"list-data":t.peoples,category:"People"}})],1)},Z=[],tt={data:function(){return{peoples:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/people/")).then(function(e){t.peoples=e.results})}},et=tt,st=Object(r["a"])(et,X,Z,!1,null,null,null);st.options.__file="PeopleIndex.vue";var it=st.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box-detail"},[s("div",{staticClass:"box-detail__title"},[t._v("People Name: "+t._s(t.people.name))]),s("table",{staticClass:"table"},[s("tr",[s("td",[t._v("Birth Year")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.people.birth_year))])]),s("tr",[s("td",[t._v("Height")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.people.height))])]),s("tr",[s("td",[t._v("Mass")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.people.mass))])]),s("tr",[s("td",[t._v("Gender")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.people.gender))])]),s("tr",[s("td",[t._v("Hair")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.people.hair_color))])]),s("tr",[s("td",[t._v("Skin Color")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.people.skin_color))])]),s("tr",[s("td",[t._v("Home World")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.people.homeworld))])]),s("tr",[s("td",[t._v("Related Vehicles")]),s("td",[t._v(":")]),s("td",t._l(t.people.vehicles,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Starships")]),s("td",[t._v(":")]),s("td",t._l(t.people.starships,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Films")]),s("td",[t._v(":")]),s("td",t._l(t.people.films,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.title)+", \n          ")])}))])])])])},nt=[],rt={data:function(){return{people:{},films:[],species:[],vehicles:[],starships:[]}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/people/").concat(e,"/")).then(function(e){var s=e;t.people=s;var i=t.getDataFromListUrlFilm(s.films);t.people.films=i;var a=t.getDataFromListUrlSpecies(s.species);t.people.species=a;var n=t.getDataFromListUrlVehicle(s.vehicles);t.people.vehicles=n;var r=t.getDataFromListUrlStarships(s.starships);t.people.starships=r})}},lt=rt,ot=Object(r["a"])(lt,at,nt,!1,null,null,null);ot.options.__file="PeopleDetail.vue";var ct=ot.exports,pt={path:"/people",component:Q,children:[{path:"/",name:"People Index",component:it},{path:"/people/:id",name:"People Detail",component:ct}]},dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},ut=[],vt={},_t=Object(r["a"])(vt,dt,ut,!1,null,null,null);_t.options.__file="Planet.vue";var ht=_t.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("loket-lists",{attrs:{"list-data":t.planets,category:"Planet"}})],1)},mt=[],gt={data:function(){return{planets:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/planets/")).then(function(e){t.planets=e.results})}},bt=gt,yt=Object(r["a"])(bt,ft,mt,!1,null,null,null);yt.options.__file="PlanetIndex.vue";var Ct=yt.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box-detail"},[s("div",{staticClass:"box-detail__title"},[t._v("Planet name: "+t._s(t.planet.name))]),s("table",{staticClass:"table"},[s("tr",[s("td",[t._v("Rotation Period")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.rotation_period))])]),s("tr",[s("td",[t._v("Orbital Period")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.orbital_period))])]),s("tr",[s("td",[t._v("Diameter")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.diameter))])]),s("tr",[s("td",[t._v("Climate")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.climate))])]),s("tr",[s("td",[t._v("Gravity")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.gravity))])]),s("tr",[s("td",[t._v("Terrain")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.terrain))])]),s("tr",[s("td",[t._v("Surface Water")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.surface_water))])]),s("tr",[s("td",[t._v("Population")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.planet.population))])]),s("tr",[s("td",[t._v("Related Residents")]),s("td",[t._v(":")]),s("td",t._l(t.planet.residents,function(e,i){return s("span",{key:i},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Films")]),s("td",[t._v(":")]),s("td",t._l(t.planet.films,function(e,i){return s("span",{key:i},[t._v("\n            "+t._s(e.title)+", \n          ")])}))])])])])},St=[],$t={data:function(){return{planet:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/planets/").concat(e,"/")).then(function(e){var s=e;t.planet=s;var i=t.getDataFromListUrlPeople(s.residents);t.planet.residents=i;var a=t.getDataFromListUrlFilm(s.films);t.planet.films=a})}},At=$t,Ft=Object(r["a"])(At,xt,St,!1,null,null,null);Ft.options.__file="PlanetDetail.vue";var Pt=Ft.exports,Ut={path:"/planet",component:ht,children:[{path:"/",name:"Planet Index",component:Ct},{path:"/planet/:id",name:"Planet Detail",component:Pt}]},kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},wt=[],Dt={},Ot=Object(r["a"])(Dt,kt,wt,!1,null,null,null);Ot.options.__file="Species.vue";var jt=Ot.exports,Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("loket-lists",{attrs:{"list-data":t.species,category:"Species"}})],1)},Et=[],Rt={data:function(){return{species:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/species/")).then(function(e){t.species=e.results})}},Bt=Rt,It=Object(r["a"])(Bt,Lt,Et,!1,null,null,null);It.options.__file="SpeciesIndex.vue";var Vt=It.exports,Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box-detail"},[s("div",{staticClass:"box-detail__title"},[t._v("Species Name: "+t._s(t.species.name))]),s("table",{staticClass:"table"},[s("tr",[s("td",[t._v("Classification")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.classification))])]),s("tr",[s("td",[t._v("Designation")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.designation))])]),s("tr",[s("td",[t._v("Average Height")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.average_height))])]),s("tr",[s("td",[t._v("Skin Colors")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.skin_colors))])]),s("tr",[s("td",[t._v("Eye Colors")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.eye_colors))])]),s("tr",[s("td",[t._v("Average Lifespan")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.average_lifespan))])]),s("tr",[s("td",[t._v("Home World")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.homeworld))])]),s("tr",[s("td",[t._v("Language")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.species.language))])]),s("tr",[s("td",[t._v("Related People")]),s("td",[t._v(":")]),s("td",t._l(t.species.people,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Films")]),s("td",[t._v(":")]),s("td",t._l(t.species.films,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.title)+", \n          ")])}))])])])])},Ht=[],Tt={data:function(){return{species:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/species/").concat(e,"/")).then(function(e){var s=e;t.species=s;var i=t.getDataFromListUrlPeople(s.people);t.species.people=i;var a=t.getDataFromListUrlFilm(s.films);t.species.films=a})}},Nt=Tt,Gt=Object(r["a"])(Nt,Mt,Ht,!1,null,null,null);Gt.options.__file="SpeciesDetail.vue";var Wt=Gt.exports,qt={path:"/species",component:jt,children:[{path:"/",name:"Species Index",component:Vt},{path:"/species/:id",name:"Species Detail",component:Wt}]},Jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},Yt=[],zt={},Kt=Object(r["a"])(zt,Jt,Yt,!1,null,null,null);Kt.options.__file="Starship.vue";var Qt=Kt.exports,Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("loket-lists",{attrs:{"list-data":t.starships,category:"Starship"}})],1)},Zt=[],te={data:function(){return{starships:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/starships/")).then(function(e){t.starships=e.results})}},ee=te,se=Object(r["a"])(ee,Xt,Zt,!1,null,null,null);se.options.__file="StarshipIndex.vue";var ie=se.exports,ae=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box-detail"},[s("div",{staticClass:"box-detail__title"},[t._v("Starship Name: "+t._s(t.starship.name))]),s("table",{staticClass:"table"},[s("tr",[s("td",[t._v("Model")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.model))])]),s("tr",[s("td",[t._v("Manufacturer")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.manufacturer))])]),s("tr",[s("td",[t._v("Cost in Credits")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.cost_in_credits))])]),s("tr",[s("td",[t._v("Length")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.length))])]),s("tr",[s("td",[t._v("Max Atmosphering Speed")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.max_atmosphering_speed))])]),s("tr",[s("td",[t._v("Crew")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.crew))])]),s("tr",[s("td",[t._v("Passengers")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.passengers))])]),s("tr",[s("td",[t._v("Cargo Capacity")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.cargo_capacity))])]),s("tr",[s("td",[t._v("Consumables")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.consumambles))])]),s("tr",[s("td",[t._v("Hyperdrive Rating")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.hyperdrive_rating))])]),s("tr",[s("td",[t._v("MGLT")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.MGLT))])]),s("tr",[s("td",[t._v("Starship Class")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.starship.starship_class))])]),s("tr",[s("td",[t._v("Related Pilots")]),s("td",[t._v(":")]),s("td",t._l(t.starship.people,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Films")]),s("td",[t._v(":")]),s("td",t._l(t.starship.films,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.title)+", \n          ")])}))])])])])},ne=[],re={data:function(){return{starship:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/starships/").concat(e,"/")).then(function(e){var s=e;t.starship=s;var i=t.getDataFromListUrlPeople(s.pilots);t.starship.pilots=i;var a=t.getDataFromListUrlFilm(s.films);t.starship.films=a})}},le=re,oe=Object(r["a"])(le,ae,ne,!1,null,null,null);oe.options.__file="StarshipDetail.vue";var ce=oe.exports,pe={path:"/starship",component:Qt,children:[{path:"/",name:"Starship Index",component:ie},{path:"/starship/:id",name:"Starship Detail",component:ce}]},de=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},ue=[],ve={},_e=Object(r["a"])(ve,de,ue,!1,null,null,null);_e.options.__file="Vehicle.vue";var he=_e.exports,fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("loket-lists",{attrs:{"list-data":t.vehicles,category:"Vehicle"}})],1)},me=[],ge={data:function(){return{vehicles:[]}},mounted:function(){var t=this;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/vehicles/")).then(function(e){t.vehicles=e.results})}},be=ge,ye=Object(r["a"])(be,fe,me,!1,null,null,null);ye.options.__file="VehicleIndex.vue";var Ce=ye.exports,xe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"box-detail"},[s("div",{staticClass:"box-detail__title"},[t._v("Vehicle Name: "+t._s(t.vehicle.name))]),s("table",{staticClass:"table"},[s("tr",[s("td",[t._v("Model")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.model))])]),s("tr",[s("td",[t._v("Manufacturer")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.manufacturer))])]),s("tr",[s("td",[t._v("Cost in Credits")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.cost_in_credits))])]),s("tr",[s("td",[t._v("Length")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.length))])]),s("tr",[s("td",[t._v("Max Atmosphering Speed")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.max_atmosphering_speed))])]),s("tr",[s("td",[t._v("Crew")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.crew))])]),s("tr",[s("td",[t._v("Passengers")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.passengers))])]),s("tr",[s("td",[t._v("Cargo Capacity")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.cargo_capacity))])]),s("tr",[s("td",[t._v("Consumables")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.consumambles))])]),s("tr",[s("td",[t._v("Vehicle Class")]),s("td",[t._v(":")]),s("td",[t._v(t._s(t.vehicle.vehicle_class))])]),s("tr",[s("td",[t._v("Related Pilots")]),s("td",[t._v(":")]),s("td",t._l(t.vehicle.people,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.name)+", \n          ")])}))]),s("tr",[s("td",[t._v("Related Films")]),s("td",[t._v(":")]),s("td",t._l(t.vehicle.films,function(e){return s("span",{key:e},[t._v("\n            "+t._s(e.title)+", \n          ")])}))])])])])},Se=[],$e={data:function(){return{vehicle:{}}},mounted:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/vehicles/").concat(e,"/")).then(function(e){var s=e;t.vehicle=s;var i=t.getDataFromListUrlPeople(s.pilots);t.vehicle.pilots=i;var a=t.getDataFromListUrlFilm(s.films);t.vehicle.films=a})}},Ae=$e,Fe=Object(r["a"])(Ae,xe,Se,!1,null,null,null);Fe.options.__file="VehicleDetail.vue";var Pe=Fe.exports,Ue={path:"/vehicle",component:he,children:[{path:"/",name:"Vehicle Index",component:Ce},{path:"/vehicle/:id",name:"Vehicle Detail",component:Pe}]};i["default"].use(p["a"]);var ke=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:U},q,pt,Ut,qt,pe,Ue]}),we=s("2f62"),De=(s("96cf"),s("1da1")),Oe=s("bc3a"),je=s.n(Oe),Le={loader:!1},Ee={loader:function(t){return t.loader}},Re={LOADER:function(t,e){t.loader=e}},Be={getByUrlApi:function(){var t=Object(De["a"])(regeneratorRuntime.mark(function t(e,s){var i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,i("LOADER",!0),a={headers:{"Content-Type":"application/json"}},t.next=5,je.a.get("".concat(s),a).then(function(t){return i("LOADER",!1),t.data}).catch(function(t){console.log(t)});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}()},Ie={state:Le,getters:Ee,mutations:Re,actions:Be};i["default"].use(we["a"]);var Ve=new we["a"].Store({modules:{Global:Ie}}),Me=(s("a481"),{data:function(){return{api_url:"https://swapi.co/api"}},methods:{urlApi:function(){return this.api_url},getIdOnUrlString:function(t,e){var s,i=t,a=new URL(i),n=a.pathname;"Film"===e&&(s=n.replace("/api/films/","")),"People"===e&&(s=n.replace("/api/people/","")),"Planet"===e&&(s=n.replace("/api/planets/","")),"Species"===e&&(s=n.replace("/api/species/","")),"Starship"===e&&(s=n.replace("/api/starships/","")),"Vehicle"===e&&(s=n.replace("/api/vehicles/",""));var r=s.replace("/","");return r},getDataFromListUrlFilm:function(t){for(var e=[],s=t,i=0;i<s.length;i++){var a=this.getIdOnUrlString(s[i],"Film");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/films/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlPeople:function(t){for(var e=[],s=t,i=0;i<s.length;i++){var a=this.getIdOnUrlString(s[i],"People");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/people/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlPlanets:function(t){for(var e=[],s=t,i=0;i<s.length;i++){var a=this.getIdOnUrlString(s[i],"Planet");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/planets/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlSpecies:function(t){for(var e=[],s=t,i=0;i<s.length;i++){var a=this.getIdOnUrlString(s[i],"Species");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/species/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlVehicle:function(t){for(var e=[],s=t,i=0;i<s.length;i++){var a=this.getIdOnUrlString(s[i],"Vehicle");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/vehicles/").concat(a,"/")).then(function(t){e.push(t)})}return e},getDataFromListUrlStarships:function(t){for(var e=[],s=t,i=0;i<s.length;i++){var a=this.getIdOnUrlString(s[i],"Starship");this.$store.dispatch("getByUrlApi","".concat(this.urlApi(),"/starships/").concat(a,"/")).then(function(t){e.push(t)})}return e}}}),He=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-lists columns is-multiline"},[s("div",{staticClass:"column is-12"},[s("router-link",{attrs:{to:{path:"/"}}},[t._v("\n      Home\n    ")]),t._v("\n    /\n    "),"Film"===t.category?s("span",[t._v("Film")]):t._e(),"People"===t.category?s("span",[t._v("People")]):t._e(),"Planet"===t.category?s("span",[t._v("Planet")]):t._e(),"Species"===t.category?s("span",[t._v("Species")]):t._e(),"Starship"===t.category?s("span",[t._v("Starship")]):t._e(),"Vehicle"===t.category?s("span",[t._v("Vehicle")]):t._e()],1),t._l(t.listData,function(e,i){return s("div",{key:i,staticClass:"column is-one-quarter"},[s("div",{staticClass:"box-lists__listing",on:{click:function(s){t.handleDetail(e.url,t.category)}}},[t._m(0,!0),"Film"===t.category?s("div",{staticClass:"title"},[t._v(t._s(e.title))]):s("div",{staticClass:"title"},[t._v(t._s(e.name))])])])})],2)},Te=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image"},[s("img",{attrs:{src:"https://www.oclaro.com/wp-content/themes/oclaro/images/placeholder-general.png",alt:""}})])}],Ne={props:{listData:{type:Array},category:{type:String}},methods:{handleDetail:function(t,e){var s=this.getIdOnUrlString(t,e);"Film"===e&&this.$router.push({path:"/film/".concat(s)}),"People"===e&&this.$router.push({path:"/people/".concat(s)}),"Planet"===e&&this.$router.push({path:"/planet/".concat(s)}),"Species"===e&&this.$router.push({path:"/species/".concat(s)}),"Starship"===e&&this.$router.push({path:"/starship/".concat(s)}),"Vehicle"===e&&this.$router.push({path:"/vehicle/".concat(s)})}}},Ge=Ne,We=Object(r["a"])(Ge,He,Te,!1,null,null,null);We.options.__file="LoketLists.vue";var qe=We.exports,Je=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loader?s("div",{staticClass:"loader--page"},[t._m(0)]):t._e()},Ye=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loader--page__box"},[s("div",{staticClass:"spinner"},[s("div",{staticClass:"rect1"}),s("div",{staticClass:"rect2"}),s("div",{staticClass:"rect3"}),s("div",{staticClass:"rect4"}),s("div",{staticClass:"rect5"})]),s("div",{staticClass:"title"},[t._v("Please wait...")])])}],ze={computed:{loader:function(){return this.$store.getters.loader}}},Ke=ze,Qe=Object(r["a"])(Ke,Je,Ye,!1,null,null,null);Qe.options.__file="Loader.vue";var Xe=Qe.exports;i["default"].component("loket-lists",qe),i["default"].component("loader",Xe);var Ze=s("8a03"),ts=s.n(Ze);s("5abe");i["default"].use(ts.a);var es=s("9483");Object(es["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["default"].config.productionTip=!1,i["default"].mixin(Me),new i["default"]({router:ke,store:Ve,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("5e27"),a=s.n(i);a.a},"5e27":function(t,e,s){},"6f50":function(t,e,s){t.exports=s.p+"img/planets.d28c9986.jpg"},"7a7e":function(t,e,s){t.exports=s.p+"img/vehicles.788b92b8.jpg"},"7ca0":function(t,e,s){t.exports=s.p+"img/species.469d9d37.jpg"},f4a9:function(t,e,s){t.exports=s.p+"img/starships.19706559.jpg"}});
//# sourceMappingURL=app.1722fd33.js.map