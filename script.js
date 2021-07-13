let Surah_choice = 0;
let Vers_choice = 0;
var selectedVers = JSON.parse(verser);
var selectedSurah = JSON.parse(quran);

displayFirstSurah();

function displayFirstSurah(){
    document.getElementById('Head').innerText =  selectedSurah[Vers_choice].content;
}
//sets the value of surah_choice and inisates a functions that incerts versers to every surah
function surahNumber() {
        Surah_choice = parseInt(document.getElementById("dropDownSurah").value) ;
        insertVersDropdown();
}

//Inserts the selected vers in the head div
function versNumber() {
    
    Vers_choice = parseInt(document.getElementById("dropDownVers").value) ;
    document.getElementById('Head').innerText =  selectedSurah[Vers_choice].content;

}

//inserts a dropdown options for every surahs verser
function insertVersDropdown() {
    
    if(Surah_choice > -1){
        var Surah_length = selectedVers[Surah_choice].Verser;
        var preTot = totPreVers();
        var posTot = preTot + selectedVers[Surah_choice].Verser;
        
        document.querySelector('#dropDownVers').innerHTML =  '<option id="d1" value="0">--إختر رقم الآية--</option>';
        for(let i = 0 ; preTot < posTot ;preTot++, i++){
            document.querySelector('#dropDownVers').innerHTML +=  '<option value="' + preTot + '"> ' + (i + 1) + ' </option>';
        }
    }   
 }

 function totPreVers(){
     var tot = 0;
    for(let i = 0 ; i < Surah_choice ;i++){
        tot += selectedVers[i].Verser;
    }
    return tot;
 }


 function nextVers(){
    if(Vers_choice<6235){
        Vers_choice++;
        document.getElementById('Head').innerText =  selectedSurah[Vers_choice].content;
    }
 }

 function preVers(){
    if(Vers_choice>0){
        Vers_choice--;
        document.getElementById('Head').innerText =  selectedSurah[Vers_choice].content;
    }
}