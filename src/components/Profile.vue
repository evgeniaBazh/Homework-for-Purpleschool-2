<script setup lang="ts">
import StatusBtns from './StatusBtns.vue'
</script>

<template>
  <div class="profile">
    <div class="profile__avatar">
      <img src="../img/avatar.png" alt="Фото профиля" />
    </div>
    <div class="greeting-text">
      <h1>Добро пожаловать, Наталья!</h1>
      <p>Как вы сегодня себя чувствуете?</p>
    </div>
    <StatusBtns />
  </div>
</template>

<style scoped>
.profile__avatar {
  width: 129px;
  height: 129px;
  background-size: cover; /* Пропорции изображения сохранены */
  background-repeat: no-repeat; /* Исключаем повторение */
  background-position: center; /* Центрируем изображение */
  margin-bottom: 30px;
}
.profile__avatar img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.greeting-text {
  margin-bottom: 39px;
}
.greeting-text h1 {
  font-size: 30px;
  font-weight: 500;
  color: var(--color-white);
}

.greeting-text p {
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: var(--color-text);
}
</style>
