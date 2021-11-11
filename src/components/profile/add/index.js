import React, { useEffect, useState } from 'react'

import {  ref, getDownloadURL, listAll } from "firebase/storage";
import NavBar from '../../navbar'
import { ContainerAddProfile, Content, SectionTitle } from './style';
import {storage} from '../../../services/firebase'

function AddProfileForm() {
const [state, setstate] = useState([])

useEffect(() => {
    async function handleUrlImages(){
        const imgsRef = ref(storage, "/profile-images");
        const links = {};
        const imgs = await listAll(imgsRef);
        imgs.items.forEach(async link => {return links[link.name] = await getDownloadURL(link)})
        setstate(links)
    }
    handleUrlImages()

}, [])
   console.log(state, 'aqui')
    return (
<>
<NavBar/>

    <ContainerAddProfile>
        <Content>
        <SectionTitle>Add profile</SectionTitle>
        <p>Add a Netflix profile for someone else</p>
        <div>
            
        </div>
        </Content>
    </ContainerAddProfile>

</>
    )
}

export default AddProfileForm;
