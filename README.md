# 🧡 Site Web Amis.dgens

Site web moderne et professionnel pour l'association humanitaire étudiante **amis.dgens** - Étudiants en médecine et paramédical à Nancy soutenant l'Orphelinat La Providence au Bénin 🇧🇯.

## 📋 Description

Site web statique (HTML/CSS/JavaScript) conçu pour présenter l'association, ses actions humanitaires, et permettre aux visiteurs de s'engager (dons, bénévolat, partenariats).

## 🎨 Charte graphique

- **Couleurs principales** : Marron (#5D4037, #6D4C41) et Orange (#f75e2a)
- **Couleur secondaire** : Beige clair (#F5F1E8) et Blanc cassé (#FAF8F3)
- **Police** : Poppins (Google Fonts)
- **Style** : Moderne, chaleureux, humanitaire
- **Logo** : logo.jpeg (déjà intégré)

## 📁 Structure du site

```
maquetteassos/
│
├── index.html           # Page d'accueil
├── a-propos.html        # Page À propos (copie contenu accueil)
├── l-association.html   # Page L'association (histoire, missions, bureaux)
├── actualites.html      # Page Actualités (14 articles d'événements)
├── nos-actions.html     # Page Nos actions (Bénin, Nancy, témoignages)
├── nos-projets.html     # Page Nos projets (12 ans de projets 2008-2019)
├── orphelinat.html      # Page L'Orphelinat (La Providence, réalisations, santé)
├── nous-soutenir.html   # Page Nous soutenir (dons, bénévolat, partenariats)
├── contact.html         # Page Contact (formulaire, coordonnées)
├── styles.css           # Feuille de style principale
├── script.js            # JavaScript pour animations et interactions
├── logo.jpeg            # Logo de l'association
├── images/              # Dossier pour les images (logos partenaires, etc.)
│   └── README.md        # Instructions pour les images
└── README.md            # Ce fichier
```

## 🚀 Utilisation

### Démarrage rapide

1. **Ouvrir le site** : Double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur

2. **Héberger en ligne** : Uploadez tous les fichiers sur votre hébergeur web (OVH, o2switch, GitHub Pages, Netlify, etc.)

### Personnalisation du contenu

#### 📝 Modifier les textes

Les textes sont directement dans les fichiers HTML. Cherchez les sections marquées `[Contenu à venir]` ou `[À compléter]` et remplacez-les par votre contenu.

**Exemple dans `a-propos.html` :**
```html
<p>[Ici sera placée l'histoire complète de l'association...]</p>
```
Remplacez par votre texte réel.

#### 🖼️ Changer les images

Les images de fond utilisent actuellement des URL Unsplash en exemple. Pour les remplacer :

1. Ajoutez vos images dans un dossier `images/`
2. Dans le fichier HTML concerné, cherchez `background:` ou `url('...')`
3. Remplacez l'URL par le chemin de votre image : `url('images/votre-image.jpg')`

**Exemple dans `index.html` :**
```css
background: linear-gradient(...), url('images/hero-benin.jpg') center/cover;
```

#### 🏢 Ajouter les logos des partenaires

1. Placez les logos de vos partenaires dans le dossier `images/` avec les noms suivants :
   - `alice-delice.png`
   - `mgel.png`
   - `helloasso.png`
   - `cultura.png`
   - `lasermaxx.png`

2. **Format recommandé** : PNG avec fond transparent (300-500px de largeur)

3. Les logos s'afficheront automatiquement sur la page d'accueil dans la section "Nos partenaires"

#### 🎨 Modifier les couleurs

Toutes les couleurs sont définies dans `styles.css` au début du fichier (variables CSS) :

```css
:root {
  --marron-fonce: #5D4037;
  --orange: #FF6F00;
  /* ... */
}
```

Modifiez ces valeurs pour changer les couleurs sur tout le site.

#### 🔗 Ajouter les liens de réseaux sociaux

Dans chaque page HTML, cherchez :
```html
<a href="#" class="social-icon">📷</a>
```

Remplacez `#` par vos vrais liens :
```html
<a href="https://instagram.com/amisdgens" class="social-icon">📷</a>
```

#### 💳 Configurer les liens de don

Dans `nous-soutenir.html`, remplacez les `href="#"` par vos liens PayPal, Lydia, HelloAsso :
```html
<a href="https://www.paypal.com/votre-lien" class="btn btn-primary">PayPal</a>
```

## ✨ Fonctionnalités

### ✅ Incluses

- ✅ Design responsive (mobile, tablette, ordinateur)
- ✅ Menu hamburger full screen (tous appareils)
- ✅ **Animations au scroll AOS** (flip, fade, zoom avec 157 animations)
- ✅ **Click Spark** - Effet de particules léger au clic ✨
- ✅ Formulaire de contact avec validation
- ✅ Compteurs animés pour les statistiques
- ✅ Navigation fluide avec smooth scroll
- ✅ SEO optimisé (meta tags, structure sémantique)
- ✅ Accessibilité WCAG (contraste, ARIA labels)

### 🎨 Animations AOS

Le site utilise la bibliothèque **AOS (Animate On Scroll)** pour des animations fluides et professionnelles :

**Animations utilisées :**
- `flip-up` / `flip-down` - Retournements dynamiques
- `fade-up` / `fade-down` / `fade-left` / `fade-right` - Fondus directionnels
- `fade-up-left` / `fade-down-right` - Fondus diagonaux
- `zoom-in` / `zoom-in-up` / `zoom-in-down` - Zooms variés

**📘 Guide complet :** Consultez `ANIMATIONS_AOS.md` pour apprendre à :
- Ajouter des animations sur vos éléments
- Personnaliser la durée, le délai et l'easing
- Utiliser les 40+ animations disponibles

### ✨ Click Spark Effect

Un effet subtil de **particules colorées** qui apparaissent à chaque clic :

**Caractéristiques :**
- 6 particules par clic (taille 3-8px)
- Couleurs du site (orange, marron)
- Animation circulaire en 0.8s
- Très léger et non-intrusif

**📘 Guide complet :** Consultez `CLICK_SPARK.md` pour :
- Personnaliser le nombre de particules
- Modifier les couleurs et la vitesse
- Désactiver l'effet si besoin

### 📧 Formulaire de contact

Le formulaire est actuellement en **mode démonstration**. Pour le connecter à un vrai système d'envoi d'emails :

**Options :**

1. **FormSpree** (gratuit, simple) :
   - Créez un compte sur [formspree.io](https://formspree.io)
   - Remplacez `<form id="contact-form">` par `<form action="https://formspree.io/f/VOTRE-ID" method="POST">`

2. **Backend PHP** :
   - Créez un fichier `send-email.php` sur votre serveur
   - Modifiez `script.js` pour envoyer les données à ce fichier

3. **Services comme Netlify Forms, EmailJS, etc.**

## 🎯 À compléter

Pour finaliser le site, il vous reste à :

### Page "À propos"
- [ ] Ajouter l'histoire complète de l'association
- [ ] Rédiger la mission, vision et valeurs
- [ ] Ajouter les photos et descriptions de l'équipe

### Page "Actualités"
- [x] Structure créée avec 14 articles
- [ ] Ajouter des images pour chaque article (optionnel)
- [ ] Mettre à jour les dates et contenus si nécessaire
- [ ] Ajouter de nouveaux articles au fil du temps

### Page "L'association"
- [x] Histoire complète de l'association (1991-2018)
- [x] Missions et partenariats détaillés
- [x] Liste des bureaux par année (2012-2021)

### Page "Nos projets"
- [x] Tous les projets depuis 2008
- [x] Détails des réalisations par année
- [ ] Ajouter des photos des projets (optionnel)

### Page "L'Orphelinat"
- [x] Présentation de La Providence
- [x] Réalisations et infrastructures
- [x] Point santé et rénovations 2019
- [ ] Ajouter les photos des dortoirs et sanitaires rénovés
- [ ] Ajouter des photos des enfants et activités

### Page "Nos actions"
- [ ] Décrire les actions au Bénin en détail
- [ ] Ajouter les chiffres clés réels (dans `data-count`)
- [ ] Inclure les témoignages
- [ ] Décrire les actions à Nancy
- [ ] Ajouter des photos des actions

### Page "Nous soutenir"
- [ ] Compléter l'IBAN et BIC pour virements
- [ ] Ajouter les vrais liens PayPal/Lydia/HelloAsso

### Page "Contact"
- [ ] Vérifier l'adresse email de contact
- [ ] Ajouter les liens réseaux sociaux réels
- [ ] Configurer le formulaire de contact

### Général
- [ ] Remplacer toutes les images d'exemple
- [x] Logo ajouté (logo.jpeg)
- [ ] Créer une page "Mentions légales"
- [ ] Ajouter Google Analytics (optionnel)

## 🎨 Personnalisation avancée

### Ajouter une nouvelle section

```html
<section id="ma-section">
  <div class="section-title scroll-reveal">
    <h2>Titre de ma section</h2>
    <p>Description</p>
  </div>
  
  <div class="scroll-reveal">
    <!-- Votre contenu -->
  </div>
</section>
```

### Ajouter une nouvelle carte

```html
<div class="card scroll-reveal">
  <div class="card-icon">🎯</div>
  <h3>Titre</h3>
  <p>Description</p>
</div>
```

## 🌐 Hébergement

### GitHub Pages (Gratuit)

1. Créez un compte GitHub
2. Créez un nouveau repository
3. Uploadez tous vos fichiers
4. Allez dans Settings > Pages > Activez GitHub Pages
5. Votre site sera disponible à : `https://votre-nom.github.io/nom-repo`

### Netlify (Gratuit, recommandé)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez votre dossier entier
3. Votre site est en ligne en quelques secondes !
4. Vous obtenez un domaine HTTPS gratuit

### Hébergement classique

Uploadez tous les fichiers via FTP sur votre hébergeur web (OVH, o2switch, Hostinger, etc.)

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ iOS Safari, Chrome Mobile, Samsung Internet
- ✅ Responsive : smartphones, tablettes, ordinateurs

## 🆘 Support

Pour toute question sur la personnalisation ou l'utilisation du site, référez-vous aux commentaires dans les fichiers CSS et JavaScript qui expliquent chaque section.

## 📄 Licence

Site créé pour l'association **amis.dgens**. Tous droits réservés.

---

**Bonne chance pour votre belle aventure humanitaire ! 🧡🇧🇯**

