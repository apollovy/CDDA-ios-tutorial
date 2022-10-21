import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const tutorialElements = [
    {
      src: require('./gif/1-zoom.gif'),
      description: '	Pinch in and out to change the screen view scale.',
      alt: 'zoom',
    },
    {
      src: require('./gif/2-Move.gif'),
      description: '	Tap on any tile on the screen to make a waypoint to it and tap again to move character to the chosen tile.',
      alt: 'Move',
    },
    {
      src: require('./gif/3-Description.gif'),
      description: '	Tap and hold on the tile to look the description of it.',
      alt: 'Description',
    },
    {
      src: require('./gif/4-Hold with 2 fingers to move.gif'),
      description: '	Use 2 fingers to move the camera view in 4 directions.',
      alt: 'Hold with 2 fingers to move',
    },
    {
      src: require('./gif/5-Tap with 2 fingers to cente camera.gif'),
      description: '	Tap with 2 fingers to center camera on the character.',
      alt: 'Tap with 2 fingers to cente camera',
    },
    {
      src: require('./gif/6-Begin game.gif'),
      description: '	For a fast start choose “Play now!”.',
      alt: 'Begin game',
    },
    {
      src: require('./gif/7-Up_Down_Left_Right in the menu.gif'),
      description: '	Use “up/down” and “left/right” buttons for controls in different menu windows (includes main screen).',
      alt: 'Up_Down_Left_Right in the menu',
    },
    {
      src: require('./gif/8-Check the logs.gif'),
      description: '	Don’t forget to check the log, it has a lot of useful information.',
      alt: 'Check the logs!',
    },
    {
      src: require('./gif/9-Move with keyboard.gif'),
      description: '	Use the keypad in the left bottom corner to move the character.',
      alt: 'Move with keyboard',
    },
    {
      src: require('./gif/10-Skip time part.gif'),
      description: '	Touch the middle button on the keypad to skip time (time skipped depends on the action you do).',
      alt: 'Skip time part',
    },
    {
      src: require('./gif/11-Advanced inventory.gif'),
      description: '	The diagonal buttons on the keypad replace (have the same function as) the “1/3/7/9” buttons on the keyboard.',
      alt: 'Advanced inventory',
    },
    {
      src: require('./gif/12-Hidden keyboard and TAB.gif'),
      description: '	Swipe up to summon the keyboard and down to remove it.',
      alt: 'Hidden keyboard and TAB',
    },
    {
      src: require('./gif/13-Menu scroll.gif'),
      description: '	Tap and hold on the right edge of the screen to scroll the hidden part of description.',
      alt: 'Menu scroll',
    },
    {
      src: require('./gif/14-Keep the side menu.gif'),
      description: '	Tap and hold at any action in side menu to lock it on the screen.',
      alt: 'Keep the side menu',
    },
    {
      src: require('./gif/15-Load character.gif'),
      description: '	Press the “Tab/BTab” buttons to go the next or previous tab in the menu.',
      alt: 'Load character',
    },
    {
      src: require('./gif/16-Hide side menu.gif'),
      description: '	Tap and hold at any place on the screen (not buttons) to hide the screen menu.',
      alt: 'Hide side menu',
    },
  ]


  return (
    <div className="App">
      <header className="App-header">


        {tutorialElements.map((tutorialElement, index)=>{return(
          <div className='boxTutorial' key={index + tutorialElement.alt}>
            <img src={tutorialElement.src} className='gifStyle' alt={tutorialElement.alt} />
          <div className='boxText'>
          <p>{tutorialElement.description}</p>
          </div>

          </div>
        )})} 
        
      </header>
    </div>
  );
}

export default App;
