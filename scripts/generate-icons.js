#!/usr/bin/env node

/**
 * Generate PWA icons from logo.png
 * Requires: npm install sharp
 */

const fs = require('fs');
const path = require('path');

// Icon sizes needed for PWA
const sizes = [72, 96, 128, 144, 150, 152, 192, 310, 384, 512];
const inputPng = path.join(__dirname, '../public/logo.png');
const outputDir = path.join(__dirname, '../public/icons');

async function generateIcons() {
  try {
    // Check if sharp is installed
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
    
    // Get logo dimensions
    const logoMetadata = await sharp(logoBuffer).metadata();
    console.log(`Logo dimensions: ${logoMetadata.width}x${logoMetadata.height}`);

    for (const size of sizes) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      
      // Calculate scaling to fill the icon (not fit)
      // Scale the logo to be 80% of the target size
      const scaleFactor = (size * 0.85) / Math.max(logoMetadata.width, logoMetadata.height);
      const scaledWidth = Math.round(logoMetadata.width * scaleFactor);
      const scaledHeight = Math.round(logoMetadata.height * scaleFactor);
      
      await sharp(logoBuffer)
        .resize(scaledWidth, scaledHeight, { fit: 'cover' })
        .extend({
          top: Math.round((size - scaledHeight) / 2),
          bottom: Math.round((size - scaledHeight) / 2),
          left: Math.round((size - scaledWidth) / 2),
          right: Math.round((size - scaledWidth) / 2),
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png()
        .toFile(outputPath);
      
      console.log(`Generated ${size}x${size} icon (logo scaled to ${scaledWidth}x${scaledHeight})`);
    }

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
