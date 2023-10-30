const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an)/i, "").trim();
}

// function strip(bandName){
//   return bandName.replace(/^(a |the |an)/i, '').trim();
// }

// 每個項目要增加同樣的新字串
// function stripAndAdd(bandName, prefix) {
//   return (prefix + ' ' + bandName).trim();
// }

// const newPrefix = "New ";
// const sortedBands = bands.sort((a, b) => stripAndAdd(a, newPrefix) > stripAndAdd(b, newPrefix) ? 1 : -1);

// 每個項目要增加不同的新字串
// function stripAndAddCustom(bandName, customPrefix) {
//   return (customPrefix + ' ' + bandName).trim();
// }

// const customPrefixes = {
//   "The Plot in You": "Custom Prefix 1",
//   "The Devil Wears Prada": "Custom Prefix 2",
//   // 在這裡繼續列出其他樂團名稱和對應的自訂前綴
// };

// const sortedBands = bands.sort((a, b) => {
// 檢查每個樂團名稱對應的自訂前綴是否存在，確保不論前綴是否存在，都會返回一個字串值，而不是undefined
//   const customPrefixA = customPrefixes[a] || "";
//   const customPrefixB = customPrefixes[b] || "";

//   const strippedA = stripAndAddCustom(a, customPrefixA);
//   const strippedB = stripAndAddCustom(b, customPrefixB);

//   return strippedA > strippedB ? 1 : -1;
// });

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
// const sortedBands = bands.sort((a,b)=> strip(a)>strip(b)?1:-1);

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");
// document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);
