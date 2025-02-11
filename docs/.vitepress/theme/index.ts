import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AndroidAppHtml5Css3 from '../components/AndroidAppHtml5Css3.vue'
import AndroidAppBunny from '../components/AndroidAppBunny.vue'
import ImageGallery from '../components/ImageGallery.vue'
import '../../../node_modules/devicon/devicon.min.css'
import './index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ImageGallery', ImageGallery)
    app.component('AndroidAppHtml5Css3', AndroidAppHtml5Css3)
    app.component('AndroidAppBunny', AndroidAppBunny)
  }
} satisfies Theme
