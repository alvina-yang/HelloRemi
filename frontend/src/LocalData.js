let patientCode = '';
let patientName = ''; // Default name
let username = '';
let password = '';
let name = '';
let age = 0;
let dob = ''; // Date of Birth
let familyBackground = '';
let hobbiesAndInterests = '';
let memorableQuotes = '';
let relationship = '';
let memorableEvent = '';
let additionalInformation = '';
let story = "";
let discord = "";

// Patient Code
export const getPatientCode = () => patientCode;
export const setPatientCode = (code) => {
  patientCode = code;
};

// Patient Name
export const getPatientName = () => patientName;
export const setPatientName = (name) => {
  patientName = name;
};

// Username
export const getUsername = () => username;
export const setUsername = (newUsername) => {
  username = newUsername;
};

// Password
export const getPassword = () => password;
export const setPassword = (newPassword) => {
  password = newPassword;
};

// Name
export const getName = () => name;
export const setName = (newName) => {
  name = newName;
};

// Age
export const getAge = () => age;
export const setAge = (newAge) => {
  age = newAge;
};

// Date of Birth
export const getDOB = () => dob;
export const setDOB = (newDOB) => {
  dob = newDOB;
};

// Family Background
export const getFamilyBackground = () => familyBackground;
export const setFamilyBackground = (newFamilyBackground) => {
  familyBackground = newFamilyBackground;
};

// Hobbies and Interests
export const getHobbiesAndInterests = () => hobbiesAndInterests;
export const setHobbiesAndInterests = (newHobbiesAndInterests) => {
  hobbiesAndInterests = newHobbiesAndInterests;
};

// Memorable Quotes
export const getMemorableQuotes = () => memorableQuotes;
export const setMemorableQuotes = (newMemorableQuotes) => {
  memorableQuotes = newMemorableQuotes;
};

// Relationship
export const getRelationship = () => relationship;
export const setRelationship = (newRelationship) => {
  relationship = newRelationship;
};

// Memorable Event
export const getMemorableEvent = () => memorableEvent;
export const setMemorableEvent = (newMemorableEvent) => {
  memorableEvent = newMemorableEvent;
};

// Additional Information
export const getAdditionalInformation = () => additionalInformation;
export const setAdditionalInformation = (newAdditionalInformation) => {
  additionalInformation = newAdditionalInformation;
};

export const getStory = () => story;
export const setStory = (newStory) => {story = newStory};

export const getDiscord = () => discord;
export const setDiscord = (newDiscord) => {discord = newDiscord};

