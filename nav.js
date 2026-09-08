/* =========================================
   REUSABLE WEBSITE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navigationContainer =
        document.getElementById("site-nav");

    if (!navigationContainer) {
        return;
    }


    /* =====================================
       WEBSITE SETTINGS
    ===================================== */

    const siteName = "WebStore";


    const navigationItems = [
        {
            name: "New Collections",
            url: "index.html"
        },

        {
            name: "About",
            url: "about.html"
        },

        {
            name: "News",
            url: "news.html"
        },

        {
            name: "Contacts",
            url: "contacts.html"
        },

        {
            name: "Support",
            url: "support.html"
        }
    ];


    /* =====================================
       FIND CURRENT PAGE
    ===================================== */

    let currentPage =
        window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    /* =====================================
       CREATE NAVIGATION
    ===================================== */

    navigationContainer.innerHTML = `

        <div class="top-bar">

            <div class="top-left">

                <span>✉ info@webstore.com</span>

                <span>☎ +1 234 567 89</span>

                <span>🚚 Free shipping</span>

            </div>


            <div class="top-right">

                <a href="account.html">
                    Login or create an account
                </a>

                <a href="favorites.html">
                    ♡ Favorites
                </a>

            </div>

        </div>


        <nav class="main-nav">

            <a href="index.html"
               class="logo">
                ${siteName}
            </a>


            <button
                class="menu-button"
                id="menuButton"
                aria-label="Open navigation">
                ☰
            </button>


            <ul class="nav-links" id="navLinks">

                ${navigationItems.map(item => `

                    <li>
                        <a
                            href="${item.url}"
                            data-page="${item.url}">
                            ${item.name}
                        </a>
                    </li>

                `).join("")}

            </ul>


            <a
                href="cart.html"
                class="cart-button">

                🛒

                <span>
                    Your cart
                    <br>
                    is empty
                </span>

            </a>

        </nav>

    `;


    /* =====================================
       ACTIVE PAGE
    ===================================== */

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navLinks.forEach(function (link) {

        const page =
            link.getAttribute("data-page");

        if (page === currentPage) {

            link.classList.add("active");

        }

    });


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton =
        document.getElementById("menuButton");

    const navLinksContainer =
        document.getElementById("navLinks");


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function () {

                navLinksContainer.classList.toggle(
                    "open"
                );

            }
        );

    }


    /* =====================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================== */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinksContainer.classList.remove(
                    "open"
                );

            }
        );

    });

});
