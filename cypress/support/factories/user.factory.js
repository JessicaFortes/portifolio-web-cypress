function buildUser(baseUser) {
  const uniqueId = `${Math.floor(Math.random() * 1000000)}`.padStart(6, "0");

  return {
    ...baseUser,
    firstName: baseUser.firstName,
    email: `user-${uniqueId}@qa.com.br`,
  };
}

export { buildUser };
