import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'apps/web/src');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // 1. Replace all font-family declarations to Montserrat
    content = content.replace(/font-family:\s*['"]?[A-Za-z\s]+['"]?\s*,\s*sans-serif;/g, "font-family: 'Montserrat', sans-serif;");

    // 2. We skip line-height adjustments globally because some elements rely on exact PX counts 
    //    or flex box centering, and blind automated line-height: 1.5; can break layout vertically.
    //    We only target specific font-size minimums.

    // 3. Make sure font-size is at least 14px on mobile breakpoints.
    //    This is tricky with regex on CSS-in-JS without a parser, we will look for `font-size: 10px`, `11px`, `12px`, `13px` 
    //    and carefully bump them ONLY inside `<style jsx>` blocks.

    // We will extract style blocks, modify them, and replace them back
    const styleRegex = /<style jsx[^>]*>\{`([\s\S]*?)`\}<\/style>/g;

    content = content.replace(styleRegex, (match, cssContent) => {
        let updatedCss = cssContent;

        // Bump font-size: 10px, 11px, 12px, 13px -> 14px 
        // Note: we leave 12px for specific labels alone if it's already 12px because user said "Min: 12px" for Labels/Small, 
        // but let's bump 10px/11px to 12px at least. Let's bump 13px to 14px.
        updatedCss = updatedCss.replace(/font-size:\s*1[0-1]px;/g, 'font-size: 12px;');
        updatedCss = updatedCss.replace(/font-size:\s*13px;/g, 'font-size: 14px;');

        // Adjust very tight line-heights globally for readability but keep it safe
        // If line-height is pixel based and small, bump it to 1.5 relative for text
        // Actually, replacing all purely numeric line heights < 1.4 to 1.5
        updatedCss = updatedCss.replace(/line-height:\s*1\.[0-3];/g, 'line-height: 1.5;');

        return match.replace(cssContent, updatedCss);
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        return true;
    }
    return false;
}

function traverseDir(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // skip unused or build dirs
            if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('_componente_neutilizate')) {
                traverseDir(fullPath, callback);
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            callback(fullPath);
        }
    });
}

function run() {
    console.log('Starting typography update script...');
    let updatedCount = 0;

    traverseDir(SRC_DIR, (filePath) => {
        const updated = processFile(filePath);
        if (updated) {
            console.log(`Updated: ${filePath.replace(process.cwd(), '')}`);
            updatedCount++;
        }
    });

    console.log(`Finished! Updated ${updatedCount} files.`);
}

run();
