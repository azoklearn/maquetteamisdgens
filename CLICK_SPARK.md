# ✨ Click Spark Effect

## Description

Un effet **subtil et élégant** de particules qui apparaissent à chaque clic sur la page.

## 🎨 Caractéristiques

### Design
- **6 particules** par clic (configurable)
- **Taille aléatoire** : 3-8px
- **Couleurs du site** : Orange, Orange clair, Marron, Marron foncé
- **Animation circulaire** : Les particules s'échappent en cercle
- **Durée** : 0.8s
- **Très léger** : Pas de surcharge visuelle

### Couleurs utilisées
```javascript
'#f75e2a' // Orange principal
'#FF8A50' // Orange clair
'#6D4C41' // Marron
'#5D4037' // Marron foncé
```

## 🎯 Fonctionnement

### Déclenchement
- **Clic simple** sur n'importe quelle zone de la page
- **Excepté** : Liens, boutons, hamburger menu
- Fonctionne sur desktop et mobile

### Animation
1. **Création** : 6 particules apparaissent au point de clic
2. **Dispersion** : Chaque particule part dans une direction différente
3. **Fade out** : Opacité diminue progressivement
4. **Scale** : Les particules rétrécissent
5. **Suppression** : Éléments retirés du DOM après 800ms

## ⚙️ Personnalisation

### Changer le nombre de particules

Dans `script.js`, ligne 267 :

```javascript
const sparkCount = 6; // Modifier ce nombre
// 3-4 = Très léger
// 6-8 = Moyen (défaut)
// 10-12 = Intensif
```

### Modifier la taille des particules

Dans `script.js`, ligne 274 :

```javascript
const size = Math.random() * 5 + 3;
// Min = 3px, Max = 8px

// Pour des particules plus petites :
const size = Math.random() * 3 + 2; // 2-5px

// Pour des particules plus grandes :
const size = Math.random() * 8 + 5; // 5-13px
```

### Ajuster la vitesse

Dans `script.js`, ligne 287 :

```javascript
const velocity = Math.random() * 50 + 30; // 30-80px

// Plus lent :
const velocity = Math.random() * 30 + 20; // 20-50px

// Plus rapide :
const velocity = Math.random() * 80 + 40; // 40-120px
```

### Changer les couleurs

Dans `script.js`, ligne 266 :

```javascript
const colors = ['#f75e2a', '#FF8A50', '#6D4C41', '#5D4037'];

// Ajouter d'autres couleurs :
const colors = ['#f75e2a', '#FF8A50', '#FFD700', '#FFA500'];

// Utiliser une seule couleur :
const colors = ['#f75e2a'];
```

### Modifier la durée de l'animation

Dans `styles.css`, ligne 689 :

```css
animation: spark 0.8s ease-out forwards;
/* Changer 0.8s par la durée souhaitée */

/* Plus court (plus rapide) : */
animation: spark 0.5s ease-out forwards;

/* Plus long (plus lent) : */
animation: spark 1.2s ease-out forwards;
```

Et dans `script.js`, ligne 297 :

```javascript
setTimeout(() => spark.remove(), 800); // Même durée en ms
```

### Désactiver sur certains éléments

Dans `script.js`, ligne 304 :

```javascript
// Actuellement désactivé sur : liens, boutons, hamburger
if (!e.target.closest('a, button, .hamburger')) {
  createSpark(e.clientX, e.clientY);
}

// Pour activer partout :
createSpark(e.clientX, e.clientY);

// Pour désactiver sur d'autres éléments :
if (!e.target.closest('a, button, .hamburger, .footer, input')) {
  createSpark(e.clientX, e.clientY);
}
```

## 🎨 Variantes possibles

### Effet plus dramatique

```javascript
// Plus de particules
const sparkCount = 12;

// Particules plus grandes
const size = Math.random() * 10 + 5; // 5-15px

// Plus rapides
const velocity = Math.random() * 100 + 50; // 50-150px
```

### Effet minimaliste

```javascript
// Moins de particules
const sparkCount = 3;

// Particules très petites
const size = Math.random() * 2 + 1; // 1-3px

// Plus lentes
const velocity = Math.random() * 30 + 10; // 10-40px
```

### Couleurs arc-en-ciel

```javascript
const colors = [
  '#FF6B6B', // Rouge
  '#FFA500', // Orange
  '#FFD700', // Jaune
  '#4CAF50', // Vert
  '#2196F3', // Bleu
  '#9C27B0', // Violet
];
```

## 🎯 Optimisation

### Performance
- ✅ Les particules sont supprimées du DOM après animation
- ✅ Pas de memory leak
- ✅ Utilise CSS transforms (accélération GPU)
- ✅ Z-index: 9999 (au-dessus de tout)

### Mobile
- ✅ Fonctionne sur tactile
- ✅ Position correcte au tap
- ✅ Pas de lag

## 🔧 Dépannage

### Les particules n'apparaissent pas
1. Vérifier que `script.js` est bien chargé
2. Ouvrir la console pour voir les erreurs
3. Vérifier que le CSS pour `.click-spark` est présent

### Les particules sont trop visibles
- Réduire `sparkCount` (nombre de particules)
- Réduire la taille avec `size`
- Augmenter la durée pour un effet plus lent

### Les particules ne disparaissent pas
- Vérifier que le `setTimeout` dans `script.js` est présent
- La durée doit correspondre à celle de l'animation CSS

### Conflit avec d'autres effets
- Ajuster le z-index de `.click-spark` si besoin
- Vérifier que `pointer-events: none` est bien présent

## 📊 Configuration actuelle

```javascript
Particules par clic : 6
Taille : 3-8px (aléatoire)
Couleurs : 4 (orange, marron)
Vitesse : 30-80px
Durée : 0.8s
Direction : Circulaire (360°)
```

## 💡 Idées d'amélioration futures

1. **Formes variées** : Étoiles, cœurs, etc. au lieu de cercles
2. **Trail effect** : Traînée derrière les particules
3. **Couleur selon zone** : Différentes couleurs selon la section
4. **Mode sombre** : Particules plus claires en mode sombre
5. **Effet au hover** : Particules au survol plutôt qu'au clic

## 🎬 Désactiver l'effet

Pour désactiver complètement l'effet, commentez dans `script.js` :

```javascript
// Commenter ces lignes (lignes 302-307)
/*
document.addEventListener('click', (e) => {
  if (!e.target.closest('a, button, .hamburger')) {
    createSpark(e.clientX, e.clientY);
  }
});
*/
```

Ou supprimer la section "CLICK SPARK" dans `script.js`.

---

**Créé pour Amis.dgens** 🧡

Effet click spark léger et élégant pour une expérience utilisateur immersive !

