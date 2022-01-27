var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         resolve({name: 'john', age:42})
         if((Math.ceil(Math.random * 2)) < 2){
           throw new Error('Error!')
         }
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;