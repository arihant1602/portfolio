const fs = require('fs');
const path = require('path');

const files = [
  'src/sections/Hero.tsx',
  'src/sections/About.tsx',
  'src/sections/Projects.tsx',
  'src/sections/Skills.tsx'
];

files.forEach(file => {
  const p = path.join(__dirname, file);
  let content = fs.readFileSync(p, 'utf-8');
  
  // Ensure Suspense is imported
  if (!content.includes('Suspense')) {
    content = content.replace(/import React(, \{[^}]+\})? from 'react';/, (match, p1) => {
      if (p1) {
        return `import React, {${p1.replace('{', '')} Suspense } from 'react';`;
      }
      return `import React, { Suspense } from 'react';`;
    });
  }

  // Wrap inside Canvas
  if (!content.includes('<Suspense fallback={null}>')) {
    content = content.replace(/(<Canvas[^>]*>)([\s\S]*?)(<\/Canvas>)/g, (match, open, inner, close) => {
      // If ambient light is there, keep it outside or inside, doesn't matter, but let's just wrap everything inside Canvas
      return `${open}\n          <Suspense fallback={null}>${inner}</Suspense>\n        ${close}`;
    });
  }
  
  fs.writeFileSync(p, content);
});
console.log('Suspense added.');
