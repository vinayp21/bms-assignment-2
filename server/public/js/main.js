!function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],d=0,f=[];d<l.length;d++)i=l[d],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([133,1]),n()}({104:function(e,t,n){var a=n(105);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(16)(a,r);a.locals&&(e.exports=a.locals)},105:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".details {\n  height: 500px;\n  margin-bottom: 70px;\n  color: #ffffff;\n  font-family: 'Roboto Slab', serif; }\n  @media only screen and (max-width: 768px) {\n    .details {\n      height: 1000px; } }\n  @media only screen and (min-width: 768px) {\n    .details {\n      height: 500px; } }\n  .details .video-details {\n    background-color: rgba(0, 0, 0, 0.5);\n    color: #ffffff;\n    opacity: 0.9;\n    padding: 15px; }\n    .details .video-details .close {\n      background: none;\n      color: white;\n      border: 0; }\n    .details .video-details .language {\n      text-transform: uppercase;\n      margin-bottom: 5px;\n      font-size: 13px; }\n    .details .video-details .title {\n      font-size: 18px;\n      margin-bottom: 5px; }\n    .details .video-details .genre {\n      padding: 3px 10px;\n      border: 1px solid white;\n      border-radius: 15px;\n      margin-right: 10px;\n      font-size: 12px;\n      margin-bottom: 5px; }\n    .details .video-details .stats {\n      margin-top: 15px;\n      margin-right: 10px; }\n      .details .video-details .stats .like {\n        margin-right: 10px; }\n      .details .video-details .stats .perct {\n        font-size: 10px; }\n    .details .video-details .date {\n      margin-top: 15px; }\n      .details .video-details .date .calendar {\n        margin-right: 10px; }\n      .details .video-details .date .trailer-date {\n        font-size: 10px; }\n    .details .video-details .interest {\n      margin-top: 285px; }\n      .details .video-details .interest .yes {\n        padding: 10px;\n        border: 1px solid green;\n        border-radius: 20px;\n        color: green; }\n      .details .video-details .interest .no {\n        padding: 10px;\n        border: 1px solid red;\n        border-radius: 20px;\n        color: red; }\n      .details .video-details .interest .may-be {\n        padding: 10px;\n        border: 1px solid orange;\n        border-radius: 20px;\n        color: orange; }\n      .details .video-details .interest .count {\n        font-size: 10px;\n        text-align: center; }\n",""])},123:function(e,t,n){var a=n(124);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(16)(a,r);a.locals&&(e.exports=a.locals)},124:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".Header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 1; }\n  .Header .navbar {\n    background-color: black;\n    padding: 5px 100px;\n    border-bottom: 2px solid #ffffff; }\n    @media (max-width: 991px) {\n      .Header .navbar {\n        padding: 5px 10px; }\n        .Header .navbar .navbar-toggler {\n          display: none;\n          font-size: 32px; } }\n    .Header .navbar .v-icon {\n      font-size: 36px; }\n    .Header .navbar .navbar-nav .nav-link,\n    .Header .navbar .navbar-nav .nav-link:hover {\n      color: #ffffff; }\n    .Header .navbar .navbar-nav .nav-item {\n      margin-right: 20px; }\n      .Header .navbar .navbar-nav .nav-item button {\n        width: 150px; }\n    .Header .navbar .navbar-brand {\n      color: #ffffff;\n      font-size: 32px;\n      font-family: 'Indie Flower', cursive; }\n      .Header .navbar .navbar-brand:hover {\n        color: #ffffff; }\n  .Header .filters {\n    background-color: black;\n    padding: 10px;\n    color: #ffffff; }\n    .Header .filters span {\n      border: 1px solid white;\n      padding: 5px 10px;\n      border-radius: 20px;\n      font-size: 14px;\n      margin-right: 10px; }\n    .Header .filters .remove-filter {\n      background: none;\n      border: 0;\n      color: #fff; }\n",""])},126:function(e,t,n){var a=n(127);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(16)(a,r);a.locals&&(e.exports=a.locals)},127:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"body {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.container {\n  max-width: 1400px; }\n\n.card-item {\n  margin-bottom: 70px; }\n\n.card-section {\n  margin-top: 170px; }\n\n.loader {\n  height: calc(100vh - 122px); }\n",""])},133:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"bms",function(){return ae});var r=n(0),o=n.n(r),i=n(11),l=n.n(i),c=n(10),s=n(17),u=n(23),d=(n(72),n(1)),f=n.n(d),p=n(51),m=n.n(p),b={SET_APP_DATA:"SET_APP_DATA",SET_SELECTED_EVENT:"SET_SELECTED_EVENT",UPDATE_LIST:"UPDATE_LIST",CLOSE_VIDEO_SECTION:"CLOSE_VIDEO_SECTION"};function v(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(){return function(e){m.a.get("http://localhost:3001/getAllEvents").then(function(t){var n=JSON.parse(t.data),a=function(e){var t=[];return Object.keys(e).forEach(function(n){e[n].EventGenre.split("|").forEach(function(e){-1===t.indexOf(e)&&t.push(e)})}),t}(n[1]);e({type:b.SET_APP_DATA,payload:{data:n,uniqueGenre:a}})})}},h=function(e,t){return function(n){n({type:b.SET_SELECTED_EVENT,payload:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){g(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{id:t})})}},E=function(e,t){return function(n,a){var r=function(e,t,n){var a=t.map(function(e){return e.label}),r=n.map(function(e){return e.label}),o=e.bms.data[1],i=Object.keys(o),l={};return"Genre"===r[0]&&"Language"===a[0]||0===a.length&&"Genre"===r[0]||0===r&&"Language"===a[0]?l=o:i.forEach(function(e){a.indexOf(o[e].EventLanguage)>=0&&"Genre"===r[0]?l[e]=o[e]:r.indexOf(o[e].EventGenre)>=0&&"Language"===a[0]?l[e]=o[e]:a.indexOf(o[e].EventLanguage)>=0&&r.indexOf(o[e].EventGenre)>=0&&(l[e]=o[e])}),[e.bms.data[0],l]}(a(),e,t);n({type:b.UPDATE_LIST,payload:r})}},x=(n(91),function(e){var t=e.data,n=e.dispatch,a=e.selectedId;return o.a.createElement("div",{className:"card"},o.a.createElement("button",{type:"button",className:"card-button",onClick:function(){return function(e,t,n){t(h(e,n))}(t,n,a)}},o.a.createElement("img",{src:"https://in.bmscdn.com/events/moviecard/".concat(t.EventImageCode,".jpg"),alt:"movie"}),o.a.createElement("div",{className:"event-details text-left"},o.a.createElement("div",null,o.a.createElement("div",{className:"title"},t.EventTitle),o.a.createElement("div",{className:"language"},o.a.createElement("span",null,"U"),o.a.createElement("span",null,"|"),o.a.createElement("span",null,t.EventLanguage))),o.a.createElement("div",{className:"rating"},o.a.createElement("span",{className:"fas fa-heart fav"}),o.a.createElement("span",null,o.a.createElement("b",null,t.wtsPerc,"%"))))))});x.propTypes={data:f.a.object.isRequired,dispatch:f.a.func.isRequired,selectedId:f.a.number.isRequired};var O=x,w=n(52),j=(n(104),{height:"490",width:"100%",playerVars:{autoplay:1}}),N=function(e){e(function(e){e({type:b.CLOSE_VIDEO_SECTION})})},S=function(e){var t=e.selectedEvent,n=e.rowIndex,a=e.dispatch,r=e.modValue,i=e.lastRow;if(t&&Object.keys(t).length>0&&n>=t.id&&n-r<t.id||t&&n-t.id<r&&i){var l=function(e){var t=e.split("=");return t.length>1?t[1].split("&")[0]:t[t.length-1]}(t.TrailerURL);return o.a.createElement("div",{className:"details row"},o.a.createElement("div",{className:"col-md-8 video-section"},o.a.createElement(w.a,{videoId:l,opts:j})),o.a.createElement("div",{className:"col-md-4 video-details"},o.a.createElement("button",{className:"close",type:"button",onClick:function(){return N(a)}},"X"),o.a.createElement("div",{className:"title"},o.a.createElement("b",null,t.EventTitle)),o.a.createElement("div",{className:"language"},t.EventLanguage),["horror","drama"].map(function(e){return o.a.createElement("span",{className:"genre"},e)}),o.a.createElement("div",{className:"d-flex flex-row"},o.a.createElement("div",{className:"d-flex flex-row stats"},o.a.createElement("span",{className:"far fa-thumbs-up like"}),o.a.createElement("div",{className:"perct d-flex flex-column"},o.a.createElement("span",null,t.wtsPerc,"%"),o.a.createElement("span",null,t.wtsCount," votes"))),o.a.createElement("div",{className:"d-flex flex-row date"},o.a.createElement("span",{className:"far fa-calendar-alt calendar"}),o.a.createElement("div",{className:"trailer-date d-flex flex-column"},o.a.createElement("span",null,"".concat(new Date(t.trailerUploadDate).getDate(),"\n\t\t\t\t\t\t\t\t\t").concat(function(e){switch(e){case 1:return"January";case 2:return"Febraury";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return""}}(new Date(t.trailerUploadDate).getMonth()))),o.a.createElement("span",null,new Date(t.trailerUploadDate).getFullYear()," ")))),o.a.createElement("div",{className:"d-flex flex-row justify-content-around interest"},o.a.createElement("div",{className:"d-flex flex-column"},o.a.createElement("span",{className:"far fa-thumbs-up yes"}),o.a.createElement("div",{className:"count"},t.wtsCount)),o.a.createElement("div",{className:"d-flex flex-column"},o.a.createElement("span",{className:"fas fa-question may-be"}),o.a.createElement("div",{className:"count"},t.maybeCount)),o.a.createElement("div",{className:"d-flex flex-column"},o.a.createElement("span",{className:"far fa-thumbs-down no"}),o.a.createElement("div",{className:"count"},t.dwtsCount)))))}return null};S.propTypes={selectedEvent:f.a.object,rowIndex:f.a.number.isRequired,dispatch:f.a.func.isRequired,modValue:f.a.number.isRequired,lastRow:f.a.bool};var P=Object(c.c)(function(e){return{selectedEvent:e.bms.selectedEvent}})(S),_=n(26),T=n(29),D=n.n(T);n(123);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(A(e=function(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?A(e):t}(this,I(t).call(this))),"getDropdownOptions",function(e){return e.map(function(e){return{label:e,value:e}})}),R(A(e),"selectLanguage",function(t){var n=e.props.dispatch,a=[];a=t.filter(function(e){return"Language"!==e.label}),0===t.length&&(a=[{label:"Language",value:"Language"}]),e.setState({selectedLanguage:k(a)},function(){var t=e.state,a=t.selectedLanguage,r=t.selectedGenre;n(E(a,r))})}),R(A(e),"selectGenre",function(t){var n=e.props.dispatch,a=[];a=t.filter(function(e){return"Genre"!==e.label}),0===t.length&&(a=[{label:"Genre",value:"Genre"}]),e.setState({selectedGenre:k(a)},function(){var t=e.state,a=t.selectedGenre,r=t.selectedLanguage;n(E(r,a))})}),R(A(e),"getAllFilters",function(e,t){var n=e.filter(function(e){return"Language"!==e.label}),a=t.filter(function(e){return"Genre"!==e.label});return[].concat(k(n),k(a))}),R(A(e),"removeFilter",function(t){var n=e.props.dispatch,a=e.state,r=a.selectedLanguage,o=a.selectedGenre,i=r.filter(function(e){return e.label!==t.label}),l=o.filter(function(e){return e.label!==t.label});0===i.length&&(i=[{label:"Language",value:"Language"}]),0===l.length&&(l=[{label:"Genre",value:"Genre"}]),e.setState({selectedLanguage:i,selectedGenre:l}),n(E(i,l))}),e.state={selectedLanguage:[{label:"Language",value:"Language"}],selectedGenre:[{label:"Genre",value:"Genre"}]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,r["Component"]),function(e,t,n){t&&C(e.prototype,t),n&&C(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.selectedLanguage,a=t.selectedGenre,r=this.props.eventData,i=r.data,l=r.genre,c=Object.keys(i).length>0?this.getDropdownOptions(i[0]):[],s=Object.keys(i).length>0?this.getDropdownOptions(l):[],u=this.getAllFilters(n,a);return o.a.createElement("header",{className:"Header"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},o.a.createElement(_.a,{className:"navbar-brand ",to:"/"},"BMS Trailers"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#1navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"}),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(D.a,{options:c,value:n,onChange:this.selectLanguage})),o.a.createElement("li",{className:"nav-item"},o.a.createElement(D.a,{options:s,value:a,onChange:this.selectGenre}))))),u.length>0&&o.a.createElement("div",{className:"filters"},u.map(function(t){return o.a.createElement("span",{key:t.label},t.label," ",o.a.createElement("button",{type:"button",className:"remove-filter",onClick:function(){return e.removeFilter(t)}},"X"))})))}}]),t}();z.propTypes={eventData:f.a.object.isRequired,dispatch:f.a.func.isRequired};var H=Object(c.c)(function(e){return{eventData:e.bms}})(z);n(126);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(U(n=function(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?U(e):t}(this,(e=M(t)).call.apply(e,[this].concat(r)))),"getModValue",function(e){return"large"===e?4:"medium"===e?2:1}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,r["Component"]),function(e,t,n){t&&q(e.prototype,t),n&&q(e,n)}(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(y())}},{key:"render",value:function(){var e=this.props,t=e.eventData,n=t.data,a=t.filteredList,i=e.dispatch,l=a&&a.length>0?a:n,c=l[1],s=l.length>0&&Object.keys(l[1]),u=this.getModValue(window.innerWidth<575?"small":window.innerWidth>575&&window.innerWidth<768?"medium":"large");return o.a.createElement("div",{className:"home"},o.a.createElement(H,null),o.a.createElement("div",{className:"container card-section"},o.a.createElement("div",{className:"row"},s&&s.map(function(e,t){var n=(t+1)%u==0;return o.a.createElement(r.Fragment,{key:e},o.a.createElement("div",{key:e,className:"col-md-3 col-sm-6 col-12 card-item"},o.a.createElement(O,{dispatch:i,data:c[e],selectedId:t+1})),n&&o.a.createElement("div",{className:"col-md-12 video-space"},o.a.createElement(P,{rowIndex:t+1,modValue:u})))}),s&&o.a.createElement("div",{className:"col-md-12 video-space"},o.a.createElement(P,{lastRow:!0,rowIndex:s.length,modValue:u})))),!s&&o.a.createElement("div",{className:"loader text-center d-flex align-items-center justify-content-center"},o.a.createElement("img",{src:"https://media.giphy.com/media/uyCJt0OOhJBiE/giphy.gif",alt:"",width:"150",height:"150"})))}}]),t}();J.propTypes={eventData:f.a.object.isRequired,dispatch:f.a.func.isRequired};var B=Object(c.c)(function(e){return{eventData:e.bms}})(J),W=n(14),X=n(60),Y=n(61),K=n(62),Q=n.n(K),Z=n(49);function $(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach(function(t){te(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne={data:{}};function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SET_APP_DATA:return ee({},e,{data:t.payload.data,genre:t.payload.uniqueGenre});case b.SET_SELECTED_EVENT:return ee({},e,{selectedEvent:t.payload});case b.UPDATE_LIST:return ee({},e,{filteredList:t.payload});case b.CLOSE_VIDEO_SECTION:return ee({},e,{selectedEvent:{}});default:return ee({},e)}}function re(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie=Q()({}),le=Object(W.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach(function(t){oe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},a,{router:Object(u.b)(ie)})),ce=[X.a,Object(Z.a)(ie),Y.logger],se=Object(W.d)(le,{},W.a.apply(void 0,ce)),ue=o.a.createElement(u.a,{history:ie},o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:function(){return o.a.createElement("div",null,o.a.createElement(B,null))}})));t.default=ue;l.a.render(o.a.createElement(c.a,{store:se},ue),document.getElementById("root"))},91:function(e,t,n){var a=n(92);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(16)(a,r);a.locals&&(e.exports=a.locals)},92:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".card {\n  width: 234px;\n  height: 365px;\n  border-radius: 4px;\n  cursor: pointer; }\n  .card button {\n    border: 0;\n    padding: 0;\n    outline: none; }\n  .card .event-details {\n    padding: 5px;\n    font-family: 'Roboto Slab', serif;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .card .event-details .title {\n      font-size: 14px; }\n    .card .event-details .language {\n      font-size: 11px;\n      color: darkgray; }\n      .card .event-details .language span {\n        margin-right: 3px; }\n    .card .event-details .rating b {\n      font-size: 14px; }\n    .card .event-details .fav {\n      color: red;\n      margin-right: 3px;\n      font-size: 14px; }\n",""])}});
//# sourceMappingURL=main.js.map