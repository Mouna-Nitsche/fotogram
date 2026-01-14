let randomTitles = [
    "Das Geheimnis des Waldes",
    "Die verlorne Welt",
    "Der Kristallschädel"
];

let randomDescritions = [
    "Eine spannede geschichte über Mut und Abenteuer",
    "Ein mysteriöser Fund stellt alles auf den Kopf",
    "Abendteuer stürzen sich in ein gefährliches Abenteuer"
];

function render() {
    //variable für Referenz des DIV Container content
    let contentRef = document.getElementById('content');
    for (let index = 0; index < randomTitles.length; index++) {
        contentRef.innerHTML += getNoteTemplate();
    }
}

function getNoteTemplate(i) {
    return      `<div class="single_element">
                                    <h2>
                                        ${randomTitles[i]}
                                    </h2>
                                    <p>
                                    ${randomDescritions[i]}
                                    </p>
                                </div>`
}