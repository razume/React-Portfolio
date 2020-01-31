import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import Header from './components/Header';
import Home from './components/Home';
import Notes from './components/Notes';
import Vacations from './components/Vacations';
import FollowingCompanies from './components/FollowingCompanies';
import { getHash } from './utils/Utils';
import './App.css';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchUser = async () => {
  const storage = window.localStorage;
  const userId = storage.getItem('userId');
  if (userId) {
    try {
      return (await axios.get(`${API}/users/detail/${userId}`)).data;
    } catch (ex) {
      storage.removeItem('userId');
      return fetchUser();
    }
  }
  const user = (await axios.get(`${API}/users/random`)).data;
  storage.setItem('userId', user.id);
  return user;
};

function App() {
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [followingCompanies, setFollowingCompanies] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [fcNames, setFcNames] = useState([]);
  const [params, setParams] = useState(qs.parse(getHash()));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  useEffect(() => {
    fetchUser().then(user => {
      setUser(user);
    });
  }, [user.id]);

  useEffect(() => {
    fetchNotes();
  }, [user]);

  const fetchNotes = () => {
    if (!user.id) {
      return;
    }
    axios
      .get(`${API}/users/${user.id}/notes`)
      .then(response => setNotes(response.data));
  };

  useEffect(() => {
    if (!user.id) {
      return;
    }
    axios
      .get(`${API}/users/${user.id}/vacations`)
      .then(response => setVacations(response.data));
  }, [user]);

  useEffect(() => {
    if (!user.id) {
      return;
    }
    axios
      .get(`${API}/users/${user.id}/followingCompanies`)
      .then(response => setFollowingCompanies(response.data));
  }, [user]);

  const changeUser = async () => {
    window.localStorage.removeItem('userId');
    await fetchUser().then(user => {
      setUser(user);
    });
  };

  useEffect(() => {
    axios.get(`${API}/companies`).then(response => setCompanies(response.data));
  }, []);

  //const findFollowingCompanyName = () => {

  useEffect(() => {
    let companyNames = [];
    for (let followingCompany of followingCompanies) {
      for (let company of companies) {
        if (company.id === followingCompany.companyId) {
          companyNames.push({
            name: company.name,
            rating: followingCompany.rating,
            id: followingCompany.id,
          });
        }
      }
    }

    setFcNames(companyNames);
  }, [companies, followingCompanies]);

  const destroyFollowingCompany = async companyToDestroy => {
    await axios.delete(
      `${API}/users/${user.id}/followingCompanies/${companyToDestroy.id}`
    );
    setFollowingCompanies(
      followingCompanies.filter(
        followingCompany => followingCompany.id !== companyToDestroy.id
      )
    );
  };

  console.log(fcNames);

  if (!user.id) {
    return '...loading';
  }
  return (
    <div>
      <Header user={user} changeUser={changeUser} params={params} />
      {params.view === 'notes' && <Notes notes={notes} />}
      {params.view === 'vacations' && <Vacations vacations={vacations} />}
      {params.view === 'followingCompanies' && (
        <FollowingCompanies
          followingCompanies={followingCompanies}
          fcNames={fcNames}
          destroyFollowingCompany={destroyFollowingCompany}
        />
      )}
      {params.view === 'home' && (
        <Home
          notes={notes}
          vacations={vacations}
          followingCompanies={followingCompanies}
          params={params}
        />
      )}
    </div>
  );
}

export default App;
