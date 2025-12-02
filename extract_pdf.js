import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const files = [
    'docs/1조_프로젝트_결과_발표자료_Pal-ette_CV.pdf',
    'docs/1조_프로젝트_결과_보고서_Pal-ette_CV.pdf'
];

async function extractText() {
    for (const file of files) {
        try {
            const dataBuffer = fs.readFileSync(file);
            const data = await pdf(dataBuffer);
            console.log(`\n--- START OF ${file} ---\n`);
            console.log(data.text);
            console.log(`\n--- END OF ${file} ---\n`);
        } catch (error) {
            console.error(`Error reading ${file}:`, error);
        }
    }
}

extractText();
