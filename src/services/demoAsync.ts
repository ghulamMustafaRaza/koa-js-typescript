// Note: To test async function on typescript
export default  {
    getAge(){
        return new Promise((resolve, reject)=>{
            return resolve(1);
        })
    }
}