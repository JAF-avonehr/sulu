define(["type/default"],function(a){"use strict";var b=function(a,b){App.emit("sulu.preview.update",b,a),App.emit("sulu.content.changed")};return function(c,d){var e={},f={initializeSub:function(){var a="sulu.media-selection."+d.instanceName+".data-changed";App.off(a,b),App.on(a,b)},setValue:function(a){if("array"===App.util.typeOf(a)&&"object"===App.util.typeOf(a[0])){var b=[];App.util.foreach(a,function(a){b.push(a.id)}.bind(this)),a.ids=b}App.dom.data(c,"media-selection",a)},getValue:function(){return App.dom.data(c,"media-selection")},needsValidation:function(){return!1},validate:function(){return!0}};return new a(c,e,d,"smartContent",f)}});