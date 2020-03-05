const olLiQuery = document.querySelectorAll('ol li');

const olLiFunk = function (event){
    event.target.style.textDecoration= 'line-through';
}

for( const li of olLiQuery){
    li.addEventListener('click', olLiFunk)
}
const ulLiQuery = document.querySelectorAll('ul li');

const ulLiFunk = function (event){
    event.target.style.opacity= '0.0';
    event.target.style.transition= '2s';
}
for( const li of ulLiQuery) {
    li.addEventListener('click', ulLiFunk);
}
const imagesQuery = document.querySelectorAll('#row');

const imagesFunk = function (event){
    event.target.style.width= '0px';
    event.target.style.transition= '2s';
    //event.target.style.transition= 'width';
    //event.target.style.visibility= 'collapsed';

}
for( const row of imagesQuery) {
    row.addEventListener('click', imagesFunk);
}
const bottomMeteorMeQuery = document.querySelectorAll('#destroy-all')

const bottomMeteorMe = function (event) {
    olLiFunk(event);
    ulLiFunk(event);
    imagesFunk(event);
}

for(const all of bottomMeteorMeQuery){
    all.addEventListener('click', bottomMeteorMe);
}