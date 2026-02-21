# 🎨 Guide des Animations AOS

## Qu'est-ce qu'AOS ?

**AOS (Animate On Scroll)** est une bibliothèque JavaScript qui permet d'animer les éléments lorsqu'ils apparaissent lors du scroll de la page.

## 🚀 Utilisation

### Syntaxe de base

Pour ajouter une animation à un élément HTML, ajoutez simplement l'attribut `data-aos` :

```html
<div data-aos="fade-up">
  Contenu qui s'anime au scroll
</div>
```

## 🎭 Types d'animations disponibles

### 1️⃣ Animations Fade (Fondu)

```html
<div data-aos="fade-up">Animation fondu vers le haut</div>
<div data-aos="fade-down">Animation fondu vers le bas</div>
<div data-aos="fade-left">Animation fondu depuis la gauche</div>
<div data-aos="fade-right">Animation fondu depuis la droite</div>
<div data-aos="fade-up-right">Animation fondu diagonale ↗️</div>
<div data-aos="fade-up-left">Animation fondu diagonale ↖️</div>
<div data-aos="fade-down-right">Animation fondu diagonale ↘️</div>
<div data-aos="fade-down-left">Animation fondu diagonale ↙️</div>
```

### 2️⃣ Animations Flip (Retournement)

```html
<div data-aos="flip-up">Retournement vers le haut</div>
<div data-aos="flip-down">Retournement vers le bas</div>
<div data-aos="flip-left">Retournement vers la gauche</div>
<div data-aos="flip-right">Retournement vers la droite</div>
```

### 3️⃣ Animations Zoom

```html
<div data-aos="zoom-in">Zoom avant</div>
<div data-aos="zoom-in-up">Zoom avant + montée</div>
<div data-aos="zoom-in-down">Zoom avant + descente</div>
<div data-aos="zoom-in-left">Zoom avant + gauche</div>
<div data-aos="zoom-in-right">Zoom avant + droite</div>
<div data-aos="zoom-out">Zoom arrière</div>
```

### 4️⃣ Animations Slide (Glissement)

```html
<div data-aos="slide-up">Glissement vers le haut</div>
<div data-aos="slide-down">Glissement vers le bas</div>
<div data-aos="slide-left">Glissement vers la gauche</div>
<div data-aos="slide-right">Glissement vers la droite</div>
```

## ⚙️ Options personnalisables

Vous pouvez personnaliser chaque animation avec des attributs supplémentaires :

### Durée

```html
<div data-aos="fade-up" data-aos-duration="1000">
  Animation de 1 seconde
</div>
```

Valeurs possibles : 50 à 3000 (en millisecondes)

### Délai

```html
<div data-aos="fade-up" data-aos-delay="200">
  Démarre après 200ms
</div>
```

Valeurs possibles : 0 à 3000 (en millisecondes)

### Easing (courbe d'animation)

```html
<div data-aos="fade-up" data-aos-easing="ease-in-out">
  Animation fluide
</div>
```

Options d'easing :
- `linear` - Vitesse constante
- `ease` - Démarrage lent, accélération, fin lente
- `ease-in` - Démarrage lent
- `ease-out` - Fin lente
- `ease-in-out` - Démarrage et fin lents (recommandé)
- `ease-in-back` - Recul au début
- `ease-out-back` - Recul à la fin
- `ease-in-out-back` - Recul au début et à la fin

### Offset (distance de déclenchement)

```html
<div data-aos="fade-up" data-aos-offset="200">
  S'anime 200px avant d'entrer dans la zone visible
</div>
```

### Animation unique ou répétée

```html
<!-- Animation une seule fois -->
<div data-aos="fade-up" data-aos-once="true">Une fois</div>

<!-- Animation à chaque passage -->
<div data-aos="fade-up" data-aos-once="false">À chaque fois</div>
```

### Ancre personnalisée

```html
<div data-aos="fade-up" data-aos-anchor="#mon-element">
  S'anime en fonction de #mon-element
</div>
```

## 📋 Exemples pratiques pour votre site

### Carte qui apparaît avec rotation

```html
<div class="card" data-aos="flip-up" data-aos-duration="800">
  <h3>Titre de la carte</h3>
  <p>Contenu...</p>
</div>
```

### Section qui glisse depuis la droite

```html
<section data-aos="fade-left" data-aos-delay="200">
  <h2>Titre de section</h2>
  <p>Contenu...</p>
</section>
```

### Grille d'éléments avec délai progressif

```html
<div class="grid">
  <div data-aos="zoom-in" data-aos-delay="0">Élément 1</div>
  <div data-aos="zoom-in" data-aos-delay="100">Élément 2</div>
  <div data-aos="zoom-in" data-aos-delay="200">Élément 3</div>
  <div data-aos="zoom-in" data-aos-delay="300">Élément 4</div>
</div>
```

### Bouton avec effet dramatique

```html
<a href="#" class="btn" data-aos="flip-down" data-aos-duration="1000" data-aos-easing="ease-in-out-back">
  Faire un don
</a>
```

## 🎯 Recommandations pour Amis.dgens

### Pour les titres (h2, h3)
```html
<h2 data-aos="fade-up">Titre</h2>
```

### Pour les cartes de projets
```html
<div class="card" data-aos="flip-up">...</div>
```

### Pour les statistiques
```html
<div class="stat" data-aos="zoom-in" data-aos-delay="100">...</div>
```

### Pour les images
```html
<img src="..." data-aos="fade-right" data-aos-duration="1000">
```

### Pour les sections complètes
```html
<section data-aos="fade-down-right">
  <!-- Contenu -->
</section>
```

## 🔧 Configuration globale

La configuration globale est dans `script.js` :

```javascript
AOS.init({
  duration: 800,         // Durée par défaut
  easing: 'ease-in-out', // Easing par défaut
  once: true,            // Animation une seule fois
  offset: 120,           // Décalage du déclenchement
  delay: 100,            // Délai par défaut
});
```

## 💡 Bonnes pratiques

1. **Ne surchargez pas** : Trop d'animations peut fatiguer l'utilisateur
2. **Cohérence** : Utilisez des animations similaires pour des éléments similaires
3. **Performance** : `once: true` améliore les performances
4. **Durée** : 800ms est une bonne durée par défaut
5. **Mobile** : Les animations fonctionnent aussi sur mobile

## 🌐 Ressources

- [Documentation officielle AOS](https://michalsnik.github.io/aos/)
- [Démo interactive](https://michalsnik.github.io/aos/)
- [GitHub AOS](https://github.com/michalsnik/aos)

---

**Créé pour Amis.dgens** 🧡

