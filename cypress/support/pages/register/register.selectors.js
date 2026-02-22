const registerSelectors = Object.freeze({
  titleInformationAccount: "#form .login-form h2",
  titleMrs: "#id_gender2",
  name: "#name",
  email: "#email",
  password: "[data-qa=password]",
  day: "#days",
  month: "#months",
  year: "#years",
  checkNewsletter: "#newsletter",
  firstName: "[data-qa=first_name]",
  lastName: "[data-qa=last_name]",
  company: "[data-qa=company]",
  address: "[data-qa=address]",
  address2: "[data-qa=address2]",
  country: "[data-qa=country]",
  state: "[data-qa=state]",
  city: "[data-qa=city]",
  zipcode: "[data-qa=zipcode]",
  number: "[data-qa=mobile_number]",
  btnCreateAccount: "[data-qa=create-account]",
});

export { registerSelectors };
