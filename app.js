"use strict"

    function change() {
        var random = document.getElementsByClassName("random-box")[0].getElementsByClassName("move");
        var z = 1;
        var ul = document.getElementById("header-ul");
        var list = ul.getElementsByTagName("li")
        for (var j = 0; j < list.length; j++) {
            console.log("list[j].classList" + list[j].classList);
            if (list[j].classList.contains("glow")) {
                z = j+1;
            }
        }
        console.log(z);
        for (var i = 0; i < random.length; i++) {
            var x = random[i].id;
            console.log(op + "op");
            var ranTop = Math.floor(Math.random() *300);
            var ranLeft = Math.floor(Math.random() * 90);
            document.getElementById(x).style.top = ranTop+"%";
            document.getElementById(x).style.left = ranLeft+"%";
    }
    }
    setInterval(change, 3000);

function move(flag) {
    if (flag == true) {
        document.getElementById("ss").classList.add("change");
    }
    else {
        document.getElementById("ss").classList.remove("change");
    }
}
function changeCard(self, flag) {
    if (flag == true) {
        self.classList.add("move");
    }
    else {
        self.classList.remove("move");
    }
}
function dp() {
    var a = document.getElementById("op");
    var arr = a.getElementsByTagName("Section");
    var cur = document.getElementsByClassName("current")[0];
}
function calculateVisibilityForDiv(div) {
    var windowHeight = window.innerHeight;
    var divPosition = div.getBoundingClientRect().top;
    var result = ((windowHeight - divPosition) * 100) / windowHeight;
    return result;
}

window.addEventListener(onscroll, sp);
function sp(){
    var current = "";
    var a = document.getElementById("op");
    var sections = a.getElementsByTagName("Section");
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    }
    var navLi = document.getElementsByTagName("nav");
    for (var j = 0; j < navLi.length; j++) {

        var li = navLi[j];
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    }
};
//nikita js
function changeHeader() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        var bounding = sections[i].getBoundingClientRect();
        if (window.innerHeight - 600 >= bounding.top) {
            var ul = document.getElementById("header-ul");
            var li = ul.getElementsByTagName("li")
            for (var j = 0; j < li.length; j++) {
                li[j].classList.remove("glow");
                if (li[j].classList.contains(sections[i].id)) {
                    li[j].classList.add("glow");
                }
            }
        }
    }



}
function changeScreen(self) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }
    var section = self.parentElement.classList.item(0); 
    var sectionDiv = document.getElementById(section);
    window.scrollTo({
        top: sectionDiv.offsetTop - 150,
        behavior: 'smooth'
    });
    sectionDiv.classList.add("active");

}



window.addEventListener("scroll", changeHeader)