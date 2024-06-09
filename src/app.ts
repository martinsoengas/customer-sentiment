import express from 'express';
import path from 'path';

import { readJsonFile, writeJsonFile } from './utils/json-scripts';

import customers from './data/customers';
import voiceToText from './ai/voice-to-text';
import aiCheck from './ai/ai-check';

const app = express();
const port = 3030;

app.get('/', (_req, res) => {
  res.send('Online');
});

app.get('/execute', async (_req, res) => {
  const filePath = path.join(__dirname, './ai_output/aiResponses.json');

  for (const customer of customers) {
    const customerTextReply = await voiceToText(customer.surveyVoiceReplyURL);

    customer.customerTextReply = customerTextReply;
    let { surveyVoiceReplyURL, ...updatedCustomer } = customer;

    const aiResponse = await aiCheck(updatedCustomer);

    const aiResponses = readJsonFile(filePath);

    aiResponses.push(JSON.parse(aiResponse!.replace(/[```]|json/g, '')));

    writeJsonFile(filePath, aiResponses);

    console.log('Customer processed');
  }

  console.log('All clients have been processed');

  res.send('Done');
});

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});
