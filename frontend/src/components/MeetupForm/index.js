import React from "react";
import { Input } from "@rocketseat/unform";
import { FaSpinner } from "react-icons/fa";
import PropTypes from "prop-types";
import * as Yup from "yup";

import AvatarInput from "./AvatarInput";

import DatePicker from "./DatePicker";

import { FormRocketseat } from "./styles";

const schema = Yup.object().shape({
  title: Yup.string().required("O título é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  date: Yup.string()
    .nullable()
    .required("A data é obrigatória"),
  location: Yup.string().required("A localização é obrigatória"),
  file_id: Yup.string()
});

export default function MeetupForm({ onSubmit, loading, initialData }) {
  return (
    <FormRocketseat
      onSubmit={onSubmit}
      initialData={initialData}
      schema={schema}
    >
      <AvatarInput name="file_id" />

      <Input
        name="title"
        type="text"
        placeholder="Título do Meetup"
        maxLength={255}
      />
      <Input
        name="description"
        type="text"
        placeholder="Descrição completa"
        maxLength={255}
      />
      <DatePicker name="date" />
      <Input
        name="location"
        type="text"
        placeholder="Localização"
        maxLength={255}
      />

      <div>
        <button type="submit">
          {loading ? <FaSpinner size={18} color="#fff" /> : "Salvar Meetup"}
        </button>
      </div>
    </FormRocketseat>
  );
}

MeetupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  initialData: PropTypes.shape({
    file_id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string
  })
};

MeetupForm.defaultProps = {
  initialData: {}
};
