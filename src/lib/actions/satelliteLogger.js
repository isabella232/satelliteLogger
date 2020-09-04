'use strict';

module.exports = function(settings, event) {
  // TODO Perform some action.
  let logInput = settings.logInput;
  let logLevel = settings.logLevel;
  let ruleName = settings.ruleName


  // get current debug status
  let currentDebugMode = !localStorage.getItem("com.adobe.reactor.debug")

  //prepend rule name if selected
  if (ruleName) {
  	logInput = `[${event.$rule.name}] ${logInput}`;	
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