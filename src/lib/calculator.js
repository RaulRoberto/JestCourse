const { axios } = require("axios");
const { faker } = require("@faker-js/faker");

module.exports.sum = (num1, num2) => {
  const int1 = parseInt(num1, 10);
  const int2 = parseInt(num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error("Please check your input");
  }
  return int1 + int2;
};

// module.exports.multiplePost = async function multiplePost() {
//   let data = {
//     firstName: faker.name.findName(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//   };

//   await axios
//     .post(
//       "https://dev-leadsapp.phone1st.com/api/v1/lead/create/biruleibe?token=045df1f625c266ab54107b7fa51223ee",
//       data
//     )
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       return err.response.status;
//     });
//   return res.data;
// };
