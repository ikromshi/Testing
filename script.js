const database = [
  "cats.com", 
  "rate_my_face.com", 
  "catsrofic.com", 
  "cars.com", 
  "catsInCars.com",
  "catsy.com"
];

const search = (searchInput, db) => {
  const matches = db.filter(site => {
    return site.toLowerCase().includes(searchInput);
  });
  return matches.length < 4 ? matches : matches.slice(0, 3);
};

module.exports = search;