/** Akses user name, namun dengan nama variabel yang berbeda dari atribut pada objek user
 */
const getUserFirstName = (user) => {
  // TODO: answer here
  const { name }  = user;
  return name;
};

console.log(getUserFirstName({ name: "John", email: "john@example.com" }));

module.exports = getUserFirstName