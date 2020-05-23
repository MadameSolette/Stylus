 - Redesign & small CSS fixings for the great Browser Game "Eiszeit Manager";
 - The style has no advantages & disadvantages for the game;
 - All rights reserved by © https://www.eiszeit-manager.de/ ;
 - All CSS codes available in the source folder;
 - <a href="https://github.com/MadameSolette/Stylus/blob/master/eiszeit-manager.de/dark/dark-buero.css">dark-buero.css</a> & <a href="https://github.com/MadameSolette/Stylus/blob/master/eiszeit-manager.de/dark/dark-main.css">dark-main.css</a> codes use @import for a smart update function;
<br><br>

 Whats changed?
 - You can use four diffrent variants of office styles:
   - Standard: Header & background image
   - Header only
   - Background image only
   - Minimalistic: Without header & background image
 - The office banner has now a transparent background, so you can use transparent .png's/.gif's without having a blue background;
 - Mouseover underlined links;
 - Section tabs has now a hover function;
 - Inner box outlines available on each site;
 - Headlines in small caps variant;
 - All buttons are hovered;
 - Our lovely "Assistentin" have now a new phone and its hovered 😉
 - Golden Hall of fame;
 - At the top of the game schedule the winning team is green;
 - Fixed "Browse Files" system button;
 - and more . . .
 <br><br><br>

# Screenshot Section:
<p align="center">
 <a href="https://github.com/MadameSolette/Stylus/tree/master/eiszeit-manager.de/dark/screenshot-section"><img src="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/screenshot-section/images/preview-thumb.png" /></a>
</p>
<br><br><br>

# Installation:
 - Create a new style in Stylus;
 - Give the new style a name;

## For the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-main.css">dark-main.css</a> follow these steps:
 - Copy & paste the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-main.css">dark-main.css</a> code in the Stylus <b>Code 1</b> window;
 - Make sure you assign the four specific URL's to the style:
```
Applies to:        URL                       https://www.eiszeit-manager.de/
                   URL                       https://www.hockeymanager.org/
                   URLs starting with        https://www.eiszeit-manager.de/index.php
                   URLs starting with        https://www.hockeymanager.org/index.php
```
<img src="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/screenshot-section/images/apply-to.png" />

## For the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-buero.css">dark-buero.css</a> follow these steps:
 - Add another section at the bottom of the Sylus window and copy & paste the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-buero.css">dark-buero.css</a> in the <b>Code 2</b> window;
<img src="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/screenshot-section/images/another-section.png" />

 - Assign also this two specific URL for the style:

```
Applies to:          URLs starting with        https://www.eiszeit-manager.de/buero/
                     URLs starting with        https://www.hockeymanager.org/buero/
```
 - Last step: Safe the style;
 - It is nessesary you applies the specific URLs, if not, you have the CSS change on each website with similar classes;
 - If you want to disable your Join Date (<a href="https://github.com/MadameSolette/Stylus/tree/master/eiszeit-manager.de/dark/screenshot-section#join-date---disabled">Screenshot</a>), paste the following CSS Code in the Stylus <b>Code 2</b> window:
```css
#db-spalte-links-new > div:nth-child(3) {
    display: none;
}
```
<br><br><br>

# CSS Codes:
[![Stylus instant install](https://img.shields.io/badge/eiszeit%20manager-%20Dark%20Main%20Page%20-282828.svg?style=popout&logoColor=29FDFD&labelColor=606060&logo=Stylus)](https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-main.css)<br>
[![Stylus instant install](https://img.shields.io/badge/eiszeit%20manager-%20Dark%20Büro-282828.svg?style=popout&logoColor=29FDFD&labelColor=606060&logo=Stylus)](https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-buero.css)
<br><br><br>

# Development status:
 - Active
 - Last update: 23.05.2020
