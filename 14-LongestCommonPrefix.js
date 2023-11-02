/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var prefix = strs[0];
  for(var x = 1; x < strs.length; x++){
    while(!strs[x].startsWith(prefix)){
      prefix = prefix.substring(0,prefix.length-1);
    }
  }
  return prefix;
};
// Örnek kullanım:
const strs1 = ["arggfh", "arghy", "arhytdc"];
longestCommonPrefix(strs1);
