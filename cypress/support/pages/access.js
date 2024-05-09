const login = Object.freeze({
  email: "[data-qa=login-email]",
  password: "[data-qa=login-password]",
  btnLogin: "[data-qa=login-button]",
  titlePage: "#form > div > div > div.col-sm-4.col-sm-offset-1 > div > h2"

});

const newUser = Object.freeze({
  name: "[data-qa=signup-name]",
  email: "[data-qa=signup-email]",
  btnSignUp: "[data-qa=signup-button]",
  title: "#form > div > div > div:nth-child(3) > div > h2"

});

export { login, newUser };