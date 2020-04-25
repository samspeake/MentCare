import { SELECT_PATIENT } from "../actionTypes";

const initialState = {
  DOB: "",
  gender: "",
  history: "",
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
        DOB: patient.DOB,
        gender: patient.Gender,
        history: patient.History,
        insurance: patient.Insurance,
        name: patient.Name,
        nextVisit: patient.nextVisit,
        patientEmail: patient.patientEmail,
        phoneNum: patient.phoneNum,
      };
    }
    default:
      return state;
  }
}
