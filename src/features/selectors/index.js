// seletor que será passado no useSelector, para buscar os dados na store;
export const userSelector = (state) => state.stock.user;
export const emailSelector = (state) => state.stock.signUpEmail;
export const idSelector = (state) => state.stock.user.uid;
export const urlSelector = (state) => state.stock.url;
export const textSelector = (state) => state.local.text
export const filmsSelector = (state) => state.films.posts;