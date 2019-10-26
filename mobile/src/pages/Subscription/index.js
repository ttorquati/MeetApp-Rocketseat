import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/background';
import Meetup from '~/components/Meetup';

import api from '~/services/api';

import { Container, Header, MeetApp, List } from './styles';

import logo from '~/assets/logo.png';

function Subscription({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    await api.delete(`subscriptions/${id}`);

    setSubscriptions(
      subscriptions.filter(subscription => subscription.id !== id)
    );
  }

  return (
    <Background>
      <Container>
        <Header>
          <MeetApp source={logo} />
        </Header>

        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup data={item.Meetup} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscription);
