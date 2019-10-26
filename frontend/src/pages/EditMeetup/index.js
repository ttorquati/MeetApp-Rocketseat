import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { Container } from "./styles";

import api from "~/services/api";
import history from "~/services/history";

import MeetupForm from "~/components/MeetupForm";

export default function EditMeetup({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadDetails() {
      const response = await api.get(`meetups/${id}`);

      const data = {
        ...response.data
      };
      setMeetup(data);
    }
    loadDetails();
  }, [id]);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await api.put(`meetups/${id}`, data);
      toast.success("Meetup atualizado com sucesso");
      history.push("/dashboard");
    } catch (err) {
      toast.error(`Erro ao atualizar meetup.`);
    }
    setLoading(false);
  }

  return (
    <Container>
      <MeetupForm
        onSubmit={handleSubmit}
        loading={loading}
        initialData={meetup}
      />
    </Container>
  );
}

EditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
