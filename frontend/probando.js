const getData=async(url)=>{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    console.log(typeof data);
}
const url='http://localhost:3000/api/v1/brands';
getData(url);