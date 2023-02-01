import React, {useState} from "react";
import Tile from "./Tile";
import Header from "./Header";


function App() {

  const [tiles, setTiles] = useState([
    {
      number: 1,
      clear: false,
      neighbours: [2, 4],
      image: "images/1.jpg",
      completed: "images/1.jpg",
    },
    {
      number: 2,
      clear: false,
      neighbours: [1, 3, 5],
      image: "images/2.jpg",
      completed: "images/2.jpg",
    },
    {
      number: 3,
      clear: false,
      neighbours: [2, 6],
      image: "images/3.jpg",
      completed: "images/3.jpg",
    },
    {
      number: 4,
      clear: false,
      neighbours: [1, 5, 7],
      image: "images/4.jpg",
      completed: "images/4.jpg",
    },
    {
      number: 5,
      clear: false,
      neighbours: [2, 6, 4, 8],
      image: "images/5.jpg",
      completed: "images/5.jpg",
    },
    {
      number: 6,
      clear: false,
      neighbours: [3, 5, 9],
      image: "images/6.jpg",
      completed: "images/6.jpg",
    },
    {
      number: 7,
      clear: false,
      neighbours: [4, 8],
      image: "images/7.jpg",
      completed: "images/7.jpg",
    },
    {
      number: 8,
      clear: true,
      neighbours: [5, 7, 9],
      image: "images/9.jpg",
      completed: "images/8.jpg",
    },
    {
      number: 9,
      clear: false,
      neighbours: [6, 8],
      image: "images/8.jpg",
      completed: "images/9.jpg",
    },
  ]);
  
  const [clicks, setClicks] = useState(0);


  function checkNeighbours(currentTileNumber) {
    console.log(tiles);
    // Get an array of which tiles are next to the current tile
    let currentNeighbours = tiles[currentTileNumber - 1].neighbours;
    /// Iterate over the neighbour array and see if any of the neighbour tiles are the blank tile.
    for (let i=0; i<currentNeighbours.length; i++) {
      if (tiles[currentNeighbours[i]-1].clear === true) {
        // Use the map function to create a new array -  and previously clear tile to "clear: false"
        const nextTiles = tiles.map((tile) => {
          // Change the current tile to "clear: true"
          if (tile.number === currentTileNumber) {
            return {
              ...tile,
              image: "images/9.jpg",
              clear: true,
            };
          } else if (tile.number === tiles[currentNeighbours[i] - 1].number) {
            // Change clear tile to no longer being clear.
            return {
              ...tile,
              image: tiles[currentTileNumber -1 ].image,
              clear: false,
            };
          } else {
            return tile;
          }
        })
        // set the tile array as the new mapped array.
        setTiles(()=>{return nextTiles});
        }
      }
    };
  
  function addClick() {
    setClicks(prevValue => {
      return prevValue + 1;
    })
  }


  function checkFinish() {
    let complete = [];
    for (let i=0; i<tiles.length; i++) {
      if (tiles[i].image === tiles[i].completed) {
        complete.push("true");
      } else {
        complete.push("false");
      }
    }
    if (complete.includes("false")) {
      return false;
    }  else {
      return true;
    }
  }


  return (
    <div className="App">
      <Header headerText={checkFinish() === true ? "Completed!" : "Picture Slide"} clicks={clicks}/>
      <div className="gameboard">
        {/* Map the information to each picture tile */}
        {tiles.map((tile, index) => (
          <Tile
            addClick={addClick}
            picture={tile.image}
            checkNeighbours={checkNeighbours}
            key={index}
            text={checkFinish() === true ? "finished" : tile.number}
            clear={tile.clear}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
