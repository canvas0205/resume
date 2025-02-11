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
import ImageGallery from './ImageGallery.vue'; // ImageGallery コンポーネントをインポート

//const PATH = process.env.GITHUB_PAGES === 'true' ? '/resume' : '';
console.log(import.meta.url)
const thumbnail = new URL('/resume/images/html5css3/logo.png', "https://canvas0205.github.io").href
const preview = [
  new URL('/resume/images/html5css3/top.png', import.meta.url).href,
  new URL('/images/html5css3/quiz_list.png', import.meta.url).href,
  new URL('/images/html5css3/quiz.png', import.meta.url).href,
  new URL('/images/html5css3/quiz_answer.png', import.meta.url).href,
  new URL('/images/html5css3/quiz_answer.png', import.meta.url).href,
  new URL('/images/html5css3/quiz_answer.png', import.meta.url).href,
  //new URL('/images/og.png', import.meta.url).href,
]; // 画像URLリスト

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