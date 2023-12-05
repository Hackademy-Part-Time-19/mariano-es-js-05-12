

let indexrubrica = 0;

let contatto = {
    
    nome : undefined,
    cognome : undefined,
    numero : undefined
    
};

let rubrica = [];

function aggiungiContatto() {
    
    document.getElementById("aggiungi_contatto").style.display = "flex";
    
    
}

function chiudiScheda() {
    
    document.getElementById("aggiungi_contatto").style.display = "none";
    
}

function salvaContatto() {
    
    
    let nome = document.getElementById("nome_agg").value;
    
    let cognome = document.getElementById("cognome_agg").value;
    
    let numero = document.getElementById("numero_agg").value;
    
    if (!nome) {
        
        document.getElementById("nome_agg").style.borderColor = "red";
        return
        
    } else if (nome) {

        document.getElementById("nome_agg").style.borderColor = "white";

    }
    
    if (!cognome) {
        
        document.getElementById("cognome_agg").style.borderColor = "red";
        return

    } else if (cognome) {

        document.getElementById("cognome_agg").style.borderColor = "white";

    }
    
    if (!numero) {
        
        document.getElementById("numero_agg").style.borderColor = "red";
        return
    } else if (numero) {

        document.getElementById("numero_agg").style.borderColor = "white";

    }
    
    document.getElementById("rubrica").innerHTML += `
    
    <div id="contatto-${indexrubrica}" style="height: 10%; width: 100%; background-color: black; border-bottom: 2px solid gray; color: white; display: flex; justify-content: space-between; align-items: center;">
    
    <h3 id="nome" style="margin-left: 50px;">${nome}</h3>

    <h3 id="cognome" style="margin-left: -370px;">${cognome}</h3>
    
    <h3 id="numero">${numero}</h3>
    
    <button onclick="modificaContatto(${indexrubrica})"  style="border: 2px solid white; border-radius: 100px; color: white; background-color: black;">Edit</button>
    
    <button onclick="eliminaContatto(${indexrubrica})" style="margin-right: 30px; margin-right: 30px; border: 2px solid red; border-radius: 100px; color: red; background-color: black;" >X</button>
    
    </div>
    
    <!-- V Modifica contatto qui V -->
    
    <div id="contatto-edit-${indexrubrica}" style="height: 10%; width: 100%; background-color: black; border-bottom: 2px solid gray; color: white; display: none; justify-content: space-between; align-items: center;">
    
    <input id="nome_edit_${indexrubrica}" type="text" style="margin-left: 30px; border-radius: 20px; border: 2px solid gray; height: 40px; color: gray; background-color: black; color: white;" placeholder="${nome}">

    <input id="cognome_edit_${indexrubrica}" type="text" style="margin-left: -250px;; border-radius: 20px; border: 2px solid gray; height: 40px; color: gray; background-color: black; color: white;" placeholder="${cognome}">
    
    <input id="numero_edit_${indexrubrica}" style="border-radius: 20px; border: 2px solid gray; height: 40px; color: gray; background-color: black; color: white;" type="text" placeholder="${numero}">
    
    <button onclick="confermaModificaContatto(${indexrubrica})" id="salva" style="border: 2px solid rgb(1, 251, 1); border-radius: 100px; color: rgb(1, 251, 1); background-color: black;" >Salva</button>
    
    <button onclick="annullaModificaContatto(${indexrubrica})" id="annulla" style="margin-right: 30px; border: 2px solid red; border-radius: 100px; color: red; background-color: black;" >Annulla</button>
    
    </div>
    
    `

    let nuovo_contatto = contatto;

    nuovo_contatto.nome = nome;
    nuovo_contatto.cognome = cognome;
    nuovo_contatto.numero = numero;

    rubrica.push(nuovo_contatto);

    console.log(rubrica)

    indexrubrica ++;

    document.getElementById("nome_agg").value = "";
    
    document.getElementById("cognome_agg").value = "";
    
    document.getElementById("numero_agg").value = "";

    document.getElementById("aggiungi_contatto").style.display = "none";


    
}


function modificaContatto(index) {

    document.getElementById("contatto-"+index).style.display = "none"

    document.getElementById("contatto-edit-"+index).style.display = "flex"


}

function annullaModificaContatto(index) {

    document.getElementById("contatto-edit-"+index).style.display = "none"

    document.getElementById("contatto-"+index).style.display = "flex"
}

function confermaModificaContatto(index) {

    let nuovo_nome = document.getElementById("nome_edit_"+index).value;
    let nuovo_cognome = document.getElementById("cognome_edit_"+index).value;
    let nuovo_numero = document.getElementById("numero_edit_"+index).value;

    if (!nuovo_nome) {

        
        document.getElementById("nome_edit_"+index).style.borderColor = "red";



    }  if (!nuovo_cognome) {

        
        document.getElementById("cognome_edit_"+index).style.borderColor = "red";


        
    }  if (!nuovo_numero) {

        
        document.getElementById("numero_edit_"+index).style.borderColor = "red";

        
    }

    


}