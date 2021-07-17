const { Temporal, Intl, toTemporalInstant } = require('@js-temporal/polyfill');

const nowTemporal = Temporal.now.instant().toString();
const nowDate = new Date().toISOString();

console.log({
  nowTemporal,
  nowDate
});