import fastify from "fastify";

const server = fastify({logger: true});

server.get('/teams', async(Request, response) => { 
  response.type('application/json').code(200);

  return [
    {id: 1, name: 'Ferrari'}
  ];
});

server.listen({port: 4040}, () => {
  console.log('Server init');
});