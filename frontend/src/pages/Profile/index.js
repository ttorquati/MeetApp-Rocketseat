import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { FaSpinner } from "react-icons/fa";
import * as Yup from "yup";

import { updateProfileRequest } from "~/store/modules/user/actions";

import AvatarInput from "./AvatarInput";

import { Container } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email()
    .required("O email é obrigatória"),
  avatar_id: Yup.string()
});

export default function Profile() {
  const dispatch = useDispatch();

  const { profile, loading } = useSelector(state => state.user);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
        <AvatarInput name="avatar_id" profile={profile.name} />

        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmação de senha"
        />

        <div>
          <button type="submit">
            {loading ? <FaSpinner size={18} color="#fff" /> : "Salvar Perfil"}
          </button>
        </div>
      </Form>
    </Container>
  );
}
