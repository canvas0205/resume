<template>
  <div class="gallery">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      class="preview"
      alt="preview"
      @click="openModal(image)"
    />
    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <img :src="selectedImage" class="modal-image" alt="Enlarged image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  images: Array,     // 画像URLとテキストを含む配列
});

// Modal state
const isModalOpen = ref(false);
const selectedImage = ref('');

// Open the modal with the clicked image
const openModal = (image) => {
  selectedImage.value = image;
  isModalOpen.value = true;
};

// Close the modal
const closeModal = () => {
  isModalOpen.value = false;
};

</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: row;
  gap: 10px; /* セクション間の間隔 */
  overflow-x: auto;  /* 横スクロールを有効にする */
  padding-top: 20px;
}

.preview {
  width: 150px;
  height: auto;
  transition: transform 0.2s;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}
</style>