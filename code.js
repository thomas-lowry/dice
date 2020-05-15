//lay the ground work for the position of the dice on the canvas
let position;
let diceCount = 1;
let spacing = 200;
//direct appropriate menu command from the plugin
if (figma.command === 'rollTwo') {
    rollTheDice(2);
    figma.root.setRelaunchData({ rollTwo: '' });
    figma.closePlugin();
}
else if (figma.command === 'rollThree') {
    rollTheDice(3);
    figma.root.setRelaunchData({ rollThree: '' });
    figma.closePlugin();
}
else if (figma.command === 'rollFour') {
    rollTheDice(4);
    figma.root.setRelaunchData({ rollFour: '' });
}
else if (figma.command === 'rollFive') {
    rollTheDice(5);
    figma.root.setRelaunchData({ rollFive: '' });
    figma.closePlugin();
}
else if (figma.command === 'rollSix') {
    rollTheDice(6);
    figma.root.setRelaunchData({ rollSix: '' });
    figma.closePlugin();
}
else if (figma.command === 'rerollSelected') {
    rerollSelected();
}
else {
    rollTheDice(1);
    figma.root.setRelaunchData({ rollOne: '' });
    figma.closePlugin();
}
//roll the number if dice determined by user
function rollTheDice(numberOfDice) {
    clearDice(); //clear existing dice
    for (let i = 0; i < numberOfDice; i++) {
        rollDie();
        diceCount++;
    }
}
//adds a randomized dice to the canvas
function rollDie() {
    //create a die
    let gameDie = figma.createFrame();
    gameDie.name = 'gameDie';
    gameDie.resize(98, 98);
    gameDie.cornerRadius = 10;
    gameDie.expanded = false;
    let strokes = [];
    let stroke = {
        type: 'SOLID',
        visible: true,
        opacity: 1,
        blendMode: 'NORMAL',
        color: { r: 0, g: 0, b: 0 }
    };
    strokes.push(stroke);
    gameDie.strokes = strokes;
    gameDie.strokeWeight = 2;
    let effects = [];
    let shadow = {
        blendMode: 'NORMAL',
        color: { r: 0, g: 0, b: 0, a: 1 },
        offset: { x: 8, y: 8 },
        radius: 0,
        type: 'DROP_SHADOW',
        visible: true
    };
    effects.push(shadow);
    //create the dots
    let dieOne = figma.createNodeFromSvg('<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="black"/> </svg>');
    dieOne.name = '1';
    let dieTwo = figma.createNodeFromSvg('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 63C18 67.9706 13.9706 72 9 72C4.02944 72 0 67.9706 0 63C0 58.0294 4.02944 54 9 54C13.9706 54 18 58.0294 18 63Z" fill="black"/> <path d="M72 9C72 13.9706 67.9706 18 63 18C58.0294 18 54 13.9706 54 9C54 4.02944 58.0294 0 63 0C67.9706 0 72 4.02944 72 9Z" fill="black"/> </svg>');
    dieTwo.name = '2';
    let dieThree = figma.createNodeFromSvg('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45 36C45 40.9706 40.9706 45 36 45C31.0294 45 27 40.9706 27 36C27 31.0294 31.0294 27 36 27C40.9706 27 45 31.0294 45 36Z" fill="black"/> <path d="M18 63C18 67.9706 13.9706 72 9 72C4.02944 72 0 67.9706 0 63C0 58.0294 4.02944 54 9 54C13.9706 54 18 58.0294 18 63Z" fill="black"/> <path d="M72 9C72 13.9706 67.9706 18 63 18C58.0294 18 54 13.9706 54 9C54 4.02944 58.0294 0 63 0C67.9706 0 72 4.02944 72 9Z" fill="black"/> </svg>');
    dieThree.name = '3';
    let dieFour = figma.createNodeFromSvg('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="black"/> <path d="M18 63C18 67.9706 13.9706 72 9 72C4.02944 72 0 67.9706 0 63C0 58.0294 4.02944 54 9 54C13.9706 54 18 58.0294 18 63Z" fill="black"/> <path d="M72 9C72 13.9706 67.9706 18 63 18C58.0294 18 54 13.9706 54 9C54 4.02944 58.0294 0 63 0C67.9706 0 72 4.02944 72 9Z" fill="black"/> <path d="M72 63C72 67.9706 67.9706 72 63 72C58.0294 72 54 67.9706 54 63C54 58.0294 58.0294 54 63 54C67.9706 54 72 58.0294 72 63Z" fill="black"/> </svg>');
    dieFour.name = '4';
    let dieFive = figma.createNodeFromSvg('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="black"/> <path d="M45 36C45 40.9706 40.9706 45 36 45C31.0294 45 27 40.9706 27 36C27 31.0294 31.0294 27 36 27C40.9706 27 45 31.0294 45 36Z" fill="black"/> <path d="M18 63C18 67.9706 13.9706 72 9 72C4.02944 72 0 67.9706 0 63C0 58.0294 4.02944 54 9 54C13.9706 54 18 58.0294 18 63Z" fill="black"/> <path d="M72 9C72 13.9706 67.9706 18 63 18C58.0294 18 54 13.9706 54 9C54 4.02944 58.0294 0 63 0C67.9706 0 72 4.02944 72 9Z" fill="black"/> <path d="M72 63C72 67.9706 67.9706 72 63 72C58.0294 72 54 67.9706 54 63C54 58.0294 58.0294 54 63 54C67.9706 54 72 58.0294 72 63Z" fill="black"/> </svg>');
    dieFive.name = '5';
    let dieSix = figma.createNodeFromSvg('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="black"/> <path d="M18 36C18 40.9706 13.9706 45 9 45C4.02944 45 0 40.9706 0 36C0 31.0294 4.02944 27 9 27C13.9706 27 18 31.0294 18 36Z" fill="black"/> <path d="M72 36C72 40.9706 67.9706 45 63 45C58.0294 45 54 40.9706 54 36C54 31.0294 58.0294 27 63 27C67.9706 27 72 31.0294 72 36Z" fill="black"/> <path d="M18 63C18 67.9706 13.9706 72 9 72C4.02944 72 0 67.9706 0 63C0 58.0294 4.02944 54 9 54C13.9706 54 18 58.0294 18 63Z" fill="black"/> <path d="M72 9C72 13.9706 67.9706 18 63 18C58.0294 18 54 13.9706 54 9C54 4.02944 58.0294 0 63 0C67.9706 0 72 4.02944 72 9Z" fill="black"/> <path d="M72 63C72 67.9706 67.9706 72 63 72C58.0294 72 54 67.9706 54 63C54 58.0294 58.0294 54 63 54C67.9706 54 72 58.0294 72 63Z" fill="black"/> </svg>');
    dieSix.name = '6';
    //add the dots to the dice
    gameDie.appendChild(dieOne);
    gameDie.appendChild(dieTwo);
    gameDie.appendChild(dieThree);
    gameDie.appendChild(dieFour);
    gameDie.appendChild(dieFive);
    gameDie.appendChild(dieSix);
    //position the dots inside the die
    dieOne.x = 40;
    dieOne.y = 40;
    dieTwo.x = 13;
    dieTwo.y = 13;
    dieThree.x = 13;
    dieThree.y = 13;
    dieFour.x = 13;
    dieFour.y = 13;
    dieFive.x = 13;
    dieFive.y = 13;
    dieSix.x = 13;
    dieSix.y = 13;
    //hide all the dots
    hideDots(gameDie);
    //randomize the dice
    let number = Math.floor((Math.random() * 6));
    gameDie.children[number].visible = true;
    //group the die
    let gameDieGroupNodes = [];
    gameDieGroupNodes.push(gameDie);
    let gameDieGroup = figma.group(gameDieGroupNodes, gameDie.parent);
    gameDieGroup.name = 'gameDie';
    gameDieGroup.expanded = false;
    //add plugin data to re-roll dice
    gameDieGroup.setRelaunchData({ rerollSelected: '' });
    gameDieGroup.effects = effects;
    //position the dice
    positionDice(gameDieGroup);
}
//reroll the selected dice
function rerollSelected() {
    let selection = figma.currentPage.selection;
    let dice = [];
    if (selection) {
        selection.forEach(node => {
            if (node.name === 'gameDie') {
                dice.push(node);
            }
        });
        if (dice) {
            dice.forEach(die => {
                hideDots(die.children[0]);
                let number = Math.floor((Math.random() * 6));
                let rotation = Math.floor((Math.random() * 180));
                die.children[0].children[number].visible = true;
                die.children[0].rotation = rotation;
            });
        }
        else {
            figma.closePlugin('No dice selected.');
        }
    }
    figma.closePlugin();
}
//clear existing dice
function clearDice() {
    //remove existing dice
    let existingDie = figma.currentPage.findAll(x => x.type === 'GROUP' && x.name === 'gameDie');
    if (existingDie) {
        existingDie.forEach(node => {
            node.remove();
        });
    }
    //clear other values
    position = { 'x': 0, 'y': 0 };
    diceCount = 1;
    //this needs some work
    //this is sort of weird method of figuring out where to place the dice
    //it essentialy places the dice to the top right of existing stuff on the canvas
    //would like to improve
    let children = figma.currentPage.children;
    if (children.length > 0) {
        let x, y;
        children.forEach(node => {
            if (!x && !y) {
                x = node.x + node.width;
                y = node.y;
            }
            else {
                let leftPos = node.x + node.width;
                if (x < leftPos) {
                    x = leftPos;
                }
                if (y > node.y) {
                    y = node.y;
                }
            }
        });
        position = { 'x': x, 'y': y };
    }
}
// HELPER FUNCTIONS
//function to hide all dots
function hideDots(parentNode) {
    parentNode.children.forEach(num => {
        num.visible = false; //turn of visibility of all sides of dice
        num.expanded = false; //make sure layers are collapsed
    });
}
//randomize dice rotation and position
function positionDice(dice) {
    dice.x = position.x + ((dice.width + 100) * diceCount) + spacing;
    dice.y = position.y;
    let rotation = Math.floor((Math.random() * 180));
    dice.rotation = rotation;
}
