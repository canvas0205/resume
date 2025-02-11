<template>
  <div style="margin-top: 20px;">
    <div class="thumbnail-container">
      <img
        :src="thumbnail"
        class="thumbnail"
        alt="Thumbnail"
      />
      <div style="flex-direction: row;">
        <div>独検（ドイツ語技能検定試験）対策を目的とした、ドイツ語単語の学習アプリです。</div>
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

const thumbnail = new URL('/images/bunny/logo.png', import.meta.url).href
const preview = [
  new URL('/images/bunny/top.png', import.meta.url).href,
  new URL('/images/bunny/quiz_card.png', import.meta.url).href,
  new URL('/images/bunny/quiz_choice.png', import.meta.url).href,
  new URL('/images/bunny/ranking.png', import.meta.url).href,
  new URL('/images/bunny/record.png', import.meta.url).href,
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