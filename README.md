<pre>
  _______                   _          _     
 |__   __|                 | |        (_)    
    | |_ __ ___  __ _ _ __ | |_ ______ _ ___ 
    | | '__/ _ \/ _` | '_ \| __|______| / __|
    | | | |  __/ (_| | | | | |_       | \__ \
    |_|_|  \___|\__,_|_| |_|\__|      | |___/
                                     _/ |    
                                    |__/     

░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░▒▓████████▓▒░▒▓███████▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░  ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░  ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
 ░▒▓██████▓▒░░▒▓████████▓▒░ ░▒▓█▓▒░   ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░         ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░         ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ 
   ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░  ░▒▓███████▓▒░ ░▒▓██████▓▒░  
</pre>

# 🌳 **Bienvenue sur mon sandbox Treant.js !**

Ce dépôt est mon **espace d'apprentissage et d'expérimentation personnel** dédié à la bibliothèque **Treant.js**.
Mon objectif principal ici est de **maîtriser cette technologie JavaScript** pour créer des visualisations arborescentes dynamiques et stylisées.

Dans ce repository GitHub, vous trouverez mes propres exemples d'utilisation, construits autour d'un environnement **Node.js**, avec **EJS** pour les vues dynamiques.

---

## 🔍 1. Ma découverte de Treant.js

J’ai découvert **Treant.js** complètement par hasard, et ça a été une vraie révélation !
C’est exactement le genre d’outil que je cherchais pour mes projets de visualisation : simple, efficace, et extensible. Cette librairie est idéale pour :

* Représenter des **arbres généalogiques** complexes
* Dessiner des **arborescences de tournois**
* Visualiser des **organigrammes** personnalisés

---

## ⚙️ 2. Mon approche de Treant.js

J’ai décidé de **forker le dépôt GitHub officiel** de Treant.js afin d’avoir une copie personnelle du projet. Cela me permet de :

* Travailler librement sans impacter la version originale
* Apprendre par l’expérimentation directe
* Réorganiser le projet selon ma logique

> ### 📌 C’est quoi un "fork" ?
>
> Un **fork** est une **copie d’un dépôt GitHub** sur mon propre compte.
> Cela me donne la liberté d’expérimenter, de tester, de casser des choses sans risquer de toucher au dépôt source. C’est la méthode idéale pour apprendre ou pour proposer de futures contributions.

Mon objectif ici est de créer mes **propres exemples** autour de Treant.js, pour apprendre en profondeur et explorer différentes structures.

---

## 🛠️ 3. Refonte de l’environnement de développement

Le projet ne suit plus l’arborescence classique du dépôt Treant.js original.
Voici **l’ancienne structure héritée du fork** (au départ) :

```shell
.
├── build
├── examples
├── LICENSE
├── package.json
├── README.md
├── Treant.css
├── Treant.js
└── vendor/
    ├── jquery.easing.js
    ├── jquery.min.js
    ├── jquery.mousewheel.js
    ├── perfect-scrollbar/
    │   ├── perfect-scrollbar.css
    │   └── perfect-scrollbar.js
    └── raphael.js
```

Mais j’ai décidé de **restructurer complètement** l’environnement, pour intégrer un **serveur Node.js** avec Express, un système de vues dynamiques avec **EJS**, et une organisation modulaire pour mes exemples.

### 📁 Nouvelle structure envisagée :

```shell
.
├── code/
│   ├── index.js                 # Serveur Node.js avec Express
│   ├── views/                  # Fichiers EJS si besoin
│   ├── utilitaire/             # Fichiers essentiels pour Treant.js
│   │   ├── Treant.js
│   │   ├── Treant.css
│   │   ├── raphael.js
│   │   └── autres dépendances (jQuery, etc.)
│   └── examples/                # Mes propres exemples
│       ├── arbre-familial/
│       │   ├── main.ejs
│       │   ├── style.css
│       │   └── script.js
│       └── tournoi-jeux/
│           ├── main.ejs
│           ├── style.css
│           └── script.js
└── README.md
```

---

## 🧪 4. À venir : mes propres exemples

Je vais progressivement développer et organiser mes propres cas d’utilisation de Treant.js dans le dossier `./code/exemple/`.
Les premiers seront :

* 🧬 **Arbre généalogique** simple avec style personnalisé
* 🎮 **Arbre de tournoi** à élimination simple

Chaque exemple sera autonome, avec son propre HTML, CSS, JS.

---

## 🔗 Ressources utiles

* 🌐 **Site officiel Treant.js** : [https://fperucic.github.io/treant-js/](https://fperucic.github.io/treant-js/)
* 💻 **Dépôt GitHub original** : [https://github.com/fperucic/treant-js](https://github.com/fperucic/treant-js)

---

## ✍️ Remarque finale

Ce projet est en cours de construction.
Il évoluera au fil de mes expérimentations, et j’ajouterai de nouveaux exemples au fur et à mesure.

---

Souhaite-tu que je t’aide à générer un exemple de `code/index.js` (serveur Express), ou te créer un exemple dans `code/exemple/arbre-familial/` pour démarrer ?
