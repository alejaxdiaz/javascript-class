// Function to start
function startGame() {
    // Ask for character and companion names
    let characterName = prompt("Enter your character name:");
    let companionName = prompt("Enter your companion name:");
  
    // Create a character with three lives
    let character = {
      name: characterName,
      lives: 3
    };
  
    // Intro
    alert("Welcome, " + character.name + "! Your companion, " + companionName + ", has been captured by Mozarael, a powerful mage.");
    alert("You must embark on a quest to save " + companionName + " from Mozarael's clutches.");
  
    // Game loop
    while (character.lives > 0) {
      let firstChoice;
      do { //loop through this while the user chose anything but 2 and have lives
        firstChoice = prompt("Choose your action:\n1. Go to the black tower through the front door\n2. Seek help from villagers\n3. Find a secret passage");
        switch (firstChoice) {
          case "1":
            alert("You approach the black tower, but Mozarael's magic barrier prevents your entry. You lose a life.");
            character.lives--;
            break;
          case "2":
            alert("The villagers offer their assistance and provide you with the map to a hidden passage to enter Mozarael Black Tower and avoid detection.");
            break;
          case "3":
            alert("You discover a hidden passage that leads you directly to Mozarael's lair. Unfortunately, Mozarael's dark magic overwhelms you, and you lose a life.");
            character.lives--;
            break;
          default:
            alert("Invalid choice, please try again.");
        }
      } while (firstChoice !== "2" && character.lives > 0);
  
      if (character.lives <= 0) { //check if the player stil have lives 
        alert("Game over! You have lost all your lives. Please start again.");
        return;
      }
  
      alert("With the villagers map you sneak in through a hidden underground tunnel and reach a hidden chamber filled with treasures.")
      alert("As soon as you step inside, you'll notice magical glowing words appear in the center of the chamber.")
      alert("In the depths of the chamber's veil,\nMagic guards, an enigmatic trail.\nChoose one object, for your fate, unveil.")
  
      let secondChoice;
      do {
        secondChoice = prompt("What do you choose:\n1. A magical artifact with a golden glow \n2. A mighty enchanted sword \n3. A white cloak that appears to be inoffensive but attractive.");
        switch (secondChoice) {
          case "1":
            alert("You are weakened as soon as you touch the artifact and feel the curse in your veins. You lose a life.");
            character.lives--;
            break;
          case "2":
            alert("It was actually a snake transformed into a sword that bit you and infected you. You lose a life.");
            character.lives--;
            break;
          case "3":
            alert("The cloak grants you invisibility. You use it to avoid conflict and look for " + companionName + ".");
            break;
          default:
            alert("Invalid choice, please try again.");
        }
      } while (secondChoice !== "3" && character.lives > 0);
  
      if (character.lives <= 0) { //check if the player stil have lives 
        alert("Game over! You have lost all your lives. Please start game.");
        return;
      }
  
      alert("With the invisibility cloke, you can move through the Tower undetected until you reach your destination.")
      alert("On the last floor of the tower, you have one last option. You can see three magnificent doors.")
      alert("At the top of the doors you can read: \nBeware the doors, shrouded in mystery's haze, \nOne holds death, where your steps will ablaze. \nAnother cradles freedom, a loyal embrace, \nWhile the last conceals a dreadful, eternal space.")
  
      let thirdChoice;
      do {
        thirdChoice = prompt("Which door do you choose:\n1. First one to the left \n2. Middle door \n3. Last to the right.");
        switch (thirdChoice) {
          case "1":
            alert("Upon crossing the Door of Peril, a grim fate befalls the hero. Defeated and overpowered, their journey reaches a tragic end. The echoes of their valiant efforts shall linger in the annals of history, forever remembered as a hero who faced their demise.");
            alert("Game over! Please start again.");
            return; //This is final choice, if the player chose it, it should end. Even if it has more lives.  
          case "2":
            alert("As the hero steps through the Door of Loyalty, a heartwarming sight awaits. There stands their loyal companion, held captive for far too long. With unwavering determination, the hero breaks the chains that bind their friend, and together they soar into the sky, leaving the tower and its shadows behind.");
            break; //Sucess! 
          case "3":
            alert("Behind the Door of Imprisonment lies a grim reality. The hero finds themselves trapped within its confines, swallowed by darkness and despair. Their fate is sealed, condemned to an eternity of confinement, forever severed from the light of freedom.");
            alert("Game over! Please start again.");
            return; //This is final choice, if the player chose it, it should end. Even if it has more lives.  
          default:
            alert("Invalid choice, please start again.");
        }
      } while (thirdChoice !== "2" && character.lives > 0);
  
      if (character.lives <= 0) { //check if the player stil have lives 
        alert("Game over! You have lost all your lives. Please start again.");
        return;
      } else {
        alert("Congratulations! You have completed the game and saved " + companionName + "!");
        return;
      }
    }
  }
  
  // Start the game
  startGame();
  