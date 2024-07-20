// generateImageImports.js
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/assets/images');
const outputPath = path.join(__dirname, 'src/generated/imageImports.ts');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const imports = files
    .filter(file => /\.(png|jpe?g|svg)$/.test(file)) // Adjust file extensions as needed
    .map((file, index) => `import img${index} from './assets/images/${file}';`)
    .join('\n');

  const exports = files
    .filter(file => /\.(png|jpe?g|svg)$/.test(file))
    .map((file, index) => `{ source: img${index}, name: '${file}' }`)
    .join(',\n');

  const content = `${imports}

export const images = [
  ${exports}
];
`;

  fs.writeFile(outputPath, content, err => {
    if (err) {
      return console.log('Unable to write file: ' + err);
    }
    console.log('Image imports generated successfully!');
  });
});
