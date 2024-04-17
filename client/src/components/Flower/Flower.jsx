import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FlowerCard, FlowerImg } from './Flower.styles';

export default function Flower({ _id, name, goal, activityLevel }) {

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
    <FlowerCard>
        <Link to={`/singlegoal`}>
          <FlowerImg src={`/${flowerStage}`} />
        </Link>
        <p>{goal}</p>
    </FlowerCard>
  );
}