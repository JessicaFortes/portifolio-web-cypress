const contactSelectors = Object.freeze({
  contactMenu: "a[href='/contact_us']",
  name: "[data-qa=name]",
  email: "[data-qa=email]",
  subject: "[data-qa=subject]",
  message: "[data-qa=message]",
  uploadFile: "input[name='upload_file']",
  submitButton: "[data-qa=submit-button]",
  successBanner: ".status.alert.alert-success",
  homeButton: "#form-section a.btn-success",
});

export { contactSelectors };
