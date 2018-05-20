var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.app;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '995EF99B9D4D38108CA18C4F03BB4A6B';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {4:1, 5:1, 200:1}, $intern_2 = {4:1, 5:1}, $intern_3 = {4:1, 24:1, 19:1, 18:1}, $intern_4 = {4:1}, $intern_5 = {137:1, 165:1}, $intern_6 = {97:1}, $intern_7 = {92:1, 4:1, 24:1, 18:1}, $intern_8 = {4:1, 5:1, 6:1}, $intern_9 = 4194303, $intern_10 = 1048575, $intern_11 = 524288, $intern_12 = 4194304, $intern_13 = 17592186044416, $intern_14 = -17592186044416, $intern_15 = {111:1}, $intern_16 = 1000, $intern_17 = {98:1}, $intern_18 = {4:1, 101:1, 18:1}, $intern_19 = {161:1}, $intern_20 = 65535, $intern_21 = {109:1}, $intern_22 = {60:1, 89:1}, $intern_23 = {60:1, 63:1}, $intern_24 = {43:1}, $intern_25 = {4:1, 60:1, 63:1, 226:1}, $intern_26 = {4:1, 39:1, 40:1}, $intern_27 = {4:1, 109:1}, $intern_28 = {4:1, 60:1, 85:1, 89:1}, $intern_29 = 1398, $intern_30 = {4:1, 5:1, 1368:1}, $intern_31 = {15:1}, $intern_32 = {16:1}, $intern_33 = {1372:1}, $intern_34 = {162:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function create_com_google_gwt_useragent_client_UserAgent(){
  switch (permutationId) {
    case 1:
      return new UserAgentImplIe10;
    case 4:
      return new UserAgentImplSafari;
    case 0:
      return new UserAgentImplGecko1_8;
    case 2:
      return new UserAgentImplIe8;
  }
  return new UserAgentImplIe9;
}

function create_com_google_gwt_user_client_impl_WindowImpl(){
  switch (permutationId) {
    case 4:
      return new WindowImpl;
    case 0:
      return new WindowImplMozilla;
  }
  return new WindowImplIE;
}

function create_com_google_gwt_user_client_impl_DOMImpl(){
  switch (permutationId) {
    case 2:
      return new DOMImplIE8_0;
    case 0:
      return new DOMImplMozilla_0;
    case 4:
      return new DOMImplWebkit_0;
  }
  return new DOMImplIE9_0;
}

function create_com_google_gwt_http_client_Request_RequestImpl(){
  switch (permutationId) {
    case 2:
    case 3:
      return new Request$RequestImplIE8And9;
  }
  return new Request$RequestImpl;
}

function create_com_google_gwt_dom_client_DOMImpl(){
  switch (permutationId) {
    case 2:
      return new DOMImplIE8;
    case 4:
      return new DOMImplWebkit;
    case 0:
      return new DOMImplMozilla;
  }
  return new DOMImplIE9;
}

function create_com_google_gwt_core_client_impl_StackTraceCreator_Collector(){
  if (permutationId == 4) {
    return new StackTraceCreator$CollectorModern;
  }
  return new StackTraceCreator$CollectorModernNoSourceMap;
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_12(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:$equals(this$static, other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_1(this$static):instanceOfDouble(this$static)?$hashCode_0(this$static):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode_0(this$static):$hashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJsObject(src_0){
  checkCriticalType(src_0 == null || isJsObject(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getCanonicalName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.canonicalName;
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(234, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  return $getCanonicalName(this);
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_17(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 234);
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 84, 0, 0, 1);
}

function $constructJavaStackTrace(this$static){
  var stackTrace;
  return $clinit_StackTraceCreator() , stackTrace = collector_1.getStackTrace(this$static) , dropInternalFrames(stackTrace);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + prefix + this$static);
  $printStackTraceItems(this$static, out, ident);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_2, 18, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, 'Caused by: ', ident);
}

function $printStackTraceItems(this$static, out, ident){
  var element, element$array, element$index, element$max;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = $constructJavaStackTrace(this$static)) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

function of(e){
  var throwable;
  if (e != null) {
    throwable = e['__java$exception'];
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException(e);
}

defineClass(18, 1, {4:1, 18:1});
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 18);
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function Exception_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(24, 18, {4:1, 24:1, 18:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 24);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Exception_0.call(this, message, cause);
}

defineClass(19, 24, $intern_3);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 19);
function CodeDownloadException(message){
  RuntimeException_0.call(this, message);
}

defineClass(1412, 19, $intern_3, CodeDownloadException);
var Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 1412);
function Duration(){
  this.start_0 = now_1();
}

defineClass(559, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 559);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

var uncaughtExceptionHandler = null;
function JsException(backingJsObject){
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this);
  this.detailMessage = backingJsObject == null?'null':toString_12(backingJsObject);
}

defineClass(136, 19, $intern_3, JsException);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 136);
defineClass(345, 136, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 345);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  JsException.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(94, 345, {94:1, 4:1, 24:1, 19:1, 18:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 94);
function $equals(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function $hashCode(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode_0(this$static);
}

var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeValue(toEscape){
  var escapeTable = (!escapeTable_0 && (escapeTable_0 = initEscapeTable()) , escapeTable_0);
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
var Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback');
defineClass(1382, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 1382);
function $clinit_ScriptInjector(){
  $clinit_ScriptInjector = emptyMethod;
}

function attachListeners(scriptElement, callback, removeTag){
  $clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    removeTag && nativeRemove(scriptElement);
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    callback && callback.onSuccess(null);
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    /loaded|complete/.test(scriptElement.readyState) && scriptElement.onload();
  }
  );
}

function nativeRemove(scriptElement){
  scriptElement.parentNode.removeChild(scriptElement);
}

function nativeSetSrc(element, url_0){
  $clinit_ScriptInjector();
  element.src = url_0;
}

function $inject(this$static){
  var doc, scriptElement, wnd;
  wnd = ($clinit_ScriptInjector() , window);
  doc = wnd.document;
  scriptElement = doc.createElement('script');
  (!!this$static.callback || this$static.removeTag) && attachListeners(scriptElement, this$static.callback, this$static.removeTag);
  nativeSetSrc(scriptElement, this$static.scriptUrl);
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
  return scriptElement;
}

function $setCallback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $setRemoveTag(this$static){
  this$static.removeTag = true;
  return this$static;
}

function ScriptInjector$FromUrl(scriptUrl){
  this.scriptUrl = scriptUrl;
}

defineClass(257, 1, {}, ScriptInjector$FromUrl);
_.removeTag = false;
var Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 257);
function $clinit_AsyncFragmentLoader(){
  $clinit_AsyncFragmentLoader = emptyMethod;
  BROWSER_LOADER = new AsyncFragmentLoader(4, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_4, 119, 15, []), new ScriptTagLoadingStrategy);
}

function $clearRequestsAlreadyLoaded(this$static){
  var offset;
  while ($size(this$static.requestedExclusives) > 0 && this$static.isLoaded[$peek(this$static.requestedExclusives)]) {
    offset = $remove(this$static.requestedExclusives);
    offset < this$static.pendingDownloadErrorHandlers.length && (this$static.pendingDownloadErrorHandlers[offset] = null);
  }
}

function $initializeRemainingInitialFragments(this$static){
  var sp, sp$array, sp$index, sp$max;
  if (!this$static.remainingInitialFragments) {
    this$static.remainingInitialFragments = new AsyncFragmentLoader$BoundedIntQueue(this$static.initialLoadSequence.length + 1);
    for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      $add(this$static.remainingInitialFragments, sp);
    }
    $add(this$static.remainingInitialFragments, this$static.numEntries);
  }
}

function $inject_0(this$static, splitPoint, loadErrorHandler){
  this$static.pendingDownloadErrorHandlers[splitPoint] = loadErrorHandler;
  $isInitial(this$static, splitPoint) || $add(this$static.requestedExclusives, splitPoint);
  $startLoadingNextFragment(this$static);
}

function $isEmpty(array){
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      return false;
    }
  }
  return true;
}

function $isInitial(this$static, splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this$static.numEntries) {
    return true;
  }
  for (sp$array = this$static.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}

function $logEventProgress(eventGroup, fragment){
  !!$stats && stats($createStatsEvent(eventGroup, 'begin', fragment, -1));
}

function $onLoadImpl(this$static, fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t, logGroup;
  logGroup = fragment == this$static.numEntries?'leftoversDownload':'download' + fragment;
  !!$stats && stats($createStatsEvent(logGroup, 'end', fragment, -1));
  fragment < this$static.pendingDownloadErrorHandlers.length && (this$static.pendingDownloadErrorHandlers[fragment] = null);
  $isInitial(this$static, fragment) && !!this$static.remainingInitialFragments && $remove(this$static.remainingInitialFragments);
  this$static.fragmentLoading = -1;
  this$static.isLoaded[fragment] = true;
  $startLoadingNextFragment(this$static);
  callbacks = this$static.allCallbacks[fragment];
  if (callbacks != null) {
    !!$stats && stats($createStatsEvent('runCallbacks' + fragment, 'begin', -1, -1));
    this$static.allCallbacks[fragment] = null;
    for (callback$array = callbacks , callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        castTo(callback, 162).onSuccess_0();
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 18)) {
          t = $e0;
          $clinit_Impl();
          reportUncaughtException(t, true);
        }
         else 
          throw toJs($e0);
      }
    }
    !!$stats && stats($createStatsEvent('runCallbacks' + fragment, 'end', -1, -1));
  }
}

function $runAsyncImpl(this$static, fragment, callback){
  var callbacks;
  if (this$static.isLoaded[fragment]) {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new OnSuccessExecutor$1(callback));
    return;
  }
  callbacks = this$static.allCallbacks[fragment];
  callbacks == null && (callbacks = this$static.allCallbacks[fragment] = initUnidimensionalArray(Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, $intern_2, 162, 0, 0, 1));
  setCheck(callbacks, callbacks.length, callback);
  !!this$static.pendingDownloadErrorHandlers[fragment] || $inject_0(this$static, fragment, new AsyncFragmentLoader$1(this$static, fragment));
}

function $startLoadingFragment(this$static, fragment){
  this$static.fragmentLoading = fragment;
  $logEventProgress(fragment == this$static.numEntries?'leftoversDownload':'download' + fragment, fragment);
  $startLoadingFragment_0(this$static.loadingStrategy, fragment, new AsyncFragmentLoader$ResetAfterDownloadFailure(this$static, fragment));
}

function $startLoadingNextFragment(this$static){
  if (this$static.fragmentLoading >= 0) {
    return;
  }
  $initializeRemainingInitialFragments(this$static);
  $clearRequestsAlreadyLoaded(this$static);
  if ($isEmpty(this$static.pendingDownloadErrorHandlers)) {
    return;
  }
  if ($size(this$static.remainingInitialFragments) > 0) {
    $startLoadingFragment(this$static, $peek(this$static.remainingInitialFragments));
    return;
  }
  if ($size(this$static.requestedExclusives) > 0) {
    $startLoadingFragment(this$static, $remove(this$static.requestedExclusives));
    return;
  }
}

function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy){
  var numEntriesPlusOne;
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 5, numEntriesPlusOne, 3, 2);
  this.requestedExclusives = new AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initUnidimensionalArray(Z_classLit, $intern_4, 119, numEntriesPlusOne, 16, 1);
  this.pendingDownloadErrorHandlers = initUnidimensionalArray(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_2, 233, numEntriesPlusOne, 0, 1);
}

function onLoad(fragment){
  $clinit_AsyncFragmentLoader();
  $onLoadImpl(BROWSER_LOADER, fragment);
}

function runAsync(fragment, callback){
  $clinit_AsyncFragmentLoader();
  $runAsyncImpl(BROWSER_LOADER, fragment, callback);
}

defineClass(335, 1, {}, AsyncFragmentLoader);
_.fragmentLoading = -1;
_.numEntries = 0;
_.remainingInitialFragments = null;
var BROWSER_LOADER;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 335);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler');
function AsyncFragmentLoader$1(this$0, val$fragment){
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
}

defineClass(337, 1, {233:1}, AsyncFragmentLoader$1);
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (callbacks != null) {
    this.this$01.allCallbacks[this.val$fragment2] = null;
    for (callback$index = 0 , callback$max = callbacks.length; callback$index < callback$max; ++callback$index) {
      callback = callbacks[callback$index];
      castTo(callback, 162).onFailure_0(reason);
    }
  }
}
;
_.val$fragment2 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 337);
function $add(this$static, x_0){
  this$static.array[this$static.write_0++] = x_0;
}

function $clear(this$static){
  this$static.read = 0;
  this$static.write_0 = 0;
}

function $peek(this$static){
  return this$static.array[this$static.read];
}

function $remove(this$static){
  return this$static.array[this$static.read++];
}

function $size(this$static){
  return this$static.write_0 - this$static.read;
}

function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  this.array = initUnidimensionalArray(I_classLit, $intern_4, 119, maxPuts, 15, 1);
}

defineClass(232, 1, {}, AsyncFragmentLoader$BoundedIntQueue);
_.read = 0;
_.write_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 232);
function AsyncFragmentLoader$HttpDownloadFailure(url_0){
  RuntimeException_0.call(this, 'Download of ' + url_0 + ' failed with status ' + 404 + '(' + 'Script Tag Failure - no status available' + ')');
}

defineClass(339, 19, $intern_3, AsyncFragmentLoader$HttpDownloadFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 339);
function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  RuntimeException_1.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
}

defineClass(340, 19, $intern_3, AsyncFragmentLoader$HttpInstallFailure);
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 340);
function $loadTerminated(this$static, reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this$static.this$01.fragmentLoading != this$static.fragment_0) {
    return;
  }
  handlersToRun = this$static.this$01.pendingDownloadErrorHandlers;
  this$static.this$01.pendingDownloadErrorHandlers = initUnidimensionalArray(Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_2, 233, this$static.this$01.numEntries + 1, 0, 1);
  $clear(this$static.this$01.requestedExclusives);
  this$static.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handlersToRun.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (handler) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 19)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw toJs($e0);
      }
    }
  }
  if (lastException) {
    throw toJs(lastException);
  }
}

function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  this.this$01 = this$0;
  this.fragment_0 = myFragment;
}

defineClass(338, 1, {233:1}, AsyncFragmentLoader$ResetAfterDownloadFailure);
_.loadTerminated = function loadTerminated_0(reason){
  $loadTerminated(this, reason);
}
;
_.fragment_0 = 0;
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 338);
function $createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:($clinit_Impl() , $moduleName), sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  fragment >= 0 && (evt.fragment = fragment);
  size_0 >= 0 && (evt.size = size_0);
  return evt;
}

function stats(data_0){
  return $stats(data_0);
}

function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector_1);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0_0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 18)) {
          t = $e0;
          reportUncaughtException(t, true);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHostPageBaseURL(){
  $clinit_Impl();
  var s = $doc.location.href;
  var i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  return s.length > 0?s + '/':'';
}

function getModuleBaseURL(){
  $clinit_Impl();
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function maybeInitializeWindowOnError(){
  $clinit_Impl();
  if (onErrorInitialized) {
    return;
  }
  onErrorInitialized = true;
  registerWindowOnError(false);
}

function registerWindowOnError(reportAlways){
  $clinit_Impl();
  function errorHandler(msg, url_0, line, column, error){
    if (!error) {
      error = msg + ' (' + url_0 + ':' + line;
      column && (error += ':' + column);
      error += ')';
    }
    var throwable = of(error);
    reportUncaughtException(throwable, false);
  }

  ;
  function addOnErrorHandler(windowRef){
    var origHandler = windowRef.onerror;
    if (origHandler && !reportAlways) {
      return;
    }
    windowRef.onerror = function(){
      errorHandler.apply(this, arguments);
      origHandler && origHandler.apply(this, arguments);
      return false;
    }
    ;
  }

  addOnErrorHandler($wnd);
  addOnErrorHandler(window);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e, reportSwallowedExceptionToBrowser){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    handler.onUncaughtException(e);
    return;
  }
  if (reportSwallowedExceptionToBrowser) {
    reportToBrowser(instanceOf(e, 94)?castTo(e, 94).getThrown():e);
  }
   else {
    $clinit_System();
    $printStackTraceImpl(e, err, '', '');
  }
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, onErrorInitialized = false, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $startLoadingFragment_0(this$static, fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0, ser;
  url_0 = gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (url_0 == null) {
    return;
  }
  manualRetry = (ser = $get(this$static.manualRetryNumbers, fragment) , this$static.manualRetryNumbers[fragment] = ser + 1 , ser);
  if (manualRetry > 0) {
    connector = url_0.indexOf('?') != -1?38:63;
    url_0 += String.fromCharCode(connector) + 'manualRetry=' + manualRetry;
  }
  request = new LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, MAX_AUTO_RETRY_COUNT);
  setAsyncCallback(request.fragment_0, request);
  $inject($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(request.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(request)));
}

function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}

defineClass(348, 1, {});
var MAX_AUTO_RETRY_COUNT = 3;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 348);
function $get(this$static, x_0){
  return this$static[x_0]?this$static[x_0]:0;
}

function $onLoadError(this$static, e, mayRetry){
  var connector;
  if (mayRetry) {
    ++this$static.retryCount;
    if (this$static.retryCount <= this$static.maxRetryCount) {
      connector = this$static.originalUrl.indexOf('?') != -1?38:63;
      this$static.url_0 = this$static.originalUrl + String.fromCharCode(connector) + 'autoRetry=' + this$static.retryCount;
      setAsyncCallback(this$static.fragment_0, this$static);
      $inject($setCallback($setRemoveTag(($clinit_ScriptInjector() , new ScriptInjector$FromUrl(this$static.url_0))), new ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this$static)));
      return;
    }
  }
  $loadTerminated(this$static.errorHandler, e);
}

function $tryInstall(this$static, code_0){
  var e, textIntro;
  try {
    __gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 19)) {
      e = $e0;
      textIntro = code_0;
      code_0 != null && code_0.length > 200 && (textIntro = code_0.substr(0, 200) + '...');
      $onLoadError(this$static, new AsyncFragmentLoader$HttpInstallFailure(this$static.url_0, textIntro, e), false);
    }
     else 
      throw toJs($e0);
  }
}

function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, maxRetryCount){
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
}

defineClass(349, 1, {}, LoadingStrategyBase$RequestData);
_.errorHandler = null;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
var Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 349);
function OnSuccessExecutor$1(val$callback){
  this.val$callback3 = val$callback;
}

defineClass(336, 1, {}, OnSuccessExecutor$1);
var Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 336);
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute(cmd){
  return cmd.execute();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute() && (rescheduled = push_0(rescheduled, t)):t[0].val$callback3.onSuccess_0();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 18)) {
        e = $e0;
        $clinit_Impl();
        reportUncaughtException(e, true);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(547, 1382, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 547);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(548, 1, {}, SchedulerImpl$Flusher);
_.execute = function execute_0(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 548);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(549, 1, {}, SchedulerImpl$Rescuer);
_.execute = function execute_1(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 549);
function ScriptTagLoadingStrategy(){
  this.manualRetryNumbers = [];
}

function asyncCallback(request, code_0){
  var firstTimeCalled;
  firstTimeCalled = clearAsyncCallback(request.fragment_0);
  firstTimeCalled && $tryInstall(request, code_0);
}

function cleanup(request){
  var neverCalled;
  neverCalled = clearAsyncCallback(request.fragment_0);
  neverCalled && $onLoadError(request, new AsyncFragmentLoader$HttpDownloadFailure(request.url_0), true);
}

function clearAsyncCallback(fragment){
  if (!__gwtModuleFunction['runAsyncCallback' + fragment]) {
    return false;
  }
  delete __gwtModuleFunction['runAsyncCallback' + fragment];
  return true;
}

function setAsyncCallback(fragment, request){
  __gwtModuleFunction['runAsyncCallback' + fragment] = $entry(function(code_0, instance){
    asyncCallback(request, code_0);
  }
  );
}

defineClass(334, 348, {}, ScriptTagLoadingStrategy);
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy', 334);
function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(val$request){
  this.val$request2 = val$request;
}

defineClass(236, 1, {}, ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1);
_.onFailure = function onFailure(reason){
  var lastArg;
  cleanup((lastArg = this , castTo(reason, 24) , lastArg).val$request2);
}
;
_.onSuccess = function onSuccess(result){
  var lastArg;
  cleanup((lastArg = this , throwClassCastExceptionUnlessNull(result) , lastArg).val$request2);
}
;
var Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy/1', 236);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = castTo(create_com_google_gwt_core_client_impl_StackTraceCreator_Collector(), 137);
  collector_1 = instanceOf(c, 165) && enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector_1.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_0(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector_1;
defineClass(137, 1, {137:1});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 137);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(346, 137, {137:1}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 84, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 346);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

function StackTraceCreator$CollectorModern(){
}

defineClass(165, 137, $intern_5, StackTraceCreator$CollectorModern);
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 84, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 165);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(347, 165, $intern_5, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 347);
function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  impl_0 = castTo(create_com_google_gwt_dom_client_DOMImpl(), 97);
}

defineClass(97, 1, $intern_6);
_.eventGetCurrentTarget = function eventGetCurrentTarget(event_0){
  return event_0.currentTarget;
}
;
var impl_0;
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 97);
defineClass(1423, 97, $intern_6);
_.eventGetCurrentTarget = function eventGetCurrentTarget_0(event_0){
  return currentEventTarget;
}
;
_.eventPreventDefault = function eventPreventDefault(evt){
  evt.returnValue = false;
}
;
var currentEventTarget;
var Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplTrident', 1423);
function DOMImplIE8(){
  $clinit_DOMImpl();
}

defineClass(1262, 1423, $intern_6, DOMImplIE8);
var Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE8', 1262);
defineClass(1424, 97, $intern_6);
_.eventPreventDefault = function eventPreventDefault_0(evt){
  evt.preventDefault();
}
;
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 1424);
defineClass(1425, 1424, $intern_6);
_.eventGetCurrentTarget = function eventGetCurrentTarget_1(event_0){
  return event_0.currentTarget || $wnd;
}
;
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 1425);
function DOMImplIE9(){
  $clinit_DOMImpl();
}

defineClass(1265, 1425, $intern_6, DOMImplIE9);
var Lcom_google_gwt_dom_client_DOMImplIE9_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE9', 1265);
function DOMImplMozilla(){
  $clinit_DOMImpl();
}

defineClass(1264, 1424, $intern_6, DOMImplMozilla);
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 1264);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

defineClass(1263, 1425, $intern_6, DOMImplWebkit);
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 1263);
defineClass(1403, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 1403);
defineClass(1406, 1403, {});
var Lcom_google_gwt_event_shared_EventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'EventBus', 1406);
defineClass(558, 1, {});
_.hashCode_0 = function hashCode_1(){
  return this.index_0;
}
;
_.toString_0 = function toString_2(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 558);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(206, 558, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 206);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.real, type_0, handler);
}

function SimpleEventBus(){
  this.real = new SimpleEventBus_0;
}

defineClass(567, 1406, {}, SimpleEventBus);
var Lcom_google_gwt_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'SimpleEventBus', 567);
function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = ($clinit_Request$ImplHolder() , $clinit_Request$ImplHolder() , impl_1).createResponse(xhr);
  callback.onResponseReceived(this$static, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  this$static.callback.onError(this$static, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (!callback) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(747, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 747);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(212, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 212);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(750, 212, {}, Request$1);
_.run = function run(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 750);
function $clinit_Request$ImplHolder(){
  $clinit_Request$ImplHolder = emptyMethod;
  impl_1 = castTo(create_com_google_gwt_http_client_Request_RequestImpl(), 176);
}

var impl_1;
function Request$RequestImpl(){
}

defineClass(176, 1, {176:1}, Request$RequestImpl);
_.createResponse = function createResponse(xmlHttpRequest){
  return new ResponseImpl(xmlHttpRequest);
}
;
var Lcom_google_gwt_http_client_Request$RequestImpl_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImpl', 176);
function Request$RequestImplIE8And9(){
}

defineClass(748, 176, {176:1}, Request$RequestImplIE8And9);
_.createResponse = function createResponse_0(xmlHttpRequest){
  return new Request$RequestImplIE8And9$1(xmlHttpRequest);
}
;
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9', 748);
defineClass(1414, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 1414);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(264, 1414, {}, ResponseImpl);
_.getStatusCode = function getStatusCode(){
  return this.xmlHttpRequest.status;
}
;
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 264);
function Request$RequestImplIE8And9$1($anonymous0){
  ResponseImpl.call(this, $anonymous0);
}

defineClass(749, 264, {}, Request$RequestImplIE8And9$1);
_.getStatusCode = function getStatusCode_0(){
  var statusCode;
  statusCode = this.xmlHttpRequest.status;
  return statusCode == 1223?204:statusCode;
}
;
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 749);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 94)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 94)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $getHeader(this$static){
  if (!this$static.headers_0) {
    return null;
  }
  return castToString($getStringValue(this$static.headers_0, 'Content-Type'));
}

function $setCallback_0(this$static, callback){
  throwIfNull('callback', callback);
  this$static.callback = callback;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers_0 && (this$static.headers_0 = new HashMap);
  $putStringValue(this$static.headers_0, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers_0 && $size_0(this$static.headers_0) > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers_0)).this$01); header$iterator.hasNext;) {
      header = $next(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 94)) {
          e = $e0;
          throw toJs(new RequestException(e.getMessage()));
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function $setRequestData(this$static, requestData){
  this$static.requestData = requestData;
}

function $setTimeoutMillis(this$static, timeoutMillis){
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException_0('Timeouts cannot be negative'));
  }
  this$static.timeoutMillis = timeoutMillis;
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(211, 1, {});
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 211);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(745, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 745);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(145, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_3(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 145);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(92, 24, $intern_7, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 92);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(752, 92, $intern_7, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 752);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(761, 92, $intern_7, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 761);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_1(name_0 + ' cannot be null'));
  }
}

