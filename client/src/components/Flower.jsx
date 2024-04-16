import React from 'react';

export default function FlowerPot({ id, name, goal, img }) {
  return (
    <div className="garden-item">
      <p>{img}</p>
      <p><img src="../../src/assets/flower-pot.png" /></p>
      <p>{goal}</p>
    </div>
  );
}