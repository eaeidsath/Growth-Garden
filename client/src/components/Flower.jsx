import React from 'react';

export default function FlowerPot({ id, name, goal, img }) {
  return (
    <div className="grid-item">
      <p>{img}</p>
      <p>pot</p>
      <p>{goal}</p>
    </div>
  );
}