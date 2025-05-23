'use client';
import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
const serviceId=import.meta.env.VITE_FORM_ID;
const templateId=import.meta.env.VITE_TEMPLATE_ID;
const publicKey=import.meta.env.VITE_PUBLIC_KEY;

const envelopeSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H21V19H3V5Z" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 5L12 13L21 5" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const phoneSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V21C22 21.55 21.55 22 21 22C10.61 22 2 13.39 2 3C2 2.45 2.45 2 3 2H7.09C7.58 2 7.99 2.37 8.07 2.85C8.26 3.97 8.64 5.03 9.18 6.01C9.34 6.3 9.25 6.67 9 6.89L6.73 9.06C8.39 12.28 11.72 15.61 14.94 17.27L17.11 15C17.33 14.75 17.7 14.66 17.99 14.82C18.97 15.36 20.03 15.74 21.15 15.93C21.63 16.01 22 16.42 22 16.92Z" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const clockSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#D5F60C" strokeWidth="2"/>
    <path d="M12 7V12L15 14" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const instagramSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#D5F60C" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="#D5F60C" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" fill="#D5F60C"/>
  </svg>
);


 function Contact(){
  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = formData;
  
    if (!name || !email || !subject || !message) {
      setStatus("Wypełnij wszystkie pola");
      return;
    }
  
    setIsLoading(true);
    setStatus("");
  
    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      );
      setStatus("Wiadomość wysłana");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Błąd wysyłania:", error);
      setStatus("Coś poszło nie tak 😢");
    }
  
    setIsLoading(false);
    setTimeout(() => setStatus(""), 5000); // reset komunikatu po 5s
  }
  
  
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);    
  


    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  


  return (
    <section id="kontakt" className="text-white  justify-center py-4 w-full  self-center gap-8 flex flex-col lg:flex-row  lg:min-w-[1000px]">
      <div className="flex flex-col md:gap-4 lg:justify-between flex-1 gap-4">
          <div>
            <h2  className="font-header text-h2 leading-[1.3] truncate">Skontaktuj się   ze mną</h2>

          </div>
            <div className="flex text-body gap-2 ">
              {envelopeSvg}
              <a href="">j.stec0312@gmail.com</a>
            </div>
            <div className="flex text-body gap-2 ">
              {instagramSvg}
              <a href="https://www.instagram.com/stecu03/">@stecu03</a>
            </div>
            <div className="flex text-body gap-2   ">
              {phoneSvg}
              <a href="">+48 570 660 663</a>
            </div>
            <div className="flex text-body gap-2   ">
              {clockSvg}
              <p className="text-body text-secondary font-bold font-main">Odpowiedź w 24 godziny!</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 w-full lg:max-w-[700px] items-start gap-4 justify-around">
            <input
              type="text"
              name="name"
              placeholder="Imię"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="outline-none leading-0 text-secondary border-b-2 border-white w-full pb-1 font-bold"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="outline-none leading-0 text-secondary border-b-2 border-white w-full pb-1 font-bold"
            />
            <input
              type="text"
              name="subject"
              placeholder="Temat"
              value={formData.subject || ""}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="outline-none text-secondary border-b-2 border-white font-bold w-full pb-1"
            />
            <div className="flex flex-col gap-2 w-full ">
              <textarea
                name="message"
                placeholder="Zostaw wiadomość"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="outline-none min-h-[130px] text-sm w-full border-2 mt-2 border-white rounded-sm p-2"
              />
              {status && <p className="text-sm mt-2 text-green-600">{status}</p>}

            </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative inline-flex h-12 w-full items-center justify-center rounded-md bg-secondary px-6 font-medium text-primary font-body ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-t-white border-primary"></div>
                ) : (
                  <>
                    <span className="truncate">Wyślij</span>
                    <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </>
                )}
              </button>

          </form>

    </section>
  );
};

export default Contact;