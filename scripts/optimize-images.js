const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeImage(filePath) {
  const fullPath = path.resolve(__dirname, filePath);
  const tempPath = fullPath + '.tmp.webp';
  
  if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${fullPath}`);
      return;
  }
  
  try {
    const statsBefore = fs.statSync(fullPath);
    console.log(`Optimizing ${filePath}... (Size: ${Math.round(statsBefore.size / 1024)}KB)`);
    
    await sharp(fullPath)
      .webp({ quality: 65, effort: 6 })
      .toFile(tempPath);
      
    fs.renameSync(tempPath, fullPath);
    
    const statsAfter = fs.statSync(fullPath);
    console.log(`Done! New size: ${Math.round(statsAfter.size / 1024)}KB`);
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
  }
}

async function run() {
  await optimizeImage('public/images-medelise/md-quality/md-img-water-splash.webp');
  await optimizeImage('public/images-medelise/md-quality/md-img-quality-large.webp');
}

run();
