export const calculateAge = (birthDate: Date) => {
  let diff_in_ms = Date.now() - birthDate.getTime();
  let age_dt = new Date(diff_in_ms);

  //let age: String;
  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

export const calculateAgeAtDate = (birthDate: Date, ageAtDate: Date) => {
  let diff_in_ms =
    new Date(ageAtDate).getTime() - new Date(birthDate).getTime();
  let age_dt = new Date(diff_in_ms);

  //let age: String;
  return Math.abs(age_dt.getUTCFullYear() - 1970);
};
