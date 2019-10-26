import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import PropTypes from "prop-types";

import api from "~/services/api";
import history from "~/services/history";

import { Container, Meetup } from "./styles";

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});

  const [loadingCancel, setLoadingCancel] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    async function loadDetails() {
      setLoadingData(true);
      const response = await api.get(`meetups/${id}`);

      const data = {
        ...response.data,
        formattedDate: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às ' kk'h'",
          {
            locale: pt,
            addSuffix: true
          }
        )
      };
      setMeetup(data);
      setLoadingData(false);
    }
    loadDetails();
  }, [id]);

  async function handleCancelMeetup() {
    setLoadingCancel(true);
    try {
      await api.delete(`meetups/${id}`);
      toast.success("Meetup cancelado com sucesso");
      history.push("/dashboard");
    } catch (err) {
      toast.error(`Erro ao cancelar meetup.`);
    }
    setLoadingCancel(false);
  }

  return (
    <Container>
      {loadingData ? (
        <FaSpinner size={28} color="#fff" />
      ) : (
        <>
          <header>
            <strong>{meetup.title}</strong>
            <div>
              <Link to={`/edit-meetup/${id}`}>
                <MdEdit size={20} color="#fff" />
                Editar
              </Link>
              <button type="button" onClick={handleCancelMeetup}>
                {loadingCancel ? (
                  <span>
                    <FaSpinner size={18} color="#fff" />
                  </span>
                ) : (
                  <>
                    <MdDeleteForever size={20} color="#fff" />
                    Cancelar
                  </>
                )}
              </button>
            </div>
          </header>

          <Meetup>
            <img src={meetup.banner && meetup.banner.url} alt={meetup.title} />
            <span>{meetup.description}</span>
            <div>
              <span>
                <MdEvent size={20} color="#CCC" />
                {meetup.formattedDate}
              </span>
              <span>
                <MdPlace size={20} color="#CCC" />
                {meetup.location}
              </span>
            </div>
          </Meetup>
        </>
      )}
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
