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
    <ImageGallery
      :images="preview"
    />
  </div>
</template>

<script setup>
import ImageGallery from './ImageGallery.vue';

const thumbnail = '/resume/images/html5css3/logo.png'
const preview = [
  '/resume/images/html5css3/top.png',
  '/resume/images/html5css3/quiz_list.png',
  '/resume/images/html5css3/quiz.png',
  '/resume/images/html5css3/quiz_answer.png',
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
</style>