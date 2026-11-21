# My Life Pilot

Application personnelle de planning, quotas et bilans (hors-ligne, installable PC / téléphone).
Version 0.3.0 — les données restent sur chaque appareil (IndexedDB), rien n'est envoyé sur Internet.

## Publier sur GitHub Pages

1. Sur GitHub : **New repository** → nom `my-life-pilot` → **Public** (GitHub Pages gratuit l'exige ; le dépôt ne contient que le code, jamais tes données). Dépôt privé + Pages : seulement avec une offre payante.
2. Envoyer les fichiers de ce dossier à la racine du dépôt :
   - GitHub Desktop : *Add local repository* → ce dossier → *Commit* → *Push origin*.
   - Ou en ligne de commande, dans ce dossier :
     ```
     git init
     git add .
     git commit -m "My Life Pilot V0.3"
     git branch -M main
     git remote add origin https://github.com/TON-COMPTE/my-life-pilot.git
     git push -u origin main
     ```
3. Dépôt → **Settings → Pages** → Source : *Deploy from a branch* → branche `main`, dossier `/ (root)` → Save.
4. Après ~1 minute l'adresse est : `https://TON-COMPTE.github.io/my-life-pilot/`

## Installer

- **PC (Chrome / Edge)** : ouvrir l'adresse → icône « Installer » dans la barre d'adresse (ou menu ⋮ → *Installer My Life Pilot*).
- **Android (Chrome)** : ouvrir l'adresse → menu ⋮ → *Installer l'application* / *Ajouter à l'écran d'accueil*.
- **Tablette** : même chose que Android (ou iPad : Partager → *Sur l'écran d'accueil*).

## Mettre à jour plus tard

Remplacer `index.html` (et `sw.js` si livré) dans le dépôt, commit + push. L'application se met à jour
toute seule à la prochaine ouverture avec Internet (fermer / rouvrir une fois si l'ancienne version s'affiche).

## Données

- PC et téléphone ont chacun leurs données (pas de synchro en V0.3).
- Sauvegarde / transfert : **Réglages → Exporter (JSON)** sur un appareil, puis **Importer** sur l'autre.
- Une sauvegarde automatique quotidienne (7 derniers jours) est gardée dans le navigateur.

## Fichiers

`index.html` (application) · `manifest.webmanifest` · `sw.js` (mode hors-ligne) · `icon-192.png` · `icon-512.png` · `.nojekyll`
