import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import "./styles.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { idSelector, urlSelector } from "../../features/selectors";
import db from "../../services/firebase";

function NavigatorLink({ icon, children, type }) {
  return (
    <>
      <li>
        <Link to="/">
          {icon && (
            <img
              src={`${icon}`}
              className={type === "Signup" ? "large" : "small"}
            />
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
  const [collectionId, setCollectionId] = useState("");
  const [active, setActive] = useState(false);
  const basicUrl = useSelector(urlSelector);

  useEffect(() => {
    const handleUrlsImages = async () => {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      
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
      }
    };
    handleUrlsImages();
  }, [collectionId]);

  console.log(collectionId);
  useEffect(() => {
    if (test.current.className) {
      test.current.className += "view";
    }
  }, [active]);

  return (
    <>
      {type === "Home" && (
        <div
          className="profile-img"
          onMouseOver={(e) => {
            setActive(true);
          }}
          onMouseOut={(e) => {
            setActive(false);
          }}
        >
          {url.length > 0 ?
            <img className="img-responsive" src={basicUrl} alt="profileLogo" /> : null
          }
          {url.length && (
            <BsFillPlayFill className={`arrow ${active ? "flip" : ""}`} />
          )}

          <div
            className={`dropdown  ${active ? "active hidden" : ""}`}
            ref={test}
          >
            <div className={active ? "arrow-container" : "arrow-off"}>
              {" "}
              <BsFillPlayFill className="arrow-absolute" />
            </div>
            {url.length &&
              url.map((val, index) => {
                return (
                  <div key={index} className="profiles-nav-item">
                    <img
                      src={val.photoURL}
                      alt="profileimage"
                      style={{ width: "30px", borderRadius: "4px" }}
                    />
                    <a>{val.name}</a>
                  </div>
                );
              })}
            <Link to={"/profiles/manager"}>Profiles Manager</Link>
          </div>
        </div>
      )}
      {type === "Signup" && <p>Signup</p>}
    </>
  );
}

export { NavigatorLink, Preferences };
