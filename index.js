entryPoint= document.getElementById("entry");
buttonResult = document.getElementById("button-result");

/* On click, get the value of entrypoint textarea */
/* myFunction should pass the lines of text to helper functions */
myFunction= ()=>{
	let initialText=entryPoint.value;
  /* Splits the block by lines*/
  let text_as_array = initialText.split('\n');
  console.log(text_as_array);
  let result=[]
  for (var i=0; i<text_as_array.length; i++) {
	let line = text_as_array[i];
  	let split_line = line.split(',');
	if (split_line.length==2){
    	result.push(create_message(split_line))
    }
    if (split_line.length==3){
    	result.push(create_toggle(split_line))
    }
  }
  let finalResult = result.join("")
  buttonResult.value=finalResult;
  
}

function create_message(commands) {
	console.log("creates a message button");
  let command = commands[0];
  let button_text=commands[1];
  let result = `<div class=\"ui-block-b\">\n\t<button class=\"uv-message-button\" data-message=\"${command}\">${button_text}</button>\n</div>\n`;
  console.log(result);
  return result;
}

function create_toggle(commands) {
	let command1 = commands[0];
  let command2=commands[1];
  let button_text=commands[2];
  let result = `<div class=\"ui-block-b\">\n\t<button class=\"uv-toggle-off\" data-message-on=\"${command1}\" data-message-off=\"${command2}\">${button_text}</button>\n</div>\n`;
  console.log(result);

  return result;
  
}
