/*
1. create a div
2. give it the CSS className "box"
3. add your username as text
4. append the div to the element with the id "boxes"
5. add three event listeners. The listeners it needs are a click listener, a mouseover listener, and a mouseout listener
6. The mouseover and mouseout functions will toggle a CSS className called "highlight"
7. Your click function should change the color of your border and the background-color of the box
*/

var MAFE0002 = {
    init: function () {
         var div = document.createElement("div");
         div.className ="box";
         div.textContent = "mafe0002";
        
        
         document.getElementById("boxes").appendChild(div);
        
         div.addEventListener("click", divClick);
         div.addEventListener("mouseover", divMouseOver);
         div.addEventListener("mouseout", divMouseOut);
   
         function divMouseOver(event){
             event.currentTarget.classList.toggle("highlight");
         }
        
         function divMouseOut(event){
             event.currentTarget.classList.toggle("highlight");
         }
      
        
         function divClick(event){
             event.currentTarget.style.borderColor = "red";
             event.currentTarget.style.backgroundColor = "yellow";
         }
    }
};

