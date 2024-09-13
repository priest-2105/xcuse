const excusesData = [
    {
      type: 'template',
      value: "I was caught in a {event} involving a {animal}."
    },
    {
      type: 'template',
      value: "My {object} malfunctioned, and I had to {action}."
    },
    {
      type: 'template',
      value: "I had to deal with a {event} because a {animal} attacked my {object}."
    },
    {
      type: 'template',
      value: "A {animal} blocked my way during a {event}, so I couldn't make it on time."
    },
    {
      type: 'template',
      value: "Due to a {event}, my {object} was {action} and I had to {action}."
    },
    {
      type: 'event',
      value: "zombie apocalypse"
    },
    {
      type: 'event',
      value: "sudden parade"
    },
    {
      type: 'event',
      value: "alien invasion"
    },
    {
      type: 'event',
      value: "tornado"
    },
    {
      type: 'event',
      value: "unexpected flood"
    },
    {
      type: 'event',
      value: "robot uprising"
    },
    {
      type: 'event',
      value: "mysterious blackout"
    },
    {
      type: 'event',
      value: "impromptu wedding"
    },
    {
      type: 'event',
      value: "fire drill"
    },
    {
      type: 'event',
      value: "traffic jam"
    },
    {
      type: 'animal',
      value: "penguin"
    },
    {
      type: 'animal',
      value: "elephant"
    },
    {
      type: 'animal',
      value: "dragon"
    },
    {
      type: 'animal',
      value: "unicorn"
    },
    {
      type: 'animal',
      value: "giraffe"
    },
    {
      type: 'animal',
      value: "koala"
    },
    {
      type: 'animal',
      value: "octopus"
    },
    {
      type: 'animal',
      value: "hippopotamus"
    },
    {
      type: 'animal',
      value: "squirrel"
    },
    {
      type: 'animal',
      value: "rhinoceros"
    },
    {
      type: 'object',
      value: "car"
    },
    {
      type: 'object',
      value: "computer"
    },
    {
      type: 'object',
      value: "phone"
    },
    {
      type: 'object',
      value: "television"
    },
    {
      type: 'object',
      value: "microwave"
    },
    {
      type: 'object',
      value: "refrigerator"
    },
    {
      type: 'object',
      value: "toaster"
    },
    {
      type: 'object',
      value: "tablet"
    },
    {
      type: 'object',
      value: "camera"
    },
    {
      type: 'object',
      value: "printer"
    },
    {
      type: 'action',
      value: "fix it"
    },
    {
      type: 'action',
      value: "search for parts"
    },
    {
      type: 'action',
      value: "call tech support"
    },
    {
      type: 'action',
      value: "replace the batteries"
    },
    {
      type: 'action',
      value: "restart it"
    },
    {
      type: 'action',
      value: "find a new one"
    },
    {
      type: 'action',
      value: "consult a technician"
    },
    {
      type: 'action',
      value: "reboot the system"
    },
    {
      type: 'action',
      value: "read the manual"
    },
    {
      type: 'action',
      value: "take it to the shop"
    }
  ];

  


  const xcuseTextEl = document.getElementById('xcuse-text');
  const generateBtn = document.getElementById('generatebutton');




function displayObject (){

    const objectarray = excusesData.filter(objects => {
       return objects.type === "object" 
    })
       const object =(objectarray[Math.floor(Math.random() * objectarray.length)]);
        
    //    console.log('object', object.value);     
       
       
       objectValue = object.value     

       return object.value;

}


function displayEvent (){

    const eventarray = excusesData.filter(events => {
       return events.type === "event" 
    })
        
       const event =(eventarray[Math.floor(Math.random() * eventarray.length)]);
        
    //    console.log('event', event.value); 
       
       
       eventValue = event.value     

       return event.value;

}

function displayAnimal (){

    const animalarray = excusesData.filter(animals => {
       return animals.type === "animal" 
    })
        
       const animal =(animalarray[Math.floor(Math.random() * animalarray.length)]);
        
       
       animalValue = animal.value     

       return animal.value;
}


function displayAction (){

    const actionarray = excusesData.filter(actions => {
       return actions.type === "action" 
    })
        
       const action =(actionarray[Math.floor(Math.random() * actionarray.length)]);
        
       actionValue = action.value     

       return action.value;

}
 

displayObject();
displayAction();
displayAnimal();
displayEvent();


 
    
const objectXcuse = displayObject();
const animalXcuse = displayAnimal();
const actionXcuse = displayAction();
const eventXcuse = displayEvent();



function generateXcuse () {

 
    

    const templatearray = excusesData.filter(templates => {
        return templates.type === "template" 
     })
         
        const template =(templatearray[Math.floor(Math.random() * templatearray.length)]);
         
        console.log('template', template.value);
    
        let newXcuse = template.value



    if( newXcuse.includes('{object}') ){
       
     
        // newXcuse = template.value

        newXcuse = newXcuse.replace(/{object}/g, objectXcuse);

        // newXcuse = newxcus;    

    }
    

    if( newXcuse.includes('{event}') ){
        
        // newXcuse = template.value

        newXcuse = newXcuse.replace(/{event}/g, eventXcuse);

        // newXcuse = newxcus;    

    }
  


    if( newXcuse.includes('{animal}') ){
       
        
        // newXcuse = template.value
 
         newXcuse = newXcuse.replace(/{animal}/g, animalXcuse);

        // newXcuse = newxcus;    

    }



    if( newXcuse.includes('{action}') ){
       
        
        // newXcuse = template.value

        newXcuse = newXcuse.replace(/{action}/g, actionXcuse);

        // newXcuse = newxcus;    

    }



    xcuseTextEl.innerText = newXcuse;

}
 





generateBtn.addEventListener('click',() => {
    generateXcuse();    
    console.log(displayAction());
    
});








  
document.getElementById('capture-btn').addEventListener('click', function() {
    const xcuseContainer = document.getElementById('card-capture-container');

    html2canvas(xcuseContainer).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'xcuse.png';  // Filename of the screenshot
        link.click();  // Trigger download
    });
});

