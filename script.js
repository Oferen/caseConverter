function toUpperCase() {
    let text = document.querySelector("textarea");
    text.value = text.value.toUpperCase();
}

document.getElementById("upper-case").addEventListener("click", toUpperCase);

function toLowerCase() {
    let text = document.querySelector("textarea");
    text.value = text.value.toLowerCase();
}

document.getElementById("lower-case").addEventListener("click", toLowerCase);

function toProperCase() {
    let text = document.querySelector("textarea");
    let arr = text.value.split(" ");
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substr(0,1).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    text.value = arr.join(" ");
}

document.getElementById("proper-case").addEventListener("click", toProperCase);

function toSentenceCase() {
    let text = document.querySelector("textarea");
    let arr = text.value.toLowerCase().split(".");
    arr[0] = arr[0].substr(0, 1).toUpperCase() + arr[0].substr(1);
    for (let z = 0; z < arr.length; z++) {
        if (arr[z].substr(0, 1) === " ") {
            arr[z] = arr[z].substr(1, 1).toUpperCase() + arr[z].substr(2);
        }
    }
    text.value = arr.join(". ").trimEnd();
}

document.getElementById("sentence-case").addEventListener("click", toSentenceCase);

function download(filename, text) {
    let element = document.createElement('a');
    let textArea = document.querySelector("textarea").value;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

