(function(e){e([],function(){function t(e,t,n,r,i,s,o){function a(){return f(102400,u.endOffset,!1).then(function(e){t.cancel(u.timer)}).then(function(){return u.timer=t(a,1e3),u.timer},function(){t.cancel(u.timer),u.timer=undefined})}function f(e,t,n){return s.getLog(u.type.url,{backwards:n,offset:t,max:e}).then(function(e){if(e.log.length>0){var t=e.log.split(u.type.lineDelimiter);n?(u.log=t.concat(u.log),u.startOffset=e.startOffset,u.endOffset=Math.max(u.endOffset,e.endOffset)):(u.log=u.log.concat(t),u.startOffset=Math.min(u.startOffset,e.startOffset),u.endOffset=e.endOffset)}u.lastUpdated=new Date})}function l(e){return u.type.delimiter!=null?e.split(u.type.delimiter):[e]}function c(){for(var e=0;e<u.types.length;e++){var t=u.types[e];if(t.url===u.path)return t}return h(u.types[0])}function h(e){n.path("/logs/"+e.url)}function p(e){return u.type.label===e.label}function d(e,t){window.open(o+"/rest/logs/"+e.url,"_blank"),t.stopPropagation()}var u=this;u.path=r.path,u.types=[{label:"Audit",url:"audit",delimiter:"|",lineDelimiter:"\n",headers:["Timestamp","Result","User","Detail","Secured path","Protocol","Source IP","Module"]},{label:"Server",url:"server",delimiter:null,lineDelimiter:/\n(?=\d{4})/g,headers:["Messges"]}],u.showLog=h,u.isActive=p,u.split=l,u.timer=undefined,u.filter="",u.endOffset=-1,u.log=[],u.download=d,u.type=c(),f(102400,-1,!0).then(function(){t(function(){n.hash("endOfPageAnchor"),i()},100)}).then(a),e.$on("$destroy",function(){t.cancel(u.timer)})}return t.$inject=["$scope","$timeout","$location","$routeParams","$anchorScroll","logRestService","baseUrl"],t})})(adminConsole.define);