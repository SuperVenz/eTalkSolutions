import React, { useState } from "react";
import axios from "axios";
import style from "styled-components";

const Wrapper = style.div`
width:40%;
  @media (max-width: 768px) {
      width:90%;
    }
`;
const Title = style.h3`
margin-bottom:5%;
font-size:1.5em;

`;
const FormBox = style.form`
width:80%;
height:100%;`;
const Fieldset = style.fieldset`
display:flex;
flex-flow: row wrap;
justify-content: space-between;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Label = style.label`
  margin-bottom:10%;
  border: 1% solid #A9A8A8;
  border-radius: 10px;
  border-width: 3px;
  width:45%;
    @media (max-width: 768px) {
      width:100%;
    }
  `;
const LabelCol = style.label`
  margin-bottom:10%;
   border: 1% solid #A9A8A8;
  border-radius: 10px;
  border-width: 3px;
  margin-right:1%;
  width:100%;
  `;
const Text = style.p`
font-size:1em;
`;
const Button = style.button`
background: rgba(204, 204, 204, 0.5);
border-radius: 10px;
padding:.70em;
height:10%;
width:40%;
font-size: 1.5em;
color: #000000;
font-weight: 300;
font-family: Inter;
&:hover {
    background: rgba(220, 243, 200, 1);

}
 @media (max-width: 768px) {
      width:70%;
      margin-bottom:5%;
    }

`;
const Col = style.div`
display:flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
width:100%;
`;
const Input = style.input` 
  width:100%;
  padding:1%;`;
const TextArea = style.textarea`
width:100%;
`;
const Message = style.div`
margin-left:10%;
display:flex;
align-items: center;
justify-content: center;
border-radius: 10px;
height:10%;
width:40%;
font-size: 1.5em;
color: #000000;
 @media (max-width: 768px) {
      width:70%;
      margin-bottom:5%;
    }

`;
const Row = style.div`
display:flex;
flex-flow: row nowrap;
`;
function ContactForm() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [info, setInfo] = useState("");
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setName("");
      setLast("");
      setEmail("");
      setPhone("");
      setCompany("");
      setInfo("");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/1aaae26a-8e4b-4c1d-b8bc-7a10eeeb9048",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "We Will Contact You Soon. Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Wrapper>
      <Title>Contact Form</Title>
      <FormBox onSubmit={handleOnSubmit} onact>
        <Fieldset>
          <Label>
            <Text>First Name</Text>
            <Input
              name="name"
              placeholder="John"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
          <Label>
            <Text>Last Name</Text>
            <Input
              name="last"
              placeholder="Doe"
              required
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </Label>
          <Label>
            <Text>Email</Text>
            <Input
              name="email"
              required
              placeholder="email@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            <Text>Phone</Text>
            <Input
              name="phone"
              required
              placeholder="7607607600"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Label>
          <Col>
            <LabelCol>
              <Text>Company Name</Text>
              <Input
                name="Company"
                placeholder="E-Talk Solutions"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </LabelCol>
            <LabelCol>
              <Text>In a few words describe your request or need</Text>
              <TextArea
                name="info"
                placeholder="How can we help you?"
                required
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </LabelCol>
            <LabelCol>
              <Text>Computer check: What is 10 + 1?</Text>
              <Input
                type="number"
                placeholder="11"
                id="quantity"
                min="10"
                max="11"
              />
            </LabelCol>
          </Col>
        </Fieldset>
        <Row>
          <Button type="submit">Submit</Button>
          <Message>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </Message>
        </Row>
      </FormBox>
    </Wrapper>
  );
}

export default ContactForm;
