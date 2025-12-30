import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
});

const aplicationType = 'application/json';

const teams = [
  { id: 1, name: 'Ferrari', base: 'Maranello, Italy', image: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg' },
  { id: 2, name: 'Mercedes', base: 'Brackley, United Kingdom', image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { id: 3, name: 'Red Bull Racing', base: 'Milton Keynes, United Kingdom', image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Red_Bull_Racing_logo.svg' },
  { id: 4, name: 'McLaren', base: 'Woking, United Kingdom', image: 'https://upload.wikimedia.org/wikipedia/en/6/6c/McLaren_Racing_logo.svg' },
  { id: 5, name: 'Aston Martin', base: 'Silverstone, United Kingdom', image: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Aston_Martin_Aramco_Cognizant_F1_Team_logo.svg' },
  { id: 6, name: 'Alpine', base: 'Enstone, United Kingdom', image: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Alpine_F1_Team_Logo.svg' },
  { id: 7, name: 'Williams', base: 'Grove, United Kingdom', image: 'https://upload.wikimedia.org/wikipedia/en/9/92/Williams_Grand_Prix_Engineering_logo.svg' },
  { id: 8, name: 'Haas', base: 'Kannapolis, United States', image: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Haas_F1_Team_logo.svg' },
  { id: 9, name: 'Sauber', base: 'Hinwil, Switzerland', image: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Stake_F1_Team_Kick_Sauber_logo.svg' },
  { id: 10, name: 'RB', base: 'Faenza, Italy', image: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Visa_Cash_App_RB_F1_Team_logo.svg' }
];
  
const drivers = [
  { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Max_Verstappen_2017_Malaysia_2.jpg' },
  { id: 2, name: 'Sergio Pérez', team: 'Red Bull Racing', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Sergio_Perez_2019.jpg' },
  { id: 3, name: 'Lewis Hamilton', team: 'Mercedes', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Lewis_Hamilton_2016_Malaysia_2.jpg' },
  { id: 4, name: 'George Russell', team: 'Mercedes', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/George_Russell_2022.jpg' },
  { id: 5, name: 'Charles Leclerc', team: 'Ferrari', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Charles_Leclerc_2019_Singapore.jpg' },
  { id: 6, name: 'Carlos Sainz', team: 'Ferrari', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Carlos_Sainz_Jr_2022.jpg' },
  { id: 7, name: 'Lando Norris', team: 'McLaren', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lando_Norris_2022.jpg' },
  { id: 8, name: 'Oscar Piastri', team: 'McLaren', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Oscar_Piastri_2023.jpg' },
  { id: 9, name: 'Fernando Alonso', team: 'Aston Martin', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Fernando_Alonso_2016.jpg' },
  { id: 10, name: 'Lance Stroll', team: 'Aston Martin', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Lance_Stroll_2017.jpg' },
  { id: 11, name: 'Esteban Ocon', team: 'Alpine', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Esteban_Ocon_2022.jpg' },
  { id: 12, name: 'Pierre Gasly', team: 'Alpine', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pierre_Gasly_2022.jpg' },
  { id: 13, name: 'Alexander Albon', team: 'Williams', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Alexander_Albon_2022.jpg' },
  { id: 14, name: 'Logan Sargeant', team: 'Williams', image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Logan_Sargeant_2023.jpg' },
  { id: 15, name: 'Kevin Magnussen', team: 'Haas', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Kevin_Magnussen_2022.jpg' },
  { id: 16, name: 'Nico Hülkenberg', team: 'Haas', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Nico_Hulkenberg_2019.jpg' },
  { id: 17, name: 'Valtteri Bottas', team: 'Sauber', image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Valtteri_Bottas_2019.jpg' },
  { id: 18, name: 'Zhou Guanyu', team: 'Sauber', image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Zhou_Guanyu_2022.jpg' },
  { id: 19, name: 'Yuki Tsunoda', team: 'RB', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Yuki_Tsunoda_2022.jpg' },
  { id: 20, name: 'Daniel Ricciardo', team: 'RB', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Daniel_Ricciardo_2018.jpg' }
]; 

server.get('/teams', async(request, response) => { 
  response.type(aplicationType).code(200);

  return [teams];
});

interface DriverPrams{
    id: string;
}

server.get<{Params: DriverPrams}>('/drivers/:id', async(request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id)

    if(!driver){
      response.type(aplicationType).code(404);
      return {message: "Driver not found"};
    }else{
        response.type(aplicationType).code(200);
        return {driver};
    }
});

server.get('/drivers', async(request, response) => {
  response.type(aplicationType).code(200);
  return [drivers];
});

server.listen({port: 4040}, () => {
  console.log('Server init');
});