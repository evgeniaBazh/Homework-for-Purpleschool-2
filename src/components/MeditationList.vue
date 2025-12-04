<script setup lang="ts">
import { useMeditationStore } from '@/stores/listMeditations.store'
import Play from '../icons/Play.vue'
import { onMounted } from 'vue'

const store = useMeditationStore()

onMounted(async () => {
  store.fetchMeditationCard()
})
</script>

<template>
  <div class="cards">
    <div class="card" v-for="card in store.meditationList" :key="card.id">
      <p class="header">{{ card.title }}</p>
      <p class="description">{{ card.description }}</p>
      <div class="wrap-btn">
        <button class="btn">Начать <Play /></button>
        <p class="time">{{ card.duration_min }} мин</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
}
.card {
  width: 339px;
  height: 170px;
  background-color: var(--color-light);
  border-radius: 20px;
  padding: 22px 33px 23px 30px;
}
.header {
  font-size: 25px;
  font-weight: 500;
}
.description {
  font-size: 15px;
  font-weight: 500;
}
.time {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-bg);
  font-family: 'Alegreya Sans', sans-serif;
}
.btn {
  width: 111px;
  height: 39px;
  background-color: var(--color-bg);
  outline: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-white);
  font-family: 'Alegreya Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn:hover {
  background-color: var(--color-btn-start-hover);
}
.wrap-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}
</style>
