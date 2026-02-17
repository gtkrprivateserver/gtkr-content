function loadPage(page) {
    switch(page) {
        case 'event':
            document.getElementById('content').innerHTML = eventPage();
            break;
        case 'join':
            document.getElementById('content').innerHTML = joinPage();
            break;
        case 'rules':
            document.getElementById('content').innerHTML = rulesPage();
            break;
        case 'about':
            document.getElementById('content').innerHTML = aboutPage();
            break;
        case 'credit':
            document.getElementById('content').innerHTML = creditPage();
            break;
        default:
            document.getElementById('content').innerHTML = "<h1>Selamat datang di Chaste Squad!</h1>";
    }
}