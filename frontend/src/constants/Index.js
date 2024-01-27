import { pink } from "@mui/material/colors";
import { leaves, mugunghwa, pinkwhite, sunflower } from "../assets/Assets";
const members = [
    {
        name: "Jane Doe",
        relationship: "Daughter",
        username: "janedoe",
        picture: leaves,
        password: "123",
        story: "Lorem ipsum dolor  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Clark Kent",
        relationship: "Son",
        username: "clarkkent",
        picture: mugunghwa,
        password: "123",
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Harry Potter",
        relationship: "Friend",
        username: "harrypotter",
        picture: pinkwhite,
        password: "123",
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Tris Prior",
        relationship: "Daughter",
        username: "trisprior",
        picture: sunflower,
        password: "123",
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Katniss Everdeen",
        relationship: "Daughter",
        username: "katnisseverdeen",
        picture: leaves,
        password: "123",
        story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

const patients = [
    {
        Name: "Bob Ross",
        patientCode:123456789
    },
    {
        Name: "Elon Musk",
        patientCode:121212
    },
]

const relations = [
    {
        patientCode: 123456789,
        userNames: ["trisprior", "harrypotter", "katnisseverdeen"] 
    }
];


export {members, leaves, mugunghwa, pinkwhite, sunflower, relations, patients};