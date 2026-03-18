let sor = 360;
let oszlop = 640;

// 1. Megszerezzük a Canvas-t és a rajzolási kontextust
const canvas = document.getElementById('kepVaszon');
const ctx = canvas.getContext('2d');
const width = 640;
const height = 360;

$.get("kep-1.txt").then(x=>{
    let adatok = x.split("\r\n").map(x=>chunk(x.split(" "),3)).flat(3);
    console.log(adatok);

    // 4. Létrehozunk egy üres ImageData objektumot a memóriában
    const imageData = ctx.createImageData(width, height);
    const pixelek = imageData.data; // Ez a tömb fogadja a színadatokat (Uint8ClampedArray)

    // 5. Feltöltjük a pixelek tömböt a nyers adatokkal
    // A ImageData.data tömb 4 komponenst vár pixelenként: R, G, B, A (átlátszóság)
    // A ciklusunk a nyers adatokon megy végig 3-asával, a pixel tömbbe pedig 4-esével ír.
    for (let i = 0, j = 0; i < adatok.length; i += 3, j += 4) {
        // Fontos: a adatok[i] szöveg, át kell alakítani számmá
        pixelek[j]     = parseInt(adatok[i]);     // R
        pixelek[j + 1] = parseInt(adatok[i + 1]); // G
        pixelek[j + 2] = parseInt(adatok[i + 2]); // B
        pixelek[j + 3] = 255;                           // Alpha (teljesen átlátszatlan)
    }

    // 6. Az összes adatot egyetlen lépésben kirajzoljuk a vászonra
    ctx.putImageData(imageData, 0, 0);

    console.log("A kép sikeresen kirajzolva a vászonra!");

})

function chunk(array, size) {
  const chunkedArray = []
  for (var i = 0; i < array.length; i += size) {
   chunkedArray.push(array.slice(i, i + size))
  }
  return chunkedArray
}
function rgb(array){
    return "rgb("+array.join(",")+")"
}