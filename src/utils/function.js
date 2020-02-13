/**
 * Set cookie
 *
 * @param {string} name
 * @param {string} value
 * @param {number} day
 * @param {string} domain
 * @param {string} path
 * @param {boolean} secure
 * @param {boolean} HttpOnly
 */
function setCookie(name, value, day, domain, path, secure, HttpOnly) {
  let cookieText = '';
  if (navigator.cookieEnabled) {
    const cookieName = encodeURIComponent(name);
    const cookieValue = encodeURIComponent(value);
    cookieText = `${cookieName}=${cookieValue}`;

    if (typeof day === 'number') {
      const data = new Date();
      // 24 dni * 60 minut * 60 sekund * 1000 milisekund = milisekundy
      data.setTime(data.getTime() + day * (24 * 60 * 60 * 1000));
      cookieText += `;expires=${data.toGMTString()}`;
    }
    if (domain) {
      cookieText += `;domain=${domain}`;
    }
    if (path) {
      cookieText += `;path=${path}`;
    }
    if (secure) {
      cookieText += ';secure';
    }
    if (HttpOnly) {
      cookieText += ';HttpOnly';
    }
    document.cookie = cookieText;
  }
}
/**
 * Get value of cookie by name
 *
 * @param {string} name
 * @return {string}
 */
function getCookieValue(name) {
  let cookies = '';
  if (document.cookie !== '') {
    cookies = document.cookie.split(/; */);
    for (let index = 0; index < cookies.length; index += 1) {
      const cookieName = cookies[index].split('=')[0];
      const cookieValue = cookies[index].split('=')[1];
      if (cookieName === name) {
        return cookieValue;
      }
    }
  }
  return '';
}
/**
 * Limit string to given numbers of words
 * @param {string} str
 * @param {number} numberWords
 * @return {string}
 */
function limitedString(str = '', numberWords = 0) {
  return str
    .split(' ')
    .slice(0, numberWords)
    .concat(' [...]')
    .join(' ');
}
export { setCookie, getCookieValue, limitedString };
