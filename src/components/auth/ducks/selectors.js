import Cookies from "js-cookie";

const cookieAuthName = "owlveyAuth";

function getCookieAuth() {
  return Cookies.getJSON(cookieAuthName) || {};
}

function setCookieAuth(auth) {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60);
  Cookies.set(cookieAuthName, auth, { expires });
}

function deleteCookieAuth() {
  Cookies.remove(cookieAuthName);
}

function isAuthValid() {
  const { sessionId } = getCookieAuth();
  return !!sessionId;
}

export { isAuthValid, getCookieAuth, setCookieAuth, deleteCookieAuth };
