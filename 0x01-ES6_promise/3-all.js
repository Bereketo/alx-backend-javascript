import {uploadPhoto, createUser} from './utils.js'

export default function handleProfileSignup(){
	const photo = uploadPhoto();
	const user =  createUser();
        Promise.all([photo, user])
	.then(([result1, result2])=>{
		console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`);
	})
	.catch((error)=>{
		console.log('Signup system offline')
	})
	
	
}
