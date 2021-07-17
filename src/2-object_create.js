const { Temporal, Intl, toTemporalInstant } = require('@js-temporal/polyfill');

// Date
const objectDate = new Date('2021-07-17T00:00Z');

console.log("Date");
console.log({
  object: objectDate,
  string: objectDate.toISOString(),
  milliseconds: objectDate.getTime()
});

// Temporal
const objectTemporal = Temporal.Instant.from('2021-07-17T00:00Z');

console.log("Temporal");
console.log({
  object: objectTemporal,
  string: objectTemporal.toString(),
  recife: objectTemporal.toZonedDateTimeISO('America/Recife'),
  brasilia: objectTemporal.toZonedDateTimeISO('America/Los_Angeles'),
  milliseconds: objectTemporal.epochMilliseconds
});