import { pink } from "@mui/material/colors";
import { leaves, mugunghwa, pinkwhite, sunflower, rupertwu, elonmusk, emilyli, ethanlee, jamiechem, miasmith} from "../assets/Assets";
const members = [
    {
        name: "Emily Li",
        relationship: "Granddaughter",
        username: "janedoe",
        picture: emilyli,
        password: "123",
        story: "We went to California for a summer trip together in 2015. You took me to visit the Golden Gate Bridge, and it was very fun. I still remember we swam together, climbed mountains, and you told me to be careful."
    },
    {
        name: "Mia Smith",
        relationship: "Granddaughter",
        username: "clarkkent",
        picture: miasmith,
        password: "123",
        story: "I always cherish our Sundays together, baking cookies and sharing stories. You taught me how to identify birds in our garden, and I still have the first painting we created together hanging in my room. Your wisdom and laughter make every moment special. "
    },
    {
        name: "Jamie Chen",
        relationship: "Niece",
        username: "harrypotter",
        picture: jamiechem,
        password: "123",
        story: "Dear Uncle, I'll never forget those summer camping trips we had, where you taught me about the stars and shared amazing stories by the campfire. Remember when you showed me how to fish at the lake near your cabin? And those evenings we spent playing chess. I was so happy when I finally beat you last year! Those are some of my favorite memories with you."
    },
    {
        name: "Ethan Lee",
        relationship: "Mentor",
        username: "ethanlee",
        picture: ethanlee,
        password: "123",
        story: "I'll always be grateful for the weekends we spent hiking and discussing technology and life. Your guidance in my first coding project was invaluable. I still remember the excitement of getting my model airplane to fly perfectly at the park with your help.",
    },
];

const patients = [
    {
        Name: "Rupert Wu",
        Picture: rupertwu,
        patientCode:"123456789"
    },
    {
        Name: "Elon Musk",
        Picture: elonmusk,
        patientCode:"121212",
    },
]

const relations = [
    {
        patientCode: "123456789",
        userNames: ["janedoe", "clarkkent", "harrypotter", "ethanlee"] 
    }
];


export {members, leaves, mugunghwa, pinkwhite, sunflower, relations, patients};