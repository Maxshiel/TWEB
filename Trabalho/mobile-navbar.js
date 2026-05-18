class navbar{
    constructor(mobilemenu, navList, navLinks){
        this.mobilemenu = document.querySelector(mobilemenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }
    
    addClickEvent(){
        this.mobileMenu.addEventListener("Click", () => console.log
    ("falax carax"));
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const navbar = new navbar(
".mobilemenu",
".navlist",
".navlist li"
);

navbar.init();