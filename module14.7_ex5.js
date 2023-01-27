function movePage() {
    const page = Number(document.getElementById('page').value);
    const limite = Number(document.getElementById('limite').value);
    console.log(`page = ${page}`);
    console.log(`limite = ${limite}`);
    let erroText = "";
    let checkLimite = (num, text) => {
        if (isNaN(num)) {
            erroText += `${text} не является числом`;
            return false;
        }
        if (num < 1 || num > 10) {
            erroText += `${text} вне диапазона от 1 до 10`;
            return false;
        }
        return true;
    };

    let isPageError = !checkLimite(page, "Номер страницы")
    let isLimitError = !checkLimite(limite, "Лимит");
    
    if (isPageError && isLimitError) {
        erroText = "Номер страницы и лимит вне диапазона от 1 до 10";
    }

    if (isPageError || isLimitError) {
        console.log(erroText);
        document.getElementById('errorText').textContent = erroText;
    } else {
        window.location.href = `https://picsum.photos/v2/list?page=${page}&limit=${limite}`;
    }
}