# 📚 Guide complet pour utiliser Treant.js

## ✅ Dépendances nécessaires

Pour utiliser **Treant.js**, vous devez inclure dans votre HTML :

```html
<!-- CSS requis -->
<link rel="stylesheet" href="path/to/Treant.css" />

<!-- JS requis -->
<script src="path/to/raphael.js"></script>
<script src="path/to/Treant.js"></script>

<!-- Votre fichier de configuration -->
<script src="config-arbre.js"></script>
```

---

## 🧱 Structure de base

Un arbre Treant se compose de deux blocs principaux :

### 1. `chart` (configuration globale de l’arbre)

Décrit l’orientation, les espacements, l’animation, etc.

### 2. `nodeStructure` (structure des nœuds)

Définit les relations parents/enfants et les contenus de chaque nœud.

```js
const config = {
  chart: {
    container: "#monArbre",
    rootOrientation: "NORTH",
    nodeAlign: "CENTER"
  },
  nodeStructure: {
    text: { name: "Racine" },
    children: [
      { text: { name: "Enfant 1" } },
      { text: { name: "Enfant 2" } }
    ]
  }
};

new Treant(config);
```

---

## ⚙️ Tous les paramètres disponibles

### 📌 Paramètres de `chart`

| Paramètre            | Type                                          | Description                                                   |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------- |
| `container`          | `string`                                      | ID de la div qui contiendra l’arbre (**obligatoire**)         |
| `rootOrientation`    | `"NORTH"`, `"SOUTH"`, `"EAST"`, `"WEST"`      | Sens de croissance de l’arbre                                 |
| `nodeAlign`          | `"CENTER"`, `"TOP"`, `"BOTTOM"`               | Alignement vertical des nœuds du même niveau                  |
| `levelSeparation`    | `number`                                      | Distance entre les niveaux                                    |
| `siblingSeparation`  | `number`                                      | Distance entre deux frères                                    |
| `subTeeSeparation`   | `number`                                      | Distance entre deux branches                                  |
| `hideRootNode`       | `boolean`                                     | Masque le nœud racine                                         |
| `padding`            | `number`                                      | Marge intérieure entre le conteneur et l’arbre                |
| `scrollbar`          | `"native"`, `"fancy"`, `"none"`               | Type de scrollbar si le contenu dépasse                       |
| `connectors.type`    | `"step"`, `"curve"`, `"straight"`, `"bCurve"` | Style de ligne entre les nœuds                                |
| `connectors.style`   | `object`                                      | Style avancé (couleur, épaisseur, etc.)                       |
| `animation`          | `object`                                      | Gère la vitesse et type d’animation                           |
| `animateOnInit`      | `boolean`                                     | Active une animation au chargement                            |
| `animateOnInitDelay` | `number`                                      | Délai avant l’animation                                       |
| `callback`           | `object`                                      | Fonctions déclenchées à différents événements (voir plus bas) |
| `stackIndent`        | `number`                                      | Espace entre enfants empilés                                  |
| `maxDepth`           | `number`                                      | Limite la profondeur affichée                                 |
| `debug`              | `boolean`                                     | Affiche les logs pour débogage                                |

---

### 🔁 Callback : ajouter des comportements personnalisés

Un **callback** est une fonction exécutée automatiquement **à un moment précis** du rendu de l’arbre. Très utile pour :

* Ajouter du style dynamique
* Gérer des clics
* Afficher des messages en console

#### 🧪 Exemple :

```js
const config = {
  chart: {
    container: "#tree",
    callback: {
      onTreeLoaded: function () {
        console.log("L’arbre est chargé !");
      },
      onCreateNode: function (node, data) {
        console.log("Nœud créé :", node);
        // Exemple : changer la couleur de fond
        node.style.background = "#ffe082";
      }
    }
  },
  nodeStructure: {
    text: { name: "Racine" },
    children: [
      { text: { name: "Enfant 1" } },
      { text: { name: "Enfant 2" } }
    ]
  }
};
new Treant(config);
```

#### 🧠 Liste des callbacks disponibles :

| Callback                      | Description                           |
| ----------------------------- | ------------------------------------- |
| `onTreeLoaded`                | Quand l’arbre est affiché             |
| `onCreateNode`                | Lors de la création d’un nœud         |
| `onAfterAddNode`              | Après qu’un nœud soit ajouté          |
| `onBeforeAddNode`             | Avant l’ajout d’un nœud               |
| `onAfterPositionNode`         | Après positionnement                  |
| `onBeforePositionNode`        | Avant positionnement                  |
| `onCreateNodeCollapseSwitch`  | Quand un bouton de repli est créé     |
| `onToggleCollapseFinished`    | Quand une branche est repliée/dépliée |
| `onBeforeClickCollapseSwitch` | Avant clic sur repli                  |
| `onAfterClickCollapseSwitch`  | Après clic sur repli                  |

---

### 🌿 Paramètres individuels de chaque nœud (`nodeStructure`)

| Paramètre           | Type              | Description                                          |
| ------------------- | ----------------- | ---------------------------------------------------- |
| `text`              | `object`          | Contenu du nœud (`name`, `title`, `desc`, `contact`) |
| `image`             | `string`          | URL d’une image dans le nœud                         |
| `link`              | `object`          | Rend le nœud cliquable (`href`, `target`)            |
| `collapsed`         | `boolean`         | Replie les enfants au chargement                     |
| `collapsable`       | `boolean`         | Permet de replier le nœud manuellement               |
| `stackChildren`     | `boolean`         | Empile verticalement les enfants                     |
| `drawLineThrough`   | `boolean`         | Trace une ligne à travers le nœud                    |
| `pseudo`            | `boolean`         | Crée un nœud invisible sans contenu                  |
| `childrenDropLevel` | `number`          | Décale les enfants plus bas que normal               |
| `innerHTML`         | `string` ou `#id` | HTML personnalisé à l’intérieur du nœud              |
| `connectors`        | `object`          | Redéfinit le style des lignes pour ce nœud           |
| `HTMLclass`         | `string`          | Classe CSS personnalisée                             |
| `HTMLid`            | `string`          | ID HTML personnalisé                                 |
| `parent`            | (plate version)   | Référence vers le nœud parent                        |

---

## 🎨 Personnalisation avec CSS

Vous pouvez styliser vos nœuds via les classes suivantes :

* `.node`, `.node-name`, `.node-title`, `.node-desc`
* Ou bien vos propres classes définies via `HTMLclass`

#### 🎨 Exemple CSS

```css
.personne-dirigeante {
  background: #e3f2fd;
  border: 2px solid #2196f3;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
```

Et dans la config JS :

```js
{
  text: { name: "PDG" },
  HTMLclass: "personne-dirigeante"
}
```

---

## 🎉 Conclusion

Grâce à ce guide :

✅ Vous savez inclure et configurer Treant.js
✅ Vous connaissez tous les paramètres globaux et par nœud
✅ Vous pouvez ajouter des callbacks pour un comportement dynamique
✅ Vous pouvez personnaliser l'apparence avec du CSS
