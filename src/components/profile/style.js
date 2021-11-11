import styled from "styled-components"; 
import { Link } from "react-router-dom";
export const ProfilesContainer = styled.div`
width: 80%;
max-height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const SectionTitle = styled.h1`
color: white;
font-size: 2rem;
font-weight: 500;
margin: 0px 0px 15px 0px;

`
export const ProfilesWrap = styled.div`
width: 100%;
height: 200px;



`
export const ListProfiles = styled.ul`
display: flex;
width: 100%;
height: 200px;
gap: 16px;
list-style: none;
`
export const ProfileList = styled.li`
margin-right: 55px;
height: 100px;
width: 100px;

`
export const ProfileLink = styled(Link)`
width: 200px;
heigth: 200px;
cursor: pointer;

`
export const AvatarWrap = styled.div`
display: flex;
justfify-content: center;
flex-direction: column;
height: 250px;
width: 250px;
align-items: center;

`
export const AvatarProfile = styled.div`
background-image: url("https://occ-0-657-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY-6eTzsvs5WrTzo-_fqPmLIk27GsoxIKIeB1aCXt8ZkATPfw5_-Q4Oee0LyUVHyEP0n9bHe4c75NcsBADOzQZi5QHyx.png?r=f54");

background-size: cover;
background-repeat: no-repeat;
width: 150px;
height: 150px;
border-radius: 4px;

&:hover{
    outline: 3px solid white;
}
`
export const Name = styled.span`
color: white;
font-size: 18px;
font-weigth: 300;
margin: -20px 0 0 0;
`