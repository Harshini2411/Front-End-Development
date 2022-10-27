var mssg=prompt("Enter ur mssg");
var slicingMssg=mssg.slice(0,280);//since I need upto 280 characters of entered text mssg
alert(slicingMssg);



 /* Or the following is also a possibility */

alert(prompt("Enter ur mssg").slice(0,280));
