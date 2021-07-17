const { Temporal, Intl, toTemporalInstant } = require('@js-temporal/polyfill');

// Date
console.log("Date");

let objectDateRecife = new Date('2021-07-17T00:00Z');
let objectDateLosAngeles = new Date('2021-07-17T00:00Z');

// Em relação ao fuso do cliente.
// objectDateRecife = new Date(objectDateRecife.toLocaleString('pt-BR', {timeZone: 'America/Recife'}));
// objectDateLosAngeles = new Date(objectDateLosAngeles.toLocaleString('pt-BR', {timeZone: 'America/Los_Angeles'}));

objectDateRecife = new Date(objectDateRecife.getTime() - (3 * 3600000));
objectDateLosAngeles = new Date(objectDateLosAngeles.getTime() - (7 * 3600000));

const isEquals = new Date(objectDateLosAngeles.getTime() + (7 * 3600000)).getTime() ===  new Date(objectDateRecife.getTime() + (3 * 3600000)).getTime();

console.log({
  recife: objectDateRecife,
  losAngeles: objectDateLosAngeles,
  isEquals
});


// Temporal
console.log("Temporal");

const objectTemporal = Temporal.Instant.from('2021-07-17T00:00Z');
const objectTemporalRecife = objectTemporal.toZonedDateTimeISO('America/Recife');
const objectTemporalLosAngeles = objectTemporal.toZonedDateTimeISO('America/Los_Angeles');

console.log({
  recife: objectTemporalRecife,
  losAngeles: objectTemporalLosAngeles,
  isEquals: Temporal.ZonedDateTime.compare(objectTemporalRecife, objectTemporalLosAngeles) === 0
});