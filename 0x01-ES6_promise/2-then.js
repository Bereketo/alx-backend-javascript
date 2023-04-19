export default function handleResponseFromAPI(promise) {
	const myPromise = new Promise((resolve, reject)=>{
		if(promise)
		{
                  const obj = {status: 200, body:'success'};
		  resolve(obj);
		}
		else 
		{  
		   const empty = {};
		   reject(empty);
		}
	})
	myPromise.then((obj)=>{ console.log('Got a response from the API')})
	         .catch((obj)=>{return {}});
	return myPromise;

}
