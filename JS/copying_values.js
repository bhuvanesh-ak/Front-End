// Shallow Copy
let squad = {
    team: "india",
    players: 25,
    coach: {
        headcoach: "ravi",
        assistant: "sridhar"
    }
};
let worldcup = { ...squad };
// created a shallow copy
console.log(squad);
console.log(worldcup);
worldcup.team = "pakistan";// Changes worldcup, but not squad 
worldcup.coach.headcoach = "dravid"// Changes both worldcup and squad 
console.log(worldcup);
console.log(squad);

// DEEP COPY
let rcb = { 
    players: 24,
    coach: "mike hesson",
    captain: {
        oldCaptain:'virat kohli',
        newCaptain:"Faf fu plessis"
   }
}
let champions=JSON.parse(JSON.stringify(rcb));
console.log(rcb);
console.log(champions);
champions.players=18;
champions.captain.permanentCaptain="Virat Kohli";
// Doesn't change the original object "rcb" but only the new object "champions"
console.log(rcb);
console.log(champions);