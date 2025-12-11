<script setup lang="ts">
import Calm from '@/icons/Calm.vue'
import Relax from '@/icons/Relax.vue'
import Focus from '@/icons/Focus.vue'
import Anxious from '@/icons/Anxious.vue'
</script>

<template>
  <div class="btns">
    <div class="btn">
      <button><Calm /></button>
      <p>Спокойно</p>
    </div>
    <div class="btn">
      <button><Relax /></button>
      <p>Расслабленно</p>
    </div>
    <div class="btn">
      <button><Focus /></button>
      <p>Фокусировано</p>
    </div>
    <div class="btn">
      <button><Anxious /></button>
      <p>Тревожно</p>
    </div>
  </div>
</template>

<style scoped>
.btns {
  display: flex;
  justify-content: space-between;
  gap: 22px;
}
.btns .btn:last-child button {
  padding-top: 10px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn button {
  width: 62px;
  height: 65px;
  outline: none;
  gap: 5px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
}
.btn button:hover {
  background-color: var(--color-btn-nav-hover);
}
.btn p {
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: var(--color-white);
}
</style>
