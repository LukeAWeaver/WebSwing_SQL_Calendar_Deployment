(function(e){e(["text!shared/objectMapField.template.html"],function(t){function n(){return{restrict:"E",template:t,scope:{field:"=",value:"=",variables:"=",items:"=",readonly:"=",restricted:"@",desc:"@",label:"@"},controllerAs:"vm",bindToController:!0,controller:r}}function r(e,t,n){function i(e){r.model.splice(e+1,0,{key:"",value:{fields:[]}}),o()}function s(e){r.model.splice(e,1)}function o(){e.$emit("wsRequestFormUpdate",r)}var r=this;r.model=[],r.addPair=i,r.removePair=s,r.value==null&&(r.field.value={}),e.$watch("vm.value",function(e){r.model.splice(0,r.model.length),angular.forEach(e,function(e,t){r.model.push({key:t,value:e})})},!0),e.$watch("vm.model",function(e){var t={},n=!0;for(var i=0;i<e.length;i++)t.hasOwnProperty(e[i].key)?(n=!1,e[i].error="Duplicate keys are not allowed! This field is ignored in output json."):t[e[i].key]=e[i].value;n&&(r.value=t)},!0)}return r.$inject=["$scope","$element","$attrs"],n})})(adminConsole.define);