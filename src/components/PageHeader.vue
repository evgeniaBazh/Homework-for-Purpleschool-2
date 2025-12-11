<script setup lang="ts">
import ChartMenu from '@/icons/ChartMenu.vue'
import ExiteMenu from '@/icons/ExiteMenu.vue'
import Line from '@/icons/Line.vue'
import Logo from '@/icons/Logo.vue'
import PlayMenu from '@/icons/PlayMenu.vue'
</script>

<template>
  <div class="menu">
    <Logo />
    <div class="menu__list">
      <div class="menu__link">
        <PlayMenu />
        <p>Медитация</p>
      </div>
      <Line />
      <div class="menu__link middle">
        <ChartMenu />
        <p>Статистика</p>
      </div>
      <Line />
      <div class="menu__link">
        <ExiteMenu />
        <p>Выход</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}
.menu__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin-right: 83px;
}
.menu__link {
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
  min-width: 92px;
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.menu__link--active {
  color: #ffffff; /* Или ваш цвет активации */
}
</style>
