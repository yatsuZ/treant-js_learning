const fullConfig = {
  chart: {
    container: "#tree-simple",
    rootOrientation: "NORTH",
    levelSeparation: 60,
    siblingSeparation: 30,
    subTeeSeparation: 40,
    nodeAlign: "CENTER",
    connectors: {
      type: "step", // "curve", "straight", "bCurve"
    },
    animation: {
      nodeAnimation: "easeOutBounce",
      nodeSpeed: 700,
      connectorsAnimation: "bounce",
      connectorsSpeed: 700
    },
    scrollbar: "native"
  },

  nodeStructure: {
    text: {
      name: "Racine",
      title: "Le Grand Ancien",
      desc: "Début de tout"
    },
    image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    HTMLclass: "custom-node",
    drawLineThrough: true,
    collapsed: false,
    children: [
      {
        text: { name: "Branche 1", title: "Responsable", desc: "Gauche" },
        image: "https://www.gravatar.com/avatar/11111111111111111111111111111111?d=mp&f=y",
        HTMLclass: "custom-node",
        stackChildren: true,
        collapsed: false,
        children: [
          {
            text: { name: "Enfant 1", title: "Dev" },
            image: "https://www.gravatar.com/avatar/22222222222222222222222222222222?d=mp&f=y",
            link: { href: "https://google.com", target: "_blank" },
            HTMLclass: "custom-node"
          },
          {
            text: { name: "Enfant 2", title: "Designer" },
            HTMLclass: "custom-node"
          }
        ]
      },
      {
        text: { name: "Branche 2", title: "Chef", desc: "Droite" },
        HTMLclass: "custom-node",
        collapsed: true, // replié au chargement
        children: [
          {
            text: { name: "Enfant 3", title: "Comptable" },
            HTMLclass: "custom-node"
          },
          {
            text: { name: "Enfant 4", title: "RH" },
            HTMLclass: "custom-node"
          }
        ]
      }
    ]
  }
};
new Treant(fullConfig);