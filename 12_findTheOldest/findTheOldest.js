const findTheOldest = function (array) {
  return array.reduce((oldest, current) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentPersonAge = getAge(current.yearOfBirth, current.yearOfDeath)
    return oldestAge > currentPersonAge ? oldest : current
  }, {});
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
