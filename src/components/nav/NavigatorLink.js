import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';
import './styles.scss';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { idSelector, urlSelector } from '../../features/selectors';

import db from '../../services/firebase';

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

  useEffect(() => {
    const handleUrlsImages = async () => {
      const q = query(collection(db, 'users'), where('uid', '==', uid));

      const querySnapshot = await getDocs(q);
      const profiles = [];
      querySnapshot.forEach(async (doc) => {
        await setCollectionId(doc.id);
      });
      if (collectionId) {
        const docs = await getDocs(
          collection(db, `users/${collectionId}/profiles`)
        );
        docs.forEach(async (doc) => profiles.push(doc.data()));
        await setUrl(profiles);
        console.log(profiles);
      }
    };
    handleUrlsImages();
  }, [collectionId]);

  useEffect(() => {

    if (test.current.className) {
      test.current.className += 'view';
    }
  }, [active]);

  return (
    <>
        <div
          id='profile-img'
          onMouseOver={(e) => {
            setActive(true);
          }}
          onMouseOut={(e) => {
            setActive(false);
          }}
        >
         
          {basicUrl ? (
            <img className='img-responsive' src={basicUrl} alt='profileLogo' />
          ) : (
            <Link to={'/profiles/manager'}> New Profile</Link>
          )}
         
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

            <Link to={'/profiles/manager'}>Profiles Manager</Link>
          </div>
        </div>
  
      </>
  );
}

export { NavigatorLink, Preferences };
