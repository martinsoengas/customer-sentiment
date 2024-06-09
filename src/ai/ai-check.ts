import OpenAI from 'openai';

export default async function aiCheck(customer: any) {
  const openai = new OpenAI();

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Soy un banco y estoy haciendo una encuesta telefónica para tener conocimiento del sentimiento de nuestros clientes. Dado el siguiente cliente (en un json), dime que posibilidades (baja, media o alta) hay de que el cliente decida optar por otro banco, y que podría hacer el banco para conservar el cliente. Agrega tu respuesta a este mismo json agregando el key "cancelServiceProbability" y "customerRetentionAction". Devuelveme solo un JSON. ${JSON.stringify(
          customer
        )}`,
      },
    ],
    model: 'gpt-4o',
  });

  return completion.choices[0].message.content;
}
