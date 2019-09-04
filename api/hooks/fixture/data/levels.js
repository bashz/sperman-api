module.exports = [
  {
    level: 1,
    spawnCycle: 500,
    viscosity: 0.002,
    maxScore: 50000,
    minScore: 5000,
    sprites: [
      {
        type: "ovum",
        name: "alpha",
        x: 0.5,
        y: 0.5,
        vx: 0,
        vy: 0.5,
        vr: 1
      },
      {
        type: "germ",
        name: "azotobacter",
        startOn: "top",
        speedMin: 2,
        speedRange: 1,
        vr: 3,
        spawnAt: 50
      }
    ]
  }
]
