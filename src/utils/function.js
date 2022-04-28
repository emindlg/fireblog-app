import firebase from "./firebase"
import {useState,useEffect} from "react";
import { getDatabase,ref,set,push,onValue, remove,update} from "firebase/database";
import Toastify from "./toast";

// Bilgi Ekleme
export const AddBlog=(info)=>{
    const db = getDatabase();
    const blogRef=ref(db,"blogdata");
    const newBlogRef=push(blogRef)
    set((newBlogRef),{
        title:info.title,
        imgUrl:info.imgUrl,
        content:info.content,
    })
}

// Bilgi Çağırma

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [blogList,setBlogList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const blogRef=ref(db,"blogdata");

        onValue(blogRef, (snapshot) => {
            const data = snapshot.val();
            const blogArray=[];

            for(let id in data){
                blogArray.push({id,...data[id]})
            }          
            setBlogList(blogArray);
            setIsLoading(false);
        });
    },[])
    return {isLoading,blogList}
}

// Bilgi silme
export const DeleteBlog=(id)=>{
        const db = getDatabase();
        const blogRef=ref(db,"blogdata");
        remove(ref(db,"blogdata/"+id))

        Toastify("Kullanıcı bilgisi silindi")
}

// Bilgi Değiştirme

export const UpdateBlog=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["blogdata/"+info.id]=info;
    return update(ref(db),updates)};