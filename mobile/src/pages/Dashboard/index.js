import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/background';
import Meetup from '~/components/Meetup';
import DateInput from '~/components/DateInput';

import api from '~/services/api';

import { Container, Header, MeetApp, List } from './styles';

import logo from '~/assets/logo.png';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date, // retorna o date como timestamp
        },
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [isFocused, date]);

  async function handleSubscribe(id) {
    await api.post(`/meetups/${id}/subscriptions`);

    setMeetups(meetups.filter(meetup => meetup.id !== id));
  }

  return (
    <Background>
      <Container>
        <Header>
          <MeetApp source={logo} />
        </Header>

        <DateInput date={date} onChange={setDate} />

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup data={item} onSubscribe={() => handleSubscribe(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
