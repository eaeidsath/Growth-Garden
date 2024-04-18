import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FlowerCard, FlowerImg } from './Flower.styles';

export default function Flower({ _id, flowerType, goalTitle, activityLevel }) {

  const [flowerStage, setFlowerStage] = useState("");

  useEffect(() => {
    flowerGrowth(activityLevel)
  });

  const flowerGrowth = (x) => {
    if (x === 0) {
      setFlowerStage('stage_1.png');
    } else if ((0 < x) && (x <= 3)) {
      setFlowerStage('stage_2.png');
    } else if ((3 < x) && (x <= 5)) {
      setFlowerStage('stage_3.png');
    } else if ((5 < x) && (x <= 8)) {
      setFlowerStage('stage_4.png');
    } else if ((8 < x) && (x <= 12)) {
      setFlowerStage('stage_5.png');
    } else if ((12 < x) && (x <= 15)) {
      setFlowerStage('stage_6.png');
    } else if ((15 < x)) {
      setFlowerStage('bloom.png');
    }
  }

  return (
    <FlowerCard>
        <Link to={`/singlegoal/${_id}`}>
          <FlowerImg src={`/${flowerStage}`} />
        </Link>
        <p>{goalTitle}</p>
    </FlowerCard>
  );
}