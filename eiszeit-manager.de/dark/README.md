# Made with love ❤
<br>

# Changes:
 - You can use four diffrent variants of office styles:
   - Standard: Header & background image
   - Header only
   - Background image only
   - Minimalistic: Without header & background image
 - The office banner has now a transparent background, so you can use transparent .png's/.gif's without having a blue background;
 - Section tabs has now a hover function;
 - Inner box outlines available on each site;
 - Some table rows are now hovered for a smarter visualization; ♥
 - All buttons are hovered;
 - Our lovely "Assistentin" have now a new phone; 😉
 - Golden Hall of fame;
 - At the top of the game schedule the winning team of the last match is green;
 - Fixed "Browse Files" system button;
 - and more . . .
 - All CSS codes available in the source folder;
 - <a href="https://github.com/MadameSolette/Stylus/blob/master/eiszeit-manager.de/dark/dark-buero.css">dark-buero.css</a> & <a href="https://github.com/MadameSolette/Stylus/blob/master/eiszeit-manager.de/dark/dark-main.css">dark-main.css</a> files use @import for a smart update function;
<br><br><br>

# Screenshot Section:
<p align="center">
 <a href="https://github.com/MadameSolette/Stylus/tree/master/eiszeit-manager.de/dark/screenshot-section"><img src="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/screenshot-section/images/screenshot-section.png" /></a>
</p>
<br><br><br>

# Installation:
 - Create a new style in Stylus;
 - Give the style a name;



## ➤ For the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-buero.css">dark-buero.css</a> follow these steps:
 - Copy & paste the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-buero.css">dark-buero.css</a> code in the Stylus <b>Code 1</b> window;
 - Make sure you assign the two specific URL's:

```
Applies to:          URLs starting with        https://www.eiszeit-manager.de/buero/
                     URLs starting with        https://www.hockeymanager.org/buero/
```
<img src="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/screenshot-section/images/apply-to+another-section.png" />

## ➤ For the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-main.css">dark-main.css</a> follow these steps:

 - Add another section at the bottom of the Sylus window and copy & paste the <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/dark-main.css">dark-main.css</a> in the <b>Code 2</b> window;
<img src="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/screenshot-section/images/apply-to+another-section.png" />

 - Assign also this four specific URL's:
 
```
Applies to:        URL                       https://www.eiszeit-manager.de/
                   URL                       https://www.hockeymanager.org/
                   URLs starting with        https://www.eiszeit-manager.de/index.php
                   URLs starting with        https://www.hockeymanager.org/index.php
```

 - <a href="https://raw.githubusercontent.com/MadameSolette/Stylus/master/eiszeit-manager.de/dark/screenshot-section/images/finaly.png">Finaly</a>: Safe the style;
 - <b>It is nessesary you applies the specific URL's, if not, you have the CSS changes on each website with similar classes e.g.: body, table, input etc. etc.;</b>
 
 - If you want to disable your Join Date (<a href="https://github.com/MadameSolette/Stylus/blob/master/eiszeit-manager.de/dark/screenshot-section/images/join-date-disabled.png">Screenshot</a>), paste the following CSS Code in the Stylus <b>Code 1</b> window:
```css
#db-spalte-links-new > div:nth-child(3) {
    display: none;
}
```
