(function(e){e(["text!shared/helper/statLineGraph.template.html"],function(t){function n(){return{restrict:"E",template:t,scope:{value:"="},controllerAs:"vm",bindToController:!0,controller:r}}function r(e,t){function i(e){n.series.splice(0,n.series.length);if(e!=null){for(var t=0;t<e.names.length;t++){var i=e.names[t],s=e.keys[t];n.series.push({dataset:"dataset",key:s,label:i,type:["line","area"],defined:function(e){return e!=null},color:r[t]})}e.tickFormat!=null&&(n.options.axes.y.tickFormat=e.tickFormat)}return e}var n=this,r=["#5cb85c","#337ab7","#f0ad4e","#d9534f"];n.data=n.series=[],n.options={series:n.series,axes:{x:{key:"x",type:"date",ticks:2},y:{min:0,ticks:2}}},e.$watch("vm.value",function(e){n.data=i(e)})}return r.$inject=["$scope","$attrs"],n})})(adminConsole.define);