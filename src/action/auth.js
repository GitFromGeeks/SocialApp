import auth from "@react-native-firebase/auth"
import Snackbar from "react-native-snackbar"
import database from "@react-native-firebase/database"


export const signUp=(data)=> async(dispatch)=>{
    console.log(data);
    const {name,instaUserName,bio,email,password,country,image}=data

    auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
        console.log(data);
        console.log("User creation was success");
        database()
        .ref('/users/'+data.user.uid)
        .set({
            name,
            instaUserName,
            country,
            image,
            bio,
            uid:data.user.uid
        })
        .then(()=>console.log("Data set success"))
        Snackbar.show({
            text:"account created",
            textColor:"white",
            backgroundColor:"#1b262c"
        })
    })
    .catch((e)=>{
        console.log(e);
        Snackbar.show({
            text:"SignUp Failed",
            textColor:"white",
            backgroundColor:"red",
        })
    })
}


export const signIn=(data)=>async(dispatch)=>{
    console.log(data);
    const {email,password}=data
    auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
        console.log("SignIn success");
        Snackbar.show({
            text:"Account SignIn",
            textColor:"white",
            backgroundColor:"#1b262c"
        })
    })
    .catch((e)=>{
        console.log(e)
        Snackbar.show({
            text:"SignIn Failed",
            textColor:"white",
            backgroundColor:"red",
        })
    })
}


export const signOut=()=>async(dispatch)=>{
    auth()
    .signOut()
    .then(()=>{
        Snackbar.show({
            text:"SignOut !",
            textColor:"white",
            backgroundColor:"#1b262c"
        })
    })
    .catch((e)=>{
        console.log(e);
        Snackbar.show({
            text:"SignOut Failed",
            textColor:"white",
            backgroundColor:"#1b262c"
        })
    })
}