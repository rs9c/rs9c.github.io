// 变量声明

let isMenuShown = false;
const menuButton = document.querySelector(".menu-button");
const menuButtonBars = document.querySelectorAll(".menu-button-bar");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const userButton = document.getElementById("user-button");
const searchButton = document.getElementById("search-button");
const menuContainer = document.getElementById("menu");
const notificationContainer = document.getElementById("notification-container");
const wideMenuBackArea = document.getElementById("wide-menu-back-area");

// 函数

/**
 * @description 延时
 * @param {Number} ms - 延时毫秒数
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @description 显示通知
 * @param {String} content 内容
 * @param {String} type 通知类型(i: info, w: warning, e: error)
 * @param {Number} ms 显示时长(毫秒)
 */
async function showNotification(content, type, ms) {
    if (!type) type = "i";
    if (!ms) ms = 3200;
    let iconName, iconColor, className;
    switch (type) {
        case "i":
            iconName = "info-circle";
            iconColor = "var(--notification-i-color)";
            className = "notification i";
            break;
        case "w":
            iconName = "error";
            iconColor = "var(--notification-w-color)";
            className = "notification w";
            break;
        case "e":
            iconName = "error-alt";
            iconColor = "var(--notification-e-color)";
            className = "notification e";
            break;
        default:
            iconName = "info-circle";
            iconColor = "var(--notification-i-color)";
            className = "notification i";
            break;
    }
    const notification = document.createElement("div");
    notification.className = className;
    const icon = document.createElement("i");
    icon.className = "bx bx-" + iconName;
    icon.style.color = iconColor;
    const text = document.createTextNode(content);
    notification.appendChild(icon);
    notification.appendChild(text);
    notificationContainer.appendChild(notification);
    notification.addEventListener("click", () => {
        notification.classList.add("hiding");
        notification.addEventListener("animationend", () => {
            notification.remove();
            return;
        });
    });
    await sleep(ms);
    notification.classList.add("hiding");
    notification.addEventListener("animationend", () => {
        notification.remove();
        return;
    });
}

// 监听

menuButton.addEventListener("click", function (e) {
    e.preventDefault();
    menuContainer.classList.toggle("active");
    menuButton.classList.toggle("active");
    wideMenuBackArea.classList.toggle("active");
    menuButtonBars.forEach((bar) => {
        bar.classList.remove("no-animation");
    });
    menuContainer.classList.remove("no-animation");
});
wideMenuBackArea.addEventListener("click", function (e) {
    e.preventDefault();
    menuContainer.classList.toggle("active");
    menuButton.classList.toggle("active");
    wideMenuBackArea.classList.toggle("active");
});
window.addEventListener("resize", () => {
    menuButtonBars.forEach((bar) => {
        bar.classList.add("no-animation");
    });
    menuContainer.classList.add("no-animation");
    menuContainer.classList.remove("active");
    menuButton.classList.remove("active");
    wideMenuBackArea.classList.remove("active");
});
logo.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/index.html";
});
userButton.addEventListener("click", function (e) {
    e.preventDefault();
    showNotification("这个功能还没做:D");
});
searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    showNotification("这个功能还没做:D");
});

// 初始化

window.addEventListener("DOMContentLoaded", () => {
    // 载入菜单
    fetch("/config/menu.json")
        .then((response) => response.json())
        .then((menuItems) => {
            for (const category in menuItems) {
                const categoryTitle = document.createElement("div");
                categoryTitle.className = "menu-item-title";
                categoryTitle.textContent = category;
                menuContainer.appendChild(categoryTitle);
                menuItems[category].forEach((item) => {
                    const itemLink = document.createElement("a");
                    itemLink.className = "menu-item";
                    itemLink.href = item.url;
                    itemLink.textContent = item.name;
                    menuContainer.appendChild(itemLink);
                });
            }
        })
        .catch((e) => {
            showNotification("菜单初始化失败\n" + e, "e", 10000);
        });
});
