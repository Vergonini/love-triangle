module.exports = function getLoveTrianglesCount(preferences = []) {
  let array = preferences;
  let length = preferences.length;
  let count = index = link = 0;

  for (let i = 0; i < length; i++) {
    index = i + 1;

    if (index == array[i]) continue;

    link = array[i];
    link = array[link - 1];
    link = array[link - 1];

    if (link == index) count++;
  }
  return count/3;
};
