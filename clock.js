//****** A) KULLANICIDAN ISIM BILGISI ISTEMEK ICIN-PROMPT KULLANDIK: */
// 1- once kullanicidan isim bilgisi iste:
let userName = prompt("Adiniz nedir?")
// 2- sonrasinda queryselector kullanarak document(html) icindeki myName id'li ogeye eris:
let myName = document.querySelector("#myName")
// 3- myName id'li elemente; eger bilgi girildiyse userName; bilgi girilmediyse "Misafir Kullanici" yazsin.
myName.innerHTML = `${userName.length > 0 ? userName : "Misafir Kullanici"}`


//****** B) SAAT & GUN BILGISI EKLEMEK ICIN BIR FONKSIYON OLUSTURALIM-PARAMETRE VERMEDEN: */
function time() {
    // 1- now diye bir degisken tanimlayip bunu new Date() ile eslestirelim; sonrasinda new Date()'ten veri alacak sekilde hour, minute, second, dayNumber (gun verisi numara olarak geliyor ve 1numara pazar'a denk geliyor) degiskenlerini tanimlayalim:
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let dayNumber = now.getDay();
    // 2- days ve dayName degiskenlerini tanimlayalim. day'i gun isimlerini pazardan baslayacak sekilde, dayName'i de numarasina gore day'deki karsiligini alacak sekilde tanimlayalim:
    let day=[`Pazar`, `Pazartesi`, `Sali`, `Carsamba`, `Persembe`, `Cuma`, `Cumartesi`]
    let dayName=day[dayNumber]
    //3-html'deki myClock id'li elemana erisen bir clock degiskeni tanimlayalim, cunku o eleman icinde degisiklik yapacagiz:
    let clock = document.querySelector("#myClock")
    // 4 - clock degiskeni, myClock id'li HTML elementinde su degisikligi/manipulasyonu yapsin: hour,minute,second yanyana olsun ve aralarinda da : olsun. sonra bosluk ve dayName yazsin:
    clock.innerHTML = `${hour}:${minute}:${second} ${dayName}`
}

//****** C) ZAMANLAYICI AYARI: */
//her 1 sn'de guncellensin:
setInterval(time, 1000);





