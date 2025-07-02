// VErsion 1 tout reunis

var simple_chart_config = {
  chart: {// On recupere la balise qui contiendra l'arbre
    container: "#FirstExempleYaya"
  },
  
  nodeStructure: {//Voila la structure
    text: { name: "1 er generation" },
    children: [
      { text: { name: "2iem G" },
        children: [
          {text: { name: "3iem G" }},
          {text: { name: "3iem MG" }},
          {text: { name: "3iem M" }},
          {text: { name: "3iem MD" }},
          {text: { name: "3iem D" }}
        ]
      },
      {text: { name: "2iem D" },
        children: [
          {text: { name: "4iem G" }},
          {text: { name: "4iem MG" }},
          {text: { name: "4iem M" }},
          {text: { name: "4iem MD" }},
          {text: { name: "4iem D" }}
        ]
}
    ]
  }
};

// // // // // // // // // // // // // // // // // // // // // // // // 

var config = {
  container: "#SecondExempleYaya"
};

var parent_node = {
  text: { name: "1" }
};

var first_child = {
  parent: parent_node,
  text: { name: "2" }
};

var second_child = {
  parent: parent_node,
  text: { name: "3" }
};

var t_child = {
  parent: second_child,
  text: { name: "4" }
};

var f_child = {
  parent: t_child,
  text: { name: "5" }
};

var fi_child = {
  parent: f_child,
  text: { name: "6" }
};

var si_child = {
  parent: fi_child,
  text: { name: "7" }
};

var simple_version_tow = [
  config, parent_node,
    first_child, second_child, t_child, f_child, fi_child, si_child
];

new Treant( simple_chart_config );
new Treant( simple_version_tow );