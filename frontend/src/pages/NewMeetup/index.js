import React, { useState } from "react";
import { toast } from "react-toastify";

import { Container } from "./styles";

import api from "~/services/api";
import history from "~/services/history";

import MeetupForm from "~/components/MeetupForm";

export default function NewMeetup() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await api.post("meetups", data);
      toast.success("Meetup cadastrado com sucesso");
      history.push("/dashboard");
    } catch (err) {
      toast.error(`Erro ao cadastrar meetup. ${err}`);
    }
    setLoading(false);
  }

  return (
    <Container>
      <MeetupForm onSubmit={handleSubmit} loading={loading} />
    </Container>
  );
}
