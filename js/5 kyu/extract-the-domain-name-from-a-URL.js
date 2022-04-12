/* 
  Extract the domain name from a URL

  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

  * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
  * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
  * url = "https://www.cnet.com"                -> domain name = cnet"

  Link: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
*/

function domainName(url) {
  const copyUrl = url.replace(/https:\/\/|http:\/\//, '').replace(/^www./, '');
  const urlObj = new URL(`https://${copyUrl}`);

  return urlObj.hostname.split('.')[0];
}

console.log(domainName('http://google.com')); // google
console.log(domainName('https://youtube.com')); // youtube
console.log(domainName('http://google.co.jp')); // google
