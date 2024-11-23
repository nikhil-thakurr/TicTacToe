import React, { useState } from "react";

const SecondaryContainer = () => {

  const [win,setwin]=useState(false);
  const [val, setval] = useState("X");
  const [player,setplayer]=useState("");
  const [values, setvalues] = useState(["", "", "", "", "", "", "", "", ""]);

  const resteGame=()=>{
    setvalues(["", "", "", "", "", "", "", "", ""]);
    setval("X");
    setwin(false);
  }

  const divClicked = (e) => {
    const toUpdate = [...values];
    if (toUpdate[e.target.id] === "") {
      toUpdate[e.target.id] = val;
      setvalues(toUpdate);
      if (val === "X") setval("O");
      else setval("X");
      winConditions(toUpdate);
    }
   
  };

  const winConditions =(board)=>{
    for(let i=0;i<9;){
      if(board[i]===board[i+1] && board[i+1]===board[i+2] && board[i]!==""){
        setwin(true);
        setplayer(board[i]);
        return;
      }
      i=i+3;
    }

    for(let i=0;i<3;i++){
      if(board[i]===board[i+3] && board[i+3]===board[i+6] && board[i]!==""){
        setwin(true);
        setplayer(board[i]);

        return;

      }
    }

    if((board[0]===board[4] && board[4]==board[8] && board[0]!=="") || (board[2]===board[4] && board[4]===board[6] && board[6]!=="")){
      setwin(true);
      setplayer(board[i]);

      return;

    }
   
  }


  return (win)? < div className="items-center flex justify-center flex-col"> 
  <div className="flex text-center justify-center text-5xl font-extrabold mt-10">{player} wins the game </div>  <div className=""><button onClick={resteGame} className="font-bold p-2 bg-white rounded-lg  mt-4">Reset Game</button></div></div>:(
    <div className="flex justify-center items-center mt-20  ">
      <div className="h-96 w-96 border-4 ">
        <div className="flex h-1/3 ">
          <div
            id="0"
            className="w-1/3 border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[0]}
          </div>
          <div
            id="1"
            className="w-1/3   border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[1]}
          </div>
          <div
            id="2"
            className="w-1/3   border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[2]}
          </div>
        </div>
        <div className="flex h-1/3 ">
          <div
            id="3"
            className="w-1/3 border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[3]}
          </div>
          <div
            id="4"
            className="w-1/3 border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[4]}
          </div>
          <div
            id="5"
            className="w-1/3 border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[5]}
          </div>
        </div>
        <div className="flex h-1/3 ">
          <div
            id="6"
            className="w-1/3 border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[6]}
          </div>
          <div
            id="7"
            className="w-1/3 border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[7]}
          </div>
          <div
            id="8"
            className="w-1/3 border flex justify-center items-center text-4xl font-bold"
            onClick={divClicked}
          >
            {values[8]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
