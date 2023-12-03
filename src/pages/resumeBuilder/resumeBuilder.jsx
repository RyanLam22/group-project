import OpenAI from 'openai'
import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.js`;

function PdfReader() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfText, setPdfText] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [file, setFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader();
      
      reader.onloadend = async () => {
        try {
          const pdfData = new Uint8Array(reader.result);
          const text = await extractTextFromPdf(pdfData);
          setPdfText(text);
        } catch (error) {
          console.error('Error extracting text:', error.message);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };

  const extractTextFromPdf = async (data) => {
    return new Promise((resolve, reject) => {
      try {
        const text = [];
        const loadingTask = pdfjs.getDocument({ data });
        loadingTask.promise
          .then((pdf) => {
            const promises = [];

            for (let i = 1; i <= pdf.numPages; i++) {
              promises.push(pdf.getPage(i));
            }

            Promise.all(promises)
              .then((pages) => {
                const textPromises = pages.map((page) => {
                  return page.getTextContent().then((content) => content.items.map((item) => item.str).join(' '));
                });

                return Promise.all(textPromises);
              })
              .then((pageTexts) => {
                resolve(pageTexts.join(' '));
              })
              .catch((error) => {
                reject(error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleSubmit = async() => {
    
      const data = {
        pdfText: pdfText,
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
      };
      
      try {
        
          const generateCoverLetter = async (resumeText) => {
            try {
              const APIKEY = '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';
              const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci/completions',
                {
                  prompt: `Write a cover letter based on the following resume:\n${resumeText}`,
                  max_tokens: 200, // Adjust as needed
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${APIKEY}`,
                    
                  },
                }
              );

        
              setCoverLetter(response.data.choices[0]?.text || 'No response from API');
            } catch (error) {
              console.error('Error generating cover letter:', error);
              setCoverLetter('Error generating cover letter');
            }
          };
        
          // Example usage
          const resumeText = 'Your resume text goes here...';
          generateCoverLetter(resumeText);
        }
       catch (error) {
        console.error('Error:', error.message);
      }

  }
  
  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <input type="file" accept=".pdf" onChange={onFileChange} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <label htmlFor="input1">Input 1:</label>
          <input
            type="text"
            className="form-control"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="input2">Input 2:</label>
          <input
            type="text"
            className="form-control"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <label htmlFor="input3">Input 3:</label>
          <input
            type="text"
            className="form-control"
            id="input3"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="input4">Input 4:</label>
          <input
            type="text"
            className="form-control"
            id="input4"
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Extracted Text:</h2>
          <pre>{pdfText}</pre>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div>
      <h1>Generated Cover Letter</h1>
      <div>
        <h1>Generated Cover Letter</h1>
        {coverLetter && (
          <iframe
            srcDoc={`<pre>${coverLetter}</pre>`}
            title="Generated Cover Letter"
            width="100%"
            height="400px"
          />
        )}
      </div>
    </div>
    </div>
  );
}

export default PdfReader;
