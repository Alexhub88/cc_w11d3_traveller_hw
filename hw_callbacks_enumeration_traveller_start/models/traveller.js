const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeys = this.journeys;
  const getStartLocations = journeys.map((journey) => {
    return journey.startLocation});
  return getStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeys = this.journeys;
  const getEndLocations = journeys.map((journey) => {
    return journey.endLocation});
  return getEndLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const journeys = this.journeys;
  const getTransport = journeys.map((journey) => {
    return journey.transport});
  return getTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys;
  const getJourneysUsingTransport = function (transport) {
    return journeys.filter(journey => journey.transport === transport);
  }
  const journeysUsingTransport = getJourneysUsingTransport(transport);
  return journeysUsingTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys;
  const getJourneysUsingMinDistance = function (minDistance) {
    return journeys.filter(journey => journey.distance >= minDistance);
  }
  const journeysUsingMinDistance = getJourneysUsingMinDistance(minDistance);
  return journeysUsingMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeys = this.journeys;
  const calculateTotalDistance = function (journeys){
    return journeys.reduce(function (previous, journeyObj) {
      return previous + journeyObj.distance;
    }, 0);
  };
  return calculateTotalDistance(journeys);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const journeys = this.journeys;
  const transportList = journeys.map((journey) => {
    return journey.transport});
  let nonUniqueModes =  transportList;

  const uniqueModes = [];

    nonUniqueModes.forEach((transportMode) => {
    if (!uniqueModes.includes(transportMode)) uniqueModes.push(transportMode);
  });
  return uniqueModes;
};

module.exports = Traveller;
