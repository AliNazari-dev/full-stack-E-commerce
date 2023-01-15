import axios from "axios";

const BASE_URL = "/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjE3NmMyYWEwN2MyOTgzODdmNmZmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mzc2ODYxMCwiZXhwIjoxNjc0MDI3ODEwfQ.klJ1r17BzWr2wfoPnklEwBkKmmrDY4vm-i_o-etKPpM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer${TOKEN}` },
});
