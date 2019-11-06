// Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.
// A string such as "word" contains only the following valid abbreviations:
//
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
// Notice that only the above abbreviations are valid abbreviations of the string "word". Any other string is not a valid abbreviation of "word".
//
// Note:
// Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.
//
// Example 1:
// Given s = "internationalization", abbr = "i12iz4n":
// Return true.
//
// Example 2:
// Given s = "apple", abbr = "a2e":
// Return false.

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = (word, abbr) => {
  if (word == null || abbr == null) return false;

  let i = 0;
  let j = 0;
  while ( i < word.length && j < abbr.length) {
    if (isNum(abbr[j])) {
      if (abbr[j] === '0') return false;
      let n = 0;
      while (j < abbr.length && isNum(abbr[j])) {
        n = n * 10 + Number(abbr[j]);
        j++;
      }
      i += n;
    } else {
      if (word[i] !== abbr[j]) return false;
      i++;
      j++;
    }
  }
  return i === word.length && j === abbr.length;
};

const isNum = c => /\d/.test(c);