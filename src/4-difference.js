const { Temporal, Intl, toTemporalInstant } = require('@js-temporal/polyfill');

const SECOND_IN_MILLIS = 1000;
const MINUTE_IN_MILLIS = SECOND_IN_MILLIS * 60;
const HOUR_IN_MILLIS = MINUTE_IN_MILLIS * 60;
const DAY_IN_MILLIS = HOUR_IN_MILLIS * 24;
const WEEK_IN_MILLIS = DAY_IN_MILLIS * 7;

// Date
console.log("Date");

let objectDateNow = new Date();
let objectDateCompare = new Date('2021-07-17T00:00Z');

const differenceDate = objectDateNow.getTime() - objectDateCompare.getTime();

console.log({
  now: objectDateNow,
  compare: objectDateCompare,
  differenceInDays: (differenceDate / (1000*60*60*24)) % 7,
  differenceInHours: (differenceDate / (1000*60*60)) % 24,
  differenceInMinutes: (differenceDate / (1000*60)),
  differenceInSeconds: (differenceDate / 1000),
  differenceInMilliseconds: differenceDate,
});

// Temporal
console.log("Temporal");

const objectTemporalNow = Temporal.now.instant();
const objectTemporalCompare = Temporal.Instant.from('2021-07-17T00:00Z');

const differenceTemporal = objectTemporalCompare.until(objectTemporalNow, { largestUnit: 'auto', smallestUnit: 'nanoseconds' });

console.log({
  now: objectTemporalNow,
  compare: objectTemporalCompare,
  differenceInDays: differenceTemporal.total({
    unit: 'days'
  }),
  differenceInHours: differenceTemporal.total({
    unit: 'hours'
  }),
  differenceInMinutes: differenceTemporal.total({
    unit: 'minutes'
  }),
  differenceInSeconds: differenceTemporal.total({
    unit: 'seconds'
  }),
  differenceInMilliseconds: differenceTemporal.total({
    unit: 'milliseconds'
  }),
});