import { useState } from "react";

export default function Lodoboard() {
    let [moves, setMoves] = useState({ blue: 0, red:0, yellow:0, green:0} );
    let [arr, SetArr] = useState(["no moves"]);
    
    let updateBlue = () => {
        // moves.blue += 1;
        // console.log(`moves.blue = ${moves.blue}`);
    //     setMoves((prevMoves) =>{
    //          return {...premoves, blue: moves.blue + 1}
    // });

    // arr.push("blue moves");
    // SetArr(arr);
    SetArr( (prevArr) => {
       return  [...prevArr, "blue moves"]});
    console.log(arr);
    };

    let updateYellow = () => {
        // moves.yellow += 1;
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) =>{
             return {...premoves, yellow: moves.yellow + 1}
    });
    }

    let updateGreen = () => {
        // moves.green += 1;
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) =>{
             return {...premoves, green: moves.green+1}
    });
    }

    let updateRed = () => {
        // moves.red += 1;
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) =>{
             return {...premoves, red: moves.red+1}
    });
    }

    return (
        <div>
            <p>Game begins!</p>
            <p>{arr}</p>
            <div className="board">
                  <p>Blue move = {moves.blue} </p>
                  <button style = {{backgroundColor: "blue"}}  onClick={updateBlue}>+1</button>
                  <p>Yello move = {moves.yellow}</p>
                  <button style = {{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                  <p>Green move = {moves.green} </p>
                  <button style = {{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                  <p>Red move = {moves.red} </p>
                  <button style = {{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}