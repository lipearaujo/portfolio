"use client";
import React, { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formValues.name,
      from_lastname: formValues.lastname,
      message: formValues.message,
      email: formValues.email,
      phone: formValues.phone,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_KEY as string
      )
      .then(
        () => {
          alert("Email Enviado!");

          setFormValues({
            name: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <form
      className="flex flex-col gap-6 p-10 rounded-xl bg-[#272627]"
      onSubmit={onSubmitForm}
    >
      <h3 className="text-4xl text-[#42ffa0]">Vamos trabalhar juntos!</h3>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="w-full flex flex-col gap-6">
            <input
              className="placeholder:text-white/50 bg-[#121012] rounded-xl p-3 border border-white/20 focus:border-0 focus:outline-none focus:ring-2 ring-[#42ffa0]"
              placeholder="Nome"
              type="text"
              required
              name="name"
              onChange={handleChange}
              value={formValues.name}
            />
            <input
              className="placeholder:text-white/50 bg-[#121012] rounded-xl p-3 border border-white/20 focus:border-0 focus:outline-none focus:ring-2 ring-[#42ffa0]"
              placeholder="Sobrenome"
              type="text"
              required
              name="lastname"
              onChange={handleChange}
              value={formValues.lastname}
            />
          </div>
          <div className="w-full flex flex-col gap-6">
            <input
              className="placeholder:text-white/50 bg-[#121012] rounded-xl p-3 border border-white/20 focus:border-0 focus:outline-none focus:ring-2 ring-[#42ffa0]"
              placeholder="Email"
              type="email"
              id=""
              required
              name="email"
              onChange={handleChange}
              value={formValues.email}
            />
            <input
              className="placeholder:text-white/50 bg-[#121012] rounded-xl p-3 border border-white/20 focus:border-0 focus:outline-none focus:ring-2 ring-[#42ffa0]"
              placeholder="Celular"
              type="text"
              id=""
              required
              name="phone"
              onChange={handleChange}
              value={formValues.phone}
            />
          </div>
        </div>
        <textarea
          className="placeholder:text-white/50 bg-[#121012] rounded-xl resize-none min-h-[80px] h-[200px] p-3 border border-white/20  focus:border-0 focus:outline-none focus:ring-2 ring-[#42ffa0]"
          placeholder="Escreva sua mensagem."
          id=""
          required
          name="message"
          onChange={handleTextAreaChange}
          value={formValues.message}
        ></textarea>

        <button
          className="w-[180px] rounded-xl p-3 bg-[#42ffa0] text-[#121012]"
          type="submit"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
};

export default Form;
