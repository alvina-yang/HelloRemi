let patientCode = '';
let patientName = 'Jane Doe'; // Default name

export const getPatientCode = () => patientCode;

export const setPatientCode = (code) => {
  patientCode = code;
};

export const getPatientName = () => patientName;

export const setPatientName = (name) => {
  patientName = name;
};