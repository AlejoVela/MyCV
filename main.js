let $btn1 = document.getElementById("btn1");
let $btn2 = document.getElementById("btn2");
let $btn3 = document.getElementById("btn3");
let $btn4 = document.getElementById("btn4");
let $btn5 = document.getElementById("btn5");
let $btn6 = document.getElementById("btn6");
let $btn7 = document.getElementById("btn7");

let $head = document.getElementById("head");
let $content = document.getElementById("content");
let $menu = document.getElementById("menu");

//funciones
const about = () => {
    let header = "About me...";
    let presentation = "Estudio en la sede tecnológica de la Universidad Distrital Francisco José de Caldas y me encuentro culminando una tecnología en sistemas. Me gusta programar sobre todo en el lenguaje java, tengo conocimientos avanzados en diseño de bases de datos relacionales con Mysql, SQL Server y PostgreSQL, en los lenguajes HTML, CSC, PHP, Java, JavaScript, C++ y C# (Este último lo manejo más orientado a Unity y ASP .NET) y he desarrollado proyectos con el Framework Bootstrap 4. A la par de mis estudios tecnológicos me encuentro haciendo una especialización Full-Stack Web Development with Angular y Google IT Support en la plataforma Coursera.";
    $head.innerHTML = header;
    $content.innerHTML = presentation;
    $menu.style.background = "#4D6F38"; 
};

const skills = () => {
    $menu.style.background = "#38686F"; 
};

const certification = () => {
    $menu.style.background = "#38516F"; 
};
const experience = () => {
    $menu.style.background = "#38476F"; 
};
const repositories = () => {
    $menu.style.background = "#43386F"; 
};
const comingSoong1 = () => {
    $menu.style.background = "#64386F"; 
};
const comingSoong2 = () => {
    $menu.style.background = "#6F384F"; 
};


//eventos
$btn1.onclick = function () {
    about();
};
$btn2.onclick = function () {
    skills();
};
$btn3.onclick = function () {
    certification();
};
$btn4.onclick = function () {
    experience();
};
$btn5.onclick = function () {
    repositories();
};
$btn6.onclick = function () {
    comingSoong1();
};
$btn7.onclick = function () {
    comingSoong2();
};