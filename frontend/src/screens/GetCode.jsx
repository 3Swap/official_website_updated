import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Image from '../components/Image';
import Space from '../assets/space.svg';
import { Column, Typography } from '../GlobalStyle.style';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  GetCodeContainer,
  GetCodeForm,
  GetCodeWrapper,
} from '../styles/GetCode.style';
import { FaTimes } from 'react-icons/fa';
const MySwal = withReactContent(Swal);

const GetCode = ({ setOpen, setComplete }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      if (!email || !name) {
        await MySwal.fire('Error!', 'Please fill out the form', 'error');
        setIsLoading(false);
        return false;
      }

      const { data } = await axios.post('/auth/signup', {
        full_name: name,
        email,
      });
      if (data.errors.length > 0) {
        setErrorMsg(data.errors[0].msg);
        MySwal.fire('Error Occured.', `${errorMsg}`, 'error');
        setIsLoading(false);
      } else {
        setEmail('');
        setName('');
        setComplete(true);
        setErrorMsg('');
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <GetCodeWrapper>
        <GetCodeContainer>
          <Column>
            <Typography
              as="h2"
              fontWeight="800"
              fontSize="24px"
              margin="10px 0"
            >
              Why we need your Email
            </Typography>
            <Typography as="p" fontSize="12px" color="rgba(0,0,0,0.8)">
              We need your Email to grant you FREE access to the MVP version of
              3swap. We respect your privacy and promise not to spam your
              mailbox with irrelevant messages.
            </Typography>
            <Image src={Space} alt="space" />
          </Column>
          <Column>
            <GetCodeForm>
              <div className="closeBtn">
                <FaTimes className="icon" onClick={() => setOpen(false)} />
              </div>
              <Typography as="h2" margin="8px 0">
                Get testing code
              </Typography>
              <Input
                type="text"
                placeholder="Enter your name"
                width="90%"
                bgColor="#fff"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Enter Email Address"
                width="90%"
                bgColor="#fff"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                label="Get test code"
                bgColor="var(--primary-bg)"
                color="#fff"
                disabled={isLoading}
                onClick={handleSubmit}
              />
            </GetCodeForm>
          </Column>
        </GetCodeContainer>
      </GetCodeWrapper>
    </>
  );
};

export default GetCode;
