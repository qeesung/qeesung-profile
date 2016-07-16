(function() {
  'use strict';

  angular
    .module('qeesungProfile')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
