import { authSelectors, authOperations } from "ducks";
import { isEmpty } from "lodash";

export default function loadCurrentAuth(store) {
  const promise = new Promise((resolve, reject) => {
    const auth = authSelectors.getCookieAuth();
    if (isEmpty(auth)) resolve(true);
    else {
      authOperations.loadCurrentUserInformation(
        store.dispatch,
        auth,
        resolve,
        reject,
      );
    }
  });
  return promise;
}
