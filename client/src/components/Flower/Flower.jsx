import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Flower({ _id, flowerType, goalTitle, activityLevel }) {

  const [flowerStage, setFlowerStage] = useState("");

  useEffect(() => {
    flowerGrowth(activityLevel)
  });

  const flowerGrowth = (x) => {
    if (x === 0) {
      setFlowerStage('flower_pot.png');
      console.log(x);
    } else if ((0 < x) && (x <= 4)) {
      setFlowerStage('stage_1.png');
      console.log(x);
    } else if ((4 < x) && (x <= 8)) {
      setFlowerStage('stage_2.png');
      console.log(x);
    }
  }

  // change link address to `/goals/${_id}` when main is updated
  return (
    <div className="grid-item">
      <div>
        
        <Link to={`/singlegoal/${_id}`}>
          <img src={`/${flowerStage}`} />
        </Link>
      </div>
      <div>
        <p>{goalTitle}</p>
      </div>
    </div>
  );
}