// @flow 
import React, {useState, useEffect, MouseEvent} from 'react';
import axios from 'axios';

type Props = {
  
};

interface IRoomModel {
  name: string;
}

export const Room = (props: Props) => {
  const [rooms, setRooms] = useState<IRoomModel[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3333/users')
      .then((response) => {
        setRooms(response.data);
      })
  }, []);
  
  const clicou = (event: MouseEvent<HTMLLIElement>) => {
    console.log(event + 'clicou');
  }

  return (
    <div>
      <h1>Salas</h1>
      <ul>
        {
          rooms.map((room) => (
            <li key={room.name} onClick={clicou}>{room.name}</li>
          ))
        }
      </ul>
    </div>
  );
};