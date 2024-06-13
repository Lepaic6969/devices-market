//Este archivo es el punto de entrada a mi aplicación
import app from './app';

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`El servidor está corriendo en: http://localhost:${PORT}`);
});
