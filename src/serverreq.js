import axios from "axios";
import { auth } from "./firebase";

let serverreq = {};

serverreq.get = (url, body) => {
  const idToken = auth.currentUser.getIdToken(/* force refresh */ true);
  axios.get(url, body, {
    headers: {
      idToken: idToken,
    },
  });
};
serverreq.post = (url, body) => {
  const idToken = auth.currentUser.getIdToken(/* force refresh */ true);
  axios.post(url, body, {
    headers: {
      idToken: idToken,
    },
  });
};
serverreq.put = (url, body) => {
  const idToken = auth.currentUser.getIdToken(/* force refresh */ true);
  axios.put(url, body, {
    headers: {
      idToken: idToken,
    },
  });
};
serverreq.delete = (url, body) => {
  const idToken = auth.currentUser.getIdToken(/* force refresh */ true);
  axios.delete(url, body, {
    headers: {
      idToken: idToken,
    },
  });
};

export default serverreq;
