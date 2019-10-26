import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import { FaSpinner } from "react-icons/fa";

import { Container } from "./styles";

import api from "~/services/api";

import meetupUpload from "~/assets/meetup-upload.svg";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("banner");

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const [loading, setLoading] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "file_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref.current]); //eslint-disable-line

  useEffect(() => {
    if (defaultValue) {
      setFile(defaultValue && defaultValue.id);
      setPreview(defaultValue && defaultValue.url);
    }
  }, [defaultValue]);

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
      <label htmlFor="banner">
        {loading ? (
          <FaSpinner size={18} color="#fff" />
        ) : (
          <img src={preview || meetupUpload} alt="Banner" />
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          ref={ref}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
