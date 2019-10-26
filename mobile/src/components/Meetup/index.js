import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  MeetupInfo,
  Banner,
  Info,
  Name,
  Wrapper,
  Time,
  Location,
  Person,
  SubmitButton,
} from './styles';

export default function Meetup({ data, onCancel, onSubscribe }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <MeetupInfo>
        <Banner
          source={{
            uri: data.banner
              ? data.banner.url.replace('localhost', '10.0.3.2')
              : `https://api.adorable.io/avatar/50/${data.title}.png`,
          }}
        />

        <Info>
          <Name>{data.title}</Name>

          <Wrapper>
            <Icon name="event" size={16} color="#999" />
            <Time>{dateParsed}</Time>
          </Wrapper>

          <Wrapper>
            <Icon name="place" size={16} color="#999" />
            <Location>{data.location}</Location>
          </Wrapper>

          <Wrapper>
            <Icon name="person" size={16} color="#999" />
            <Person>Organizador: {data.user.name}</Person>
          </Wrapper>

          {!data.past && !onCancel && (
            <SubmitButton onPress={onSubscribe}>
              Realizar Inscrição
            </SubmitButton>
          )}

          {!data.past && onCancel && (
            <SubmitButton onPress={onCancel}>Cancelar Inscrição</SubmitButton>
          )}
        </Info>
      </MeetupInfo>
    </Container>
  );
}
