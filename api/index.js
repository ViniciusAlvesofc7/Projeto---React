import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'


const app = express();

app.use(cors())
app.use(express.json()) // Vou usar JSON


mongoose.connect('mongodb+srv://billgod2003:D0ASrtkwLkee7I1e@devclub.e5lrhjo.mongodb.net/Usuarios?appName=DevClub').then(() => {
    console.log('Conectado ao banco de dados')
}).catch((err) => {
    console.log(err)
})


const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number, required: true }
}, { timestamps: true })

const Usuario = mongoose.model('Usuario', usuarioSchema)

app.get('/usuarios', async (req, res) => {

    const usuariosDoBanco = await Usuario.find()

    res.json(usuariosDoBanco)
})

app.post('/usuarios', async (req, res) => {

    const usuarioCriado = await Usuario.create(req.body)

    res.json(usuarioCriado)
})

app.delete('/usuarios/:id', async (req, res) => {
  const id = req.params.id;

  const usuarioDeletado = await Usuario.findByIdAndDelete(id);

  res.json(usuarioDeletado);
});

app.listen(3003, function () {
    console.log('Servidor rodando')
})