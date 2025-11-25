# 🎲 **THE DICE GAME**

Welcome to a interactive mini game created using HTML, CSS and JavaScript.
In this mini game you compite with other player for the highest number.

This project marks one of my first solid steps using JavaScript to manipulate the DOM.

## 📷 Preview

<img width="2480" height="1252" alt="image" src="https://github.com/user-attachments/assets/1ac6cefb-3391-4934-9db4-71bae5d92707" /><br>

✨ Visit the [GitHub Page](https://paucb7.github.io/The-Dice-Challenge/) to play it!




## 🎮 **Features**

- ✔️ Two players
- ✔️ Random rolls using `Math.random()`
- ✔️ Automatic winner determination
- ✔️ Dynamic update of dice images
- ✔️ Simple, straightforward, and easy-to-use interface
- ✔️ 100% JavaScript project with no external libraries  


## 🛠️ **Technologies used**

- **HTML5**  
- **CSS3**  
- **JavaScript (DOM, eventos y lógica básica)**

## 🚀 **Run the project**

1. Clone the repository
```git
git clone https://github.com/Paucb7/The-Dice-Challenge
```
2. Open the folder of the project
3. Open the file `index.html` in your browser
4. Done! 🎲✨

## 📦 **Featured Code**

🔢 **Random number generator**
```js
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
```
🎨 **Dynamic update of dice images**
```js
if (randomNumber1 === 6) {
        var diceImg = document.querySelector("img.diceP1");
        diceImg.setAttribute("src", "img/dice(5).png");
```
🏆**Logic for determining the winner**
```js
if (randomNumber1 === randomNumber2) {
        var ganadorTexto = document.querySelector("h1");
        ganadorTexto.innerHTML = 'Draw! 🎭';
    } else if (randomNumber1 < randomNumber2) {
        var ganadorTexto = document.querySelector("h1");
        ganadorTexto.innerHTML = 'Player 2 Wins! 🚩';
    } else if (randomNumber1 > randomNumber2) {
        var ganadorTexto = document.querySelector("h1");
        ganadorTexto.innerHTML = '🚩 Player 1 Wins';
    }
```

## 🧠 **Lessons learned**
This project helped me understand:

- How to manipulate DOM elements with querySelector, innerHTML, and SetAttribute.
- How to dynamically update content and images
- The importance of separating logic, style, and structure
- The basics of how simple games work in JavaScript

## 🚧 **Future Features**
- 🎵 Add sound effects
- 🎨 Improve the visual design of the board
- 🔄 Rolling dice animation
- ⭐ Accumulated scoring system
- 👾 Real multiplayer mode or against the computer

## ❤️ **Credits**

Project created with a lot of practice, patience, and love by Me.
My goal is to continue improving as a developer and create increasingly comprehensive projects. ✨
