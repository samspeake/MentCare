import { SELECT_PATIENT } from "../actionTypes";

const initialState = {
  DOB: "No Patient selected",
  gender: "",
  history: "No history to show",
  insurance: "",
  name: "",
  nextVisit: "",
  patientEmail: "",
  phoneNum: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_PATIENT: {
      const { patient } = action.payload;

      return {
        DOB: "DOB: " + patient.DOB,
        gender: "Gender: " + patient.Gender,
        history: "Patient History: " + patient.History,
        insurance: "Insurance DOB: " + patient.Insurance,
        name: "Name: " + patient.Name,
        nextVisit: "Next Visit: " + patient.nextVisit,
        patientEmail: "Patient Email: " + patient.patientEmail,
        phoneNum: "Phone Number: " + patient.phoneNum,
      };
    }
    default:
      return state;
  }
}
