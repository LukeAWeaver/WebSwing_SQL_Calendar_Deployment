(function(e){e(["text!shared/objectField.template.html"],function(t){function n(){return{restrict:"E",template:t,scope:{field:"=",value:"=",variables:"=",readonly:"=",desc:"@",label:"@",restricted:"@"},controllerAs:"vm",bindToController:!0,controller:r}}function r(e,t,n){function i(e){var t={},n;if(e!=null&&e.fields!=null)for(var i=0;i<e.fields.length;i++){n=e.fields[i];if(e.hide==null||e.hide.indexOf(n.name)===-1)t[n.tab]==null&&(t[n.tab]={fields:[],objects:[],collapsed:r.restricted==="true"?!0:!1}),a(e.enable,n),n.type.indexOf("Object")===0?t[n.tab].objects.push(n):t[n.tab].fields.push(n)}return t}function s(e,t){for(var n in e){var r=e[n],i=t[n];i==null?delete e[n]:(o(r.fields,i.fields),o(r.objects,i.objects),r.collapsed=i.collapsed,delete t[n])}angular.extend(e,t)}function o(e,t){var n=e.length;while(n--){var r=e[n],i=u(r.name,t);i==-1&&e.splice(n,1)}for(var s=0;s<t.length;s++){var o=t[s];oldIndex=u(o.name,e),oldIndex==-1?e.splice(s,0,o):(oldIndex!==s&&e.splice(s,0,e.splice(oldIndex,1)[0]),o.type==="Object"?angular.extend(e[s],o):(o.enable,e[s]=o))}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(r.name===e)return n}return-1}function a(e,t){if(r.restricted==="true"||e!=null&&e.indexOf(t.name)===-1)t.restricted="true"}function f(){r.field.value={fields:[]},l()}function l(){e.$emit("wsRequestFormUpdate",r)}var r=this;r.tabs={},r.needTabs=!1,r.addObject=f,e.$watch("vm.value",function(e){s(r.tabs,i(e)),r.needTabs=Object.keys(r.tabs).length>1})}return r.$inject=["$scope","$element","$attrs"],n})})(adminConsole.define);