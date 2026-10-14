// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://contractor-backend.vercel.app/",
//   withCredentials: true,
// });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: `https://contractor-backend.vercel.app/api`,
  withCredentials: true,
});

export default api;