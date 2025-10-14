import { Modal, Image, CloseButton, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import "./Drawer/DrawerNav.css";

export const MenuImg: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close} c={"#f666ae"}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title fw={700}>MENU</Modal.Title>
            <CloseButton onClick={close} c={"#f666ae"} />
          </Modal.Header>
          <Modal.Body>
            <Image src="/Menu.svg" w={"100%"} h={"100%"} fit="contain" />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Text
        variant="transparent"
        aria-label="Open navigation menu"
        fz={16}
        fw={400}
        onClick={open}
        className="MenuImg"
        p={{
          base: "10px 30px 0px 15px",
          sm: "10px 30px 0px 15px",
          md: "0px 20px 0px 10px",
          lg: "0px 30px",
        }}
        tt={{ base: "uppercase", sm: "uppercase", md: "none" }}
        c={{
          base: "#f666ae",
          sm: "#f666ae",
          md: "var(--mantine-color-dark-6)",
        }}
      >
        Menu
      </Text>
    </>
  );
};
