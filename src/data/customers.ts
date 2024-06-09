const customers = [
  {
    id: 1,
    name: 'Jorge Benitez',
    homebankingLogInsPerWeek: 3,
    products: ['Cuenta ahorro', 'Tarjeta de Debito', 'Tarjeta de Credito'],
    surveyVoiceReplyURL: './src/audio/customer1reply.mp3',
  },
  {
    id: 2,
    name: 'Javier Gonzalez',
    homebankingLogInsPerWeek: 5,
    products: ['Cuenta Corriente', 'Tarjeta de Debito', 'Seguro Automotor'],
    surveyVoiceReplyURL: './src/audio/customer2reply.mp3',
  },
  {
    id: 3,
    name: 'Marcos Lopez',
    homebankingLogInsPerWeek: 2,
    products: ['Cuenta Ahorro', 'Tarjeta de Credito', 'Seguro de Vida'],
    surveyVoiceReplyURL: './src/audio/customer3reply.mp3',
    surveyResponse: '',
  },
  {
    id: 4,
    name: 'Roberto Perez',
    homebankingLogInsPerWeek: 4,
    products: ['Cuenta Corriente', 'Tarjeta de Debito', 'Prestamo Personal'],
    surveyVoiceReplyURL: './src/audio/customer4reply.mp3',
    customerTextReply: '',
  },
  {
    id: 5,
    name: 'Lucia Fernandez',
    homebankingLogInsPerWeek: 1,
    products: ['Cuenta Ahorro', 'Tarjeta de Credito', 'Seguro de Hogar'],
    surveyVoiceReplyURL: './src/audio/customer5reply.mp3',
    customerTextReply: '',
  },
];

export default customers;
