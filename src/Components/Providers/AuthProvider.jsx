import { createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase-init";
import { createContext, useEffect, useState } from "react";



 export const AuthContext =  createContext(null) // context create kora hocchhe //eikhane variable name er 1st letter capital hobe

const AuthProvider = ({children}) => {          //ei AuthProvider k main.jsx e nibo
// authcontext ekta component tai eta k children baniye anlam
//    


   const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true) //jokhon private components add korbo reload dile jeno private component gulu na chole jae tar jonno
     
    //   google auth provider
    const googleAuthProvider = new GoogleAuthProvider();


     ///register ta eikhan theke create user er maddhome context diye jabe register component e ami jei kono component e eta niye kaaj korte parbo
     const createUser = (email,password) => {
        setLoading(true)  
        return createUserWithEmailAndPassword(auth,email,password)   //ei return ta must kora lagbe ta na hole data jabe naa kono components e
       
     }

    // login ta eikhan theke login component e jabe 

    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google diye sign in korrar jonno 
    const signInWithGoogle = () =>{ 
      return  signInWithPopup(auth,googleAuthProvider)
    }

    // signout ba logout er jonno 
    const signOutUser = () =>{
        return signOut(auth)
    }


    // onAuthStateChanged হল Firebase Authentication এর একটি মেথড, যা ব্যবহারকারীর বর্তমান অথেন্টিকেশন স্টেট (অর্থাৎ, লগ-ইন বা লগ-আউট) ট্র্যাক করতে ব্যবহৃত হয়। এটি মূলত রিয়েল-টাইমে ব্যবহারকারীর স্টেট পরিবর্তন সনাক্ত করে এবং সে অনুযায়ী অ্যাপ্লিকেশন আপডেট করতে সাহায্য করে।
     useEffect(() => {
        const unSubscribe= onAuthStateChanged(auth, currentUser=> {
            if(currentUser){
                console.log('currently logged ',currentUser);
                setUser(currentUser)
                setLoading(false) //jokhon ami user k peye jabo tokhon ei loading ta off kore dibo
            }
            else{
                console.log('no user login')
                setUser(null)
            }
         })

         return () => {
            unSubscribe();   //observation ta k stop koranur jonno use hoe
         }
     })


    const authInfo = {
            name: 'amar bhalobasha tumi',
             createUser ,   //eta diye data shob jaegae ba shob componet e jabe
             loginUser,    //eta diye data shob jaegae ba shob componet e jabe
              user,
              signOutUser,
              loading,
              signInWithGoogle,
           }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// /**context create korar basic structure
//  * 
//  * 1.create context null as default
//  * 2. create provider
//  * 3.set a value something such as (authInfo) jei kono value dite parbo
//  *  4.main.jsx e giye RouterProvider route={router} eta k delete kore diye 
//  * amar create kora <AuthProvider></AuthProvider> ba component ta boshabo 
//  * tarpor <AuthProvider>RouterProvider route={router}</AuthProvider> mane peter 
//  * moddhe boshai dibo routerProvider k;;;
//  * 5. //authcontext.provider ekta component tai take access korlem children diye

//  * export authcontext
//  ** /