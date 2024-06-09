import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const openai = new OpenAI();

const speechFile = path.resolve('./speech.mp3');

const voice: ('alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer')[] = [
  'alloy',
  'echo',
  'fable',
  'onyx',
  'nova',
  'shimmer',
];

export default async function textToAudio() {
  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: voice[4],
    input:
      'El banco es una mierda, me iré en cuanto termine de pagar la tarjeta de crédito',
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
