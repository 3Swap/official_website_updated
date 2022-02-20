import React, { useState } from 'react';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import Modal from '../components/Modal';
import { Container, Typography } from '../GlobalStyle.style';
import Confirmation from '../screens/Confirmation';
import GetCode from '../screens/GetCode';
import { DemoAppContainer } from '../styles/App.style';

const Demo = () => {
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false);

  return (
    <>
      {/* Get Test Code Modal */}
      <Modal open={open} width="800px" height="auto" bg="rgba(255,255,255,0.9)">
        <GetCode setOpen={setOpen} />
      </Modal>
      {/* Confirmation Modal */}
      <Modal open={complete} height="auto" bg="rgba(255,255,255,0.9)">
        <Confirmation setComplete={setComplete} />
      </Modal>
      <Header />
      <Background>
        <Container>
          <DemoAppContainer>
            <Typography textAlign="center">Continue to App</Typography>
            <div className="form">
              {/* <Input
                type="text"
                placeholder="Enter email"
                bgColor="rgba(255,255,255,0.9)"
                textAlign="center"
              /> */}
              <Input
                type="text"
                placeholder="Enter test code"
                bgColor="rgba(255,255,255,0.9)"
                textAlign="center"
              />
            </div>
            <div className="button">
              <Button
                label="Continue"
                bgColor="var(--primary-bg)"
                color="#fff"
                width="50%"
              />
            </div>
            <Typography
              as="p"
              textAlign="center"
              fontSize="14px"
              color="var(--primary-bg)"
              onClick={() => setOpen(!open)}
            >
              Don't have a test code,click here to get one.
            </Typography>
          </DemoAppContainer>
        </Container>
      </Background>
    </>
  );
};

export default Demo;
