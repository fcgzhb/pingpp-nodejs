'use strict';

var PingppResource = require('../PingppResource');
var pingppMethod = PingppResource.method;

module.exports = PingppResource.extend({

  path: 'charges',

  includeBasic: [
    'create', 'list', 'retrieve',
    'setMetadata', 'getMetadata'
  ],

  refund: pingppMethod({
    method: 'POST',
    path: '/{id}/refund',
    urlParams: ['id']
  }),

  /**
   * Charge: Refund methods
   */
  createRefund: pingppMethod({
    method: 'POST',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId']
  }),

  listRefunds: pingppMethod({
    method: 'GET',
    path: '/{chargeId}/refunds',
    urlParams: ['chargeId']
  }),

  retrieveRefund: pingppMethod({
    method: 'GET',
    path: '/{chargeId}/refunds/{refundId}',
    urlParams: ['chargeId', 'refundId']
  }),

});