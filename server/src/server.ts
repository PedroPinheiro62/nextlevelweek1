import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// Rota: Endereço completo da requisição
// Recusro: Qual entidade estamos acessando do sistema

// GET: Buscar informação Back-end
// POST: Criar informação Back-end
// PUT: Atualizar uma informação no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID = 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select('*')