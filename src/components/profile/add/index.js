import React from 'react'



import { ContainerAddProfile, Content, SectionTitle } from './style';


function AddProfileForm({value}) {

console.log(value[0])

    return (
<>


    <ContainerAddProfile>
        <Content>
            <img src={value[0]} alt="helo" />
        <SectionTitle>Add profile</SectionTitle>
        
        <p>Add a Netflix profile for someone else</p>
        
    
        </Content>
    </ContainerAddProfile>

</>
    )
}

export default AddProfileForm;
