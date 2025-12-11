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
      <RouterLink v-slot="{ isActive, navigate }" :to="`/main`" style="text-decoration: none">
        <div @click="navigate" :class="['menu__link', { 'menu__link--active': isActive }]">
          <PlayMenu :color="isActive ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.5)'" />
          <p>Медитация</p>
        </div>
      </RouterLink>
      <Line />
      <RouterLink v-slot="{ isActive, navigate }" :to="`/statistics`" style="text-decoration: none">
        <div @click="navigate" :class="['menu__link middle', { 'menu__link--active': isActive }]">
          <ChartMenu :color="isActive ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.5)'" />
          <p>Статистика</p>
        </div>
      </RouterLink>
      <Line />
      <RouterLink v-slot="{ isActive, navigate }" :to="`/`" style="text-decoration: none">
        <div @click="navigate" :class="['menu__link', { 'menu__link--active': isActive }]">
          <ExiteMenu :color="isActive ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.5)'" />
          <p>Выход</p>
        </div>
      </RouterLink>
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
  text-decoration: none;
}
.menu__link--active {
  color: #ffffff; /* Или ваш цвет активации */
}
</style>