defineClass(1413, 1, {});
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 1413);
function $get_0(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function $set(this$static, index_0, value_0){
  var previous;
  previous = $get_0(this$static, index_0);
  $set0(this$static, index_0, value_0);
  return previous;
}

function $set0(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.jsArray[index_0] = value_0;
}

function JSONArray(){
  this.jsArray = [];
}

function JSONArray_0(arr){
  this.jsArray = arr;
}

function unwrap(value_0){
  return value_0.jsArray;
}

defineClass(177, 1413, {177:1}, JSONArray, JSONArray_0);
_.equals_0 = function equals_0(other){
  if (!instanceOf(other, 177)) {
    return false;
  }
  return $equals(this.jsArray, castTo(other, 177).jsArray);
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode_0 = function hashCode_2(){
  return $hashCode(this.jsArray);
}
;
_.toString_0 = function toString_4(){
  var c, i, sb;
  sb = new StringBuilder_1('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append_0(sb, $get_0(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 177);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

function unwrap_0(value_0){
  return value_0.value_0;
}

defineClass(265, 1413, {}, JSONBoolean);
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.toString_0 = function toString_5(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 265);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

defineClass(757, 19, $intern_3, JSONException);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 757);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_0 = new JSONNull;
}

function JSONNull(){
}

function unwrap_1(){
  return null;
}

defineClass(746, 1413, {}, JSONNull);
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.toString_0 = function toString_6(){
  return 'null';
}
;
var instance_0;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 746);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

function unwrap_2(value_0){
  return value_0.value_0;
}

defineClass(127, 1413, {127:1}, JSONNumber);
_.equals_0 = function equals_1(other){
  if (!instanceOf(other, 127)) {
    return false;
  }
  return this.value_0 == castTo(other, 127).value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode_0 = function hashCode_3(){
  return $hashCode_0(this.value_0);
}
;
_.toString_0 = function toString_7(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 127);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_1(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put0(this$static, key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this$static.jsObject[key] = func(value_0);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_0(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_1('{');
  first = true;
  keys_0 = $computeKeys0(this$static, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_8, 2, 0, 6, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_1(sb, escapeValue(key));
    sb.string += ':';
    $append_0(sb, $get_1(this$static, key));
  }
  sb.string += '}';
  return sb.string;
}

function JSONObject(){
  JSONObject_0.call(this, {});
}

function JSONObject_0(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value_0){
  return value_0.jsObject;
}

defineClass(113, 1413, {113:1}, JSONObject, JSONObject_0);
_.equals_0 = function equals_2(other){
  if (!instanceOf(other, 113)) {
    return false;
  }
  return $equals(this.jsObject, castTo(other, 113).jsObject);
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode_0 = function hashCode_4(){
  return $hashCode(this.jsObject);
}
;
_.toString_0 = function toString_8(){
  return $toString_0(this);
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 113);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, 'number':createNumber, 'string':createString, 'object':createObject, 'function':createObject, 'undefined':createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_0;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray_0(o);
  }
   else {
    return new JSONObject_0(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw toJs(new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team"));
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw toJs(new NullPointerException);
  }
  this.value_0 = value_0;
}

function unwrap_4(value_0){
  return value_0.value_0;
}

defineClass(146, 1413, {146:1}, JSONString);
_.equals_0 = function equals_3(other){
  if (!instanceOf(other, 146)) {
    return false;
  }
  return $equals_0(this.value_0, castTo(other, 146).value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode_0 = function hashCode_5(){
  return getHashCode_1(this.value_0);
}
;
_.toString_0 = function toString_9(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 146);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && isJsObject(value_0);
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_9;
  a1 = value_0 >> 22 & $intern_9;
  a2 = value_0 < 0?$intern_10:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_11 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_9;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_9;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_10;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_12 + a.h * $intern_13;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_9;
  a.m = sum1 & $intern_9;
  a.h = sum2 & $intern_10;
  return true;
}

var remainder;
function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_13) {
    a2 = round_int(value_0 / $intern_13);
    value_0 -= a2 * $intern_13;
  }
  a1 = 0;
  if (value_0 >= $intern_12) {
    a1 = round_int(value_0 / $intern_12);
    value_0 -= a1 * $intern_12;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_9;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_9;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_10;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_11) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_10:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_10:0;
    res1 = negative?$intern_9:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_10;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_9, sum1 & $intern_9, sum2 & $intern_10);
}

function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_12 + a.h * $intern_13;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_10(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_10(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_9, $intern_9, 524287);
  MIN_VALUE = create0(0, 0, $intern_11);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 18)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_12;
  }
  if (a2 == $intern_10) {
    return big_0.l + big_0.m * $intern_12 - $intern_13;
  }
  return big_0;
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_14 < value_0 && value_0 < $intern_13) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_13;
    a3 = $intern_10;
  }
  a1 = round_int(value_0 / $intern_12);
  a0 = round_int(value_0 - a1 * $intern_12);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_11(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_10(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  var clientRouter, serverRouter, requestEventProcessor, eventBus;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $clinit_LogConfiguration();
  $onModuleLoad();
  $clinit_Core();
  $clinit_CoreModule();
  setUncaughtExceptionHandler(new CoreModule$lambda$0$Type);
  clientRouter = new ClientRouter;
  serverRouter = (new GwtRequestAsyncSender , new ServerRouter);
  requestEventProcessor = new RequestEventProcessor;
  eventBus = new SimpleEventsBus(requestEventProcessor);
  $initClientApp($dominoOptions($mainExtensionPoint($asyncRunner($history($requestSendersRepository($contributionsRepository($viewsRepository($presentersRepository($requestRepository($eventsBus($serverRouter(new ClientApp$ClientAppBuilder(clientRouter), serverRouter), eventBus), new InMemoryCommandsRepository), new InMemoryPresentersRepository), new InMemoryViewRepository), new InMemoryContributionRepository), new InMemoryRequestRestSendersRepository), new StateHistory), new GwtAsyncRunner), new CoreMainExtensionPoint), new RestyGwtOptions));
  $clinit_ClientApp();
  $info_0(LOGGER_22, 'Initialize domino module...');
  $clinit_LayoutClientModule();
  $info_0(LOGGER_31, 'Initializing Layout frontend module ...');
  $configureModule_0(new LayoutModuleConfiguration);
  $clinit_LayoutUIClientModule();
  $info_0(LOGGER_32, 'Initializing Layout frontend UI module ...');
  $configureModule_0(new LayoutUIModuleConfiguration);
  $clinit_ThemesClientModule();
  $info_0(LOGGER_45, 'Initializing Themes frontend module ...');
  $configureModule_0(new ThemesModuleConfiguration);
  $clinit_ProfileClientModule();
  $info_0(LOGGER_42, 'Initializing Profile frontend module ...');
  $configureModule_0(new ProfileModuleConfiguration);
  $clinit_MenuClientModule();
  $info_0(LOGGER_36, 'Initializing Menu frontend module ...');
  $configureModule_0(new MenuModuleConfiguration);
  $clinit_ComponentCaseClientModule();
  $info_0(LOGGER_14, 'Initializing ComponentCase frontend module ...');
  $configureModule_0(new ComponentCaseModuleConfiguration);
  $clinit_ComponentCaseUIClientModule();
  $info_0(LOGGER_15, 'Initializing ComponentCase frontend UI module ...');
  $configureModule_0(new ComponentCaseUIModuleConfiguration);
  $clinit_HomeClientModule();
  $info_0(LOGGER_26, 'Initializing Home frontend module ...');
  $configureModule_0(new HomeModuleConfiguration);
  $clinit_ComponentsClientModule();
  $info_0(LOGGER_16, 'Initializing Components frontend module ...');
  $configureModule_0(new ComponentsModuleConfiguration);
  $clinit_ComponentsUIClientModule();
  $info_0(LOGGER_17, 'Initializing Components frontend UI module ...');
  $configureModule_0(new ComponentsUIModuleConfiguration);
  $clinit_FormsClientModule();
  $info_0(LOGGER_20, 'Initializing Forms frontend module ...');
  $configureModule_0(new FormsModuleConfiguration);
  $clinit_FormsUIClientModule();
  $info_0(LOGGER_21, 'Initializing Forms frontend UI module ...');
  $configureModule_0(new FormsUIModuleConfiguration);
  $clinit_BasicFormsClientModule();
  $info_0(LOGGER_5, 'Initializing BasicForms frontend module ...');
  $configureModule_0(new BasicFormsModuleConfiguration);
  $clinit_AdvancedFormsClientModule();
  $info_0(LOGGER, 'Initializing AdvancedForms frontend module ...');
  $configureModule_0(new AdvancedFormsModuleConfiguration);
  $clinit_DatePickerClientModule();
  $info_0(LOGGER_18, 'Initializing DatePicker frontend module ...');
  $configureModule_0(new DatePickerModuleConfiguration);
  $clinit_TimePickerClientModule();
  $info_0(LOGGER_47, 'Initializing TimePicker frontend module ...');
  $configureModule_0(new TimePickerModuleConfiguration);
  $clinit_TypographyClientModule();
  $info_0(LOGGER_48, 'Initializing Typography frontend module ...');
  $configureModule_0(new TypographyModuleConfiguration);
  $clinit_HelpersClientModule();
  $info_0(LOGGER_25, 'Initializing Helpers frontend module ...');
  $configureModule_0(new HelpersModuleConfiguration);
  $clinit_ColorsClientModule();
  $info_0(LOGGER_13, 'Initializing Colors frontend module ...');
  $configureModule_0(new ColorsModuleConfiguration);
  $clinit_AnimationClientModule();
  $info_0(LOGGER_2, 'Initializing Animation frontend module ...');
  $configureModule_0(new AnimationModuleConfiguration);
  $clinit_CardsClientModule();
  $info_0(LOGGER_9, 'Initializing Cards frontend module ...');
  $configureModule_0(new CardsModuleConfiguration);
  $clinit_InfoBoxClientModule();
  $info_0(LOGGER_29, 'Initializing InfoBox frontend module ...');
  $configureModule_0(new InfoBoxModuleConfiguration);
  $clinit_ButtonsClientModule();
  $info_0(LOGGER_7, 'Initializing Buttons frontend module ...');
  $configureModule_0(new ButtonsModuleConfiguration);
  $clinit_AlertsClientModule();
  $info_0(LOGGER_1, 'Initializing Alerts frontend module ...');
  $configureModule_0(new AlertsModuleConfiguration);
  $clinit_BadgesClientModule();
  $info_0(LOGGER_4, 'Initializing Badges frontend module ...');
  $configureModule_0(new BadgesModuleConfiguration);
  $clinit_LabelsClientModule();
  $info_0(LOGGER_30, 'Initializing Labels frontend module ...');
  $configureModule_0(new LabelsModuleConfiguration);
  $clinit_ModalsClientModule();
  $info_0(LOGGER_37, 'Initializing Modals frontend module ...');
  $configureModule_0(new ModalsModuleConfiguration);
  $clinit_ListsClientModule();
  $info_0(LOGGER_33, 'Initializing Lists frontend module ... ');
  $configureModule_0(new ListsModuleConfiguration);
  $clinit_LoadersClientModule();
  $info_0(LOGGER_34, 'Initializing Loaders frontend module ...');
  $configureModule_0(new LoadersModuleConfiguration);
  $clinit_IconsClientModule();
  $info_0(LOGGER_27, 'Initializing Icons frontend module ...');
  $configureModule_0(new IconsModuleConfiguration);
  $clinit_BreadcrumbClientModule();
  $info_0(LOGGER_6, 'Initializing Breadcrumb frontend module ...');
  $configureModule_0(new BreadcrumbModuleConfiguration);
  $clinit_CollapseClientModule();
  $info_0(LOGGER_12, 'Initializing Collapse frontend module ... ');
  $configureModule_0(new CollapseModuleConfiguration);
  $clinit_NotificationsClientModule();
  $info_0(LOGGER_38, 'Initializing Notifications frontend module ...');
  $configureModule_0(new NotificationsModuleConfiguration);
  $clinit_MediaClientModule();
  $info_0(LOGGER_35, 'Initializing Media frontend module ...');
  $configureModule_0(new MediaModuleConfiguration);
  $clinit_PaginationClientModule();
  $info_0(LOGGER_39, 'Initializing Pagination frontend module ...');
  $configureModule_0(new PaginationModuleConfiguration);
  $clinit_PreloadersClientModule();
  $info_0(LOGGER_41, 'Initializing Preloaders frontend module ...');
  $configureModule_0(new PreloadersModuleConfiguration);
  $clinit_ProgressClientModule();
  $info_0(LOGGER_43, 'Initializing Progress frontend module ...');
  $configureModule_0(new ProgressModuleConfiguration);
  $clinit_TabsClientModule();
  $info_0(LOGGER_44, 'Initializing Tabs frontend module ...');
  $configureModule_0(new TabsModuleConfiguration);
  $clinit_ThumbnailsClientModule();
  $info_0(LOGGER_46, 'Initializing Thumbnails frontend module ...');
  $configureModule_0(new ThumbnailsModuleConfiguration);
  $clinit_DialogsClientModule();
  $info_0(LOGGER_19, 'Initializing Dialogs frontend module ...');
  $configureModule_0(new DialogsModuleConfiguration);
  $clinit_PopoverClientModule();
  $info_0(LOGGER_40, 'Initializing Popover frontend module ...');
  $configureModule_0(new PopoverModuleConfiguration);
  $clinit_WavesClientModule();
  $info_0(LOGGER_50, 'Initializing Waves frontend module ...');
  $configureModule_0(new WavesModuleConfiguration);
  $clinit_AppClientModule();
  castTo(DOMINO_OPTIONS_HOLDER.attribute, 196);
  setServiceRoot(castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 196), 122).defaultServiceRoot);
  $clinit_Defaults();
  castTo(INITIAL_TASKS_HOLDER.attribute, 63).forEach_0(new ClientApp$0methodref$execute$Type);
  $applyContributions_0(Lorg_dominokit_domino_api_shared_extension_MainExtensionPoint_2_classLit, castTo(MAIN_EXTENSION_POINT_HOLDER.attribute, 160));
  $info(LOGGER_49);
}

function $getLevel(this$static){
  if (this$static.level) {
    return this$static.level;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level = newLevel;
}

defineClass(111, 1, $intern_15);
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 111);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(331, 111, $intern_15, ConsoleLogHandler);
_.publish = function publish(record){
  var msg, val;
  if (!window.console || $getLevel(this).intValue() > record.level.intValue()) {
    return;
  }
  msg = $format(this.formatter, record);
  val = record.level.intValue();
  val >= ($clinit_Level() , $intern_16)?(window.console.error(msg) , undefined):val >= 900?(window.console.warn(msg) , undefined):val >= 800?(window.console.info(msg) , undefined):(window.console.log(msg) , undefined);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 331);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(332, 111, $intern_15, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 332);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl_2 = new LogConfiguration$LogConfigurationImplRegular;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl_2);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

function loggingIsEnabled(){
  $clinit_LogConfiguration();
  if (!impl_2) {
    return true;
  }
  return true;
}

var impl_2;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(330, 1, {}, LogConfiguration$1);
_.onUncaughtException = function onUncaughtException(e){
  $log(this.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
}
;
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 330);
function $configureClientSideLogging(this$static){
  this$static.root_0 = getLogger('');
  $setUseParentHandlers(this$static.root_0);
  $setLevels(this$static.root_0);
  $setDefaultHandlers(this$static.root_0);
}

function $setDefaultHandlers(l){
  var console_0, dev, remote;
  console_0 = new ConsoleLogHandler;
  $addHandler_0(l, console_0);
  dev = new DevelopmentModeLogHandler;
  $addHandler_0(l, dev);
  remote = new RestfulRemoteLogHandler;
  $addHandler_0(l, remote);
}

function $setLevels(l){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = castTo(listParamMap.get_0('logLevel'), 63) , !paramsForName?null:castToString(paramsForName.get_1(paramsForName.size_1() - 1)));
  level = levelParam == null?null:parse_0(levelParam);
  level?$setLevel_0(l, level):$setLevel_0(l, ($clinit_Level() , INFO));
}

function LogConfiguration$LogConfigurationImplRegular(){
}

defineClass(329, 1, {}, LogConfiguration$LogConfigurationImplRegular);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 329);
function $clinit_RemoteLogHandlerBase(){
  $clinit_RemoteLogHandlerBase = emptyMethod;
  getLogger('WireActivityLogger');
}

defineClass(562, 111, $intern_15);
var Lcom_google_gwt_logging_client_RemoteLogHandlerBase_2_classLit = createForClass('com.google.gwt.logging.client', 'RemoteLogHandlerBase', 562);
defineClass(1407, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 1407);
defineClass(1408, 1407, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 1408);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_1(message, (date = new Date_1(event_0.millis_0) , s = new StringBuilder , $append_1(s, $toString_3(date)) , s.string += ' ' , $append_1(s, event_0.loggerName) , s.string += '\n' , $append_1(s, event_0.level.getName()) , s.string += ': ' , s.string));
  $append_1(message, event_0.msg);
  if (this$static.showStackTraces && !!event_0.thrown) {
    message.string += '\n';
    $printStackTraceImpl(event_0.thrown, new StackTracePrintStream(message), '', '');
  }
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(245, 1408, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 245);
defineClass(1395, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 1395);
function FilterOutputStream(out){
}

defineClass(237, 1395, {}, FilterOutputStream);
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 237);
function PrintStream(out){
  FilterOutputStream.call(this, out);
}

defineClass(203, 237, {}, PrintStream);
_.println = function println(s){
}
;
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 203);
function StackTracePrintStream(builder){
  PrintStream.call(this, new FilterOutputStream(null));
  this.builder = builder;
}

defineClass(704, 203, {}, StackTracePrintStream);
_.println = function println_0(str){
  $append_1(this.builder, str);
  $append_1(this.builder, '\n');
}
;
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 704);
function ensureCookies(){
  var newCachedCookies;
  if (!cachedCookies || needsRefresh()) {
    newCachedCookies = new HashMap;
    loadCookies(newCachedCookies);
    cachedCookies = newCachedCookies;
  }
  return cachedCookies;
}

function loadCookies(m){
  var docCookie = $doc.cookie;
  if (docCookie && docCookie != '') {
    var crumbs = docCookie.split('; ');
    for (var i = crumbs.length - 1; i >= 0; --i) {
      var name_0, value_0;
      var eqIdx = crumbs[i].indexOf('=');
      if (eqIdx == -1) {
        name_0 = crumbs[i];
        value_0 = '';
      }
       else {
        name_0 = crumbs[i].substring(0, eqIdx);
        value_0 = crumbs[i].substring(eqIdx + 1);
      }
      if (uriEncoding) {
        try {
          name_0 = decodeURIComponent(name_0);
        }
         catch (e) {
        }
        try {
          value_0 = decodeURIComponent(value_0);
        }
         catch (e) {
        }
      }
      m.put(name_0, value_0);
    }
  }
}

function needsRefresh(){
  var docCookie = $doc.cookie;
  if (docCookie != rawCookies) {
    rawCookies = docCookie;
    return true;
  }
   else {
    return false;
  }
}

var cachedCookies = null, rawCookies, uriEncoding = true;
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  castTo(create_com_google_gwt_user_client_impl_DOMImpl(), 98);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_8, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $clinit_Window(){
  $clinit_Window = emptyMethod;
  impl_3 = castTo(create_com_google_gwt_user_client_impl_WindowImpl(), 143);
}

var impl_3;
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 94))
          throw toJs($e0);
      }
      values = castTo(out.get_0(key), 63);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 43);
    entry.setValue(unmodifiableList(castTo(entry.getValue(), 63)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = ($clinit_Window() , impl_3).getQueryString();
  if (!listParamMap || !$equals_0(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
defineClass(98, 1, $intern_17);
var Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImpl', 98);
defineClass(1426, 98, $intern_17);
var Lcom_google_gwt_user_client_impl_DOMImplTrident_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplTrident', 1426);
function DOMImplIE8_0(){
}

defineClass(1266, 1426, $intern_17, DOMImplIE8_0);
var Lcom_google_gwt_user_client_impl_DOMImplIE8_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE8', 1266);
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  $clinit_DOM();
  return;
}

defineClass(1427, 98, $intern_17);
var captureEventDispatchers;
var Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandard', 1427);
defineClass(1428, 1427, $intern_17);
var Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandardBase', 1428);
function DOMImplIE9_0(){
  $clinit_DOMImplStandard();
}

defineClass(1267, 1428, $intern_17, DOMImplIE9_0);
var Lcom_google_gwt_user_client_impl_DOMImplIE9_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE9', 1267);
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function DOMImplMozilla_0(){
  $clinit_DOMImplMozilla();
}

defineClass(1268, 1427, $intern_17, DOMImplMozilla_0);
var Lcom_google_gwt_user_client_impl_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplMozilla', 1268);
function DOMImplWebkit_0(){
  $clinit_DOMImplStandard();
}

defineClass(1269, 1428, $intern_17, DOMImplWebkit_0);
var Lcom_google_gwt_user_client_impl_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplWebkit', 1269);
function WindowImpl(){
}

defineClass(143, 1, {143:1}, WindowImpl);
_.getQueryString = function getQueryString(){
  return $wnd.location.search;
}
;
var Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImpl', 143);
function WindowImplIE(){
}

defineClass(740, 143, {143:1}, WindowImplIE);
_.getQueryString = function getQueryString_0(){
  var href_0 = $wnd.location.href;
  var hashLoc = href_0.indexOf('#');
  hashLoc >= 0 && (href_0 = href_0.substring(0, hashLoc));
  var questionLoc = href_0.indexOf('?');
  return questionLoc > 0?href_0.substring(questionLoc):'';
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE', 740);
function WindowImplMozilla(){
}

defineClass(741, 143, {143:1}, WindowImplMozilla);
var Lcom_google_gwt_user_client_impl_WindowImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplMozilla', 741);
function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(create_com_google_gwt_useragent_client_UserAgent(), 161);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_0(compileTimeValue, runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(101, 18, $intern_18);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 101);
defineClass(64, 101, $intern_18);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 64);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_12('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 18)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 18):null);
}

defineClass(327, 64, $intern_18, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 327);
function UserAgentImplGecko1_8(){
}

defineClass(553, 1, $intern_19, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 553);
function UserAgentImplIe10(){
}

defineClass(551, 1, $intern_19, UserAgentImplIe10);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 551);
function UserAgentImplIe8(){
}

defineClass(554, 1, $intern_19, UserAgentImplIe8);
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
_.getRuntimeValue = function getRuntimeValue_1(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 554);
function UserAgentImplIe9(){
}

defineClass(550, 1, $intern_19, UserAgentImplIe9);
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
_.getRuntimeValue = function getRuntimeValue_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 550);
function UserAgentImplSafari(){
}

defineClass(552, 1, $intern_19, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue_3(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 552);
function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_0(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_1('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1;
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_2(this$static.map_0, type_0), 109);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 63);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function SimpleEventBus_0(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(240, 1403, {}, SimpleEventBus_0);
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 240);
function SimpleEventBus$1(){
}

defineClass(560, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 560);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(561, 1, {1454:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 561);
function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.window.document;
  location_1 = $wnd.window.location;
  self_0 = $wnd.window.self;
}

var document_0, location_1, self_0;
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(202, 1, {201:1});
_.toString_0 = function toString_16(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 202);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(508, 19, $intern_3, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 508);
function IndexOutOfBoundsException(message){
  RuntimeException_0.call(this, message);
}

defineClass(138, 19, $intern_3, IndexOutOfBoundsException);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 138);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException.call(this, msg);
}

