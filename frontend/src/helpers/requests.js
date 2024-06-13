export const getData=async(url)=>{
        try{
            let res=await fetch(url);
            let data=await res.json();
            console.log(data);
            return data;
        }catch(err){
            console.log(err)
        }
  
}

export const addData=async(url,data)=>{
  
    try {
        const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });
        const resultado = await respuesta.json();
        console.log(resultado);
        } catch (error) {
        console.log('Hubo un error', error);
        }
}

export const updateData=async(url,data)=>{
    try {
        const respuesta = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });
        const resultado = await respuesta.json();
        console.log(resultado);
        } catch (error) {
        console.log('Hubo un error', error);
        }
}

export const deleteData=async(url)=>{
    try {
    const respuesta = await fetch(url, {
        method: 'DELETE',
    });
    
    const resultado = await respuesta.json();
    console.log(resultado);
    } catch (error) {
    console.log('Hubo un error', error);
    }
}

//API desplegado en: https://devices-market-production.up.railway.app/api/v1/
//  getData(url); //GET
  //addData(url,data); //POST
  //updateData(URL,DATA); ///PUT
  //deleteData(URL) //DELETE