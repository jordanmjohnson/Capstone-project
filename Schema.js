
/* 
const userData = new Schema ({ // User login data goes first as it will be needed in order to create an account.
    login: {
        userName: {
            String, required: true, unique: true
        },
password:{
    type: String,
    required:true
},
emailAddress: String,
    },

 gender: {       //Then comes in the technicals to determine things like reasonable weight for their gender and height
type: String,
enum: ["Male", "Female", "Other"]
 },

phoneNumber:{       //used for over text offers
    type: Number,
    maxlength: 10
},

location:{         //used to locate gyms near user
    country: String,
    state: String,
    city: String,
    zipCode: Number
},

weight:{          //used alongside gender to determine goal weight
type: Number
},

height:{
    type:Number
},

goals:{     //alongside goal time and difficulty will be used to determine how hard user will have to traint in order to get to goal in given time period
    type: Number,
    enum:["weight loss", "money saved", "steps walked"]
},

goalTime:{
    type:Number
},

difficulty:{
    type:String,
    enum: ["easy", "medium", "hard"]
},

connections:{           //connection for social media and stats to be displayed on profile
    type:String,
    enum: ["Facebook", "Discord", "Instagram"]
},

stats:{
    type:Number,
    enum:[ "Goals reached", "events attended"]
}

})
*/

//Current XML support overshadows the current support for JSON making it easier to form standards of use for it.
//JSON though it has no universal standards as of yet still is capable of working with a number frameworks and langauges with relative ease due to support from open source devs.

/* 
const characterData = new Schema({  //Second, would be the users in-game character data which will allow them to play the game portion of the app.

name: String,

characterDisplay:{      //These objects determine hair and eye color for character, character items currently equipped, the overall rating for those items, and the characters overall stats.
type:String,
enum:["blackHair","blondeHair","redHair"],
enum: ["blueEyes", "brownEyes", "greenEyes"]
},
characterItems:{
    type:String
},
characterItemRating:{
    type: Number
},
characterStats:{
    type:Number,
    enum:["Skills","Enemies Slain","Bosses Slain","Duel MMR", "Deaths","Current Floor", "Current Level"]
}
})
*/

/* 
const globalGameData = new Schema({       //The third object will be the global in-game data which will allow the current user to see other users online as well
    name: String,

globalGameLeaderboard:{ //shows leaderboard for in-game users
    type:String,
    enum:["Top Kills", "Highest Level", "Highest Duel MMR", "Best Loot"]
}
})
*/

// In XML comments can be added, edited, or erased from data parsed through it while JSON does not allow for such things.
// JSON however, can be used in virtually all browsers and can be parsed through Javascript.

/* 
const globalUserData = new Schema({       //Lastly will be the global user data outside of the game.

name: String,

privacy:{     //determines privacy setting
    type:boolean
},

globalProfileData:{  //shows friends of just the user, mutual friends between viewer and viewee, events attended by user, and goals completed by user.
    type:String,
    enum["Friends", "Mutal Friends", "Events Attended", "Goals Completed"]
},

globalUserLeaderboard:{   //leaderboards for users that will show those who have the most goals completed and most events attended.
    type: String,
    enum["Most Goals Completed", "Most Events Attended", ]
}

})
 */

   // XML databases received the benefits of being able to transition to data from schemas to others with very little issue while for JSON because of naming constraints it becomes a bit harder to transfer data from schema to schema.
   //However JSON uses less characters overall and has much simpler syntax compared to XML.
