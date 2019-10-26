import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import { FaSpinner } from "react-icons/fa";
import PropTypes from "prop-types";

import { Container } from "./styles";

import api from "~/services/api";

export default function AvatarInput({ profile }) {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const [loading, setLoading] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref.current]); //eslint-disable-line

  async function handleChange(e) {
    setLoading(true);

    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
    setLoading(false);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {loading ? (
          <FaSpinner size={18} color="#fff" />
        ) : (
          <img
            src={preview || `https://api.adorable.io/avatars/50/${profile}.png`}
            alt="Avatar"
          />
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          ref={ref}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  profile: PropTypes.string
};

AvatarInput.defaultProps = {
  profile: "defaultProfile"
};
