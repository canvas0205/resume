<template>
  <div style="margin-top: 20px; margin-bottom: 50px;">
    <div class="thumbnail-container">
      <img
        :src="thumbnail"
        class="thumbnail"
        alt="Thumbnail"
      />
      <div style="flex-direction: row;">
        <div>HTML5プロフェッショナル認定試験レベル1対策を目的とした、HTML5/CSS3の学習アプリです。</div>
        <div>現在はサービス終了しており非公開となっています。</div>
      </div>
    </div>
    <div className="preview-container">
      <img
        v-for="(image, index) in preview"
        :key="index"
        :src="image"
        class="preview"
        alt="preview"
        @click="openModal(image)"
      />
    </div>
  </div>
</template>

<script setup>
import ImageGallery from './ImageGallery.vue';

// FIXME: GithubPagesだと画像が読み込まれないので直接URLを指定している
const BASE_URL = 'https://canvas0205.github.io/'
const thumbnail = new URL('/resume/images/html5css3/logo.png', BASE_URL).href;
const preview = [
  new URL('/resume/images/html5css3/top.png', BASE_URL).href,
  new URL('/resume/images/html5css3/quiz_list.png', BASE_URL).href,
  new URL('/resume/images/html5css3/quiz.png', BASE_URL).href,
  new URL('/resume/images/html5css3/quiz_answer.png', BASE_URL).href,
];

</script>

<style>
.text {
  word-wrap: break-word; /* テキストが長くなると折り返される */
  word-break: break-word; /* 単語が長すぎる場合でも折り返し */
}

.thumbnail-container {
  display: flex;
  gap: 20px; /* サムネイルとテキスト間の間隔 */
  align-items: center; /* サムネイルとテキストを垂直中央に揃える */
}

.thumbnail {
  width: 100px;
  height: auto;
  transition: transform 0.2s;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 30px; /* セクション間の間隔 */
  padding-top: 20px;
}

.preview-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;  /* 横スクロールを有効にする */
  padding-bottom: 10px;
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