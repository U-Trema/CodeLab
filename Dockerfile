# Utiliser une image Node.js version 20.10.0
FROM node:20.10.0

# Créer le répertoire de travail de l'application
WORKDIR /app

# Copier le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
