// ITERATION 1

// Suspects Array
class suspect {
    constructor(firstName, lastName, occupation, age, description, image, color) {
        this.firstName = firstName;
        this.lastName = lastName,
        this.occupation = occupation,
        this.age = age,
        this.description = description,
        this.image = image,
        this.color = color;
    }
}

const mrGreen = new suspect("Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green")

const drOrchid = new suspect("Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white")

const profPlum = new suspect("Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple")

const missScarlet = new suspect("Kasandra", "Scarlet", "Actor", 31, "She is an A-list movie star with a dark past", "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red")

const mrsPeacock = new suspect("Eleanor", "Peacock", "Socialité", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue")

const mrMustard = new suspect("Jack", "Mustard", "Retired", 62, "He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow")

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Array
class room {
    constructor(name) {
        this.name = name;
    }
}

const diningRoom = new room("diningRoom")
const conservatory = new room("conservatory")
const kitchen = new room("kitchen")
const study = new room("study")
const library = new room("library")
const billiardRoom = new room("billiardRoom")
const lounge = new room("lounge")
const ballroom = new room("ballroom")
const hall = new room("hall")
const spa = new room("spa")
const livingRoom = new room("livingRoom")
const observatory = new room("observatory")
const theater = new room("theater")
const guestHouse = new room("guestHouse")
const patio = new room("patio")

const roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// Weapons Array

class weapon {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

const rope  = new weapon("rope", 10)
const knife = new weapon("knife", 8 )
const candlestick = new weapon('candlestick', 2)
const dumbbell = new weapon("dumbbell", 30)
const poison = new weapon("poison", 2)
const axe = new weapon("axe", 15)
const bat = new weapon("bat", 13)
const trophy = new weapon("trophy", 25)
const pistol = new weapon("pistol", 20)

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];


// ITERATION 2

function selectRandom(array) {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}

class mystery {
    constructor(suspect, weapon, room) {
        this.suspect = suspect
        this.weapon = weapon
        this.room = room
    }
}

function pickMystery() {
    let theMystery = new mystery(selectRandom(suspectsArray), selectRandom(weaponsArray), selectRandom(roomsArray));
    return theMystery;
}


// ITERATION 3

function revealMystery(myMystery) {
    return `${myMystery.suspect.firstName} ${myMystery.suspect.lastName} killed Mr. Boddy using the ${myMystery.weapon.name} in the ${myMystery.room.name}!`;
}
