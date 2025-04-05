function schoolMaterials(numberOfPenPacks, numberOfMarkerPacks, LitersOfDetergent, percentDiscount) {
let pensPrice = numberOfPenPacks * 5.80;
let markerPrice = numberOfMarkerPacks * 7.20;
let detergentPricePerLiter = LitersOfDetergent * 1.20;


let lastPrice = pensPrice + markerPrice + detergentPricePerLiter;
let discountedPrice = lastPrice - (lastPrice * (percentDiscount/100))

console.log(discountedPrice);


}
schoolMaterials(2, 3, 4, 25);