import { defineConfig } from 'astro/config';
import uno from 'astro-uno'
// import {  } from 'unocss'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'

// https://astro.build/config
export default defineConfig({
  integrations: [
    uno({
      presets: [presetWind(), presetIcons({
        prefix: 'i-',
        extraProperties: {
          display: 'inline-block'
        }
      })],
      shortcuts: [
        {
          'resume-content': 'w-1024px min-h-1440px',
        },
      ],
      transformers: [
        transformerDirectives()
      ]
    })
  ]
});
