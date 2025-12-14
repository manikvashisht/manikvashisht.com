import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(null, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    const text = pdfParser.getRawTextContent();
    fs.writeFileSync("./resume_output.txt", text);
    console.log("PDF extraction complete. Saved to resume_output.txt");
});

pdfParser.loadPDF("./Manik_Vashisht_Resume_CAH1.pdf");
