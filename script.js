new Vue({
    el: "#app",

    data: {
         
        headbarLinks:[
            {
              text: "Shopping Cart",
              link: "#"
            },

            {
                text:"My Account",
                link: "#"
            },

            {
                text:"Cart",
                link:"",
                icon: "fa-shopping-cart"
            }
        ],

        navbarLinks: [
            {
                text: "Home",
                link: "#",
            },

            {
                text: "Shop",
                link: "#",
            },

            {
                text: "Products",
                link: "#",
            },

            {
                text: "Categories",
                link: "#",
            },

            {
                text: "News",
                link: "#",
            },

            {
                text: "Elements",
                link: "#",
            },

            {
                text: "SHOP NOW!",
                link: "#",
            },

            {
                text: "",
                link: "",
                icon:"fa-search"
            },


        ]
    }
})
