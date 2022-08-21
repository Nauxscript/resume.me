import { defineConfig } from 'astro/config';
import uno from 'astro-uno'
// import {  } from 'unocss'
import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'

// https://astro.build/config
export default defineConfig({
  integrations: [
    uno({
      presets: [presetWind()],
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
