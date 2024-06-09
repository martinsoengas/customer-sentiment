import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
// import path from 'path';

export default async function voiceToText(voiceResponseURL: string) {
  const form = new FormData();
  form.append('audio_file', fs.createReadStream(voiceResponseURL));

  const url = 'http://0.0.0.0:9000/asr?output=json';

  try {
    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    return response.data.text;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}
