
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                
     _____   _____  _____.__       .__  __             _________ __                                      
  /  _  \_/ ____\/ ____\__| ____ |__|/  |_ ___.__.  /   _____//  |_  ________________     ____   ____  
 /  /_\  \   __\\   __\|  |/    \|  \   __<   |  |  \_____  \\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
/    |    \  |   |  |  |  |   |  \  ||  |  \___  |  /        \|  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
\____|__  /__|   |__|  |__|___|  /__||__|  / ____| /_______  /|__|  \____/|__|  (____  /\___  / \___  >
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
