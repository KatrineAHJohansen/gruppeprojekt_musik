const url = "https://musikliste-8db4.restdb.io/rest/musikliste";

const options = {
    headers:  {
        'x-apikey': "63edf385478852088da68348"
    }
};

async function hentData(){
    const respons = await fetch(url, options);
    const json = await respons.json();
    vis(json);
}

function vis(json){
    console.log(json);
}

hentData();