const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const files = [
    'docs/결과보고서_Pal-ette팀(AI와 대화를 통한 매일 감정 기록 노트).pptx.pdf'
];

async function extractText() {
    for (const file of files) {
        try {
            const dataBuffer = fs.readFileSync(file);
            console.log(`Processing ${file}...`);

            // Convert Buffer to Uint8Array
            const uint8Array = new Uint8Array(dataBuffer);

            const pdf = new PDFParse(uint8Array);
            const text = await pdf.getText();

            console.log(`\n--- START OF ${file} ---\n`);
            console.log(text);
            console.log(`\n--- END OF ${file} ---\n`);

        } catch (error) {
            console.error(`Error reading ${file}:`, error);
        }
    }
}

extractText();
