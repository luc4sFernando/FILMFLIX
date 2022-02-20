import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';
import './styles.scss';
import { collection, query, where, getDocs, getDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { idSelector, urlSelector } from '../../features/selectors';

import db from '../../services/firebase';
import { setBank } from '../../features/reducers/profiles.slice';

function NavigatorLink({ icon, children, type }) {
  return (
    <>
      <li className='navigator-link'>
        <Link to='/'>
          {icon && (
            <img src={icon} className={type === 'Signup' ? 'large' : 'small'} />
          )}
          {children}
        </Link>
      </li>
    </>
  );
}

function Preferences({ type }) {
  
  const test = useRef(null);
  const uid = useSelector(idSelector);
  const [url, setUrl] = useState([]);
  const [collectionId, setCollectionId] = useState('');
  const [active, setActive] = useState(false);
  const basicUrl = useSelector(urlSelector);
  const [userProfiles, SetUserProfiles] = useState(false)
  const dispatch = useDispatch()
  const [mediaQuery, setMediaQuery] = useState(false)

  useEffect(() => {
    const handleUrlsImages = async () => {
      const q = query(collection(db, 'users'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);
      const profiles = [];
      querySnapshot.forEach(async (doc) => {
        setCollectionId(doc.id);
      });
      if (collectionId) {
        const docs = await getDocs(
          collection(db, `users/${collectionId}/profiles`)
        );
        docs.forEach(async (doc) => profiles.push(doc.data()));
        if(profiles) {
          setUrl(profiles);
          dispatch(setBank(profiles))
        };
      
       return profiles;
      }
    };
  handleUrlsImages();
  }, [collectionId]);

  const changeMenuDropEvent = (e) => {

    if(active && mediaQuery){
     setActive(false)
    };
  }
  useEffect(() => {
    window.addEventListener('click', changeMenuDropEvent);
        return () => {
            window.removeEventListener('click', changeMenuDropEvent);
        };
  }, )

 
  useEffect(() => {
    
    if (test.current?.className) {
      test.current.className += 'view';
    }
    if (window.matchMedia("(max-width: 991.90px)").matches){
      setMediaQuery(true);
      
    }
     if (window.matchMedia("(min-width: 992px)").matches){
      setMediaQuery(false);
      
    }
    
  } );

  return (
    <>
      {mediaQuery ? (
         <div
         id='profile-img'
         onClick={(e) => {
           setActive(true);
         }}
       >
         {url?.length ?  (
           <>
           <img className='img-responsive' src={basicUrl} alt='profileLogo' />
              
           <BsFillPlayFill className={`arrow ${active &&'flip' }`} />
        
           <div
             className={`dropdown  ${active ? 'active hidden' : ''}`}
             ref={test}
           >
             <div className={active ? 'arrow-container' : 'arrow-off'}>
               {' '}
               <BsFillPlayFill className='arrow-absolute' />
             </div>
             {basicUrl &&
               url.map((val, index) => {
                 return (
                   <div key={index} className='profiles-nav-item'>
                     <img
                       src={val.photoURL}
                       alt='profileimage'
                       style={{ width: '30px', borderRadius: '4px' }}
                     />
                     <a>{val.name}</a>
                   </div>
                 );
               })}
  
             <Link to={'/profiles'}>Profiles Manager</Link>
           </div>
           </>
         ) : (
           <Link to={'/profiles/manager'}className="link" ><p>New Profile</p> </Link>
         )}
      
       </div>

      ) :  <div
      id='profile-img'
      onMouseOver={(e) => {
        setActive(true);
      }}
      onMouseOut={(e) => {
        setActive(false);
      }}
    >
     
      {url?.length ? (
        <>
        <img className='img-responsive' src={basicUrl} alt='profileLogo' />
        <BsFillPlayFill className={`arrow ${active &&'flip' }`} />
     
     <div
       className={`dropdown  ${active ? 'active hidden' : ''}`}
       ref={test}
     >
       <div className={active ? 'arrow-container' : 'arrow-off'}>
         {' '}
         <BsFillPlayFill className='arrow-absolute' />
       </div>
       {basicUrl &&
         url.map((val, index) => {
           return (
             <div key={index} className='profiles-nav-item'>
               <img
                 src={val.photoURL}
                 alt='profileimage'
                 style={{ width: '30px', borderRadius: '4px' }}
               />
               <a>{val.name}</a>
             </div>
           );
         })}

       <Link to={'/profiles'}>Profiles Manager</Link>
     </div>
        </>
        
      ) 
      : (
        <Link to={'/profiles/manager'} className="link"> 
        <p>New Profile</p></Link>
      )}
     
    </div>}
            
  
      </>
  );
}

export { NavigatorLink, Preferences };
