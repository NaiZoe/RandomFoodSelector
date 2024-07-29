document.addEventListener("DOMContentLoaded", function() {
    const generateRandom = document.getElementById("btn");
    generateRandom.addEventListener("click", function() {
        var foodArray = [
            "images/cafemekong.jpg", 
            "images/chick-fil-a.jpg", 
            "images/Chipotle.jpg", 
            "images/El_Rodeo.jpg", 
            "images/HunanKing.jpg", 
            "images/McDonald.jpg", 
            "images/qitao_cook.jpg", 
            "images/Ruby_cook.jpg", 
            "images/Tokyo_Grill.jpg", 
            "images/twoPeople.jpg"
        ];
        var restaurantNames = [
            "Cafe Mekong", 
            "Chick-fil-A", 
            "Chipotle", 
            "El Rodeo", 
            "Hunan King", 
            "McDonald",
            "Qitao Cook",
            "Ruby Cook",
            "Tokyo Grill",
            "Two People Cook"
        ];

        var randomNumber = Math.floor(Math.random() * foodArray.length);
        var restImage1 = document.querySelectorAll("img")[0];
        restImage1.setAttribute("src", foodArray[randomNumber]);

        document.getElementById("restaurant-name").textContent = restaurantNames[randomNumber];
    });
});
