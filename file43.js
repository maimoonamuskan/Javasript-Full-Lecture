//object destructing
const band={
    bandName:"Led zepplin",
    famousSong:"stairway to heaven",
    year:"2004",
    anotherFamousSong:"peshawar",

};
let{bandName,famousSong,...restprops}=band;
console.log(bandName)
console.log(restprops)