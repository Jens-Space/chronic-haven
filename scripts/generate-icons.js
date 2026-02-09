#!/usr/bin/env node

/**
 * Generate PWA icons from SVG
 * Requires: npm install sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputSvg = path.join(__dirname, '../public/icons/icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

async function generateIcons() {
  try {
    // Check if sharp is installed
    try {
      require.resolve('sharp');
    } catch (e) {
      console.log('Installing sharp...');
      require('child_process').execSync('npm install sharp --save-dev', {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit'
      });
    }

    const sharp = require('sharp');
    const svgBuffer = fs.readFileSync(inputSvg);

    for (const size of sizes) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      console.log(`Generated ${size}x${size} icon`);
    }

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    // Fallback: create placeholder icons using base64
    console.log('Creating placeholder icons...');
    createPlaceholderIcons();
  }
}

function createPlaceholderIcons() {
  const { execSync } = require('child_process');
  
  for (const size of sizes) {
    try {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      // Use ImageMagick if available
      execSync(`convert -size ${size}x${size} xc:'#8b5cf6' -gravity center -fill white -pointsize ${size/3} -annotate 0 'CH' ${outputPath}`, {
        stdio: 'ignore'
      });
      console.log(`Generated ${size}x${size} placeholder icon`);
    } catch (e) {
      console.log(`Could not generate ${size}x${size} icon. Please install ImageMagick or use a different method.`);
    }
  }
}

generateIcons();
