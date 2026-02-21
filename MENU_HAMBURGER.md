# 🍔 Menu Hamburger Full Screen

## Description

Le site dispose maintenant d'un **menu hamburger full screen moderne** qui s'affiche sur **tous les appareils** (desktop, tablette, mobile).

## ✨ Caractéristiques

### 🎨 Design
- **Full screen** : Le menu occupe tout l'écran
- **Dégradé dynamique** : Fond dégradé marron → marron clair → orange
- **Motif subtil** : Effet de texture avec des points en arrière-plan
- **Animations fluides** : Transitions de 0.5s avec des délais progressifs

### 🎭 Animations

#### Hamburger Icon
- Transformation en X au clic
- Couleur blanche quand actif
- Effet hover : scale(1.1)
- 3 barres qui se transforment

#### Menu Items
- Apparition progressive (chaque item avec un délai différent)
- Translation de 30px vers le haut → 0
- Opacité de 0 → 1
- Délais: 0.1s, 0.15s, 0.2s, 0.25s, etc.

#### Liens
- Taille: 2rem (desktop), 1.5rem (mobile)
- Couleur: blanc
- Hover: orange clair + glissement à droite + glow
- Uppercase + letterspacing 2px

#### Bouton "Faire un don"
- Style spécial: bouton blanc sur fond dégradé
- Plus gros que les autres liens
- Hover: fond orange + scale(1.05) + shadow

## 🎯 Fonctionnement

### HTML Structure

```html
<nav>
  <a href="index.html" class="logo">
    <!-- Logo -->
  </a>
  
  <ul class="nav-links">
    <li><a href="index.html">Accueil</a></li>
    <li><a href="a-propos.html">À propos</a></li>
    <!-- ... autres liens -->
    <li><a href="nous-soutenir.html" class="btn-don">Faire un don</a></li>
  </ul>
  
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>
```

### JavaScript

Le script `script.js` gère :
- Toggle de la classe `.active` sur `.hamburger` et `.nav-links`
- Blocage du scroll quand le menu est ouvert
- Fermeture automatique au clic sur un lien

```javascript
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') 
    ? 'hidden' 
    : 'auto';
});
```

### CSS Classes

#### `.hamburger`
- Toujours visible sur tous les appareils
- Z-index: 2001 (au-dessus du menu)
- Position relative avec padding

#### `.hamburger.active`
- Barres transformées en X
- Couleur blanche

#### `.nav-links`
- Position: fixed, full screen
- Initialement: opacity: 0, visibility: hidden
- Z-index: 2000

#### `.nav-links.active`
- Opacity: 1, visibility: visible
- Items animés avec délais progressifs

## 🎨 Personnalisation

### Changer les couleurs du fond

Dans `styles.css` :

```css
.nav-links {
  background: linear-gradient(
    135deg, 
    var(--marron-fonce) 0%,  /* Couleur début */
    var(--marron) 50%,        /* Couleur milieu */
    var(--orange) 100%        /* Couleur fin */
  );
}
```

### Modifier la durée des animations

```css
.nav-links {
  transition: opacity 0.5s ease, visibility 0.5s ease;
  /* Changez 0.5s par la durée souhaitée */
}

.nav-links li {
  transition: all 0.5s ease;
  /* Durée de l'animation de chaque item */
}
```

### Ajuster les délais d'apparition

```css
.nav-links.active li:nth-child(1) { transition-delay: 0.1s; }
.nav-links.active li:nth-child(2) { transition-delay: 0.15s; }
/* Augmentez ou diminuez les délais */
```

### Changer la taille des liens

```css
.nav-links li a {
  font-size: 2rem; /* Desktop */
}

@media (max-width: 768px) {
  .nav-links li a {
    font-size: 1.5rem; /* Mobile */
  }
}
```

## 📱 Responsive

### Desktop (> 768px)
- Liens: 2rem
- Bouton don: 1.5rem

### Tablette & Mobile (≤ 768px)
- Liens: 1.5rem
- Bouton don: 1.2rem
- Espacement réduit

## 🎯 Bonnes pratiques

### Accessibilité
- Le hamburger est cliquable avec une zone de 30px + 10px padding
- Les liens sont suffisamment espacés (2rem gap)
- Contraste élevé (texte blanc sur fond sombre)

### Performance
- Utilise CSS transforms (accélération GPU)
- Visibility: hidden pour ne pas rendre le menu quand caché
- Overflow-y: auto pour scroller si nécessaire

### UX
- Scroll bloqué quand le menu est ouvert
- Fermeture automatique au clic sur un lien
- Animation fluide et progressive
- Effet hover clair

## 🔧 Dépannage

### Le menu ne s'ouvre pas
- Vérifiez que `script.js` est bien chargé
- Vérifiez la console pour les erreurs JavaScript
- Assurez-vous que la classe `.active` est bien ajoutée

### Les animations ne fonctionnent pas
- Vérifiez que les délais sont bien définis dans le CSS
- Assurez-vous que `transition` est bien présent
- Testez dans un navigateur récent

### Le hamburger n'est pas visible
- Vérifiez `display: flex` sur `.hamburger`
- Vérifiez le z-index (2001)
- Assurez-vous que les couleurs contrastent avec le fond

## 📊 Z-index Hierarchy

```
2001 - .hamburger (au-dessus du menu)
2000 - .nav-links (menu full screen)
1000 - header (navigation bar)
```

## 💡 Améliorations futures possibles

1. **Animation d'entrée circulaire** : Effet de cercle qui s'agrandit
2. **Blur du contenu** : Flouter le fond quand le menu est ouvert
3. **Sous-menus** : Menus déroulants pour plus d'organisation
4. **Mode sombre** : Variante sombre du menu
5. **Son au clic** : Feedback audio subtil

---

**Créé pour Amis.dgens** 🧡

Menu hamburger moderne et performant pour une navigation optimale sur tous les appareils !

