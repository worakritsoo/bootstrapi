import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript
let text = `กลุ่มโรคที่ควรฉีดวัคซีน โควิด 19   
โรคทางเดินหายใจเรื้อรัง โรคหัวใจและหลอดเลือด 
โรคไตวายเรื้อรัง โรคหลอดเลือดสมอง
 โรคอ้วน โรคมะเร็ง โรคเบาหวานค่ะ`
const results = googleTTS.getAllAudioUrls(text, {
    lang: 'th',
    slow: false,
    host: 'https://translate.google.com',
    splitPunct: ',.?',
});
console.log(results);