#/.dockerfile

#используем последнюю версию Node.js
FROM node:latest

# создаём папку в текущем расположении
RUN mkdir /app

# копируем все файлы из репы в созданную папку
COPY . /app

# указываем созданную папку как рабочую
WORKDIR /app

# устанавливаем зависимости
RUN npm install

#
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# expose port 8080 on the container
# EXPOSE 8080

# билд приложения
CMD ["npm", "run", "build", "&&", "cp out static"]
