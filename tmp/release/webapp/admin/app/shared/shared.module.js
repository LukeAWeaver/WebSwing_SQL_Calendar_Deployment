(function(e){e(["shared/appView.directive","shared/statusBar.directive","shared/configView.directive","shared/field.directive","shared/objectField.directive","shared/objectListField.directive","shared/objectListAsTableField.directive","shared/objectMapField.directive","shared/basic/jsonField.directive","shared/basic/stringField.directive","shared/basic/stringListField.directive","shared/basic/booleanField.directive","shared/basic/stringMapField.directive","shared/helper/substitutorHelper.directive","shared/helper/statLineGraph.directive","shared/helper/substitutor.filter"],function(t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m){var g=angular.module("wsShared",[]);g.directive("wsAppView",t),g.directive("wsStatusBar",n),g.directive("wsConfigView",r),g.directive("wsField",i),g.directive("wsObjectField",s),g.directive("wsObjectListField",o),g.directive("wsObjectListAsTableField",u),g.directive("wsObjectMapField",a),g.directive("wsJsonField",f),g.directive("wsStringField",l),g.directive("wsStringListField",c),g.directive("wsBooleanField",h),g.directive("wsStringMapField",p),g.directive("wsSubstitutorHelper",d),g.directive("wsLineGraph",v),g.filter("substitutor",m)})})(adminConsole.define);