const story = {
    start: {
        text: "You wake up in a dark forest. You can go left, right, enter a cave, head towards a mountain, or walk towards a distant city.",
        choices: {
            left: "leftPath",
            right: "rightPath",
            cave: "cavePath",
            mountain: "mountainPath",
            city: "cityPath"
        }
    },
    leftPath: {
        text: "You encounter a friendly deer. Do you want to pet it or ignore it?",
        choices: {
            pet: "petDeer",
            ignore: "ignoreDeer"
        }
    },
    rightPath: {
        text: "You find a river. Do you want to swim or build a raft?",
        choices: {
            swim: "swimRiver",
            raft: "buildRaft"
        }
    },
    cavePath: {
        text: "You discover a hidden cave. Do you want to explore it or leave?",
        choices: {
            explore: "exploreCave",
            leave: "leaveCave"
        }
    },
    exploreCave: {
        text: "Inside the cave, you find ancient drawings and hidden treasures. You win!",
        choices: {}
    },
    leaveCave: {
        text: "You leave the cave and continue your journey. Game over.",
        choices: {}
    },
    mountainPath: {
        text: "You reach a mountain. Do you want to climb it or go around?",
        choices: {
            climb: "climbMountain",
            goAround: "goAroundMountain"
        }
    },
    climbMountain: {
        text: "You reach the top and see a beautiful view. You win!",
        choices: {}
    },
    goAroundMountain: {
        text: "You get lost in the woods. Game over.",
        choices: {}
    },
    cityPath: {
        text: "You enter a bustling city. Do you want to explore the market or find a hotel?",
        choices: {
            explore: "exploreCity",
            hotel: "findHotel"
        }
    },
    exploreCity: {
        text: "You discover a hidden market filled with rare artifacts and treasures. You win!",
        choices: {}
    },
    findHotel: {
        text: "You get a comfortable room but miss all the adventure outside. Game over.",
        choices: {}
    },
    petDeer: {
        text: "The deer becomes your friend and leads you out of the forest. You win!",
        choices: {}
    },
    ignoreDeer: {
        text: "The deer runs away, and you get lost in the forest. Game over.",
        choices: {}
    },
    swimRiver: {
        text: "You swim across the river and find a treasure chest. You win!",
        choices: {}
    },
    buildRaft: {
        text: "While building a raft, you get caught in a storm. Game over.",
        choices: {}
    }
};

let currentNode = "start";

function displayStory() {
    const storyDiv = document.getElementById("story");
    const choicesDiv = document.getElementById("choices");

    if (!story[currentNode]) {
        storyDiv.innerHTML = "Error: Story path not found.";
        choicesDiv.innerHTML = "";
        return;
    }

    storyDiv.innerHTML = story[currentNode].text;
    choicesDiv.innerHTML = "";

    for (const choice in story[currentNode].choices) {
        const button = document.createElement("button");
        button.innerText = choice.charAt(0).toUpperCase() + choice.slice(1);
        button.classList.add("choice");
        button.onclick = () => {
            currentNode = story[currentNode].choices[choice];
            displayStory();
        };
        choicesDiv.appendChild(button);
    }
}

document.addEventListener("DOMContentLoaded", displayStory);
