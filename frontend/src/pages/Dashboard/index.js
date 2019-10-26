import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { format, isBefore, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { utcToZonedTime } from "date-fns-tz";

import api from "~/services/api";

import { Container, Meetup } from "./styles";

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get("owner");

      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

      const data = response.data.map(meetup => {
        const compareDate = utcToZonedTime(meetup.date, timeZone);

        return {
          ...meetup,
          past: isBefore(compareDate, new Date()),
          formattedDate: format(
            parseISO(meetup.date),
            "dd 'de' MMMM', às ' kk'h'",
            {
              locale: pt,
              addSuffix: true
            }
          )
        };
      });

      setMeetups(data);
    }
    loadSchedule();
  }, []); //eslint-disable-line

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/new-meetup">Novo meetup</Link>
      </header>

      {!meetups.length ? (
        <span>Nenhum meetup cadastrado, comece um novo meetup!</span>
      ) : (
        <ul>
          {meetups.map(meetup => (
            <Meetup key={meetup.id} past={meetup.past}>
              <Link to={`/details/${meetup.id}`}>
                <div>
                  <strong>{meetup.title}</strong>
                </div>
                <div>
                  <span>{meetup.formattedDate}</span>
                  <FaChevronRight size={20} color="#fff" />
                </div>
              </Link>
            </Meetup>
          ))}
        </ul>
      )}
    </Container>
  );
}
