import { API_ROUTES, http } from '@/api'
import type { MeditationCard } from '@/interfaces/MeditationCard.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface MeditationsResponseModel {
  data: { meditations: MeditationCard[] }
  success: string
}

export const useMeditationStore = defineStore('meditations', () => {
  const meditationList = ref<MeditationCard[]>([])

  async function fetchMeditationCard() {
    const { data } = await http.get<MeditationsResponseModel>(API_ROUTES.meditations)
    meditationList.value = data.data.meditations
  }

  return { meditationList, fetchMeditationCard }
})
