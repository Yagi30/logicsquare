const cafes = require("./cafes");
const places = require("./places");

const findCaliforniaCafes = (cafe) => {
  const getCafes = cafes.filter((item) =>
    item.name.toLowerCase().includes(cafe.trim().toLowerCase())
  );
  // console.log({ getCafes });
  const matchCafePlace = [];
  for (let cafe of getCafes) {
    const getPlace = places.find((place) => cafe.place_id === place.id);
    // console.log({ getPlace });
    delete getPlace.id;
    delete cafe.place_id;

    matchCafePlace.push({ ...cafe, ...getPlace });
  }
  // console.log({ matchCafePlace });
  return matchCafePlace;
};

const getCafeWIthPlace = findCaliforniaCafes("bazaar");

console.log(getCafeWIthPlace);
