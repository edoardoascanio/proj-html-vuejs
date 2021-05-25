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
                link: "#",
                dropdown: true,
            },

            {
                text:" Cart",
                link:"",
                icon: "fa-shopping-cart",
                dropdown: true,
            }
        ],

        navbarLinks: [
            {
                text: "Home",
                link: "#",
                dropdown: true,
            },

            {
                text: "Shop",
                link: "#",
                dropdown: true,
            },

            {
                text: "Products",
                link: "#",
                dropdown: true,
            },

            {
                text: "Categories",
                link: "#",
                dropdown: true,
            },

            {
                text: "News",
                link: "#",
            },

            {
                text: "Elements",
                link: "#",
                dropdown: true,
            },

            {
                text: "",
                link: "",
                button: true
            },

            {
                text: "",
                link: "",
                icon:"fa-search"
            },


        ]
    }
})