defineClass(760, 138, $intern_3, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 760);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(507, 19, $intern_3, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 507);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {4:1, 39:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 1392);
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(341, 19, $intern_3, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 341);
defineClass(163, 1, {4:1, 163:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 163);
function $hashCode_0(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

doubleCastMap = {4:1, 39:1, 163:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 1393);
function Enum(name_0, ordinal){
  this.name_1 = name_0;
  this.ordinal = ordinal;
}

defineClass(25, 1, {4:1, 39:1, 25:1});
_.equals_0 = function equals_5(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_7(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_18(){
  return this.name_1 != null?this.name_1:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 25);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(91, 19, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 91);
function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(166, 19, $intern_3, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 166);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(120, 163, {4:1, 39:1, 120:1, 163:1}, Integer);
_.equals_0 = function equals_6(o){
  return instanceOf(o, 120) && castTo(o, 120).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_19(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 120);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_2, 120, 256, 0, 1);
}

var boxedValues;
function $forEach(this$static, action){
  var t, t$iterator;
  checkCriticalNotNull(action);
  for (t$iterator = this$static.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    action.accept_2(t);
  }
}

function Long(value_0){
  this.value_0 = value_0;
}

function valueOf_0(i){
  var rebase, result;
  if (compare_0(i, -129) > 0 && compare_0(i, 128) < 0) {
    rebase = toInt_0(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(121, 163, {4:1, 39:1, 121:1, 163:1}, Long);
_.equals_0 = function equals_7(o){
  return instanceOf(o, 121) && eq(castTo(o, 121).value_0, this.value_0);
}
;
_.hashCode_0 = function hashCode_9(){
  return toInt_0(this.value_0);
}
;
_.toString_0 = function toString_20(){
  return '' + toString_11(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 121);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_2, 121, 256, 0, 1);
}

var boxedValues_0;
defineClass(1551, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(typeError){
  JsException.call(this, typeError);
}

function NullPointerException_1(message){
  RuntimeException_0.call(this, message);
}

defineClass(75, 136, $intern_3, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 75);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(84, 1, {4:1, 84:1}, StackTraceElement);
_.equals_0 = function equals_8(other){
  var st;
  if (instanceOf(other, 84)) {
    st = castTo(other, 84);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className_0 == st.className_0 && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_10(){
  return hashCode_16(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 5, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_21(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 84);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_8, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toUpperCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?this$static.toLocaleUpperCase():this$static.toUpperCase();
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & $intern_20;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & $intern_20;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_20);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_1(x_0){
  return x_0 == null?'null':toString_12(x_0);
}

stringCastMap = {4:1, 201:1, 39:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(90, 202, {201:1}, StringBuilder, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 90);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException.call(this, message);
}

defineClass(235, 138, $intern_3, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 235);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream(null);
  new PrintStream(null);
}

defineClass(1555, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(95, 19, $intern_3, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 95);
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | this$static.add_0(e);
  }
  return changed;
}

function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(1399, 1, {60:1});
_.forEach_0 = function forEach(action){
  $forEach(this, action);
}
;
_.spliterator_0 = function spliterator_0(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add_0 = function add_2(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  return $addAll(this, c);
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString_0 = function toString_22(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner_0(', ', '[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_3(joiner, e === this?'(this Collection)':e == null?'null':toString_12(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 1399);
function $forEach_2(this$static, consumer){
  var entry, entry$iterator;
  checkCriticalNotNull(consumer);
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    $accept_0(consumer, entry.getKey(), entry.getValue());
  }
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 43);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $putAll(this$static, map_0){
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = map_0.entrySet_0().iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_1(), 43);
    $put(this$static, e.getKey(), e.getValue());
  }
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_12(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(1405, 1, $intern_21);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 109)) {
    return false;
  }
  otherMap = castTo(obj, 109);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 43);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_11(){
  return hashCode_17(this.entrySet_0());
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_1(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_23(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner_0(', ', '{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 43);
    $add_3(joiner, $toString_2(this, entry.getKey()) + '=' + $toString_2(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 1405);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_2(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $size_0(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(565, 1405, $intern_21);
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get_2(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size_0(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 565);
defineClass(1404, 1399, $intern_22);
_.spliterator_0 = function spliterator_1(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 89)) {
    return false;
  }
  other = castTo(o, 89);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_17(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 1404);
function $contains(this$static, o){
  if (instanceOf(o, 43)) {
    return $containsEntry(this$static.this$01, castTo(o, 43));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(112, 1404, $intern_22, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 112);
function $forEachRemaining(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.hasNext_0()) {
    consumer.accept_2(this$static.next_1());
  }
}

function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_1(), 43);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(208, 1, {}, AbstractHashMap$EntrySetIterator);
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 208);
defineClass(1400, 1399, $intern_23);
_.spliterator_0 = function spliterator_2(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.add_1 = function add_3(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_4(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_11(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 63)) {
    return false;
  }
  other = castTo(o, 63);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_18(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 1400);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(205, 1, {}, AbstractList$IteratorImpl);
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_1(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 205);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(555, 205, {}, AbstractList$ListIteratorImpl);
_.add_2 = function add_5(o){
  this.this$01.add_1(this.i, o);
  ++this.i;
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 555);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(141, 1404, $intern_22, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = this.this$01.entrySet_0().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 141);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(123, 1, {}, AbstractMap$1$1);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_2(){
  var entry;
  return entry = castTo(this.val$outerIter2.next_1(), 43) , entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 123);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(564, 1, $intern_24);
_.equals_0 = function equals_12(other){
  var entry;
  if (!instanceOf(other, 43)) {
    return false;
  }
  entry = castTo(other, 43);
  return equals_20(this.key_0, entry.getKey()) && equals_20(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_24(this.key_0) ^ hashCode_24(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString_0 = function toString_24(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 564);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(241, 564, $intern_24, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 241);
defineClass(1409, 1, $intern_24);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 43)) {
    return false;
  }
  entry = castTo(other, 43);
  return equals_20(this.val$entry2.value[0], entry.getKey()) && equals_20($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode_24(this.val$entry2.value[0]) ^ hashCode_24($getValue(this));
}
;
_.toString_0 = function toString_25(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 1409);
function $get_3(this$static, index_0){
  var iter;
  iter = $listIterator(this$static, index_0);
  try {
    return $next_1(iter);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 144)) {
      throw toJs(new IndexOutOfBoundsException("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}

defineClass(1410, 1400, $intern_23);
_.add_1 = function add_6(index_0, element){
  var iter;
  iter = this.listIterator_0(index_0);
  iter.add_2(element);
}
;
_.get_1 = function get_2(index_0){
  return $get_3(this, index_0);
}
;
_.iterator = function iterator_3(){
  return $listIterator(this, 0);
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 1410);
function $add_0(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $forEach_0(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept_2(e);
  }
}

function $get_4(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_20(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 5, 1);
}

defineClass(28, 1400, $intern_25, ArrayList);
_.add_1 = function add_7(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_8(o){
  return $add_0(this, o);
}
;
_.addAll = function addAll_0(c){
  return $addAll_0(this, c);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.forEach_0 = function forEach_0(consumer){
  $forEach_0(this, consumer);
}
;
_.get_1 = function get_3(index_0){
  return $get_4(this, index_0);
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return clone(this.array, this.array.length);
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 28);
function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(96, 1, {}, ArrayList$1);
_.forEachRemaining = function forEachRemaining_2(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_3(){
  return $next_0(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 96);
function hashCode_16(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function spliterator_3(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream_0(array){
  return new StreamImpl(null, spliterator_3(array, array.length));
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_17(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_18(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 226)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(705, 1400, $intern_25, Collections$EmptyList);
_.contains_0 = function contains_4(object){
  return false;
}
;
_.get_1 = function get_5(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_7(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 705);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(706, 1, {}, Collections$EmptyListIterator);
_.forEachRemaining = function forEachRemaining_3(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_2 = function add_9(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.hasNext_0 = function hasNext_3(){
  return false;
}
;
_.next_1 = function next_4(){
  throw toJs(new NoSuchElementException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 706);
defineClass(246, 1, {60:1});
_.forEach_0 = function forEach_2(action){
  $forEach(this, action);
}
;
_.spliterator_0 = function spliterator_4(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream_1(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add_0 = function add_10(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.addAll = function addAll_1(c){
  throw toJs(new UnsupportedOperationException);
}
;
_.iterator = function iterator_6(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_8(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_5(){
  return this.coll.toArray();
}
;
_.toArray_0 = function toArray_6(a){
  return this.coll.toArray_0(a);
}
;
_.toString_0 = function toString_26(){
  return toString_12(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 246);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(249, 1, {}, Collections$UnmodifiableCollectionIterator);
_.forEachRemaining = function forEachRemaining_4(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_4(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_5(){
  return this.it.next_1();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 249);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(247, 246, $intern_23, Collections$UnmodifiableList);
_.spliterator_0 = function spliterator_5(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.equals_0 = function equals_14(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_1 = function get_6(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode_0 = function hashCode_19(){
  return hashCode__I__devirtual$(this.list);
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 247);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(707, 1, $intern_21, Collections$UnmodifiableMap);
_.containsKey = function containsKey_1(key){
  return this.map_0.containsKey(key);
}
;
_.entrySet_0 = function entrySet_0(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_15(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_0 = function get_7(key){
  return this.map_0.get_0(key);
}
;
_.hashCode_0 = function hashCode_20(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.put = function put_1(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_9(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_27(){
  return toString_12(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 707);
defineClass(708, 246, $intern_22);
_.spliterator_0 = function spliterator_6(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_16(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_21(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 708);
function $wrap(array, size_0){
  var i;
  for (i = 0; i < size_0; ++i) {
    setCheck(array, i, new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(array[i], 43)));
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(709, 708, $intern_22, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_7(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
_.toArray = function toArray_7(){
  var array;
  array = this.coll.toArray();
  $wrap(array, array.length);
  return array;
}
;
_.toArray_0 = function toArray_8(a){
  var result;
  result = this.coll.toArray_0(a);
  $wrap(result, this.coll.size_1());
  return result;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 709);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(711, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.forEachRemaining = function forEachRemaining_5(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_6(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(castTo(this.val$it2.next_1(), 43));
}
;
_.hasNext_0 = function hasNext_5(){
  return this.val$it2.hasNext_0();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 711);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(248, 1, $intern_24, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_17(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_0(){
  return this.entry.getValue();
}
;
_.hashCode_0 = function hashCode_22(){
  return this.entry.hashCode_0();
}
;
_.setValue = function setValue_0(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_28(){
  return toString_12(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 248);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(710, 247, {60:1, 63:1, 226:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 710);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(751, 19, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 751);
function $toString_3(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_1(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(40, 1, $intern_26, Date_1);
_.equals_0 = function equals_18(obj){
  return instanceOf(obj, 40) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 40).jsdate.getTime()));
}
;
_.hashCode_0 = function hashCode_23(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt_0(xor_0(time, createLongEmul(shru(isSmallLong0(time)?toBigLong(time):time, 32))));
}
;
_.toString_0 = function toString_29(){
  return $toString_3(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 40);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_8, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_8, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  this.hashCodeMap = new InternalHashCodeMap(this);
  this.stringMap = new InternalStringMap(this);
  structureChanged(this);
}

defineClass(45, 565, $intern_27, HashMap);
_.equals_1 = function equals_19(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 45);
function $add_1(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(85, 1404, $intern_28, HashSet);
_.add_0 = function add_12(o){
  return $add_1(this, o);
}
;
_.contains_0 = function contains_5(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_8(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this.map_0)).this$01.entrySet_0().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_10(){
  return this.map_0.size_1();
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 85);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host_0.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host_0.getHashCode(key)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host_0.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host_0);
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(728, 1, {}, InternalHashCodeMap);
_.forEach_0 = function forEach_3(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_9(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 728);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(256, 1, {}, InternalHashCodeMap$1);
_.forEachRemaining = function forEachRemaining_6(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_7(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_6(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 256);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_6(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host_0);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(714, 1, {}, InternalStringMap);
_.forEach_0 = function forEach_4(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_10(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 714);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(253, 1, {}, InternalStringMap$1);
_.forEachRemaining = function forEachRemaining_7(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_8(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_7(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 253);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(715, 1409, $intern_24, InternalStringMap$2);
_.getKey = function getKey_1(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_1(){
  return $getValue(this);
}
;
_.setValue = function setValue_1(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 715);
function $add_2(this$static, o){
  $addNode(this$static, o, this$static.tail.prev, this$static.tail);
  return true;
}

function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $listIterator(this$static, index_0){
  var i, node;
  checkCriticalPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i = this$static.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next_0;
    for (i = 0; i < index_0; ++i) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next_0 = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next_0 = null;
  this.size_0 = 0;
}

defineClass(79, 1410, {4:1, 60:1, 63:1}, LinkedList);
_.add_0 = function add_13(o){
  return $add_2(this, o);
}
;
_.listIterator_0 = function listIterator_4(index_0){
  return $listIterator(this, index_0);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 79);
function $next_1(this$static){
  checkCriticalElement(this$static.currentNode_0 != this$static.this$01.tail);
  this$static.lastNode = this$static.currentNode_0;
  this$static.currentNode_0 = this$static.currentNode_0.next_0;
  ++this$static.currentIndex;
  return this$static.lastNode.value_0;
}

function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode_0 = startNode;
  this.currentIndex = index_0;
}

defineClass(729, 1, {}, LinkedList$ListIteratorImpl);
_.forEachRemaining = function forEachRemaining_9(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_2 = function add_14(o){
  $addNode(this.this$01, o, this.currentNode_0.prev, this.currentNode_0);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext_0 = function hasNext_9(){
  return this.currentNode_0 != this.this$01.tail;
}
;
_.next_1 = function next_10(){
  return $next_1(this);
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 729);
function LinkedList$Node(){
}

defineClass(209, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 209);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  defaultLocale = new Locale$4;
}

defineClass(1394, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 1394);
function Locale$1(){
}

defineClass(343, 1394, {}, Locale$1);
_.toString_0 = function toString_30(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 343);
function Locale$4(){
}

defineClass(344, 1394, {}, Locale$4);
_.toString_0 = function toString_31(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 344);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(144, 19, {4:1, 24:1, 19:1, 18:1, 144:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 144);
function equals_20(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_24(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Optional(){
  $clinit_Optional = emptyMethod;
  EMPTY = new Optional(null);
}

function $orElse(this$static, other){
  return this$static.ref != null?this$static.ref:other;
}

function $orElseGet(this$static){
  return this$static.ref != null?this$static.ref:($clinit_RemoteLogHandlerBase() , initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 84, 0, 0, 1));
}

function Optional(ref){
  $clinit_Optional();
  this.ref = ref;
}

function ofNullable(value_0){
  $clinit_Optional();
  return value_0 == null?EMPTY:new Optional(checkCriticalNotNull(value_0));
}

defineClass(126, 1, {126:1}, Optional);
_.equals_0 = function equals_21(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 126)) {
    return false;
  }
  other = castTo(obj, 126);
  return equals_20(this.ref, other.ref);
}
;
_.hashCode_0 = function hashCode_25(){
  return hashCode_24(this.ref);
}
;
_.toString_0 = function toString_32(){
  return this.ref != null?'Optional.of(' + valueOf_1(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 126);
function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function Spliterators$BaseSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(259, 1, {});
_.forEachRemaining = function forEachRemaining_10(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 259);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  Spliterators$BaseSpliterator.call(this, size_0, characteristics);
}

defineClass(260, 259, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 260);
function $forEachRemaining_2(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(712, 1, {});
_.forEachRemaining = function forEachRemaining_12(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 712);
function $consume(this$static, consumer, index_0){
  consumer.accept_2(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(713, 712, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_13(consumer){
  $forEachRemaining_2(this, consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 713);
function $initIterator(this$static){
  if (!this$static.it) {
    this$static.it = this$static.collection.iterator();
    this$static.estimateSize = this$static.collection.size_1();
  }
}

function Spliterators$IteratorSpliterator(collection, characteristics){
  this.collection = (checkCriticalNotNull(collection) , collection);
  this.characteristics = (characteristics & 4096) == 0?characteristics | 64 | 16384:characteristics;
}

defineClass(62, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_2(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_1(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_14(consumer){
  $initIterator(this);
  this.it.forEachRemaining(consumer);
}
;
_.tryAdvance = function tryAdvance_1(consumer){
  checkCriticalNotNull(consumer);
  $initIterator(this);
  if (this.it.hasNext_0()) {
    consumer.accept_2(this.it.next_1());
    return true;
  }
  return false;
}
;
_.characteristics = 0;
_.estimateSize = 0;
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 62);
function $add_3(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_1(this$static.builder, this$static.delimiter);
  $append(this$static.builder, newElement);
  return this$static;
}

function $toString_4(this$static){
  return !this$static.builder?this$static.emptyValue:this$static.suffix.length == 0?this$static.builder.string:this$static.builder.string + ('' + this$static.suffix);
}

function StringJoiner_0(delimiter, prefix, suffix){
  this.delimiter = (checkCriticalNotNull(delimiter) , delimiter);
  this.prefix = (checkCriticalNotNull(prefix) , prefix);
  this.suffix = (checkCriticalNotNull(suffix) , suffix);
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(102, 1, {102:1}, StringJoiner_0);
_.toString_0 = function toString_33(){
  return $toString_4(this);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 102);
function Function$lambda$0$Type(){
}

defineClass(527, 1, {}, Function$lambda$0$Type);
_.apply_0 = function apply_1(t){
  return t;
}
;
var Ljava_util_function_Function$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Function/lambda$0$Type', 527);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

function parse_0(name_0){
  $clinit_Level();
  var value_0;
  value_0 = $toUpperCase(name_0, ($clinit_Locale() , ROOT));
  switch (value_0) {
    case 'ALL':
      return ALL;
    case 'CONFIG':
      return CONFIG;
    case 'FINE':
      return FINE;
    case 'FINER':
      return FINER;
    case 'FINEST':
      return FINEST;
    case 'INFO':
      return INFO;
    case 'OFF':
      return OFF;
    case 'SEVERE':
      return SEVERE;
    case 'WARNING':
      return WARNING;
    default:throw toJs(new IllegalArgumentException_0('Invalid level "' + name_0 + '"'));
  }
}

defineClass($intern_29, 1, $intern_4);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString_0 = function toString_34(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', $intern_29);
function Level$LevelAll(){
}

defineClass(538, $intern_29, $intern_4, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return -2147483648;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 538);
function Level$LevelConfig(){
}

defineClass(539, $intern_29, $intern_4, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 539);
function Level$LevelFine(){
}

defineClass(540, $intern_29, $intern_4, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 540);
function Level$LevelFiner(){
}

defineClass(541, $intern_29, $intern_4, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 541);
function Level$LevelFinest(){
}

defineClass(542, $intern_29, $intern_4, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 542);
function Level$LevelInfo(){
}

defineClass(543, $intern_29, $intern_4, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 543);
function Level$LevelOff(){
}

defineClass(544, $intern_29, $intern_4, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 544);
function Level$LevelSevere(){
}

defineClass(545, $intern_29, $intern_4, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return $intern_16;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 545);
function Level$LevelWarning(){
}

defineClass(546, $intern_29, $intern_4, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 546);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, ($clinit_Logger() , LOGGING_OFF)?null:logger.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = castTo($getStringValue(this$static.loggerMap, name_0), 139);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = ($clinit_Logger() , LOGGING_OFF)?null:newLogger.name_0;
    parentName = $substring_0(name_1, 0, $wnd.Math.max(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, LOGGING_OFF?null:newLogger.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $setLevel_0(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(509, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 509);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(level, msg){
  this.level = level;
  this.msg = msg;
  this.millis_0 = ($clinit_System() , fromDouble_0(Date.now()));
}

defineClass(724, 1, $intern_4, LogRecord);
_.loggerName = '';
_.millis_0 = 0;
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 724);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  LOGGING_OFF = false;
  ALL_ENABLED = true;
  INFO_ENABLED = true;
  WARNING_ENABLED = true;
  SEVERE_ENABLED = true;
}

function $actuallyLog(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  for (handler$array0 = $getHandlers(this$static) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
    handler = handler$array0[handler$index0];
    handler.publish(record);
  }
  logger = !LOGGING_OFF && this$static.useParentHandlers?LOGGING_OFF?null:this$static.parent_0:null;
  while (logger) {
    for (handler$array = $getHandlers(logger) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
      handler = handler$array[handler$index];
      handler.publish(record);
    }
    logger = !LOGGING_OFF && logger.useParentHandlers?LOGGING_OFF?null:logger.parent_0:null;
  }
}

function $addHandler_0(this$static, handler){
  if (LOGGING_OFF) {
    return;
  }
  $add_0(this$static.handlers, handler);
}

function $fine(this$static, msg){
  if (!ALL_ENABLED) {
    return;
  }
  $log(this$static, ($clinit_Level() , FINE), msg, null);
}

function $finest(this$static, msg){
  if (!ALL_ENABLED) {
    return;
  }
  $log(this$static, ($clinit_Level() , FINEST), msg, null);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = LOGGING_OFF?null:this$static.parent_0;
  while (logger) {
    effectiveLevel = LOGGING_OFF?null:logger.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = LOGGING_OFF?null:logger.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  if (LOGGING_OFF) {
    return initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_30, 111, 0, 0, 1);
  }
  return castTo($toArray(this$static.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_30, 111, this$static.handlers.array.length, 0, 1)), 1368);
}

function $info(this$static){
  if (!INFO_ENABLED) {
    return;
  }
  $log(this$static, ($clinit_Level() , INFO), 'ui-demo Application frontend have been initialized.', null);
}

function $isLoggable(this$static, messageLevel){
  return ALL_ENABLED?messageLevel.intValue() >= $getEffectiveLevel(this$static).intValue():INFO_ENABLED?messageLevel.intValue() >= ($clinit_Level() , 800):WARNING_ENABLED?messageLevel.intValue() >= ($clinit_Level() , 900):SEVERE_ENABLED && messageLevel.intValue() >= ($clinit_Level() , $intern_16);
}

function $log(this$static, level, msg, thrown){
  var record;
  (ALL_ENABLED?level.intValue() >= $getEffectiveLevel(this$static).intValue():INFO_ENABLED?level.intValue() >= ($clinit_Level() , 800):WARNING_ENABLED?level.intValue() >= ($clinit_Level() , 900):SEVERE_ENABLED && level.intValue() >= ($clinit_Level() , $intern_16)) && (record = new LogRecord(level, msg) , record.thrown = thrown , $setLoggerName(record, LOGGING_OFF?null:this$static.name_0) , $actuallyLog(this$static, record) , undefined);
}

function $setLevel_0(this$static, newLevel){
  if (LOGGING_OFF) {
    return;
  }
  this$static.level = newLevel;
}

function $setParent(this$static, newParent){
  if (LOGGING_OFF) {
    return;
  }
  !!newParent && (this$static.parent_0 = newParent);
}

function $setUseParentHandlers(this$static){
  if (LOGGING_OFF) {
    return;
  }
  this$static.useParentHandlers = false;
}

function Logger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return;
  }
  this.name_0 = name_0;
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

function getLogger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return new Logger(null);
  }
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(139, 1, {139:1}, Logger);
_.useParentHandlers = false;
var ALL_ENABLED = false, INFO_ENABLED = false, LOGGING_OFF = false, SEVERE_ENABLED = false, WARNING_ENABLED = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 139);
function of_0(supplier, accumulator, combiner, finisher, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(finisher);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, finisher);
}

function of_1(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, new Function$lambda$0$Type);
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_2, 77, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(77, 25, {4:1, 39:1, 25:1, 77:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 77, values_0);
function CollectorImpl(supplier, accumulator, finisher){
  this.supplier = supplier;
  this.accumulator = accumulator;
  $clinit_Collections();
  this.finisher = finisher;
}

defineClass(263, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 263);
function lambda$22(){
  throw toJs(new IllegalStateException_0("Can't assign multiple values to the same key"));
}

function Collectors$20methodref$add$Type(){
}

defineClass(254, 1, {}, Collectors$20methodref$add$Type);
_.accept_1 = function accept_1(arg0, arg1){
  castTo(arg0, 60).add_0(arg1);
}
;
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 254);
function Collectors$21methodref$ctor$Type(){
}

defineClass(716, 1, {}, Collectors$21methodref$ctor$Type);
_.get_2 = function get_9(){
  return new ArrayList;
}
;
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 716);
function Collectors$22methodref$ctor$Type(){
}

defineClass(717, 1, {}, Collectors$22methodref$ctor$Type);
_.get_2 = function get_10(){
  return new HashMap;
}
;
var Ljava_util_stream_Collectors$22methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/22methodref$ctor$Type', 717);
function Collectors$23methodref$ctor$Type(){
}

defineClass(720, 1, {}, Collectors$23methodref$ctor$Type);
_.get_2 = function get_11(){
  return new HashSet;
}
;
var Ljava_util_stream_Collectors$23methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/23methodref$ctor$Type', 720);
function Collectors$24methodref$add$Type(){
}

defineClass(721, 1, {}, Collectors$24methodref$add$Type);
_.accept_1 = function accept_2(arg0, arg1){
  $add_1(castTo(arg0, 85), arg1);
}
;
var Ljava_util_stream_Collectors$24methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/24methodref$add$Type', 721);
function Collectors$lambda$21$Type(){
}

defineClass(255, 1, {}, Collectors$lambda$21$Type);
var Ljava_util_stream_Collectors$lambda$21$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$21$Type', 255);
function Collectors$lambda$23$Type(){
}

defineClass(718, 1, {}, Collectors$lambda$23$Type);
_.accept_1 = function accept_4(arg0, arg1){
  var key, newValue;
  key = castTo(arg1, 6)[0];
  newValue = castTo(arg1, 6)[1];
  arg0.containsKey(key)?arg0.put(key, (arg0.get_0(key) , lambda$22())):arg0.put(key, newValue);
}
;
var Ljava_util_stream_Collectors$lambda$23$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$23$Type', 718);
function Collectors$lambda$24$Type(){
}

defineClass(719, 1, {}, Collectors$lambda$24$Type);
var Ljava_util_stream_Collectors$lambda$24$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$24$Type', 719);
function Collectors$lambda$25$Type(){
}

defineClass(722, 1, {}, Collectors$lambda$25$Type);
var Ljava_util_stream_Collectors$lambda$25$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$25$Type', 722);
function Collectors$lambda$26$Type(){
}

defineClass(723, 1, {}, Collectors$lambda$26$Type);
_.apply_0 = function apply_3(arg0){
  return castTo(arg0, 85);
}
;
var Ljava_util_stream_Collectors$lambda$26$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$26$Type', 723);
function $terminate(this$static){
  if (!this$static.root_0) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root_0);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root_0) {
    $throwIfTerminated(this$static.root_0);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root_0 = null;
    new ArrayList;
  }
   else {
    this.root_0 = previous;
  }
}

defineClass(258, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 258);
function $clinit_StreamImpl(){
  $clinit_StreamImpl = emptyMethod;
  NULL_CONSUMER = new StreamImpl$lambda$0$Type;
}

function $anyMatch(this$static, predicate){
  return ($throwIfTerminated(this$static) , $spliterator(new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator)))).tryAdvance(NULL_CONSUMER);
}

function $collect(this$static, collector){
  var lastArg;
  return collector.finisher.apply_0($reduce(this$static, collector.supplier.get_2(), (lastArg = new StreamImpl$lambda$4$Type(collector) , lastArg)));
}

function $filter(this$static, predicate){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

function $findFirst(this$static){
  var holder;
  $terminate(this$static);
  holder = new StreamImpl$ValueConsumer;
  if (this$static.spliterator.tryAdvance(holder)) {
    return $clinit_Optional() , new Optional(checkCriticalNotNull(holder.value_0));
  }
  return $clinit_Optional() , $clinit_Optional() , EMPTY;
}

function $forEach_4(this$static, action){
  $terminate(this$static);
  this$static.spliterator.forEachRemaining(action);
}

function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity, accumulator){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer, accumulator));
  return consumer.value_0;
}

function $spliterator(this$static){
  $terminate(this$static);
  return this$static.spliterator;
}

function StreamImpl(prev, spliterator){
  $clinit_StreamImpl();
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(collector_0, a_1, t_2){
  $clinit_StreamImpl();
  collector_0.accumulator.accept_1(a_1, t_2);
  return a_1;
}

function lambda$5(consumer_0, accumulator_1, item_2){
  $clinit_StreamImpl();
  $accept(consumer_0, $apply(accumulator_1, consumer_0.value_0, item_2));
}

defineClass(65, 258, {}, StreamImpl);
var NULL_CONSUMER;
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 65);
function $lambda$0(this$static, action_1, item_1){
  if (this$static.filter_0.test_0(item_1)) {
    this$static.found = true;
    action_1.accept_2(item_1);
  }
}

function StreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -16449);
  checkCriticalNotNull(filter);
  this.filter_0 = filter;
  this.original = original;
}

defineClass(261, 260, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_2(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 261);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(732, 1, {}, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept_2 = function accept_5(arg0){
  $lambda$0(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 732);
function $lambda$0_0(this$static, action_1, u_1){
  action_1.accept_2(this$static.map_0.apply_0(u_1));
}

function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.map_0 = map_0;
  this.original = original;
}

defineClass(730, 260, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_3(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(this, action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 730);
function StreamImpl$MapToObjSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(731, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept_2 = function accept_6(arg0){
  $lambda$0_0(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 731);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(262, 1, {}, StreamImpl$ValueConsumer);
_.accept_2 = function accept_7(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 262);
function StreamImpl$lambda$0$Type(){
}

defineClass(733, 1, {}, StreamImpl$lambda$0$Type);
_.accept_2 = function accept_8(arg0){
  $clinit_StreamImpl();
}
;
var Ljava_util_stream_StreamImpl$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$0$Type', 733);
function $apply(this$static, arg0, arg1){
  return lambda$4(this$static.collector_0, arg0, arg1);
}

function StreamImpl$lambda$4$Type(collector_0){
  this.collector_0 = collector_0;
}

defineClass(734, 1, {}, StreamImpl$lambda$4$Type);
var Ljava_util_stream_StreamImpl$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$4$Type', 734);
function StreamImpl$lambda$5$Type(consumer_0, accumulator_1){
  this.consumer_0 = consumer_0;
  this.accumulator_1 = accumulator_1;
}

defineClass(735, 1, {}, StreamImpl$lambda$5$Type);
_.accept_2 = function accept_9(arg0){
  lambda$5(this.consumer_0, this.accumulator_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 735);
function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, 0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length);
}

defineClass(1553, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return stampJavaTypeInfo_0(array, referenceType);
}

defineClass(1411, 1, {});
var Ljavaemul_internal_ConsoleLogger_2_classLit = createForClass('javaemul.internal', 'ConsoleLogger', 1411);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(1550, 1, {});
function getHashCode_0(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_1(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment_0();
  front[key] = hashCode;
  return hashCode;
}

function increment_0(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(1974, 1, {});
function $clinit_AdvancedFormsClientModule(){
  $clinit_AdvancedFormsClientModule = emptyMethod;
  LOGGER = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_AdvancedFormsClientModule_2_classLit) , Lorg_dominokit_domino_advancedforms_client_AdvancedFormsClientModule_2_classLit.typeName));
}

var LOGGER;
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsClientModule_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsClientModule', null);
function AdvancedFormsModuleConfiguration(){
}

defineClass(298, 1, {}, AdvancedFormsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders(registry){
}
;
_.registerContributions = function registerContributions(registry){
  $registerContribution(Lorg_dominokit_domino_forms_shared_extension_FormsExtensionPoint_2_classLit, new AdvancedFormsPresenterContributionToFormsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters(registry){
  $registerPresenter(new AdvancedFormsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenterCommand_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews(registry){
  $registerView(new AdvancedFormsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit) , Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsModuleConfiguration', 298);
function LazyPresenterLoader(name_0, concreteName){
  this.name_0 = name_0;
  this.concreteName = concreteName;
}

defineClass(15, 1, $intern_31);
_.equals_0 = function equals_22(other){
  if (this === other)
    return true;
  if (other == null || this.___clazz != getClass__Ljava_lang_Class___devirtual$(other))
    return false;
  return $equals_0(this.name_0, castTo(other, 15).name_0) && $equals_0(this.concreteName, castTo(other, 15).concreteName);
}
;
_.hashCode_0 = function hashCode_26(){
  return getHashCode_1(this.name_0);
}
;
var Lorg_dominokit_domino_api_client_mvp_presenter_LazyPresenterLoader_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.presenter', 'LazyPresenterLoader', 15);
function AdvancedFormsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(388, 15, $intern_31, AdvancedFormsModuleConfiguration$1);
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsModuleConfiguration/1', 388);
function LazyViewLoader(presenterName){
  this.presenterName = presenterName;
}

defineClass(16, 1, $intern_32);
var Lorg_dominokit_domino_api_client_mvp_view_LazyViewLoader_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.view', 'LazyViewLoader', 16);
function AdvancedFormsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(389, 16, $intern_32, AdvancedFormsModuleConfiguration$2);
var Lorg_dominokit_domino_advancedforms_client_AdvancedFormsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.advancedforms.client', 'AdvancedFormsModuleConfiguration/2', 389);
function AdvancedFormsPresenterContributionToFormsExtensionPoint(){
}

defineClass(646, 1, {}, AdvancedFormsPresenterContributionToFormsExtensionPoint);
var Lorg_dominokit_domino_advancedforms_client_contributions_AdvancedFormsPresenterContributionToFormsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.advancedforms.client.contributions', 'AdvancedFormsPresenterContributionToFormsExtensionPoint', 646);
var Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenter_2_classLit = createForClass('org.dominokit.domino.advancedforms.client.presenters', 'AdvancedFormsPresenter', 386);
var Lorg_dominokit_domino_advancedforms_client_presenters_AdvancedFormsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.advancedforms.client.presenters', 'AdvancedFormsPresenterCommand', 387);
function $clinit_AlertsClientModule(){
  $clinit_AlertsClientModule = emptyMethod;
  LOGGER_1 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_AlertsClientModule_2_classLit) , Lorg_dominokit_domino_alerts_client_AlertsClientModule_2_classLit.typeName));
}

var LOGGER_1;
var Lorg_dominokit_domino_alerts_client_AlertsClientModule_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsClientModule', null);
function AlertsModuleConfiguration(){
}

defineClass(308, 1, {}, AlertsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_0(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_0(registry){
}
;
_.registerContributions = function registerContributions_0(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new AlertsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_0(registry){
  $registerPresenter(new AlertsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_0(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenterCommand_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_0(registry){
  $registerView(new AlertsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit) , Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_alerts_client_AlertsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsModuleConfiguration', 308);
function AlertsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(428, 15, $intern_31, AlertsModuleConfiguration$1);
var Lorg_dominokit_domino_alerts_client_AlertsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsModuleConfiguration/1', 428);
function AlertsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(429, 16, $intern_32, AlertsModuleConfiguration$2);
var Lorg_dominokit_domino_alerts_client_AlertsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.alerts.client', 'AlertsModuleConfiguration/2', 429);
function AlertsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(666, 1, {}, AlertsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_alerts_client_contributions_AlertsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.alerts.client.contributions', 'AlertsPresenterContributionToComponentsExtensionPoint', 666);
var Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenter_2_classLit = createForClass('org.dominokit.domino.alerts.client.presenters', 'AlertsPresenter', 426);
var Lorg_dominokit_domino_alerts_client_presenters_AlertsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.alerts.client.presenters', 'AlertsPresenterCommand', 427);
function $clinit_AnimationClientModule(){
  $clinit_AnimationClientModule = emptyMethod;
  LOGGER_2 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_AnimationClientModule_2_classLit) , Lorg_dominokit_domino_animation_client_AnimationClientModule_2_classLit.typeName));
}

var LOGGER_2;
var Lorg_dominokit_domino_animation_client_AnimationClientModule_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationClientModule', null);
function AnimationModuleConfiguration(){
}

defineClass(304, 1, {}, AnimationModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_1(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_1(registry){
}
;
_.registerContributions = function registerContributions_1(registry){
  $registerContribution(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit, new AnimationPresenterContributionToComponentCaseExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_1(registry){
  $registerPresenter(new AnimationModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_1(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenterCommand_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_1(registry){
  $registerView(new AnimationModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit) , Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_animation_client_AnimationModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationModuleConfiguration', 304);
function AnimationModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(412, 15, $intern_31, AnimationModuleConfiguration$1);
var Lorg_dominokit_domino_animation_client_AnimationModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationModuleConfiguration/1', 412);
function AnimationModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(413, 16, $intern_32, AnimationModuleConfiguration$2);
var Lorg_dominokit_domino_animation_client_AnimationModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.animation.client', 'AnimationModuleConfiguration/2', 413);
function AnimationPresenterContributionToComponentCaseExtensionPoint(){
}

defineClass(658, 1, {}, AnimationPresenterContributionToComponentCaseExtensionPoint);
var Lorg_dominokit_domino_animation_client_contributions_AnimationPresenterContributionToComponentCaseExtensionPoint_2_classLit = createForClass('org.dominokit.domino.animation.client.contributions', 'AnimationPresenterContributionToComponentCaseExtensionPoint', 658);
var Lorg_dominokit_domino_animation_client_presenters_AnimationPresenter_2_classLit = createForClass('org.dominokit.domino.animation.client.presenters', 'AnimationPresenter', 410);
var Lorg_dominokit_domino_animation_client_presenters_AnimationPresenterCommand_2_classLit = createForClass('org.dominokit.domino.animation.client.presenters', 'AnimationPresenterCommand', 411);
function $clinit_ClientApp(){
  $clinit_ClientApp = emptyMethod;
  CLIENT_ROUTER_HOLDER = new ClientApp$AttributeHolder;
  SERVER_ROUTER_HOLDER = new ClientApp$AttributeHolder;
  EVENTS_BUS_HOLDER = new ClientApp$AttributeHolder;
  COMMANDS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  PRESENTERS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  VIEWS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  CONTRIBUTIONS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  REQUEST_REST_SENDERS_REPOSITORY_HOLDER = new ClientApp$AttributeHolder;
  MAIN_EXTENSION_POINT_HOLDER = new ClientApp$AttributeHolder;
  HISTORY_HOLDER = new ClientApp$AttributeHolder;
  INITIAL_TASKS_HOLDER = new ClientApp$AttributeHolder;
  ASYNC_RUNNER_HOLDER = new ClientApp$AttributeHolder;
  DOMINO_OPTIONS_HOLDER = new ClientApp$AttributeHolder;
  instance_1 = new ClientApp;
}

function $applyContributions_0(extensionPointInterface, extensionPoint){
  $findExtensionPointContributions(castTo(CONTRIBUTIONS_REPOSITORY_HOLDER.attribute, 1371), extensionPointInterface).forEach_0(new ClientApp$lambda$1$Type(extensionPoint));
}

function $configureModule(this$static, configuration){
  configuration.registerPresenters(this$static);
  configuration.registerRequests(this$static);
  configuration.registerViews(this$static);
  configuration.registerContributions(this$static);
  configuration.registerInitialTasks(this$static);
  configuration.registerRequestRestSenders(this$static);
}

function $lambda$1_1(extensionPoint_1, c_1){
  runAsync(1, new GwtAsyncRunner$1((castTo(ASYNC_RUNNER_HOLDER.attribute, 225) , new ClientApp$lambda$2$Type(c_1, extensionPoint_1))));
}

function $registerCommand(commandName, presenterName){
  $registerCommand_0(castTo(COMMANDS_REPOSITORY_HOLDER.attribute, 1369), new RequestHolder(commandName, presenterName));
}

function $registerContribution(extensionPoint, contribution){
  $registerContribution_0(castTo(CONTRIBUTIONS_REPOSITORY_HOLDER.attribute, 1371), extensionPoint, contribution);
}

function $registerPresenter(lazyPresenterLoader){
  $registerPresenter_0(castTo(PRESENTERS_REPOSITORY_HOLDER.attribute, 279), lazyPresenterLoader);
}

function $registerView(lazyViewLoader){
  $registerView_0(castTo(VIEWS_REPOSITORY_HOLDER.attribute, 1370), lazyViewLoader);
}

function ClientApp(){
}

defineClass(502, 1, {}, ClientApp);
var ASYNC_RUNNER_HOLDER, CLIENT_ROUTER_HOLDER, COMMANDS_REPOSITORY_HOLDER, CONTRIBUTIONS_REPOSITORY_HOLDER, DOMINO_OPTIONS_HOLDER, EVENTS_BUS_HOLDER, HISTORY_HOLDER, INITIAL_TASKS_HOLDER, MAIN_EXTENSION_POINT_HOLDER, PRESENTERS_REPOSITORY_HOLDER, REQUEST_REST_SENDERS_REPOSITORY_HOLDER, SERVER_ROUTER_HOLDER, VIEWS_REPOSITORY_HOLDER, instance_1;
var Lorg_dominokit_domino_api_client_ClientApp_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp', 502);
function ClientApp$0methodref$execute$Type(){
}

defineClass(504, 1, {}, ClientApp$0methodref$execute$Type);
_.accept_2 = function accept_10(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_api_client_ClientApp$0methodref$execute$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/0methodref$execute$Type', 504);
function $hold(this$static, attribute){
  this$static.attribute = attribute;
}

function ClientApp$AttributeHolder(){
}

defineClass(76, 1, {}, ClientApp$AttributeHolder);
var Lorg_dominokit_domino_api_client_ClientApp$AttributeHolder_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/AttributeHolder', 76);
function $asyncRunner(this$static, asyncRunner){
  this$static.asyncRunner = asyncRunner;
  return this$static;
}

function $contributionsRepository(this$static, contributionsRepository){
  this$static.contributionsRepository = contributionsRepository;
  return this$static;
}

function $dominoOptions(this$static, dominoOptions){
  this$static.dominoOptions = dominoOptions;
  return this$static;
}

function $eventsBus(this$static, eventsBus){
  this$static.eventsBus = eventsBus;
  return this$static;
}

function $history(this$static, history_0){
  this$static.history_0 = history_0;
  return this$static;
}

function $initClientApp(this$static){
  $hold(($clinit_ClientApp() , CLIENT_ROUTER_HOLDER), this$static.clientRouter);
  $hold(SERVER_ROUTER_HOLDER, this$static.serverRouter);
  $hold(EVENTS_BUS_HOLDER, this$static.eventsBus);
  $hold(COMMANDS_REPOSITORY_HOLDER, this$static.requestRepository);
  $hold(PRESENTERS_REPOSITORY_HOLDER, this$static.presentersRepository);
  $hold(VIEWS_REPOSITORY_HOLDER, this$static.viewsRepository);
  $hold(CONTRIBUTIONS_REPOSITORY_HOLDER, this$static.contributionsRepository);
  $hold(REQUEST_REST_SENDERS_REPOSITORY_HOLDER, this$static.requestRestSendersRepository);
  $hold(MAIN_EXTENSION_POINT_HOLDER, this$static.mainExtensionPoint);
  $hold(HISTORY_HOLDER, this$static.history_0);
  $hold(INITIAL_TASKS_HOLDER, new LinkedList);
  $hold(ASYNC_RUNNER_HOLDER, this$static.asyncRunner);
  $hold(DOMINO_OPTIONS_HOLDER, this$static.dominoOptions);
}

function $mainExtensionPoint(this$static, mainExtensionPoint){
  this$static.mainExtensionPoint = mainExtensionPoint;
  return this$static;
}

function $presentersRepository(this$static, presentersRepository){
  this$static.presentersRepository = presentersRepository;
  return this$static;
}

function $requestRepository(this$static, requestRepository){
  this$static.requestRepository = requestRepository;
  return this$static;
}

function $requestSendersRepository(this$static, requestRestSendersRepository){
  this$static.requestRestSendersRepository = requestRestSendersRepository;
  return this$static;
}

function $serverRouter(this$static, serverRouter){
  this$static.serverRouter = serverRouter;
  return this$static;
}

function $viewsRepository(this$static, viewsRepository){
  this$static.viewsRepository = viewsRepository;
  return this$static;
}

function ClientApp$ClientAppBuilder(clientRouter){
  this.clientRouter = clientRouter;
}

defineClass(503, 1, {}, ClientApp$ClientAppBuilder);
var Lorg_dominokit_domino_api_client_ClientApp$ClientAppBuilder_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/ClientAppBuilder', 503);
function ClientApp$lambda$1$Type(extensionPoint_1){
  this.extensionPoint_1 = extensionPoint_1;
}

defineClass(506, 1, {}, ClientApp$lambda$1$Type);
_.accept_2 = function accept_11(arg0){
  $lambda$1_1(this.extensionPoint_1, arg0);
}
;
var Lorg_dominokit_domino_api_client_ClientApp$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/lambda$1$Type', 506);
function ClientApp$lambda$2$Type(c_0, extensionPoint_1){
  this.c_0 = c_0;
  this.extensionPoint_1 = extensionPoint_1;
}

defineClass(505, 1, {}, ClientApp$lambda$2$Type);
_.onFailed = function onFailed(error){
  $error_0(($clinit_AsyncRunner() , LOGGER_3), 'Failed to run async task : ', error);
}
;
var Lorg_dominokit_domino_api_client_ClientApp$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ClientApp/lambda$2$Type', 505);
function DynamicServiceRoot(){
}

defineClass(210, 1, {210:1}, DynamicServiceRoot);
var Lorg_dominokit_domino_api_client_DynamicServiceRoot_2_classLit = createForClass('org.dominokit.domino.api.client', 'DynamicServiceRoot', 210);
function $configureModule_0(moduleConfiguration){
  $configureModule(($clinit_ClientApp() , $clinit_ClientApp() , instance_1), moduleConfiguration);
}

function $clinit_ServiceRootMatcher(){
  $clinit_ServiceRootMatcher = emptyMethod;
  defaultRoot = new DynamicServiceRoot;
}

var defaultRoot;
function ServiceRootMatcher$lambda$2$Type(){
}

defineClass(737, 1, {}, ServiceRootMatcher$lambda$2$Type);
_.test_0 = function test_0(arg0){
  return $clinit_ServiceRootMatcher() , $clinit_ServiceRootMatcher() , true;
}
;
var Lorg_dominokit_domino_api_client_ServiceRootMatcher$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ServiceRootMatcher/lambda$2$Type', 737);
function ServiceRootMatcher$lambda$3$Type(){
}

defineClass(738, 1, {}, ServiceRootMatcher$lambda$3$Type);
_.test_0 = function test_1(arg0){
  return $clinit_ServiceRootMatcher() , $clinit_ServiceRootMatcher() , true;
}
;
var Lorg_dominokit_domino_api_client_ServiceRootMatcher$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.api.client', 'ServiceRootMatcher/lambda$3$Type', 738);
function $clinit_AsyncRunner(){
  $clinit_AsyncRunner = emptyMethod;
  LOGGER_3 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_api_client_async_AsyncRunner_2_classLit) , Lorg_dominokit_domino_api_client_async_AsyncRunner_2_classLit.typeName));
}

var LOGGER_3;
var Lorg_dominokit_domino_api_client_async_AsyncRunner_2_classLit = createForInterface('org.dominokit.domino.api.client.async', 'AsyncRunner');
function PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce(message){
  RuntimeException_0.call(this, message);
}

defineClass(521, 19, $intern_3, PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce);
var Lorg_dominokit_domino_api_client_mvp_presenter_PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.presenter', 'PresentersRepository/PresenterCannotBeRegisteredMoreThanOnce', 521);
function ViewsRepository$ViewCannotBeRegisteredMoreThanOnce(message){
  RuntimeException_0.call(this, message);
}

defineClass(523, 19, $intern_3, ViewsRepository$ViewCannotBeRegisteredMoreThanOnce);
var Lorg_dominokit_domino_api_client_mvp_view_ViewsRepository$ViewCannotBeRegisteredMoreThanOnce_2_classLit = createForClass('org.dominokit.domino.api.client.mvp.view', 'ViewsRepository/ViewCannotBeRegisteredMoreThanOnce', 523);
function CommandsRepository$CommandCannotBeRegisteredMoreThanOnce(message){
  RuntimeException_0.call(this, message);
}

defineClass(518, 19, $intern_3, CommandsRepository$CommandCannotBeRegisteredMoreThanOnce);
var Lorg_dominokit_domino_api_client_request_CommandsRepository$CommandCannotBeRegisteredMoreThanOnce_2_classLit = createForClass('org.dominokit.domino.api.client.request', 'CommandsRepository/CommandCannotBeRegisteredMoreThanOnce', 518);
function RequestHolder(requestName, presenterName){
  this.requestName = requestName;
  this.presenterName = presenterName;
}

defineClass(142, 1, {142:1}, RequestHolder);
_.equals_0 = function equals_23(other){
  if (this === other)
    return true;
  if (other == null || Lorg_dominokit_domino_api_client_request_RequestHolder_2_classLit != getClass__Ljava_lang_Class___devirtual$(other))
    return false;
  if (!$equals_0(this.requestName, castTo(other, 142).requestName))
    return false;
  return $equals_0(this.presenterName, castTo(other, 142).presenterName);
}
;
_.hashCode_0 = function hashCode_27(){
  var result;
  result = getHashCode_1(this.requestName);
  result = 31 * result + getHashCode_1(this.presenterName);
  return result;
}
;
var Lorg_dominokit_domino_api_client_request_RequestHolder_2_classLit = createForClass('org.dominokit.domino.api.client.request', 'RequestHolder', 142);
var Lorg_dominokit_domino_api_shared_extension_MainExtensionPoint_2_classLit = createForInterface('org.dominokit.domino.api.shared.extension', 'MainExtensionPoint');
function HistoryToken$TokenCannotBeNullException(){
  RuntimeException.call(this);
}

defineClass(753, 19, $intern_3, HistoryToken$TokenCannotBeNullException);
var Lorg_dominokit_domino_api_shared_history_HistoryToken$TokenCannotBeNullException_2_classLit = createForClass('org.dominokit.domino.api.shared.history', 'HistoryToken/TokenCannotBeNullException', 753);
function SerializableLogRecord(){
}

defineClass(739, 1, $intern_4, SerializableLogRecord);
_.millis_0 = 0;
var Lorg_dominokit_domino_api_shared_logging_SerializableLogRecord_2_classLit = createForClass('org.dominokit.domino.api.shared.logging', 'SerializableLogRecord', 739);
function isNotNullValuePut(object, value_0, jsonName){
  var previous;
  !!object && (previous = $get_1(value_0, jsonName) , $put0(value_0, jsonName, object) , previous);
}

function toJSON(value_0){
  var i, rc, t, t$index, t$max;
  if (value_0 == null) {
    return $clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_0;
  }
  rc = new JSONArray;
  i = 0;
  for (t$index = 0 , t$max = value_0.length; t$index < t$max; ++t$index) {
    t = value_0[t$index];
    $set(rc, i++, $encode(t));
  }
  return rc;
}

function SerializableStackTraceElement(){
}

defineClass(207, 1, {4:1, 207:1}, SerializableStackTraceElement);
_.lineNumber = 0;
var Lorg_dominokit_domino_api_shared_logging_SerializableStackTraceElement_2_classLit = createForClass('org.dominokit.domino.api.shared.logging', 'SerializableStackTraceElement', 207);
function $encode(value_0){
  var rc;
  if (!value_0) {
    return $clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_0;
  }
  rc = new JSONObject;
  isNotNullValuePut($encode_3(value_0.className_0), rc, 'className');
  isNotNullValuePut($encode_3(value_0.fileName), rc, 'fileName');
  isNotNullValuePut($encode_3(value_0.methodName), rc, 'methodName');
  isNotNullValuePut($encode_1(valueOf(value_0.lineNumber)), rc, 'lineNumber');
  return rc;
}

function SerializableThrowable(){
}

defineClass(742, 1, $intern_4, SerializableThrowable);
var Lorg_dominokit_domino_api_shared_logging_SerializableThrowable_2_classLit = createForClass('org.dominokit.domino.api.shared.logging', 'SerializableThrowable', 742);
function $encode_0(value_0){
  var lastArg, rc;
  if (!value_0) {
    return $clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_0;
  }
  rc = new JSONObject;
  isNotNullValuePut($encode_3(value_0.type_0), rc, 'type');
  isNotNullValuePut($encode_3(value_0.message_0), rc, 'message');
  isNotNullValuePut($encode_0(value_0.cause), rc, 'cause');
  isNotNullValuePut(toJSON((lastArg = value_0.stackTrace , lastArg)), rc, 'stackTrace');
  return rc;
}

function $clinit_BadgesClientModule(){
  $clinit_BadgesClientModule = emptyMethod;
  LOGGER_4 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_BadgesClientModule_2_classLit) , Lorg_dominokit_domino_badges_client_BadgesClientModule_2_classLit.typeName));
}

var LOGGER_4;
var Lorg_dominokit_domino_badges_client_BadgesClientModule_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesClientModule', null);
function BadgesModuleConfiguration(){
}

defineClass(309, 1, {}, BadgesModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_2(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_2(registry){
}
;
_.registerContributions = function registerContributions_2(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new BadgesPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_2(registry){
  $registerPresenter(new BadgesModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_2(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenterCommand_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_2(registry){
  $registerView(new BadgesModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit) , Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_badges_client_BadgesModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesModuleConfiguration', 309);
function BadgesModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(432, 15, $intern_31, BadgesModuleConfiguration$1);
var Lorg_dominokit_domino_badges_client_BadgesModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesModuleConfiguration/1', 432);
function BadgesModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(433, 16, $intern_32, BadgesModuleConfiguration$2);
var Lorg_dominokit_domino_badges_client_BadgesModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.badges.client', 'BadgesModuleConfiguration/2', 433);
function BadgesPresenterContributionToComponentsExtensionPoint(){
}

defineClass(668, 1, {}, BadgesPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_badges_client_contributions_BadgesPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.badges.client.contributions', 'BadgesPresenterContributionToComponentsExtensionPoint', 668);
var Lorg_dominokit_domino_badges_client_presenters_BadgesPresenter_2_classLit = createForClass('org.dominokit.domino.badges.client.presenters', 'BadgesPresenter', 430);
var Lorg_dominokit_domino_badges_client_presenters_BadgesPresenterCommand_2_classLit = createForClass('org.dominokit.domino.badges.client.presenters', 'BadgesPresenterCommand', 431);
function $clinit_BasicFormsClientModule(){
  $clinit_BasicFormsClientModule = emptyMethod;
  LOGGER_5 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_BasicFormsClientModule_2_classLit) , Lorg_dominokit_domino_basicforms_client_BasicFormsClientModule_2_classLit.typeName));
}

var LOGGER_5;
var Lorg_dominokit_domino_basicforms_client_BasicFormsClientModule_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsClientModule', null);
function BasicFormsModuleConfiguration(){
}

defineClass(297, 1, {}, BasicFormsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_3(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_3(registry){
}
;
_.registerContributions = function registerContributions_3(registry){
  $registerContribution(Lorg_dominokit_domino_forms_shared_extension_FormsExtensionPoint_2_classLit, new BasicFormsPresenterContributionToFormsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_3(registry){
  $registerPresenter(new BasicFormsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_3(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenterCommand_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_3(registry){
  $registerView(new BasicFormsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit) , Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_basicforms_client_BasicFormsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsModuleConfiguration', 297);
function BasicFormsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(384, 15, $intern_31, BasicFormsModuleConfiguration$1);
var Lorg_dominokit_domino_basicforms_client_BasicFormsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsModuleConfiguration/1', 384);
function BasicFormsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(385, 16, $intern_32, BasicFormsModuleConfiguration$2);
var Lorg_dominokit_domino_basicforms_client_BasicFormsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.basicforms.client', 'BasicFormsModuleConfiguration/2', 385);
function BasicFormsPresenterContributionToFormsExtensionPoint(){
}

defineClass(644, 1, {}, BasicFormsPresenterContributionToFormsExtensionPoint);
var Lorg_dominokit_domino_basicforms_client_contributions_BasicFormsPresenterContributionToFormsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.basicforms.client.contributions', 'BasicFormsPresenterContributionToFormsExtensionPoint', 644);
var Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenter_2_classLit = createForClass('org.dominokit.domino.basicforms.client.presenters', 'BasicFormsPresenter', 382);
var Lorg_dominokit_domino_basicforms_client_presenters_BasicFormsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.basicforms.client.presenters', 'BasicFormsPresenterCommand', 383);
function $clinit_BreadcrumbClientModule(){
  $clinit_BreadcrumbClientModule = emptyMethod;
  LOGGER_6 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_BreadcrumbClientModule_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_BreadcrumbClientModule_2_classLit.typeName));
}

var LOGGER_6;
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbClientModule_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbClientModule', null);
function BreadcrumbModuleConfiguration(){
}

defineClass(315, 1, {}, BreadcrumbModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_4(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_4(registry){
}
;
_.registerContributions = function registerContributions_4(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new BreadcrumbPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_4(registry){
  $registerPresenter(new BreadcrumbModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_4(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenterCommand_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_4(registry){
  $registerView(new BreadcrumbModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit) , Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbModuleConfiguration', 315);
function BreadcrumbModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(456, 15, $intern_31, BreadcrumbModuleConfiguration$1);
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbModuleConfiguration/1', 456);
function BreadcrumbModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(457, 16, $intern_32, BreadcrumbModuleConfiguration$2);
var Lorg_dominokit_domino_breadcrumb_client_BreadcrumbModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client', 'BreadcrumbModuleConfiguration/2', 457);
function BreadcrumbPresenterContributionToComponentsExtensionPoint(){
}

defineClass(680, 1, {}, BreadcrumbPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_breadcrumb_client_contributions_BreadcrumbPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client.contributions', 'BreadcrumbPresenterContributionToComponentsExtensionPoint', 680);
var Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenter_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client.presenters', 'BreadcrumbPresenter', 454);
var Lorg_dominokit_domino_breadcrumb_client_presenters_BreadcrumbPresenterCommand_2_classLit = createForClass('org.dominokit.domino.breadcrumb.client.presenters', 'BreadcrumbPresenterCommand', 455);
function $clinit_ButtonsClientModule(){
  $clinit_ButtonsClientModule = emptyMethod;
  LOGGER_7 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_ButtonsClientModule_2_classLit) , Lorg_dominokit_domino_buttons_client_ButtonsClientModule_2_classLit.typeName));
}

var LOGGER_7;
var Lorg_dominokit_domino_buttons_client_ButtonsClientModule_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsClientModule', null);
function ButtonsModuleConfiguration(){
}

defineClass(307, 1, {}, ButtonsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_5(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_5(registry){
}
;
_.registerContributions = function registerContributions_5(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new ButtonsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_5(registry){
  $registerPresenter(new ButtonsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_5(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenterCommand_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_5(registry){
  $registerView(new ButtonsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit) , Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_buttons_client_ButtonsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsModuleConfiguration', 307);
function ButtonsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(424, 15, $intern_31, ButtonsModuleConfiguration$1);
var Lorg_dominokit_domino_buttons_client_ButtonsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsModuleConfiguration/1', 424);
function ButtonsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(425, 16, $intern_32, ButtonsModuleConfiguration$2);
var Lorg_dominokit_domino_buttons_client_ButtonsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.buttons.client', 'ButtonsModuleConfiguration/2', 425);
function ButtonsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(664, 1, {}, ButtonsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_buttons_client_contributions_ButtonsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.buttons.client.contributions', 'ButtonsPresenterContributionToComponentsExtensionPoint', 664);
var Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenter_2_classLit = createForClass('org.dominokit.domino.buttons.client.presenters', 'ButtonsPresenter', 422);
var Lorg_dominokit_domino_buttons_client_presenters_ButtonsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.buttons.client.presenters', 'ButtonsPresenterCommand', 423);
function $clinit_CardsClientModule(){
  $clinit_CardsClientModule = emptyMethod;
  LOGGER_9 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_CardsClientModule_2_classLit) , Lorg_dominokit_domino_cards_client_CardsClientModule_2_classLit.typeName));
}

var LOGGER_9;
var Lorg_dominokit_domino_cards_client_CardsClientModule_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsClientModule', null);
function CardsModuleConfiguration(){
}

defineClass(305, 1, {}, CardsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_6(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_6(registry){
}
;
_.registerContributions = function registerContributions_6(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new CardsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_6(registry){
  $registerPresenter(new CardsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_6(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenterCommand_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_6(registry){
  $registerView(new CardsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit) , Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_cards_client_CardsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsModuleConfiguration', 305);
function CardsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(416, 15, $intern_31, CardsModuleConfiguration$1);
var Lorg_dominokit_domino_cards_client_CardsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsModuleConfiguration/1', 416);
function CardsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(417, 16, $intern_32, CardsModuleConfiguration$2);
var Lorg_dominokit_domino_cards_client_CardsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.cards.client', 'CardsModuleConfiguration/2', 417);
function CardsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(660, 1, {}, CardsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_cards_client_contributions_CardsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.cards.client.contributions', 'CardsPresenterContributionToComponentsExtensionPoint', 660);
var Lorg_dominokit_domino_cards_client_presenters_CardsPresenter_2_classLit = createForClass('org.dominokit.domino.cards.client.presenters', 'CardsPresenter', 414);
var Lorg_dominokit_domino_cards_client_presenters_CardsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.cards.client.presenters', 'CardsPresenterCommand', 415);
function CoreMainExtensionPoint(){
}

defineClass(537, 1, {160:1, 1453:1}, CoreMainExtensionPoint);
var Lorg_dominokit_domino_client_commons_extensions_CoreMainExtensionPoint_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'CoreMainExtensionPoint', 537);
function $findExtensionPointContributions(this$static, extensionPoint){
  $getStringValue(this$static.contributions, ($ensureNamesAreInitialized(extensionPoint) , extensionPoint.canonicalName)) == null && $putStringValue(this$static.contributions, ($ensureNamesAreInitialized(extensionPoint) , extensionPoint.canonicalName), new HashSet);
  return castTo($collect($map(castTo($getStringValue(this$static.contributions, ($ensureNamesAreInitialized(extensionPoint) , extensionPoint.canonicalName)), 89).stream(), new InMemoryContributionRepository$lambda$0$Type), of_0(new Collectors$23methodref$ctor$Type, new Collectors$24methodref$add$Type, new Collectors$lambda$25$Type, new Collectors$lambda$26$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_2, 77, 0, [($clinit_Collector$Characteristics() , UNORDERED), IDENTITY_FINISH]))), 89);
}

function $registerContribution_0(this$static, extensionPoint, contribution){
  $getStringValue(this$static.contributions, ($ensureNamesAreInitialized(extensionPoint) , extensionPoint.canonicalName)) == null && $putStringValue(this$static.contributions, ($ensureNamesAreInitialized(extensionPoint) , extensionPoint.canonicalName), new HashSet);
  castTo($getStringValue(this$static.contributions, ($ensureNamesAreInitialized(extensionPoint) , extensionPoint.canonicalName)), 89).add_0(new InMemoryContributionRepository$ContributionWrapper(contribution));
}

function InMemoryContributionRepository(){
  this.contributions = new HashMap;
}

defineClass(525, 1, {1371:1}, InMemoryContributionRepository);
var Lorg_dominokit_domino_client_commons_extensions_InMemoryContributionRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'InMemoryContributionRepository', 525);
function InMemoryContributionRepository$ContributionWrapper(contribution){
  this.contribution = contribution;
}

defineClass(167, 1, {167:1}, InMemoryContributionRepository$ContributionWrapper);
_.equals_0 = function equals_24(other){
  if (other == null)
    return false;
  return $equals_0($getCanonicalName(getClass__Ljava_lang_Class___devirtual$(this.contribution)), $getCanonicalName(getClass__Ljava_lang_Class___devirtual$(castTo(other, 167).contribution)));
}
;
_.hashCode_0 = function hashCode_28(){
  return getHashCode_1($getCanonicalName(getClass__Ljava_lang_Class___devirtual$(this.contribution)));
}
;
var Lorg_dominokit_domino_client_commons_extensions_InMemoryContributionRepository$ContributionWrapper_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'InMemoryContributionRepository/ContributionWrapper', 167);
function InMemoryContributionRepository$lambda$0$Type(){
}

defineClass(526, 1, {}, InMemoryContributionRepository$lambda$0$Type);
_.apply_0 = function apply_4(arg0){
  return castTo(arg0, 167).contribution;
}
;
var Lorg_dominokit_domino_client_commons_extensions_InMemoryContributionRepository$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.extensions', 'InMemoryContributionRepository/lambda$0$Type', 526);
function $asPathsList(this$static, pathValue){
  if (pathValue == null)
    return $asPathsList(this$static, 'null');
  return castTo($collect($filter(stream_0($split($split($split($replace(pathValue, '!', ''), '\\?', 0)[0], '\\#', 0)[0], '/', 0)), new StateHistoryToken$lambda$5$Type), of_1(new StateHistoryToken$0methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_2, 77, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 63);
}

function $asQueryParameters(token){
  if (token.indexOf('?') == -1)
    return new HashMap;
  return castTo($collect($map(stream_0($split($split($split(token, '\\?', 0)[1], '\\#', 0)[0], '&', 0)), new StateHistoryToken$lambda$6$Type), of_1(new Collectors$22methodref$ctor$Type, new Collectors$lambda$23$Type, new Collectors$lambda$24$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_2, 77, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 109);
}

function $parseFragments(this$static, token){
  if (token.indexOf('#') != -1)
    return $asPathsList(this$static, $split(token, '\\#', 0)[1]);
  return new LinkedList;
}

function StateHistoryToken(token){
  this.paths = new LinkedList;
  this.queryParameters = new HashMap;
  this.fragments = new LinkedList;
  if (token == null)
    throw toJs(new HistoryToken$TokenCannotBeNullException);
  $addAll(this.paths, $asPathsList(this, token));
  $putAll(this.queryParameters, $asQueryParameters(token));
  this.fragments.addAll($parseFragments(this, token));
}

defineClass(93, 1, {}, StateHistoryToken);
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken', 93);
function StateHistoryToken$0methodref$ctor$Type(){
}

defineClass(755, 1, {}, StateHistoryToken$0methodref$ctor$Type);
_.get_2 = function get_13(){
  return new LinkedList;
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$0methodref$ctor$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/0methodref$ctor$Type', 755);
function StateHistoryToken$lambda$5$Type(){
}

defineClass(754, 1, {}, StateHistoryToken$lambda$5$Type);
_.test_0 = function test_2(arg0){
  return castToString(arg0).length != 0;
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/lambda$5$Type', 754);
function StateHistoryToken$lambda$6$Type(){
}

defineClass(756, 1, {}, StateHistoryToken$lambda$6$Type);
_.apply_0 = function apply_6(arg0){
  return $split(castToString(arg0), '=', 0);
}
;
var Lorg_dominokit_domino_client_commons_history_StateHistoryToken$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.client.commons.history', 'StateHistoryToken/lambda$6$Type', 756);
function $isRegisteredPresenter(this$static, presenterName){
  return $hasStringValue(this$static.presenters, presenterName);
}

function $registerPresenter_0(this$static, lazyPresenterLoader){
  if ($isRegisteredPresenter(this$static, lazyPresenterLoader.name_0))
    throw toJs(new PresentersRepository$PresenterCannotBeRegisteredMoreThanOnce(lazyPresenterLoader.name_0));
  $putStringValue(this$static.presenters, lazyPresenterLoader.name_0, lazyPresenterLoader);
  $putStringValue(this$static.names, lazyPresenterLoader.concreteName, lazyPresenterLoader.name_0);
}

function InMemoryPresentersRepository(){
  this.presenters = new HashMap;
  this.names = new HashMap;
}

defineClass(520, 1, {279:1}, InMemoryPresentersRepository);
var Lorg_dominokit_domino_client_commons_mvp_presenter_InMemoryPresentersRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.mvp.presenter', 'InMemoryPresentersRepository', 520);
function $isRegisteredPresenterView(this$static, presenterName){
  return $hasStringValue(this$static.views, presenterName);
}

function $registerView_0(this$static, lazyViewLoader){
  if ($isRegisteredPresenterView(this$static, lazyViewLoader.presenterName))
    throw toJs(new ViewsRepository$ViewCannotBeRegisteredMoreThanOnce(lazyViewLoader.presenterName));
  $putStringValue(this$static.views, lazyViewLoader.presenterName, lazyViewLoader);
}

function InMemoryViewRepository(){
  this.views = new HashMap;
}

defineClass(522, 1, {1370:1}, InMemoryViewRepository);
var Lorg_dominokit_domino_client_commons_mvp_view_InMemoryViewRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.mvp.view', 'InMemoryViewRepository', 522);
var Lorg_dominokit_domino_client_commons_request_RequestAsyncSender_2_classLit = createForInterface('org.dominokit.domino.client.commons.request', 'RequestAsyncSender');
function $clinit_AbstractRequestAsyncSender(){
  $clinit_AbstractRequestAsyncSender = emptyMethod;
  LOGGER_10 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_client_commons_request_RequestAsyncSender_2_classLit) , Lorg_dominokit_domino_client_commons_request_RequestAsyncSender_2_classLit.typeName));
}

defineClass(1397, 1, {});
var LOGGER_10;
var Lorg_dominokit_domino_client_commons_request_AbstractRequestAsyncSender_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'AbstractRequestAsyncSender', 1397);
function $clinit_ClientRouter(){
  $clinit_ClientRouter = emptyMethod;
  LOGGER_11 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_client_commons_request_ClientRouter_2_classLit) , Lorg_dominokit_domino_client_commons_request_ClientRouter_2_classLit.typeName));
}

function ClientRouter(){
  $clinit_ClientRouter();
}

defineClass(510, 1, $intern_33, ClientRouter);
var LOGGER_11;
var Lorg_dominokit_domino_client_commons_request_ClientRouter_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'ClientRouter', 510);
function $isRegisteredRequest(this$static, requestName){
  return $hasStringValue(this$static.requestPresenterWrappers, requestName);
}

function $registerCommand_0(this$static, requestHolder){
  if ($isRegisteredRequest(this$static, requestHolder.requestName))
    throw toJs(new CommandsRepository$CommandCannotBeRegisteredMoreThanOnce('Request key [' + requestHolder.requestName + ']'));
  $putStringValue(this$static.requestPresenterWrappers, requestHolder.requestName, requestHolder);
}

function InMemoryCommandsRepository(){
  this.requestPresenterWrappers = new HashMap;
}

defineClass(517, 1, {1369:1}, InMemoryCommandsRepository);
var Lorg_dominokit_domino_client_commons_request_InMemoryCommandsRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'InMemoryCommandsRepository', 517);
function InMemoryRequestRestSendersRepository(){
  this.senders = new HashMap;
}

defineClass(528, 1, {1451:1}, InMemoryRequestRestSendersRepository);
var Lorg_dominokit_domino_client_commons_request_InMemoryRequestRestSendersRepository_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'InMemoryRequestRestSendersRepository', 528);
function ServerRouter(){
}

defineClass(512, 1, $intern_33, ServerRouter);
var Lorg_dominokit_domino_client_commons_request_ServerRouter_2_classLit = createForClass('org.dominokit.domino.client.commons.request', 'ServerRouter', 512);
function $clinit_CollapseClientModule(){
  $clinit_CollapseClientModule = emptyMethod;
  LOGGER_12 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_CollapseClientModule_2_classLit) , Lorg_dominokit_domino_collapse_client_CollapseClientModule_2_classLit.typeName));
}

var LOGGER_12;
var Lorg_dominokit_domino_collapse_client_CollapseClientModule_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseClientModule', null);
function CollapseModuleConfiguration(){
}

defineClass(316, 1, {}, CollapseModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_7(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_7(registry){
}
;
_.registerContributions = function registerContributions_7(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new CollapsePresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_7(registry){
  $registerPresenter(new CollapseModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_7(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenterCommand_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_7(registry){
  $registerView(new CollapseModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit) , Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_collapse_client_CollapseModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseModuleConfiguration', 316);
function CollapseModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(460, 15, $intern_31, CollapseModuleConfiguration$1);
var Lorg_dominokit_domino_collapse_client_CollapseModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseModuleConfiguration/1', 460);
function CollapseModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(461, 16, $intern_32, CollapseModuleConfiguration$2);
var Lorg_dominokit_domino_collapse_client_CollapseModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.collapse.client', 'CollapseModuleConfiguration/2', 461);
function CollapsePresenterContributionToComponentsExtensionPoint(){
}

defineClass(682, 1, {}, CollapsePresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_collapse_client_contributions_CollapsePresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.collapse.client.contributions', 'CollapsePresenterContributionToComponentsExtensionPoint', 682);
var Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenter_2_classLit = createForClass('org.dominokit.domino.collapse.client.presenters', 'CollapsePresenter', 458);
var Lorg_dominokit_domino_collapse_client_presenters_CollapsePresenterCommand_2_classLit = createForClass('org.dominokit.domino.collapse.client.presenters', 'CollapsePresenterCommand', 459);
function $clinit_ColorsClientModule(){
  $clinit_ColorsClientModule = emptyMethod;
  LOGGER_13 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_ColorsClientModule_2_classLit) , Lorg_dominokit_domino_colors_client_ColorsClientModule_2_classLit.typeName));
}

var LOGGER_13;
var Lorg_dominokit_domino_colors_client_ColorsClientModule_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsClientModule', null);
function ColorsModuleConfiguration(){
}

defineClass(303, 1, {}, ColorsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_8(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_8(registry){
}
;
_.registerContributions = function registerContributions_8(registry){
  $registerContribution(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit, new ColorsPresenterContributionToComponentCaseExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_8(registry){
  $registerPresenter(new ColorsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_8(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenterCommand_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_8(registry){
  $registerView(new ColorsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit) , Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_colors_client_ColorsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsModuleConfiguration', 303);
function ColorsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(408, 15, $intern_31, ColorsModuleConfiguration$1);
var Lorg_dominokit_domino_colors_client_ColorsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsModuleConfiguration/1', 408);
function ColorsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(409, 16, $intern_32, ColorsModuleConfiguration$2);
var Lorg_dominokit_domino_colors_client_ColorsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.colors.client', 'ColorsModuleConfiguration/2', 409);
function ColorsPresenterContributionToComponentCaseExtensionPoint(){
}

defineClass(656, 1, {}, ColorsPresenterContributionToComponentCaseExtensionPoint);
var Lorg_dominokit_domino_colors_client_contributions_ColorsPresenterContributionToComponentCaseExtensionPoint_2_classLit = createForClass('org.dominokit.domino.colors.client.contributions', 'ColorsPresenterContributionToComponentCaseExtensionPoint', 656);
var Lorg_dominokit_domino_colors_client_presenters_ColorsPresenter_2_classLit = createForClass('org.dominokit.domino.colors.client.presenters', 'ColorsPresenter', 406);
var Lorg_dominokit_domino_colors_client_presenters_ColorsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.colors.client.presenters', 'ColorsPresenterCommand', 407);
function $clinit_ComponentCaseClientModule(){
  $clinit_ComponentCaseClientModule = emptyMethod;
  LOGGER_14 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_ComponentCaseClientModule_2_classLit) , Lorg_dominokit_domino_componentcase_client_ComponentCaseClientModule_2_classLit.typeName));
}

var LOGGER_14;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseClientModule_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseClientModule', null);
function ComponentCaseModuleConfiguration(){
}

defineClass(290, 1, {}, ComponentCaseModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_9(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_9(registry){
}
;
_.registerViews = function registerViews_9(registry){
}
;
_.registerContributions = function registerContributions_9(registry){
  $registerContribution(Lorg_dominokit_domino_layout_shared_extension_LayoutExtensionPoint_2_classLit, new ComponentCasePresenterContributionToLayoutExtensionPoint);
  $registerContribution(Lorg_dominokit_domino_menu_shared_extension_MenuExtensionPoint_2_classLit, new ComponentCasePresenterContributionToMenuExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_9(registry){
  $registerPresenter(new ComponentCaseModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_9(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenterCommand_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseModuleConfiguration', 290);
function ComponentCaseModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(368, 15, $intern_31, ComponentCaseModuleConfiguration$1);
var Lorg_dominokit_domino_componentcase_client_ComponentCaseModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseModuleConfiguration/1', 368);
function $clinit_ComponentCaseUIClientModule(){
  $clinit_ComponentCaseUIClientModule = emptyMethod;
  LOGGER_15 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_ComponentCaseUIClientModule_2_classLit) , Lorg_dominokit_domino_componentcase_client_ComponentCaseUIClientModule_2_classLit.typeName));
}

var LOGGER_15;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseUIClientModule_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseUIClientModule', null);
function ComponentCaseUIModuleConfiguration(){
}

defineClass(291, 1, {}, ComponentCaseUIModuleConfiguration);
_.registerContributions = function registerContributions_10(registry){
}
;
_.registerInitialTasks = function registerInitialTasks_10(registry){
}
;
_.registerPresenters = function registerPresenters_10(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_10(registry){
}
;
_.registerRequests = function registerRequests_10(registry){
}
;
_.registerViews = function registerViews_10(registry){
  $registerView(new ComponentCaseUIModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit) , Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_componentcase_client_ComponentCaseUIModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseUIModuleConfiguration', 291);
function ComponentCaseUIModuleConfiguration$1($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(369, 16, $intern_32, ComponentCaseUIModuleConfiguration$1);
var Lorg_dominokit_domino_componentcase_client_ComponentCaseUIModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.componentcase.client', 'ComponentCaseUIModuleConfiguration/1', 369);
function ComponentCasePresenterContributionToLayoutExtensionPoint(){
}

defineClass(634, 1, {}, ComponentCasePresenterContributionToLayoutExtensionPoint);
var Lorg_dominokit_domino_componentcase_client_contributions_ComponentCasePresenterContributionToLayoutExtensionPoint_2_classLit = createForClass('org.dominokit.domino.componentcase.client.contributions', 'ComponentCasePresenterContributionToLayoutExtensionPoint', 634);
function ComponentCasePresenterContributionToMenuExtensionPoint(){
}

defineClass(636, 1, {}, ComponentCasePresenterContributionToMenuExtensionPoint);
var Lorg_dominokit_domino_componentcase_client_contributions_ComponentCasePresenterContributionToMenuExtensionPoint_2_classLit = createForClass('org.dominokit.domino.componentcase.client.contributions', 'ComponentCasePresenterContributionToMenuExtensionPoint', 636);
var Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenter_2_classLit = createForClass('org.dominokit.domino.componentcase.client.presenters', 'ComponentCasePresenter', 367);
var Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit = createForInterface('org.dominokit.domino.componentcase.shared.extension', 'ComponentCaseExtensionPoint');
var Lorg_dominokit_domino_componentcase_client_presenters_ComponentCasePresenterCommand_2_classLit = createForClass('org.dominokit.domino.componentcase.client.presenters', 'ComponentCasePresenterCommand', 238);
function $clinit_ComponentsClientModule(){
  $clinit_ComponentsClientModule = emptyMethod;
  LOGGER_16 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_ComponentsClientModule_2_classLit) , Lorg_dominokit_domino_components_client_ComponentsClientModule_2_classLit.typeName));
}

var LOGGER_16;
var Lorg_dominokit_domino_components_client_ComponentsClientModule_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsClientModule', null);
function ComponentsModuleConfiguration(){
}

defineClass(293, 1, {}, ComponentsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_11(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_11(registry){
}
;
_.registerViews = function registerViews_11(registry){
}
;
_.registerContributions = function registerContributions_11(registry){
  $registerContribution(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit, new ComponentsPresenterContributionToComponentCaseExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_11(registry){
  $registerPresenter(new ComponentsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_11(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenterCommand_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_components_client_ComponentsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsModuleConfiguration', 293);
function ComponentsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(376, 15, $intern_31, ComponentsModuleConfiguration$1);
var Lorg_dominokit_domino_components_client_ComponentsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsModuleConfiguration/1', 376);
function $clinit_ComponentsUIClientModule(){
  $clinit_ComponentsUIClientModule = emptyMethod;
  LOGGER_17 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_ComponentsUIClientModule_2_classLit) , Lorg_dominokit_domino_components_client_ComponentsUIClientModule_2_classLit.typeName));
}

var LOGGER_17;
var Lorg_dominokit_domino_components_client_ComponentsUIClientModule_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsUIClientModule', null);
function ComponentsUIModuleConfiguration(){
}

defineClass(294, 1, {}, ComponentsUIModuleConfiguration);
_.registerContributions = function registerContributions_12(registry){
}
;
_.registerInitialTasks = function registerInitialTasks_12(registry){
}
;
_.registerPresenters = function registerPresenters_12(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_12(registry){
}
;
_.registerRequests = function registerRequests_12(registry){
}
;
_.registerViews = function registerViews_12(registry){
  $registerView(new ComponentsUIModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit) , Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_components_client_ComponentsUIModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsUIModuleConfiguration', 294);
function ComponentsUIModuleConfiguration$1($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(377, 16, $intern_32, ComponentsUIModuleConfiguration$1);
var Lorg_dominokit_domino_components_client_ComponentsUIModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.components.client', 'ComponentsUIModuleConfiguration/1', 377);
function ComponentsPresenterContributionToComponentCaseExtensionPoint(){
}

defineClass(640, 1, {}, ComponentsPresenterContributionToComponentCaseExtensionPoint);
var Lorg_dominokit_domino_components_client_contributions_ComponentsPresenterContributionToComponentCaseExtensionPoint_2_classLit = createForClass('org.dominokit.domino.components.client.contributions', 'ComponentsPresenterContributionToComponentCaseExtensionPoint', 640);
var Lorg_dominokit_domino_components_client_presenters_ComponentsPresenter_2_classLit = createForClass('org.dominokit.domino.components.client.presenters', 'ComponentsPresenter', 374);
var Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit = createForInterface('org.dominokit.domino.components.shared.extension', 'ComponentsExtensionPoint');
var Lorg_dominokit_domino_components_client_presenters_ComponentsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.components.client.presenters', 'ComponentsPresenterCommand', 375);
function $clinit_DatePickerClientModule(){
  $clinit_DatePickerClientModule = emptyMethod;
  LOGGER_18 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_DatePickerClientModule_2_classLit) , Lorg_dominokit_domino_datepicker_client_DatePickerClientModule_2_classLit.typeName));
}

var LOGGER_18;
var Lorg_dominokit_domino_datepicker_client_DatePickerClientModule_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerClientModule', null);
function DatePickerModuleConfiguration(){
}

defineClass(299, 1, {}, DatePickerModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_13(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_13(registry){
}
;
_.registerContributions = function registerContributions_13(registry){
  $registerContribution(Lorg_dominokit_domino_forms_shared_extension_FormsExtensionPoint_2_classLit, new DatePickerPresenterContributionToFormsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_13(registry){
  $registerPresenter(new DatePickerModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_13(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenterCommand_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_13(registry){
  $registerView(new DatePickerModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit) , Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_datepicker_client_DatePickerModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerModuleConfiguration', 299);
function DatePickerModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(392, 15, $intern_31, DatePickerModuleConfiguration$1);
var Lorg_dominokit_domino_datepicker_client_DatePickerModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerModuleConfiguration/1', 392);
function DatePickerModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(393, 16, $intern_32, DatePickerModuleConfiguration$2);
var Lorg_dominokit_domino_datepicker_client_DatePickerModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.datepicker.client', 'DatePickerModuleConfiguration/2', 393);
function DatePickerPresenterContributionToFormsExtensionPoint(){
}

defineClass(648, 1, {}, DatePickerPresenterContributionToFormsExtensionPoint);
var Lorg_dominokit_domino_datepicker_client_contributions_DatePickerPresenterContributionToFormsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.datepicker.client.contributions', 'DatePickerPresenterContributionToFormsExtensionPoint', 648);
var Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenter_2_classLit = createForClass('org.dominokit.domino.datepicker.client.presenters', 'DatePickerPresenter', 390);
var Lorg_dominokit_domino_datepicker_client_presenters_DatePickerPresenterCommand_2_classLit = createForClass('org.dominokit.domino.datepicker.client.presenters', 'DatePickerPresenterCommand', 391);
function $clinit_DialogsClientModule(){
  $clinit_DialogsClientModule = emptyMethod;
  LOGGER_19 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_DialogsClientModule_2_classLit) , Lorg_dominokit_domino_dialogs_client_DialogsClientModule_2_classLit.typeName));
}

var LOGGER_19;
var Lorg_dominokit_domino_dialogs_client_DialogsClientModule_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsClientModule', null);
function DialogsModuleConfiguration(){
}

defineClass(324, 1, {}, DialogsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_14(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_14(registry){
}
;
_.registerContributions = function registerContributions_14(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new DialogsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_14(registry){
  $registerPresenter(new DialogsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_14(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenterCommand_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_14(registry){
  $registerView(new DialogsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit) , Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_dialogs_client_DialogsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsModuleConfiguration', 324);
function DialogsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(492, 15, $intern_31, DialogsModuleConfiguration$1);
var Lorg_dominokit_domino_dialogs_client_DialogsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsModuleConfiguration/1', 492);
function DialogsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(493, 16, $intern_32, DialogsModuleConfiguration$2);
var Lorg_dominokit_domino_dialogs_client_DialogsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.dialogs.client', 'DialogsModuleConfiguration/2', 493);
function DialogsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(698, 1, {}, DialogsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_dialogs_client_contributions_DialogsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.dialogs.client.contributions', 'DialogsPresenterContributionToComponentsExtensionPoint', 698);
var Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenter_2_classLit = createForClass('org.dominokit.domino.dialogs.client.presenters', 'DialogsPresenter', 490);
var Lorg_dominokit_domino_dialogs_client_presenters_DialogsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.dialogs.client.presenters', 'DialogsPresenterCommand', 491);
function $clinit_FormsClientModule(){
  $clinit_FormsClientModule = emptyMethod;
  LOGGER_20 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_FormsClientModule_2_classLit) , Lorg_dominokit_domino_forms_client_FormsClientModule_2_classLit.typeName));
}

var LOGGER_20;
var Lorg_dominokit_domino_forms_client_FormsClientModule_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsClientModule', null);
function FormsModuleConfiguration(){
}

defineClass(295, 1, {}, FormsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_15(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_15(registry){
}
;
_.registerViews = function registerViews_15(registry){
}
;
_.registerContributions = function registerContributions_15(registry){
  $registerContribution(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit, new FormsPresenterContributionToComponentCaseExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_15(registry){
  $registerPresenter(new FormsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_15(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenterCommand_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_forms_client_FormsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsModuleConfiguration', 295);
function FormsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(380, 15, $intern_31, FormsModuleConfiguration$1);
var Lorg_dominokit_domino_forms_client_FormsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsModuleConfiguration/1', 380);
function $clinit_FormsUIClientModule(){
  $clinit_FormsUIClientModule = emptyMethod;
  LOGGER_21 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_FormsUIClientModule_2_classLit) , Lorg_dominokit_domino_forms_client_FormsUIClientModule_2_classLit.typeName));
}

var LOGGER_21;
var Lorg_dominokit_domino_forms_client_FormsUIClientModule_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsUIClientModule', null);
function FormsUIModuleConfiguration(){
}

defineClass(296, 1, {}, FormsUIModuleConfiguration);
_.registerContributions = function registerContributions_16(registry){
}
;
_.registerInitialTasks = function registerInitialTasks_16(registry){
}
;
_.registerPresenters = function registerPresenters_16(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_16(registry){
}
;
_.registerRequests = function registerRequests_16(registry){
}
;
_.registerViews = function registerViews_16(registry){
  $registerView(new FormsUIModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit) , Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_forms_client_FormsUIModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsUIModuleConfiguration', 296);
function FormsUIModuleConfiguration$1($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(381, 16, $intern_32, FormsUIModuleConfiguration$1);
var Lorg_dominokit_domino_forms_client_FormsUIModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.forms.client', 'FormsUIModuleConfiguration/1', 381);
function FormsPresenterContributionToComponentCaseExtensionPoint(){
}

defineClass(642, 1, {}, FormsPresenterContributionToComponentCaseExtensionPoint);
var Lorg_dominokit_domino_forms_client_contributions_FormsPresenterContributionToComponentCaseExtensionPoint_2_classLit = createForClass('org.dominokit.domino.forms.client.contributions', 'FormsPresenterContributionToComponentCaseExtensionPoint', 642);
var Lorg_dominokit_domino_forms_client_presenters_FormsPresenter_2_classLit = createForClass('org.dominokit.domino.forms.client.presenters', 'FormsPresenter', 378);
var Lorg_dominokit_domino_forms_shared_extension_FormsExtensionPoint_2_classLit = createForInterface('org.dominokit.domino.forms.shared.extension', 'FormsExtensionPoint');
var Lorg_dominokit_domino_forms_client_presenters_FormsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.forms.client.presenters', 'FormsPresenterCommand', 379);
function $clinit_Core(){
  $clinit_Core = emptyMethod;
  LOGGER_22 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_gwt_client_Core_2_classLit) , Lorg_dominokit_domino_gwt_client_Core_2_classLit.typeName));
}

var LOGGER_22;
var Lorg_dominokit_domino_gwt_client_Core_2_classLit = createForClass('org.dominokit.domino.gwt.client', 'Core', null);
function $clinit_CoreModule(){
  $clinit_CoreModule = emptyMethod;
  LOGGER_23 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_gwt_client_app_CoreModule_2_classLit) , Lorg_dominokit_domino_gwt_client_app_CoreModule_2_classLit.typeName));
}

var LOGGER_23;
var Lorg_dominokit_domino_gwt_client_app_CoreModule_2_classLit = createForClass('org.dominokit.domino.gwt.client.app', 'CoreModule', null);
function CoreModule$lambda$0$Type(){
}

defineClass(350, 1, {}, CoreModule$lambda$0$Type);
_.onUncaughtException = function onUncaughtException_0(arg0){
  $clinit_CoreModule();
  $error_0(LOGGER_23, 'Uncaught Exception', arg0);
}
;
var Lorg_dominokit_domino_gwt_client_app_CoreModule$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.app', 'CoreModule/lambda$0$Type', 350);
function GwtAsyncRunner(){
}

defineClass(536, 1, {225:1}, GwtAsyncRunner);
var Lorg_dominokit_domino_gwt_client_async_GwtAsyncRunner_2_classLit = createForClass('org.dominokit.domino.gwt.client.async', 'GwtAsyncRunner', 536);
function GwtAsyncRunner$1(val$asyncTask){
  this.val$asyncTask2 = val$asyncTask;
}

defineClass(169, 1, $intern_34, GwtAsyncRunner$1);
_.onFailure_0 = function onFailure_1(reason){
  this.val$asyncTask2.onFailed(reason);
}
;
var Lorg_dominokit_domino_gwt_client_async_GwtAsyncRunner$1_2_classLit = createForClass('org.dominokit.domino.gwt.client.async', 'GwtAsyncRunner/1', 169);
function $clinit_ClientRequestGwtEvent(){
  $clinit_ClientRequestGwtEvent = emptyMethod;
  CLIENT_REQUEST_EVENT_TYPE = new GwtEvent$Type;
}

var CLIENT_REQUEST_EVENT_TYPE;
function RequestEventProcessor(){
}

defineClass(513, 1, {1449:1}, RequestEventProcessor);
var Lorg_dominokit_domino_gwt_client_events_RequestEventProcessor_2_classLit = createForClass('org.dominokit.domino.gwt.client.events', 'RequestEventProcessor', 513);
function $clinit_ServerFailedRequestGwtEvent(){
  $clinit_ServerFailedRequestGwtEvent = emptyMethod;
  SERVER_FAILED_REQUEST_EVENT_TYPE = new GwtEvent$Type;
}

var SERVER_FAILED_REQUEST_EVENT_TYPE;
function $clinit_ServerSuccessRequestGwtEvent(){
  $clinit_ServerSuccessRequestGwtEvent = emptyMethod;
  SERVER_SUCCESS_REQUEST_EVENT_TYPE = new GwtEvent$Type;
}

var SERVER_SUCCESS_REQUEST_EVENT_TYPE;
function $clinit_SimpleEventsBus(){
  $clinit_SimpleEventsBus = emptyMethod;
  LOGGER_24 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_gwt_client_events_SimpleEventsBus_2_classLit) , Lorg_dominokit_domino_gwt_client_events_SimpleEventsBus_2_classLit.typeName));
  simpleGwtEventsBus = new SimpleEventBus;
}

function SimpleEventsBus(eventProcessor){
  $clinit_SimpleEventsBus();
  $addHandler(simpleGwtEventsBus, ($clinit_ClientRequestGwtEvent() , CLIENT_REQUEST_EVENT_TYPE), eventProcessor);
  $addHandler(simpleGwtEventsBus, ($clinit_ServerSuccessRequestGwtEvent() , SERVER_SUCCESS_REQUEST_EVENT_TYPE), eventProcessor);
  $addHandler(simpleGwtEventsBus, ($clinit_ServerFailedRequestGwtEvent() , SERVER_FAILED_REQUEST_EVENT_TYPE), eventProcessor);
}

defineClass(514, 1, {1450:1}, SimpleEventsBus);
var LOGGER_24, simpleGwtEventsBus;
var Lorg_dominokit_domino_gwt_client_events_SimpleEventsBus_2_classLit = createForClass('org.dominokit.domino.gwt.client.events', 'SimpleEventsBus', 514);
function $inform(this$static, token, stateJson){
  $forEach_4($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.listeners, 1)), new StateHistory$lambda$1$Type(token, stateJson)), new StateHistory$lambda$2$Type(token, stateJson));
}

function $lambda$0_4(this$static, event_0){
  var popStateEvent, state;
  popStateEvent = castToNative(event_0, $wnd.PopStateEvent);
  state = castToJsObject(popStateEvent.state);
  state != null && $inform(this$static, state.historyToken, state.data);
}

function $lambda$1_3(token_1, stateJson_3, l_3){
  return l_3.tokenFilter.filter_1((new StateHistory$DominoHistoryState(token_1, stateJson_3)).token);
}

function $lambda$2(token_1, stateJson_3, l_3){
  $clinit_ClientApp();
  runAsync(1, new GwtAsyncRunner$1((castTo(ASYNC_RUNNER_HOLDER.attribute, 225) , new StateHistory$lambda$3$Type(l_3, token_1, stateJson_3))));
}

function StateHistory(){
  this.listeners = new HashSet;
  this.history_0 = castToNative(($clinit_DomGlobal() , self_0).history, $wnd.History);
  self_0.addEventListener('popstate', new StateHistory$lambda$0$Type(this));
}

defineClass(204, 1, {78:1, 204:1}, StateHistory);
var Lorg_dominokit_domino_gwt_client_history_StateHistory_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory', 204);
function StateHistory$DominoHistoryState(token, data_0){
  this.token = new StateHistoryToken(token);
  this.data_0 = data_0;
}

defineClass(168, 1, {}, StateHistory$DominoHistoryState);
var Lorg_dominokit_domino_gwt_client_history_StateHistory$DominoHistoryState_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/DominoHistoryState', 168);
function StateHistory$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(531, 1, {}, StateHistory$lambda$0$Type);
_.handleEvent = function handleEvent_103(arg0){
  $lambda$0_4(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$0$Type', 531);
function StateHistory$lambda$1$Type(token_1, stateJson_3){
  this.token_1 = token_1;
  this.stateJson_3 = stateJson_3;
}

defineClass(532, 1, {}, StateHistory$lambda$1$Type);
_.test_0 = function test_3(arg0){
  return $lambda$1_3(this.token_1, this.stateJson_3, arg0);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$1$Type', 532);
function StateHistory$lambda$2$Type(token_1, stateJson_3){
  this.token_1 = token_1;
  this.stateJson_3 = stateJson_3;
}

defineClass(534, 1, {}, StateHistory$lambda$2$Type);
_.accept_2 = function accept_14(arg0){
  $lambda$2(this.token_1, this.stateJson_3, arg0);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$2$Type', 534);
function StateHistory$lambda$3$Type(l_1, token_2, stateJson_4){
  this.l_1 = l_1;
  this.token_2 = token_2;
  this.stateJson_4 = stateJson_4;
}

defineClass(533, 1, {}, StateHistory$lambda$3$Type);
_.onFailed = function onFailed_2(error){
  $error_0(($clinit_AsyncRunner() , LOGGER_3), 'Failed to run async task : ', error);
}
;
var Lorg_dominokit_domino_gwt_client_history_StateHistory$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.history', 'StateHistory/lambda$3$Type', 533);
function $asSerializableStackTrace(stackTraceElements){
  var collected;
  return collected = castTo($collect($map(new StreamImpl(null, spliterator_3(stackTraceElements, stackTraceElements.length)), new RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_2, 77, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 63) , castTo(collected.toArray_0($apply_0(collected.size_1())), 1455);
}

function $asSerializableStackTraceElement(stackTraceElement){
  var serializableStackTraceElement;
  serializableStackTraceElement = new SerializableStackTraceElement;
  serializableStackTraceElement.className_0 = stackTraceElement.className_0;
  serializableStackTraceElement.fileName = stackTraceElement.fileName;
  serializableStackTraceElement.methodName = stackTraceElement.methodName;
  serializableStackTraceElement.lineNumber = stackTraceElement.lineNumber;
  return serializableStackTraceElement;
}

function $serializableThrowable(this$static, throwable){
  var serializableThrowable;
  if (!throwable)
    return null;
  serializableThrowable = new SerializableThrowable;
  serializableThrowable.type_0 = $getName(throwable.___clazz);
  serializableThrowable.message_0 = throwable.getMessage();
  serializableThrowable.cause = $serializableThrowable(this$static, throwable.cause);
  serializableThrowable.stackTrace = $asSerializableStackTrace(castTo($orElseGet(ofNullable((throwable.stackTrace == null && (throwable.stackTrace = $constructJavaStackTrace(throwable)) , throwable.stackTrace))), 200));
  return serializableThrowable;
}

function RestfulRemoteLogHandler(){
  $clinit_RemoteLogHandlerBase();
  this.excludedLoggerNames = new ArrayList;
  $add_0(this.excludedLoggerNames, 'WireActivityLogger');
  this.service = new RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_;
  $setLevel(this, ($clinit_Level() , SEVERE));
}

function unwrap_5(e){
  var entry, outerIter, ue;
  if (instanceOf(e, 175)) {
    ue = castTo(e, 175);
    if (ue.getCauses().map_0.size_1() == 1)
      return unwrap_5((outerIter = (new AbstractMap$1(ue.getCauses().map_0)).this$01.entrySet_0().iterator() , entry = castTo((new AbstractMap$1$1(outerIter)).val$outerIter2.next_1(), 43) , castTo(entry.getKey(), 18)));
  }
  return e;
}

defineClass(333, 562, $intern_15, RestfulRemoteLogHandler);
_.publish = function publish_1(record){
  var serviceRoots, serviceRoots0, serializableLogRecord;
  if ($getLevel(this).intValue() <= record.level.intValue() && $indexOf_1(this.excludedLoggerNames, record.loggerName, 0) == -1) {
    $clinit_ServiceRootMatcher();
    serviceRoots0 = ($clinit_ClientApp() , castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 196), 122).dynamicServiceRoots);
    $anyMatch(new StreamImpl(null, new Spliterators$IteratorSpliterator(serviceRoots0, 16)), new ServiceRootMatcher$lambda$3$Type)?$setResource(this.service, new Resource((serviceRoots = castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 196), 122).dynamicServiceRoots , castTo($orElse($findFirst($filter(new StreamImpl(null, new Spliterators$IteratorSpliterator(serviceRoots, 16)), new ServiceRootMatcher$lambda$2$Type)), defaultRoot), 210) , castTo(castTo(DOMINO_OPTIONS_HOLDER.attribute, 196), 122).defaultServiceRoot))):$setResource(this.service, new Resource(getHostPageBaseURL()));
    $send(this.service, (serializableLogRecord = new SerializableLogRecord , serializableLogRecord.level = record.level.getName() , serializableLogRecord.millis_0 = record.millis_0 , serializableLogRecord.message_0 = record.msg , serializableLogRecord.loggerName = record.loggerName , serializableLogRecord.permutationStrongName = ($clinit_Impl() , $strongName) , serializableLogRecord.thrown = $serializableThrowable(this, unwrap_5(record.thrown)) , serializableLogRecord));
  }
}
;
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler', 333);
function RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type(){
}

defineClass(563, 1, {}, RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type);
_.apply_0 = function apply_7(arg0){
  return $asSerializableStackTraceElement(castTo(arg0, 84));
}
;
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler$0methodref$asSerializableStackTraceElement$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler/0methodref$asSerializableStackTraceElement$Type', 563);
function $apply_0(arg0){
  return $clinit_RemoteLogHandlerBase() , initUnidimensionalArray(Lorg_dominokit_domino_api_shared_logging_SerializableStackTraceElement_2_classLit, {4:1, 5:1, 1455:1}, 207, arg0, 0, 1);
}

function $getResource(this$static){
  var serviceRoot;
  if (!this$static.resource) {
    serviceRoot = ($clinit_Defaults() , $clinit_Defaults() , serviceRoot_0);
    this$static.resource = new Resource(serviceRoot);
  }
  return this$static.resource;
}

function $send(this$static, record){
  var __method, rc;
  __method = $post($resolve($getResource(this$static), '/service/remoteLogging'));
  $setHeader(__method.builder, 'Accept', 'application/json');
  $setHeader(__method.builder, 'Content-Type', 'application/json');
  $json(__method, (rc = new JSONObject , isNotNullValuePut($encode_3(record.level), rc, 'level') , isNotNullValuePut($encode_3(record.message_0), rc, 'message') , isNotNullValuePut($encode_2(valueOf_0(record.millis_0)), rc, 'millis') , isNotNullValuePut($encode_0(record.thrown), rc, 'thrown') , isNotNullValuePut($encode_3(record.loggerName), rc, 'loggerName') , isNotNullValuePut($encode_3(record.permutationStrongName), rc, 'permutationStrongName') , rc));
  try {
    $send_0(__method, new RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_$1(__method));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 92))
      throw toJs($e0);
  }
}

function $setResource(this$static, resource){
  this$static.resource = resource;
}

function RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_(){
}

defineClass(725, 1, {}, RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_);
_.resource = null;
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler_1RemoteExceptionLoggingService_1Generated_1RestServiceProxy_1_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_', 725);
defineClass(726, 1, {});
_.onError = function onError_0(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_0(request, response){
  var content_0, e;
  if ($isExpected(this.method_0, response.getStatusCode())) {
    try {
      loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName)));
      !!this.logger && $fine((loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName))) , this.logger), 'Received http response for request: ' + this.method_0.builder.httpMethod + ' ' + this.method_0.builder.url_0);
      content_0 = response.xmlHttpRequest.responseText;
      if (content_0 != null && content_0.length > 0) {
        loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName)));
        !!this.logger && $finest((loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName))) , this.logger), content_0);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 18)) {
        e = $e0;
        loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName)));
        !!this.logger && $log((loggingIsEnabled() && !this.logger && (this.logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit) , Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit.typeName))) , this.logger), ($clinit_Level() , FINE), 'Could not parse response: ' + e, e);
        return;
      }
       else 
        throw toJs($e0);
    }
  }
   else {
    new FailedResponseException(($clinit_Defaults() , response));
  }
}
;
var Lorg_fusesource_restygwt_client_AbstractRequestCallback_2_classLit = createForClass('org.fusesource.restygwt.client', 'AbstractRequestCallback', 726);
function RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_$1($anonymous0){
  this.method_0 = $anonymous0;
}

defineClass(727, 726, {}, RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_$1);
var Lorg_dominokit_domino_gwt_client_logging_RestfulRemoteLogHandler_1RemoteExceptionLoggingService_1Generated_1RestServiceProxy_1$1_2_classLit = createForClass('org.dominokit.domino.gwt.client.logging', 'RestfulRemoteLogHandler_RemoteExceptionLoggingService_Generated_RestServiceProxy_/1', 727);
function RestyGwtOptions(){
  this.defaultServiceRoot = $replace(getModuleBaseURL(), 'static', 'service');
  this.dynamicServiceRoots = new ArrayList;
}

defineClass(122, 1, {196:1, 122:1}, RestyGwtOptions);
var Lorg_dominokit_domino_gwt_client_options_RestyGwtOptions_2_classLit = createForClass('org.dominokit.domino.gwt.client.options', 'RestyGwtOptions', 122);
function DominoRequestDispatcher(){
  this.headers_0 = new HashMap;
}

defineClass(556, 1, {}, DominoRequestDispatcher);
_.send_0 = function send(method, builder){
  var cookiesMap;
  $setHeader(builder, 'X-XSRF-TOKEN', (cookiesMap = ensureCookies() , castToString(cookiesMap.stringMap.backingMap.get('XSRF-TOKEN'))));
  $forEach_2(this.headers_0, new DominoRequestDispatcher$0methodref$setHeader$Type(builder));
  return throwIfNull('callback', builder.callback) , $doSend(builder, builder.requestData, builder.callback);
}
;
var Lorg_dominokit_domino_gwt_client_request_DominoRequestDispatcher_2_classLit = createForClass('org.dominokit.domino.gwt.client.request', 'DominoRequestDispatcher', 556);
function $accept_0(this$static, arg0, arg1){
  $setHeader(this$static.$$outer_0, castToString(arg0), castToString(arg1));
}

function DominoRequestDispatcher$0methodref$setHeader$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(557, 1, {}, DominoRequestDispatcher$0methodref$setHeader$Type);
_.accept_1 = function accept_15(arg0, arg1){
  $accept_0(this, arg0, arg1);
}
;
var Lorg_dominokit_domino_gwt_client_request_DominoRequestDispatcher$0methodref$setHeader$Type_2_classLit = createForClass('org.dominokit.domino.gwt.client.request', 'DominoRequestDispatcher/0methodref$setHeader$Type', 557);
function GwtRequestAsyncSender(){
  $clinit_AbstractRequestAsyncSender();
  setDispatcher(new DominoRequestDispatcher);
}

defineClass(515, 1397, {}, GwtRequestAsyncSender);
var Lorg_dominokit_domino_gwt_client_request_GwtRequestAsyncSender_2_classLit = createForClass('org.dominokit.domino.gwt.client.request', 'GwtRequestAsyncSender', 515);
function $clinit_HelpersClientModule(){
  $clinit_HelpersClientModule = emptyMethod;
  LOGGER_25 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_HelpersClientModule_2_classLit) , Lorg_dominokit_domino_helpers_client_HelpersClientModule_2_classLit.typeName));
}

var LOGGER_25;
var Lorg_dominokit_domino_helpers_client_HelpersClientModule_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersClientModule', null);
function HelpersModuleConfiguration(){
}

defineClass(302, 1, {}, HelpersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_17(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_17(registry){
}
;
_.registerContributions = function registerContributions_17(registry){
  $registerContribution(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit, new HelpersPresenterContributionToComponentCaseExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_17(registry){
  $registerPresenter(new HelpersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_17(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenterCommand_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_17(registry){
  $registerView(new HelpersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit) , Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_helpers_client_HelpersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersModuleConfiguration', 302);
function HelpersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(404, 15, $intern_31, HelpersModuleConfiguration$1);
var Lorg_dominokit_domino_helpers_client_HelpersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersModuleConfiguration/1', 404);
function HelpersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(405, 16, $intern_32, HelpersModuleConfiguration$2);
var Lorg_dominokit_domino_helpers_client_HelpersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.helpers.client', 'HelpersModuleConfiguration/2', 405);
function HelpersPresenterContributionToComponentCaseExtensionPoint(){
}

defineClass(654, 1, {}, HelpersPresenterContributionToComponentCaseExtensionPoint);
var Lorg_dominokit_domino_helpers_client_contributions_HelpersPresenterContributionToComponentCaseExtensionPoint_2_classLit = createForClass('org.dominokit.domino.helpers.client.contributions', 'HelpersPresenterContributionToComponentCaseExtensionPoint', 654);
var Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenter_2_classLit = createForClass('org.dominokit.domino.helpers.client.presenters', 'HelpersPresenter', 402);
var Lorg_dominokit_domino_helpers_client_presenters_HelpersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.helpers.client.presenters', 'HelpersPresenterCommand', 403);
function $clinit_HomeClientModule(){
  $clinit_HomeClientModule = emptyMethod;
  LOGGER_26 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_HomeClientModule_2_classLit) , Lorg_dominokit_domino_home_client_HomeClientModule_2_classLit.typeName));
}

var LOGGER_26;
var Lorg_dominokit_domino_home_client_HomeClientModule_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeClientModule', null);
function HomeModuleConfiguration(){
}

defineClass(292, 1, {}, HomeModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_18(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_18(registry){
}
;
_.registerContributions = function registerContributions_18(registry){
  $registerContribution(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit, new HomePresenterContributionToComponentCaseExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_18(registry){
  $registerPresenter(new HomeModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_18(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenterCommand_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_18(registry){
  $registerView(new HomeModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit) , Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_home_client_HomeModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeModuleConfiguration', 292);
function HomeModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(372, 15, $intern_31, HomeModuleConfiguration$1);
var Lorg_dominokit_domino_home_client_HomeModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeModuleConfiguration/1', 372);
function HomeModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(373, 16, $intern_32, HomeModuleConfiguration$2);
var Lorg_dominokit_domino_home_client_HomeModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.home.client', 'HomeModuleConfiguration/2', 373);
function HomePresenterContributionToComponentCaseExtensionPoint(){
}

defineClass(638, 1, {}, HomePresenterContributionToComponentCaseExtensionPoint);
var Lorg_dominokit_domino_home_client_contributions_HomePresenterContributionToComponentCaseExtensionPoint_2_classLit = createForClass('org.dominokit.domino.home.client.contributions', 'HomePresenterContributionToComponentCaseExtensionPoint', 638);
var Lorg_dominokit_domino_home_client_presenters_HomePresenter_2_classLit = createForClass('org.dominokit.domino.home.client.presenters', 'HomePresenter', 370);
var Lorg_dominokit_domino_home_client_presenters_HomePresenterCommand_2_classLit = createForClass('org.dominokit.domino.home.client.presenters', 'HomePresenterCommand', 371);
function $clinit_IconsClientModule(){
  $clinit_IconsClientModule = emptyMethod;
  LOGGER_27 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_IconsClientModule_2_classLit) , Lorg_dominokit_domino_icons_client_IconsClientModule_2_classLit.typeName));
}

var LOGGER_27;
var Lorg_dominokit_domino_icons_client_IconsClientModule_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsClientModule', null);
function IconsModuleConfiguration(){
}

defineClass(314, 1, {}, IconsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_19(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_19(registry){
}
;
_.registerContributions = function registerContributions_19(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new IconsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_19(registry){
  $registerPresenter(new IconsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_19(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenterCommand_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_19(registry){
  $registerView(new IconsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit) , Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_icons_client_IconsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsModuleConfiguration', 314);
function IconsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(452, 15, $intern_31, IconsModuleConfiguration$1);
var Lorg_dominokit_domino_icons_client_IconsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsModuleConfiguration/1', 452);
function IconsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(453, 16, $intern_32, IconsModuleConfiguration$2);
var Lorg_dominokit_domino_icons_client_IconsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.icons.client', 'IconsModuleConfiguration/2', 453);
function IconsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(678, 1, {}, IconsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_icons_client_contributions_IconsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.icons.client.contributions', 'IconsPresenterContributionToComponentsExtensionPoint', 678);
var Lorg_dominokit_domino_icons_client_presenters_IconsPresenter_2_classLit = createForClass('org.dominokit.domino.icons.client.presenters', 'IconsPresenter', 450);
var Lorg_dominokit_domino_icons_client_presenters_IconsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.icons.client.presenters', 'IconsPresenterCommand', 451);
function $clinit_InfoBoxClientModule(){
  $clinit_InfoBoxClientModule = emptyMethod;
  LOGGER_29 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_InfoBoxClientModule_2_classLit) , Lorg_dominokit_domino_infobox_client_InfoBoxClientModule_2_classLit.typeName));
}

var LOGGER_29;
var Lorg_dominokit_domino_infobox_client_InfoBoxClientModule_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxClientModule', null);
function InfoBoxModuleConfiguration(){
}

defineClass(306, 1, {}, InfoBoxModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_20(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_20(registry){
}
;
_.registerContributions = function registerContributions_20(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new InfoBoxPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_20(registry){
  $registerPresenter(new InfoBoxModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_20(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenterCommand_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_20(registry){
  $registerView(new InfoBoxModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit) , Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_infobox_client_InfoBoxModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxModuleConfiguration', 306);
function InfoBoxModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(420, 15, $intern_31, InfoBoxModuleConfiguration$1);
var Lorg_dominokit_domino_infobox_client_InfoBoxModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxModuleConfiguration/1', 420);
function InfoBoxModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(421, 16, $intern_32, InfoBoxModuleConfiguration$2);
var Lorg_dominokit_domino_infobox_client_InfoBoxModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.infobox.client', 'InfoBoxModuleConfiguration/2', 421);
function InfoBoxPresenterContributionToComponentsExtensionPoint(){
}

defineClass(662, 1, {}, InfoBoxPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_infobox_client_contributions_InfoBoxPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.infobox.client.contributions', 'InfoBoxPresenterContributionToComponentsExtensionPoint', 662);
var Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenter_2_classLit = createForClass('org.dominokit.domino.infobox.client.presenters', 'InfoBoxPresenter', 418);
var Lorg_dominokit_domino_infobox_client_presenters_InfoBoxPresenterCommand_2_classLit = createForClass('org.dominokit.domino.infobox.client.presenters', 'InfoBoxPresenterCommand', 419);
function $clinit_LabelsClientModule(){
  $clinit_LabelsClientModule = emptyMethod;
  LOGGER_30 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_LabelsClientModule_2_classLit) , Lorg_dominokit_domino_labels_client_LabelsClientModule_2_classLit.typeName));
}

var LOGGER_30;
var Lorg_dominokit_domino_labels_client_LabelsClientModule_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsClientModule', null);
function LabelsModuleConfiguration(){
}

defineClass(310, 1, {}, LabelsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_21(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_21(registry){
}
;
_.registerContributions = function registerContributions_21(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new LabelsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_21(registry){
  $registerPresenter(new LabelsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_21(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenterCommand_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_21(registry){
  $registerView(new LabelsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit) , Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_labels_client_LabelsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsModuleConfiguration', 310);
function LabelsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(436, 15, $intern_31, LabelsModuleConfiguration$1);
var Lorg_dominokit_domino_labels_client_LabelsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsModuleConfiguration/1', 436);
function LabelsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(437, 16, $intern_32, LabelsModuleConfiguration$2);
var Lorg_dominokit_domino_labels_client_LabelsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.labels.client', 'LabelsModuleConfiguration/2', 437);
function LabelsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(670, 1, {}, LabelsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_labels_client_contributions_LabelsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.labels.client.contributions', 'LabelsPresenterContributionToComponentsExtensionPoint', 670);
var Lorg_dominokit_domino_labels_client_presenters_LabelsPresenter_2_classLit = createForClass('org.dominokit.domino.labels.client.presenters', 'LabelsPresenter', 434);
var Lorg_dominokit_domino_labels_client_presenters_LabelsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.labels.client.presenters', 'LabelsPresenterCommand', 435);
function $clinit_LayoutClientModule(){
  $clinit_LayoutClientModule = emptyMethod;
  LOGGER_31 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_LayoutClientModule_2_classLit) , Lorg_dominokit_domino_layout_client_LayoutClientModule_2_classLit.typeName));
}

var LOGGER_31;
var Lorg_dominokit_domino_layout_client_LayoutClientModule_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutClientModule', null);
function LayoutModuleConfiguration(){
}

defineClass(285, 1, {}, LayoutModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_22(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_22(registry){
}
;
_.registerViews = function registerViews_22(registry){
}
;
_.registerContributions = function registerContributions_22(registry){
  $registerContribution(Lorg_dominokit_domino_api_shared_extension_MainExtensionPoint_2_classLit, new LayoutPresenterContributionToMainExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_22(registry){
  $registerPresenter(new LayoutModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_22(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenterCommand_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName));
}
;
var Lorg_dominokit_domino_layout_client_LayoutModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutModuleConfiguration', 285);
function LayoutModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(353, 15, $intern_31, LayoutModuleConfiguration$1);
var Lorg_dominokit_domino_layout_client_LayoutModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutModuleConfiguration/1', 353);
function $clinit_LayoutUIClientModule(){
  $clinit_LayoutUIClientModule = emptyMethod;
  LOGGER_32 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_LayoutUIClientModule_2_classLit) , Lorg_dominokit_domino_layout_client_LayoutUIClientModule_2_classLit.typeName));
}

var LOGGER_32;
var Lorg_dominokit_domino_layout_client_LayoutUIClientModule_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutUIClientModule', null);
function LayoutUIModuleConfiguration(){
}

defineClass(286, 1, {}, LayoutUIModuleConfiguration);
_.registerContributions = function registerContributions_23(registry){
}
;
_.registerInitialTasks = function registerInitialTasks_23(registry){
}
;
_.registerPresenters = function registerPresenters_23(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_23(registry){
}
;
_.registerRequests = function registerRequests_23(registry){
}
;
_.registerViews = function registerViews_23(registry){
  $registerView(new LayoutUIModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit) , Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_layout_client_LayoutUIModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutUIModuleConfiguration', 286);
function LayoutUIModuleConfiguration$1($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(354, 16, $intern_32, LayoutUIModuleConfiguration$1);
var Lorg_dominokit_domino_layout_client_LayoutUIModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.layout.client', 'LayoutUIModuleConfiguration/1', 354);
function LayoutPresenterContributionToMainExtensionPoint(){
}

defineClass(626, 1, {}, LayoutPresenterContributionToMainExtensionPoint);
var Lorg_dominokit_domino_layout_client_contributions_LayoutPresenterContributionToMainExtensionPoint_2_classLit = createForClass('org.dominokit.domino.layout.client.contributions', 'LayoutPresenterContributionToMainExtensionPoint', 626);
var Lorg_dominokit_domino_layout_client_presenters_LayoutPresenter_2_classLit = createForClass('org.dominokit.domino.layout.client.presenters', 'LayoutPresenter', 140);
var Lorg_dominokit_domino_layout_shared_extension_LayoutExtensionPoint_2_classLit = createForInterface('org.dominokit.domino.layout.shared.extension', 'LayoutExtensionPoint');
var Lorg_dominokit_domino_layout_client_presenters_LayoutPresenterCommand_2_classLit = createForClass('org.dominokit.domino.layout.client.presenters', 'LayoutPresenterCommand', 352);
function $clinit_ListsClientModule(){
  $clinit_ListsClientModule = emptyMethod;
  LOGGER_33 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_ListsClientModule_2_classLit) , Lorg_dominokit_domino_lists_client_ListsClientModule_2_classLit.typeName));
}

var LOGGER_33;
var Lorg_dominokit_domino_lists_client_ListsClientModule_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsClientModule', null);
function ListsModuleConfiguration(){
}

defineClass(312, 1, {}, ListsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_24(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_24(registry){
}
;
_.registerContributions = function registerContributions_24(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new ListsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_24(registry){
  $registerPresenter(new ListsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_24(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenterCommand_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_24(registry){
  $registerView(new ListsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit) , Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_lists_client_ListsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsModuleConfiguration', 312);
function ListsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(444, 15, $intern_31, ListsModuleConfiguration$1);
var Lorg_dominokit_domino_lists_client_ListsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsModuleConfiguration/1', 444);
function ListsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(445, 16, $intern_32, ListsModuleConfiguration$2);
var Lorg_dominokit_domino_lists_client_ListsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.lists.client', 'ListsModuleConfiguration/2', 445);
function ListsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(674, 1, {}, ListsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_lists_client_contributions_ListsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.lists.client.contributions', 'ListsPresenterContributionToComponentsExtensionPoint', 674);
var Lorg_dominokit_domino_lists_client_presenters_ListsPresenter_2_classLit = createForClass('org.dominokit.domino.lists.client.presenters', 'ListsPresenter', 442);
var Lorg_dominokit_domino_lists_client_presenters_ListsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.lists.client.presenters', 'ListsPresenterCommand', 443);
function $clinit_LoadersClientModule(){
  $clinit_LoadersClientModule = emptyMethod;
  LOGGER_34 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_LoadersClientModule_2_classLit) , Lorg_dominokit_domino_loaders_client_LoadersClientModule_2_classLit.typeName));
}

var LOGGER_34;
var Lorg_dominokit_domino_loaders_client_LoadersClientModule_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersClientModule', null);
function LoadersModuleConfiguration(){
}

defineClass(313, 1, {}, LoadersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_25(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_25(registry){
}
;
_.registerContributions = function registerContributions_25(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new LoadersPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_25(registry){
  $registerPresenter(new LoadersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_25(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenterCommand_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_25(registry){
  $registerView(new LoadersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit) , Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_loaders_client_LoadersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersModuleConfiguration', 313);
function LoadersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(448, 15, $intern_31, LoadersModuleConfiguration$1);
var Lorg_dominokit_domino_loaders_client_LoadersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersModuleConfiguration/1', 448);
function LoadersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(449, 16, $intern_32, LoadersModuleConfiguration$2);
var Lorg_dominokit_domino_loaders_client_LoadersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.loaders.client', 'LoadersModuleConfiguration/2', 449);
function LoadersPresenterContributionToComponentsExtensionPoint(){
}

defineClass(676, 1, {}, LoadersPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_loaders_client_contributions_LoadersPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.loaders.client.contributions', 'LoadersPresenterContributionToComponentsExtensionPoint', 676);
var Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenter_2_classLit = createForClass('org.dominokit.domino.loaders.client.presenters', 'LoadersPresenter', 446);
var Lorg_dominokit_domino_loaders_client_presenters_LoadersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.loaders.client.presenters', 'LoadersPresenterCommand', 447);
defineClass(1401, 1, {});
var Lorg_slf4j_helpers_NamedLoggerBase_2_classLit = createForClass('org.slf4j.helpers', 'NamedLoggerBase', 1401);
defineClass(1402, 1401, {});
_.toString_0 = function toString_35(){
  return $ensureNamesAreInitialized(Lorg_dominokit_domino_logger_GWTLoggerAdapter_2_classLit) , Lorg_dominokit_domino_logger_GWTLoggerAdapter_2_classLit.typeName + '(' + this.name_0 + ')';
}
;
var Lorg_slf4j_helpers_MarkerIgnoringBase_2_classLit = createForClass('org.slf4j.helpers', 'MarkerIgnoringBase', 1402);
function $error_0(this$static, msg, t){
  $log_0(this$static, ($clinit_Level() , SEVERE), msg, t);
}

function $info_0(this$static, msg){
  $log_0(this$static, ($clinit_Level() , INFO), msg, null);
}

function $log_0(this$static, level, msg, t){
  $isLoggable(this$static.logger, level) && $log(this$static.logger, level, msg, t);
}

function GWTLoggerAdapter(name_0){
  this.name_0 = name_0;
  this.logger = getLogger(name_0);
}

defineClass(14, 1402, {}, GWTLoggerAdapter);
var Lorg_dominokit_domino_logger_GWTLoggerAdapter_2_classLit = createForClass('org.dominokit.domino.logger', 'GWTLoggerAdapter', 14);
function $clinit_MediaClientModule(){
  $clinit_MediaClientModule = emptyMethod;
  LOGGER_35 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_MediaClientModule_2_classLit) , Lorg_dominokit_domino_media_client_MediaClientModule_2_classLit.typeName));
}

var LOGGER_35;
var Lorg_dominokit_domino_media_client_MediaClientModule_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaClientModule', null);
function MediaModuleConfiguration(){
}

defineClass(318, 1, {}, MediaModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_26(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_26(registry){
}
;
_.registerContributions = function registerContributions_26(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new MediaPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_26(registry){
  $registerPresenter(new MediaModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_26(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenterCommand_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_26(registry){
  $registerView(new MediaModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit) , Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_media_client_MediaModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaModuleConfiguration', 318);
function MediaModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(468, 15, $intern_31, MediaModuleConfiguration$1);
var Lorg_dominokit_domino_media_client_MediaModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaModuleConfiguration/1', 468);
function MediaModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(469, 16, $intern_32, MediaModuleConfiguration$2);
var Lorg_dominokit_domino_media_client_MediaModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.media.client', 'MediaModuleConfiguration/2', 469);
function MediaPresenterContributionToComponentsExtensionPoint(){
}

defineClass(686, 1, {}, MediaPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_media_client_contributions_MediaPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.media.client.contributions', 'MediaPresenterContributionToComponentsExtensionPoint', 686);
var Lorg_dominokit_domino_media_client_presenters_MediaPresenter_2_classLit = createForClass('org.dominokit.domino.media.client.presenters', 'MediaPresenter', 466);
var Lorg_dominokit_domino_media_client_presenters_MediaPresenterCommand_2_classLit = createForClass('org.dominokit.domino.media.client.presenters', 'MediaPresenterCommand', 467);
function $clinit_MenuClientModule(){
  $clinit_MenuClientModule = emptyMethod;
  LOGGER_36 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_MenuClientModule_2_classLit) , Lorg_dominokit_domino_menu_client_MenuClientModule_2_classLit.typeName));
}

var LOGGER_36;
var Lorg_dominokit_domino_menu_client_MenuClientModule_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuClientModule', null);
function MenuModuleConfiguration(){
}

defineClass(289, 1, {}, MenuModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_27(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_27(registry){
}
;
_.registerContributions = function registerContributions_27(registry){
  $registerContribution(Lorg_dominokit_domino_layout_shared_extension_LayoutExtensionPoint_2_classLit, new MenuPresenterContributionToLayoutExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_27(registry){
  $registerPresenter(new MenuModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_27(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenterCommand_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_27(registry){
  $registerView(new MenuModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit) , Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_menu_client_MenuModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuModuleConfiguration', 289);
function MenuModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(365, 15, $intern_31, MenuModuleConfiguration$1);
var Lorg_dominokit_domino_menu_client_MenuModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuModuleConfiguration/1', 365);
function MenuModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(366, 16, $intern_32, MenuModuleConfiguration$2);
var Lorg_dominokit_domino_menu_client_MenuModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.menu.client', 'MenuModuleConfiguration/2', 366);
function MenuPresenterContributionToLayoutExtensionPoint(){
}

defineClass(632, 1, {}, MenuPresenterContributionToLayoutExtensionPoint);
var Lorg_dominokit_domino_menu_client_contributions_MenuPresenterContributionToLayoutExtensionPoint_2_classLit = createForClass('org.dominokit.domino.menu.client.contributions', 'MenuPresenterContributionToLayoutExtensionPoint', 632);
var Lorg_dominokit_domino_menu_client_presenters_MenuPresenter_2_classLit = createForClass('org.dominokit.domino.menu.client.presenters', 'MenuPresenter', 363);
var Lorg_dominokit_domino_menu_shared_extension_MenuExtensionPoint_2_classLit = createForInterface('org.dominokit.domino.menu.shared.extension', 'MenuExtensionPoint');
var Lorg_dominokit_domino_menu_client_presenters_MenuPresenterCommand_2_classLit = createForClass('org.dominokit.domino.menu.client.presenters', 'MenuPresenterCommand', 364);
function $clinit_ModalsClientModule(){
  $clinit_ModalsClientModule = emptyMethod;
  LOGGER_37 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_ModalsClientModule_2_classLit) , Lorg_dominokit_domino_modals_client_ModalsClientModule_2_classLit.typeName));
}

var LOGGER_37;
var Lorg_dominokit_domino_modals_client_ModalsClientModule_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsClientModule', null);
function ModalsModuleConfiguration(){
}

defineClass(311, 1, {}, ModalsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_28(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_28(registry){
}
;
_.registerContributions = function registerContributions_28(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new ModalsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_28(registry){
  $registerPresenter(new ModalsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_28(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenterCommand_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_28(registry){
  $registerView(new ModalsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit) , Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_modals_client_ModalsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsModuleConfiguration', 311);
function ModalsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(440, 15, $intern_31, ModalsModuleConfiguration$1);
var Lorg_dominokit_domino_modals_client_ModalsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsModuleConfiguration/1', 440);
function ModalsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(441, 16, $intern_32, ModalsModuleConfiguration$2);
var Lorg_dominokit_domino_modals_client_ModalsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.modals.client', 'ModalsModuleConfiguration/2', 441);
function ModalsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(672, 1, {}, ModalsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_modals_client_contributions_ModalsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.modals.client.contributions', 'ModalsPresenterContributionToComponentsExtensionPoint', 672);
var Lorg_dominokit_domino_modals_client_presenters_ModalsPresenter_2_classLit = createForClass('org.dominokit.domino.modals.client.presenters', 'ModalsPresenter', 438);
var Lorg_dominokit_domino_modals_client_presenters_ModalsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.modals.client.presenters', 'ModalsPresenterCommand', 439);
function $clinit_NotificationsClientModule(){
  $clinit_NotificationsClientModule = emptyMethod;
  LOGGER_38 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_NotificationsClientModule_2_classLit) , Lorg_dominokit_domino_notifications_client_NotificationsClientModule_2_classLit.typeName));
}

var LOGGER_38;
var Lorg_dominokit_domino_notifications_client_NotificationsClientModule_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsClientModule', null);
function NotificationsModuleConfiguration(){
}

defineClass(317, 1, {}, NotificationsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_29(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_29(registry){
}
;
_.registerContributions = function registerContributions_29(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new NotificationsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_29(registry){
  $registerPresenter(new NotificationsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_29(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenterCommand_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_29(registry){
  $registerView(new NotificationsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit) , Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_notifications_client_NotificationsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsModuleConfiguration', 317);
function NotificationsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(464, 15, $intern_31, NotificationsModuleConfiguration$1);
var Lorg_dominokit_domino_notifications_client_NotificationsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsModuleConfiguration/1', 464);
function NotificationsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(465, 16, $intern_32, NotificationsModuleConfiguration$2);
var Lorg_dominokit_domino_notifications_client_NotificationsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.notifications.client', 'NotificationsModuleConfiguration/2', 465);
function NotificationsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(684, 1, {}, NotificationsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_notifications_client_contributions_NotificationsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.notifications.client.contributions', 'NotificationsPresenterContributionToComponentsExtensionPoint', 684);
var Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenter_2_classLit = createForClass('org.dominokit.domino.notifications.client.presenters', 'NotificationsPresenter', 462);
var Lorg_dominokit_domino_notifications_client_presenters_NotificationsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.notifications.client.presenters', 'NotificationsPresenterCommand', 463);
function $clinit_PaginationClientModule(){
  $clinit_PaginationClientModule = emptyMethod;
  LOGGER_39 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_PaginationClientModule_2_classLit) , Lorg_dominokit_domino_pagination_client_PaginationClientModule_2_classLit.typeName));
}

var LOGGER_39;
var Lorg_dominokit_domino_pagination_client_PaginationClientModule_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationClientModule', null);
function PaginationModuleConfiguration(){
}

defineClass(319, 1, {}, PaginationModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_30(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_30(registry){
}
;
_.registerContributions = function registerContributions_30(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new PaginationPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_30(registry){
  $registerPresenter(new PaginationModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_30(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenterCommand_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_30(registry){
  $registerView(new PaginationModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit) , Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_pagination_client_PaginationModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationModuleConfiguration', 319);
function PaginationModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(472, 15, $intern_31, PaginationModuleConfiguration$1);
var Lorg_dominokit_domino_pagination_client_PaginationModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationModuleConfiguration/1', 472);
function PaginationModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(473, 16, $intern_32, PaginationModuleConfiguration$2);
var Lorg_dominokit_domino_pagination_client_PaginationModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.pagination.client', 'PaginationModuleConfiguration/2', 473);
function PaginationPresenterContributionToComponentsExtensionPoint(){
}

defineClass(688, 1, {}, PaginationPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_pagination_client_contributions_PaginationPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.pagination.client.contributions', 'PaginationPresenterContributionToComponentsExtensionPoint', 688);
var Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenter_2_classLit = createForClass('org.dominokit.domino.pagination.client.presenters', 'PaginationPresenter', 470);
var Lorg_dominokit_domino_pagination_client_presenters_PaginationPresenterCommand_2_classLit = createForClass('org.dominokit.domino.pagination.client.presenters', 'PaginationPresenterCommand', 471);
function $clinit_PopoverClientModule(){
  $clinit_PopoverClientModule = emptyMethod;
  LOGGER_40 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_PopoverClientModule_2_classLit) , Lorg_dominokit_domino_popover_client_PopoverClientModule_2_classLit.typeName));
}

var LOGGER_40;
var Lorg_dominokit_domino_popover_client_PopoverClientModule_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverClientModule', null);
function PopoverModuleConfiguration(){
}

defineClass(325, 1, {}, PopoverModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_31(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_31(registry){
}
;
_.registerContributions = function registerContributions_31(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new PopoverPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_31(registry){
  $registerPresenter(new PopoverModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_31(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenterCommand_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_31(registry){
  $registerView(new PopoverModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit) , Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_popover_client_PopoverModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverModuleConfiguration', 325);
function PopoverModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(496, 15, $intern_31, PopoverModuleConfiguration$1);
var Lorg_dominokit_domino_popover_client_PopoverModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverModuleConfiguration/1', 496);
function PopoverModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(497, 16, $intern_32, PopoverModuleConfiguration$2);
var Lorg_dominokit_domino_popover_client_PopoverModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.popover.client', 'PopoverModuleConfiguration/2', 497);
function PopoverPresenterContributionToComponentsExtensionPoint(){
}

defineClass(700, 1, {}, PopoverPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_popover_client_contributions_PopoverPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.popover.client.contributions', 'PopoverPresenterContributionToComponentsExtensionPoint', 700);
var Lorg_dominokit_domino_popover_client_presenters_PopoverPresenter_2_classLit = createForClass('org.dominokit.domino.popover.client.presenters', 'PopoverPresenter', 494);
var Lorg_dominokit_domino_popover_client_presenters_PopoverPresenterCommand_2_classLit = createForClass('org.dominokit.domino.popover.client.presenters', 'PopoverPresenterCommand', 495);
function $clinit_PreloadersClientModule(){
  $clinit_PreloadersClientModule = emptyMethod;
  LOGGER_41 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_PreloadersClientModule_2_classLit) , Lorg_dominokit_domino_preloaders_client_PreloadersClientModule_2_classLit.typeName));
}

var LOGGER_41;
var Lorg_dominokit_domino_preloaders_client_PreloadersClientModule_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersClientModule', null);
function PreloadersModuleConfiguration(){
}

defineClass(320, 1, {}, PreloadersModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_32(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_32(registry){
}
;
_.registerContributions = function registerContributions_32(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new PreloadersPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_32(registry){
  $registerPresenter(new PreloadersModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_32(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenterCommand_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_32(registry){
  $registerView(new PreloadersModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit) , Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_preloaders_client_PreloadersModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersModuleConfiguration', 320);
function PreloadersModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(476, 15, $intern_31, PreloadersModuleConfiguration$1);
var Lorg_dominokit_domino_preloaders_client_PreloadersModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersModuleConfiguration/1', 476);
function PreloadersModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(477, 16, $intern_32, PreloadersModuleConfiguration$2);
var Lorg_dominokit_domino_preloaders_client_PreloadersModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.preloaders.client', 'PreloadersModuleConfiguration/2', 477);
function PreloadersPresenterContributionToComponentsExtensionPoint(){
}

defineClass(690, 1, {}, PreloadersPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_preloaders_client_contributions_PreloadersPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.preloaders.client.contributions', 'PreloadersPresenterContributionToComponentsExtensionPoint', 690);
var Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenter_2_classLit = createForClass('org.dominokit.domino.preloaders.client.presenters', 'PreloadersPresenter', 474);
var Lorg_dominokit_domino_preloaders_client_presenters_PreloadersPresenterCommand_2_classLit = createForClass('org.dominokit.domino.preloaders.client.presenters', 'PreloadersPresenterCommand', 475);
function $clinit_ProfileClientModule(){
  $clinit_ProfileClientModule = emptyMethod;
  LOGGER_42 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_ProfileClientModule_2_classLit) , Lorg_dominokit_domino_profile_client_ProfileClientModule_2_classLit.typeName));
}

var LOGGER_42;
var Lorg_dominokit_domino_profile_client_ProfileClientModule_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileClientModule', null);
function ProfileModuleConfiguration(){
}

defineClass(288, 1, {}, ProfileModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_33(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_33(registry){
}
;
_.registerContributions = function registerContributions_33(registry){
  $registerContribution(Lorg_dominokit_domino_layout_shared_extension_LayoutExtensionPoint_2_classLit, new ProfilePresenterContributionToLayoutExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_33(registry){
  $registerPresenter(new ProfileModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_33(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenterCommand_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_33(registry){
  $registerView(new ProfileModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit) , Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_profile_client_ProfileModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileModuleConfiguration', 288);
function ProfileModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(361, 15, $intern_31, ProfileModuleConfiguration$1);
var Lorg_dominokit_domino_profile_client_ProfileModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileModuleConfiguration/1', 361);
function ProfileModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(362, 16, $intern_32, ProfileModuleConfiguration$2);
var Lorg_dominokit_domino_profile_client_ProfileModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.profile.client', 'ProfileModuleConfiguration/2', 362);
function ProfilePresenterContributionToLayoutExtensionPoint(){
}

defineClass(630, 1, {}, ProfilePresenterContributionToLayoutExtensionPoint);
var Lorg_dominokit_domino_profile_client_contributions_ProfilePresenterContributionToLayoutExtensionPoint_2_classLit = createForClass('org.dominokit.domino.profile.client.contributions', 'ProfilePresenterContributionToLayoutExtensionPoint', 630);
var Lorg_dominokit_domino_profile_client_presenters_ProfilePresenter_2_classLit = createForClass('org.dominokit.domino.profile.client.presenters', 'ProfilePresenter', 359);
var Lorg_dominokit_domino_profile_client_presenters_ProfilePresenterCommand_2_classLit = createForClass('org.dominokit.domino.profile.client.presenters', 'ProfilePresenterCommand', 360);
function $clinit_ProgressClientModule(){
  $clinit_ProgressClientModule = emptyMethod;
  LOGGER_43 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_ProgressClientModule_2_classLit) , Lorg_dominokit_domino_progress_client_ProgressClientModule_2_classLit.typeName));
}

var LOGGER_43;
var Lorg_dominokit_domino_progress_client_ProgressClientModule_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressClientModule', null);
function ProgressModuleConfiguration(){
}

defineClass(321, 1, {}, ProgressModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_34(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_34(registry){
}
;
_.registerContributions = function registerContributions_34(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new ProgressPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_34(registry){
  $registerPresenter(new ProgressModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_34(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenterCommand_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_34(registry){
  $registerView(new ProgressModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit) , Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_progress_client_ProgressModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressModuleConfiguration', 321);
function ProgressModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(480, 15, $intern_31, ProgressModuleConfiguration$1);
var Lorg_dominokit_domino_progress_client_ProgressModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressModuleConfiguration/1', 480);
function ProgressModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(481, 16, $intern_32, ProgressModuleConfiguration$2);
var Lorg_dominokit_domino_progress_client_ProgressModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.progress.client', 'ProgressModuleConfiguration/2', 481);
function ProgressPresenterContributionToComponentsExtensionPoint(){
}

defineClass(692, 1, {}, ProgressPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_progress_client_contributions_ProgressPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.progress.client.contributions', 'ProgressPresenterContributionToComponentsExtensionPoint', 692);
var Lorg_dominokit_domino_progress_client_presenters_ProgressPresenter_2_classLit = createForClass('org.dominokit.domino.progress.client.presenters', 'ProgressPresenter', 478);
var Lorg_dominokit_domino_progress_client_presenters_ProgressPresenterCommand_2_classLit = createForClass('org.dominokit.domino.progress.client.presenters', 'ProgressPresenterCommand', 479);
function $clinit_TabsClientModule(){
  $clinit_TabsClientModule = emptyMethod;
  LOGGER_44 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_TabsClientModule_2_classLit) , Lorg_dominokit_domino_tabs_client_TabsClientModule_2_classLit.typeName));
}

var LOGGER_44;
var Lorg_dominokit_domino_tabs_client_TabsClientModule_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsClientModule', null);
function TabsModuleConfiguration(){
}

defineClass(322, 1, {}, TabsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_35(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_35(registry){
}
;
_.registerContributions = function registerContributions_35(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new TabsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_35(registry){
  $registerPresenter(new TabsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_35(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenterCommand_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_35(registry){
  $registerView(new TabsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit) , Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_tabs_client_TabsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsModuleConfiguration', 322);
function TabsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(484, 15, $intern_31, TabsModuleConfiguration$1);
var Lorg_dominokit_domino_tabs_client_TabsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsModuleConfiguration/1', 484);
function TabsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(485, 16, $intern_32, TabsModuleConfiguration$2);
var Lorg_dominokit_domino_tabs_client_TabsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.tabs.client', 'TabsModuleConfiguration/2', 485);
function TabsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(694, 1, {}, TabsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_tabs_client_contributions_TabsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.tabs.client.contributions', 'TabsPresenterContributionToComponentsExtensionPoint', 694);
var Lorg_dominokit_domino_tabs_client_presenters_TabsPresenter_2_classLit = createForClass('org.dominokit.domino.tabs.client.presenters', 'TabsPresenter', 482);
var Lorg_dominokit_domino_tabs_client_presenters_TabsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.tabs.client.presenters', 'TabsPresenterCommand', 483);
function $clinit_ThemesClientModule(){
  $clinit_ThemesClientModule = emptyMethod;
  LOGGER_45 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_ThemesClientModule_2_classLit) , Lorg_dominokit_domino_themes_client_ThemesClientModule_2_classLit.typeName));
}

var LOGGER_45;
var Lorg_dominokit_domino_themes_client_ThemesClientModule_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesClientModule', null);
function ThemesModuleConfiguration(){
}

defineClass(287, 1, {}, ThemesModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_36(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_36(registry){
}
;
_.registerContributions = function registerContributions_36(registry){
  $registerContribution(Lorg_dominokit_domino_layout_shared_extension_LayoutExtensionPoint_2_classLit, new ThemesPresenterContributionToLayoutExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_36(registry){
  $registerPresenter(new ThemesModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_36(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenterCommand_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_36(registry){
  $registerView(new ThemesModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit) , Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_themes_client_ThemesModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesModuleConfiguration', 287);
function ThemesModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(357, 15, $intern_31, ThemesModuleConfiguration$1);
var Lorg_dominokit_domino_themes_client_ThemesModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesModuleConfiguration/1', 357);
function ThemesModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(358, 16, $intern_32, ThemesModuleConfiguration$2);
var Lorg_dominokit_domino_themes_client_ThemesModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.themes.client', 'ThemesModuleConfiguration/2', 358);
function ThemesPresenterContributionToLayoutExtensionPoint(){
}

defineClass(628, 1, {}, ThemesPresenterContributionToLayoutExtensionPoint);
var Lorg_dominokit_domino_themes_client_contributions_ThemesPresenterContributionToLayoutExtensionPoint_2_classLit = createForClass('org.dominokit.domino.themes.client.contributions', 'ThemesPresenterContributionToLayoutExtensionPoint', 628);
var Lorg_dominokit_domino_themes_client_presenters_ThemesPresenter_2_classLit = createForClass('org.dominokit.domino.themes.client.presenters', 'ThemesPresenter', 355);
var Lorg_dominokit_domino_themes_client_presenters_ThemesPresenterCommand_2_classLit = createForClass('org.dominokit.domino.themes.client.presenters', 'ThemesPresenterCommand', 356);
function $clinit_ThumbnailsClientModule(){
  $clinit_ThumbnailsClientModule = emptyMethod;
  LOGGER_46 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_ThumbnailsClientModule_2_classLit) , Lorg_dominokit_domino_thumbnails_client_ThumbnailsClientModule_2_classLit.typeName));
}

var LOGGER_46;
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsClientModule_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsClientModule', null);
function ThumbnailsModuleConfiguration(){
}

defineClass(323, 1, {}, ThumbnailsModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_37(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_37(registry){
}
;
_.registerContributions = function registerContributions_37(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new ThumbnailsPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_37(registry){
  $registerPresenter(new ThumbnailsModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_37(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenterCommand_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_37(registry){
  $registerView(new ThumbnailsModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit) , Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsModuleConfiguration', 323);
function ThumbnailsModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(488, 15, $intern_31, ThumbnailsModuleConfiguration$1);
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsModuleConfiguration/1', 488);
function ThumbnailsModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(489, 16, $intern_32, ThumbnailsModuleConfiguration$2);
var Lorg_dominokit_domino_thumbnails_client_ThumbnailsModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.thumbnails.client', 'ThumbnailsModuleConfiguration/2', 489);
function ThumbnailsPresenterContributionToComponentsExtensionPoint(){
}

defineClass(696, 1, {}, ThumbnailsPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_thumbnails_client_contributions_ThumbnailsPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.thumbnails.client.contributions', 'ThumbnailsPresenterContributionToComponentsExtensionPoint', 696);
var Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenter_2_classLit = createForClass('org.dominokit.domino.thumbnails.client.presenters', 'ThumbnailsPresenter', 486);
var Lorg_dominokit_domino_thumbnails_client_presenters_ThumbnailsPresenterCommand_2_classLit = createForClass('org.dominokit.domino.thumbnails.client.presenters', 'ThumbnailsPresenterCommand', 487);
function $clinit_TimePickerClientModule(){
  $clinit_TimePickerClientModule = emptyMethod;
  LOGGER_47 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_TimePickerClientModule_2_classLit) , Lorg_dominokit_domino_timepicker_client_TimePickerClientModule_2_classLit.typeName));
}

var LOGGER_47;
var Lorg_dominokit_domino_timepicker_client_TimePickerClientModule_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerClientModule', null);
function TimePickerModuleConfiguration(){
}

defineClass(300, 1, {}, TimePickerModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_38(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_38(registry){
}
;
_.registerContributions = function registerContributions_38(registry){
  $registerContribution(Lorg_dominokit_domino_forms_shared_extension_FormsExtensionPoint_2_classLit, new TimePickerPresenterContributionToFormsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_38(registry){
  $registerPresenter(new TimePickerModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_38(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenterCommand_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_38(registry){
  $registerView(new TimePickerModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit) , Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_timepicker_client_TimePickerModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerModuleConfiguration', 300);
function TimePickerModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(396, 15, $intern_31, TimePickerModuleConfiguration$1);
var Lorg_dominokit_domino_timepicker_client_TimePickerModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerModuleConfiguration/1', 396);
function TimePickerModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(397, 16, $intern_32, TimePickerModuleConfiguration$2);
var Lorg_dominokit_domino_timepicker_client_TimePickerModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.timepicker.client', 'TimePickerModuleConfiguration/2', 397);
function TimePickerPresenterContributionToFormsExtensionPoint(){
}

defineClass(650, 1, {}, TimePickerPresenterContributionToFormsExtensionPoint);
var Lorg_dominokit_domino_timepicker_client_contributions_TimePickerPresenterContributionToFormsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.timepicker.client.contributions', 'TimePickerPresenterContributionToFormsExtensionPoint', 650);
var Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenter_2_classLit = createForClass('org.dominokit.domino.timepicker.client.presenters', 'TimePickerPresenter', 394);
var Lorg_dominokit_domino_timepicker_client_presenters_TimePickerPresenterCommand_2_classLit = createForClass('org.dominokit.domino.timepicker.client.presenters', 'TimePickerPresenterCommand', 395);
function $clinit_TypographyClientModule(){
  $clinit_TypographyClientModule = emptyMethod;
  LOGGER_48 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_TypographyClientModule_2_classLit) , Lorg_dominokit_domino_typography_client_TypographyClientModule_2_classLit.typeName));
}

var LOGGER_48;
var Lorg_dominokit_domino_typography_client_TypographyClientModule_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyClientModule', null);
function TypographyModuleConfiguration(){
}

defineClass(301, 1, {}, TypographyModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_39(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_39(registry){
}
;
_.registerContributions = function registerContributions_39(registry){
  $registerContribution(Lorg_dominokit_domino_componentcase_shared_extension_ComponentCaseExtensionPoint_2_classLit, new TypographyPresenterContributionToComponentCaseExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_39(registry){
  $registerPresenter(new TypographyModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_39(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenterCommand_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_39(registry){
  $registerView(new TypographyModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit) , Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_typography_client_TypographyModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyModuleConfiguration', 301);
function TypographyModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(400, 15, $intern_31, TypographyModuleConfiguration$1);
var Lorg_dominokit_domino_typography_client_TypographyModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyModuleConfiguration/1', 400);
function TypographyModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(401, 16, $intern_32, TypographyModuleConfiguration$2);
var Lorg_dominokit_domino_typography_client_TypographyModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.typography.client', 'TypographyModuleConfiguration/2', 401);
function TypographyPresenterContributionToComponentCaseExtensionPoint(){
}

defineClass(652, 1, {}, TypographyPresenterContributionToComponentCaseExtensionPoint);
var Lorg_dominokit_domino_typography_client_contributions_TypographyPresenterContributionToComponentCaseExtensionPoint_2_classLit = createForClass('org.dominokit.domino.typography.client.contributions', 'TypographyPresenterContributionToComponentCaseExtensionPoint', 652);
var Lorg_dominokit_domino_typography_client_presenters_TypographyPresenter_2_classLit = createForClass('org.dominokit.domino.typography.client.presenters', 'TypographyPresenter', 398);
var Lorg_dominokit_domino_typography_client_presenters_TypographyPresenterCommand_2_classLit = createForClass('org.dominokit.domino.typography.client.presenters', 'TypographyPresenterCommand', 399);
function $clinit_AppClientModule(){
  $clinit_AppClientModule = emptyMethod;
  LOGGER_49 = getLogger(($ensureNamesAreInitialized(Lorg_dominokit_domino_ui_demo_AppClientModule_2_classLit) , Lorg_dominokit_domino_ui_demo_AppClientModule_2_classLit.typeName));
}

var LOGGER_49;
var Lorg_dominokit_domino_ui_demo_AppClientModule_2_classLit = createForClass('org.dominokit.domino.ui.demo', 'AppClientModule', null);
function $clinit_WavesClientModule(){
  $clinit_WavesClientModule = emptyMethod;
  LOGGER_50 = new GWTLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_WavesClientModule_2_classLit) , Lorg_dominokit_domino_waves_client_WavesClientModule_2_classLit.typeName));
}

var LOGGER_50;
var Lorg_dominokit_domino_waves_client_WavesClientModule_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesClientModule', null);
function WavesModuleConfiguration(){
}

defineClass(326, 1, {}, WavesModuleConfiguration);
_.registerInitialTasks = function registerInitialTasks_40(registry){
}
;
_.registerRequestRestSenders = function registerRequestRestSenders_40(registry){
}
;
_.registerContributions = function registerContributions_40(registry){
  $registerContribution(Lorg_dominokit_domino_components_shared_extension_ComponentsExtensionPoint_2_classLit, new WavesPresenterContributionToComponentsExtensionPoint);
}
;
_.registerPresenters = function registerPresenters_40(registry){
  $registerPresenter(new WavesModuleConfiguration$1(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName)));
}
;
_.registerRequests = function registerRequests_40(registry){
  $registerCommand(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenterCommand_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenterCommand_2_classLit.canonicalName), ($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName));
}
;
_.registerViews = function registerViews_40(registry){
  $registerView(new WavesModuleConfiguration$2(($ensureNamesAreInitialized(Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit) , Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit.canonicalName)));
}
;
var Lorg_dominokit_domino_waves_client_WavesModuleConfiguration_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesModuleConfiguration', 326);
function WavesModuleConfiguration$1($anonymous0, $anonymous1){
  LazyPresenterLoader.call(this, $anonymous0, $anonymous1);
}

defineClass(500, 15, $intern_31, WavesModuleConfiguration$1);
var Lorg_dominokit_domino_waves_client_WavesModuleConfiguration$1_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesModuleConfiguration/1', 500);
function WavesModuleConfiguration$2($anonymous0){
  LazyViewLoader.call(this, $anonymous0);
}

defineClass(501, 16, $intern_32, WavesModuleConfiguration$2);
var Lorg_dominokit_domino_waves_client_WavesModuleConfiguration$2_2_classLit = createForClass('org.dominokit.domino.waves.client', 'WavesModuleConfiguration/2', 501);
function WavesPresenterContributionToComponentsExtensionPoint(){
}

defineClass(702, 1, {}, WavesPresenterContributionToComponentsExtensionPoint);
var Lorg_dominokit_domino_waves_client_contributions_WavesPresenterContributionToComponentsExtensionPoint_2_classLit = createForClass('org.dominokit.domino.waves.client.contributions', 'WavesPresenterContributionToComponentsExtensionPoint', 702);
var Lorg_dominokit_domino_waves_client_presenters_WavesPresenter_2_classLit = createForClass('org.dominokit.domino.waves.client.presenters', 'WavesPresenter', 498);
var Lorg_dominokit_domino_waves_client_presenters_WavesPresenterCommand_2_classLit = createForClass('org.dominokit.domino.waves.client.presenters', 'WavesPresenterCommand', 499);
function $encode_1(value_0){
  return !value_0?($clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_0):new JSONNumber(value_0.value_0);
}

function $encode_2(value_0){
  return !value_0?($clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_0):new JSONNumber(toDouble_0(value_0.value_0));
}

function $encode_3(value_0){
  return value_0 == null?($clinit_Defaults() , $clinit_JSONNull() , $clinit_JSONNull() , instance_0):new JSONString(value_0);
}

function $clinit_Defaults(){
  $clinit_Defaults = emptyMethod;
  dispatcher = ($clinit_DefaultDispatcher() , INSTANCE_1);
  serviceRoot_0 = getModuleBaseURL();
}

function setDispatcher(value_0){
  $clinit_Defaults();
  dispatcher = value_0;
}

function setServiceRoot(serviceRoot){
  $clinit_Defaults();
  var suffixlength;
  suffixlength = '/'.length;
  $equals_0(serviceRoot.substr(serviceRoot.length - suffixlength, suffixlength), '/') || (serviceRoot += '/');
  serviceRoot_0 = serviceRoot;
}

var addXHttpMethodOverrideHeader = true, dispatcher, serviceRoot_0;
function FailedStatusCodeException(message){
  RuntimeException_0.call(this, message);
}

defineClass(762, 19, $intern_3);
var Lorg_fusesource_restygwt_client_FailedStatusCodeException_2_classLit = createForClass('org.fusesource.restygwt.client', 'FailedStatusCodeException', 762);
function FailedResponseException(response){
  var lastArg;
  FailedStatusCodeException.call(this, (lastArg = response.xmlHttpRequest.statusText , response.getStatusCode() , lastArg));
}

defineClass(763, 762, $intern_3, FailedResponseException);
var Lorg_fusesource_restygwt_client_FailedResponseException_2_classLit = createForClass('org.fusesource.restygwt.client', 'FailedResponseException', 763);
function isRequestGoingToFileSystem(baseUrl, requestUrl){
  if ($equals_0(requestUrl.substr(0, 4), 'file')) {
    return true;
  }
  if ($equals_0(baseUrl.substr(0, 4), 'file') && $equals_0(requestUrl.substr(0, 1), '/')) {
    return true;
  }
  if ($equals_0(baseUrl.substr(0, 4), 'file') && $equals_0(requestUrl.substr(0, 1), '.')) {
    return true;
  }
  return false;
}

function $headers(this$static, headers){
  var entry, entry$iterator;
  if (headers) {
    for (entry$iterator = headers.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
      entry = castTo(entry$iterator.next_1(), 43);
      $setHeader(this$static.builder, castToString(entry.getKey()), castToString(entry.getValue()));
    }
  }
  return this$static;
}

function $isExpected(this$static, status_0){
  var baseUrl, requestUrl;
  baseUrl = getHostPageBaseURL();
  requestUrl = this$static.builder.url_0;
  return isRequestGoingToFileSystem(baseUrl, requestUrl) || this$static.anyStatus || $contains_0(this$static.expectedStatuses, valueOf(status_0));
}

function $json(this$static, data_0){
  $getHeader(this$static.builder) == null && ($setHeader(this$static.builder, 'Content-Type', 'application/json') , this$static);
  $setRequestData(this$static.builder, $toString_0(data_0));
  return this$static;
}

function $send_0(this$static, callback){
  var localDispatcher;
  this$static.builder.timeoutMillis == 0 && ($clinit_Defaults() , false) && $setTimeoutMillis(this$static.builder, ($clinit_Defaults() , -1));
  $setCallback_0(this$static.builder, callback);
  localDispatcher = ($clinit_Defaults() , $clinit_Defaults() , dispatcher);
  return localDispatcher.send_0(this$static, this$static.builder);
}

function Method(resource){
  this.expectedStatuses = new HashSet;
  $add_1(this.expectedStatuses, valueOf(200));
  $add_1(this.expectedStatuses, valueOf(201));
  $add_1(this.expectedStatuses, valueOf(204));
  $add_1(this.expectedStatuses, valueOf(1223));
  new HashMap;
  this.builder = new Method$MethodRequestBuilder($getUri(resource));
}

defineClass(743, 1, {}, Method);
_.anyStatus = false;
var Lorg_fusesource_restygwt_client_Method_2_classLit = createForClass('org.fusesource.restygwt.client', 'Method', 743);
function Method$MethodRequestBuilder(url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, 'POST', url_0);
  this.requestData = null;
  $clinit_Defaults();
  addXHttpMethodOverrideHeader && $setHeader(this, 'X-HTTP-Method-Override', 'POST');
}

defineClass(744, 211, {}, Method$MethodRequestBuilder);
var Lorg_fusesource_restygwt_client_Method$MethodRequestBuilder_2_classLit = createForClass('org.fusesource.restygwt.client', 'Method/MethodRequestBuilder', 744);
function $getUri(this$static){
  if (this$static.query != null) {
    return this$static.path + '?' + this$static.query;
  }
  return this$static.path;
}

function $post(this$static){
  return $headers(new Method(this$static), this$static.headers_0);
}

function $resolve(this$static, path){
  if ($equals_0(path.substr(0, 5), 'http:') || $equals_0(path.substr(0, 6), 'https:') || $equals_0(path.substr(0, 5), 'file:')) {
    return new Resource_0(path, this$static.query, this$static.headers_0);
  }
  $equals_0(path.substr(0, 1), '/') && (path = path.substr(1));
  return new Resource_0(this$static.path + '/' + path, this$static.query, this$static.headers_0);
}

function Resource(uri_0){
  Resource_1.call(this, uri_0);
}

function Resource_0(uri_0, query, headers){
  var suffixlength;
  this.path = (suffixlength = '/'.length , $equals_0(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?$substring_0(uri_0, 0, uri_0.length - 1):uri_0);
  this.query = query;
  this.headers_0 = headers?headers:null;
}

function Resource_1(uri_0){
  var pos, suffixlength;
  pos = $indexOf(uri_0, fromCodePoint(63));
  if (pos >= 0) {
    this.path = uri_0.substr(0, pos);
    this.query = uri_0.substr(pos + 1);
  }
   else {
    this.path = (suffixlength = '/'.length , $equals_0(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?$substring_0(uri_0, 0, uri_0.length - 1):uri_0);
    this.query = null;
  }
  this.headers_0 = null;
}

defineClass(125, 1, {}, Resource, Resource_0);
var Lorg_fusesource_restygwt_client_Resource_2_classLit = createForClass('org.fusesource.restygwt.client', 'Resource', 125);
function $clinit_DefaultDispatcher(){
  $clinit_DefaultDispatcher = emptyMethod;
  INSTANCE_1 = new DefaultDispatcher;
}

function DefaultDispatcher(){
}

defineClass(566, 1, {}, DefaultDispatcher);
_.send_0 = function send_0(method, builder){
  var content_0, logger;
  if (loggingIsEnabled()) {
    logger = getLogger(($ensureNamesAreInitialized(Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2_classLit) , Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2_classLit.typeName));
    $fine(logger, 'Sending http request: ' + builder.httpMethod + ' ' + builder.url_0 + ' ,timeout:' + builder.timeoutMillis);
    content_0 = builder.requestData;
    content_0 != null && content_0.length > 0 && $fine(logger, content_0);
  }
  return throwIfNull('callback', builder.callback) , $doSend(builder, builder.requestData, builder.callback);
}
;
var INSTANCE_1;
var Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2_classLit = createForClass('org.fusesource.restygwt.client.dispatcher', 'DefaultDispatcher', 566);
var I_classLit = createForPrimitive('int', 'I');
var Z_classLit = createForPrimitive('boolean', 'Z');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'ie10']], [['locale', 'default'], ['user.agent', 'ie8']], [['locale', 'default'], ['user.agent', 'ie9']], [['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceMappingURL=static/gwt/extra/app/symbolMaps/995EF99B9D4D38108CA18C4F03BB4A6B_sourceMap0.json 
//# sourceURL=app-0.js

