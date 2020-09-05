'use strict';

module.exports = function(settings, event) {
  // TODO Perform some action.
  var logInput = settings.logInput;
  var logLevel = settings.logLevel;
  var ruleName = settings.ruleName


  // get current debug status
  var currentDebugMode = !localStorage.getItem("com.adobe.reactor.debug")

  //prepend rule name if selected
  if (ruleName) {
    logInput = "[" + event.$rule.name + "] " + logInput
  }
  
  
  if (logInput) {
  	switch(logLevel) {
  	  case 'warn':  return turbine.logger.warn(logInput)
  	  case 'log':   return turbine.logger.log(logInput)
  	  case 'info':  return turbine.logger.info(logInput)
  	  case 'error': return turbine.logger.error(logInput)
  	  case 'debug': return turbine.logger.debug(logInput)
  	  default:      return turbine.logger.log(logInput)
  	}
   }
};