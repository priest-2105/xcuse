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

  

















  
document.getElementById('capture-btn').addEventListener('click', function() {
    const quoteContainer = document.getElementById('card-capture-container');

    html2canvas(quoteContainer).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'quote.png';  // Filename of the screenshot
        link.click();  // Trigger download
    });
    // Use html2canvas to capture the screenshot of the specific div
    // html2canvas(quoteContainer).then(canvas => {
    //     // Create an image element
    //     const img = document.createElement('img');
    //     img.src = canvas.toDataURL(); // Convert the canvas to a base64 image

    //     img.style.position = 'absolute';
    //     img.style.right = '50px';
    //     img.style.bottom = '50px';
    //     img.style.height = 'auto';
    //     img.style.width = '250px';

    //     // Optionally, append the image to the body or download it
    //     document.body.appendChild(img); // This will display the screenshot below
    // });
});

