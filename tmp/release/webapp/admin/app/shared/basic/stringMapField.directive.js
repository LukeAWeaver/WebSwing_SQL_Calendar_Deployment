(function(e){e(["text!shared/basic/stringMapField.template.html"],function(t){function n(){return{restrict:"E",template:t,scope:{field:"=",value:"=",items:"=",variables:"=",readonly:"=",restricted:"@",label:"@",desc:"@"},controllerAs:"vm",bindToController:!0,controller:r}}function r(e,t){function r(t){n.variables!=null&&(n.helpVisible[t]=n.helpVisible==null?!0:!n.helpVisible[t],n.helpVisible[t]&&e.$emit("wsHelperOpened",n,t))}function i(t){n.variables!=null&&(n.helpVisible[t]=!0,e.$emit("wsHelperOpened",n,t))}function s(){n.model.push({key:"",value:""})}function o(e){n.model.splice(e,1)}function u(e,t){n.model[e].key=t}var n=this;n.model=[],n.addPair=s,n.deletePair=o,n.helpVisible=[],n.openHelper=i,n.toggleHelper=r,n.setChoice=u,n.value==null&&(n.field.value={}),e.$watch("vm.value",function(e){n.model.splice(0,n.model.length),angular.forEach(e,function(e,t){n.model.push({key:t,value:e})})},!0),e.$watch("vm.model",function(e){var t={},r=!0;for(var i=0;i<e.length;i++)t.hasOwnProperty(e[i].key)?(r=!1,e[i].error="Duplicate keys are not allowed! This field is ignored in output json."):t[e[i].key]=e[i].value;r&&(n.value=t)},!0),e.$on("wsHelperClose",function(e,t,r){for(var i=0;i<n.helpVisible.length;i++)if(n!==t||r!==i)n.helpVisible[i]=!1})}return r.$inject=["$scope","$attrs"],n})})(adminConsole.define);