!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var n in a)("object"==typeof exports?exports:e)[n]=a[n]}}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{296:function(e,t){},324:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.newInstance=void 0,t.extend=s;var n=f(a(0)),r=f(a(199)),o=f(a(323));function f(e){return e&&e.__esModule?e:{default:e}}var i=r.default.convertItkToVtkImage;var u={fileName:"",arrayName:null};function s(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object.assign(t,u,a),n.default.obj(e,t),n.default.algo(e,t,0,1),n.default.setGet(e,t,["fileName","arrayName"]),function(e,t){t.classHierarchy.push("vtkITKDicomImageReader"),e.parseAsArrayBuffer=function(a){return a&&a!==t.rawDataBuffer?(t.rawDataBuffer=a,(0,o.default)(null,[new File([a],t.fileName)]).then(function(e){var t=e.webWorker,a=e.image;return t.terminate(),a}).then(function(a){var n=i(a,{scalarArrayName:t.arrayName||function(e){var t=e.lastIndexOf(".");return"Scalars "+(t>-1?e.substring(0,t):e)}(t.fileName)});t.output[0]=n,e.modified()})):Promise.resolve()},e.requestData=function(){e.parseAsArrayBuffer(t.rawDataBuffer,t.fileName)}}(e,t)}var d=t.newInstance=n.default.newInstance(s,"vtkITKDicomImageReader");t.default={newInstance:d,extend:s}},346:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extensions=void 0,t.registerToGlance=s;var n=i(a(345)),r=i(a(344)),o=i(a(343)),f=i(a(324));function i(e){return e&&e.__esModule?e:{default:e}}n.default.setReadImageArrayBufferFromITK(o.default);var u=t.extensions=Array.from(new Set(Object.keys(r.default).map(function(e){return e.toLowerCase()})));function s(e){e&&(u.filter(function(e){return"dcm"!==e}).forEach(function(t){return e.registerReader({extension:t,name:t.toUpperCase()+" Reader",vtkReader:n.default,binary:!0,fileNameMethod:"setFileName"})}),e.registerReader({extension:"dcm",name:"DICOM File Series Reader",vtkReader:f.default,binary:!0,fileNameMethod:"setFileName"}))}t.default={extensions:u,registerToGlance:s},s(("undefined"==typeof window?{}:window).Glance)}},[[346,0,1]]])});