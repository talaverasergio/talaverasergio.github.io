let userLang = navigator.language || navigator.userLanguage;

let langString = userLang.split('-')[0];

let url 

switch(langString){
    case 'es':
        break;
    case 'en':
        url = 'home';
        break;
    default:
        url = 'home';
        break;
}

if (url){
    window.location.replace(url);
}
