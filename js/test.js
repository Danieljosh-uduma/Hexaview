let checkBox = document.getElementById('privacy')
let submitBtn = document.getElementById('btn-submit')

checkBox.onchange = ()=> {
    if (!checkBox.checked) {
        submitBtn.disabled = true;
    }
    else {
        submitBtn.disabled = false;
    }
}