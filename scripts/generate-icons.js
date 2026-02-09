#!/usr/bin/env node

/**
 * Generate PWA icons from logo.png
 * Uses fill mode to make logo fill the entire icon
 */

const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 150, 152, 192, 310, 384, 512];
const inputPng = path.join(__dirname, '../public/logo.png');
const outputDir = path.join(__dirname, '../public/icons');

async function generateIcons() {
  try {
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.log('Installing sharp...');
      require('child_process').execSync('npm install sharp --save-dev', {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit'
      });
      sharp = require('sharp');
    }

    const logoBuffer = fs.readFileSync(inputPng);
    const logoMetadata = await sharp(logoBuffer).metadata();
    console.log(`Logo dimensions: ${logoMetadata.width}x${logoMetadata.height}`);

    for (const size of sizes) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      
      await sharp(logoBuffer)
        .resize(size, size, { fit: 'fill' })  // Fill the entire icon
        .png()
        .toFile(outputPath);
      
      console.log(`Generated ${size}x${size} icon`);
    }

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
