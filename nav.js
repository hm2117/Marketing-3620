/* =========================================
   REUSABLE WEBSITE NAVIGATION
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    if (!navigation) {
        return;
    }

    /*
     * PRIMARY NAVIGATION
     */

    const primaryLinks = [
        {
            name: "Home",
            url: "index.html"
        },
        {
            name: "About",
            url: "about.html"
        },
        {
            name: "Projects",
            url: "projects.html"
        },
        {
            name: "Gallery",
            url: "gallery.html"
        },
        {
            name: "Contact",
            url: "contact.html"
        }
    ];

    /*
     * SECONDARY NAVIGATION
     */

    const secondaryLinks = [
        {
            name: "Resources",
            url: "resources.html"
        },
        {
            name: "News",
            url: "news.html"
        },
        {
            name: "FAQ",
            url: "faq.html"
        }
    ];


    /* =========================================
       CREATE PRIMARY NAV
       ========================================= */

    const primaryNav = document.createElement("nav");

    primaryNav.className = "primary-nav";

    const primaryList = document.createElement("ul");

    primaryLinks.forEach(function (link) {

        const listItem = document.createElement("li");

        const anchor = document.createElement("a");

        anchor.href = link.url;
        anchor.textContent = link.name;

        /*
         * Automatically highlight current page
         */

        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        if (currentPage === link.url) {
            anchor.classList.add("active");
        }

        listItem.appendChild(anchor);
        primaryList.appendChild(listItem);

    });

    primaryNav.appendChild(primaryList);

    navigation.appendChild(primaryNav);


    /* =========================================
       CREATE SECONDARY NAV
       ========================================= */

    const secondaryNav = document.createElement("nav");

    secondaryNav.className = "secondary-nav";

    const secondaryList = document.createElement("ul");

    secondaryLinks.forEach(function (link) {

        const listItem = document.createElement("li");

        const anchor = document.createElement("a");

        anchor.href = link.url;
        anchor.textContent = link.name;

        listItem.appendChild(anchor);
        secondaryList.appendChild(listItem);

    });

    secondaryNav.appendChild(secondaryList);

    navigation.appendChild(secondaryNav);

});
