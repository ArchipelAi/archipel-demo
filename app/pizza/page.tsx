'use client';
import {
  Accordion,
  AccordionItem,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Code,
  Divider,
  Image,
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Textarea,
} from '@nextui-org/react';
import { useState } from 'react';

import MessageCardProfile from '@/components/message-card-profile';
import { CheckIcon } from '@/components/icons';

type message_types =
  | 'get_pizza'
  | 'get_location'
  | 'select_pizza'
  | 'success'
  | 'loading';

export default function PizzaPage() {
  const [messageList, setMessageList] = useState<message_types[]>([
    'get_pizza',
  ]);
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(['0']));
  const [successSteps, setSuccessSteps] = useState<message_types[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (messageType: message_types) => {
    const newIndex = messageList.length.toString();

    setMessageList((prev) => [...prev, messageType]);
    setSelectedKeys((prev) => new Set([...prev, newIndex]));
  };

  const markStepComplete = (step: message_types) => {
    setSuccessSteps((prev) => [...prev, step]);
  };

  const simulateLoading = (nextMessage: message_types) => {
    setIsLoading(true);
    addMessage('loading');
    setTimeout(() => {
      setIsLoading(false);
      setMessageList((prev) => prev.filter((msg) => msg !== 'loading')); // Remove loading
      addMessage(nextMessage);
    }, 3000);
  };

  const handlePizzaDetailsSubmit = () => {
    markStepComplete('get_pizza');
    simulateLoading('get_location');
  };

  const handleLocationSubmit = () => {
    markStepComplete('get_location');
    simulateLoading('select_pizza');
  };

  const handlePizzaSelection = () => {
    markStepComplete('select_pizza');
    simulateLoading('success');
  };

  const renderMessage = (messageType: message_types, index: number) => {
    const isCompleted = Boolean(successSteps.includes(messageType));

    switch (messageType) {
      case 'get_pizza':
        return (
          <AccordionItem
            key={index.toString()}
            aria-label="Pizza Details"
            startContent={<MessageCardProfile success={isCompleted} />}
            subtitle="What kind of pizza would you like?"
            title="Pizza Details"
          >
            <Textarea
              readOnly={isCompleted}
              className="w-full"
              endContent={
                !isCompleted && (
                  <Button
                    color="primary"
                    isLoading={isLoading}
                    onClick={handlePizzaDetailsSubmit}
                  >
                    Send
                  </Button>
                )
              }
              label="What kind of pizza would you like?"
              placeholder="Enter your description"
            />
          </AccordionItem>
        );
      case 'get_location':
        return (
          <AccordionItem
            key={index.toString()}
            aria-label="Location"
            startContent={<MessageCardProfile success={isCompleted} />}
            subtitle="Please provide your location details"
            title="Location"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Name"
                placeholder="Enter your name"
                type="text"
                readOnly={isCompleted}
              />
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                readOnly={isCompleted}
              />
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                type="text"
                readOnly={isCompleted}
              />
              <Input
                label="Address"
                placeholder="Enter your address"
                type="text"
                readOnly={isCompleted}
              />
              <Input
                label="City"
                placeholder="Enter your city"
                type="text"
                readOnly={isCompleted}
              />
              <Input
                label="Zip Code"
                placeholder="Enter your zip code"
                type="text"
                readOnly={isCompleted}
              />
              <Input
                label="Country"
                placeholder="Enter your country"
                type="text"
                readOnly={isCompleted}
              />
              <Input
                label="Notes"
                placeholder="Enter your notes"
                type="text"
                readOnly={isCompleted}
              />
              <Checkbox radius="full">Save Address</Checkbox>
              {!isCompleted && (
                <Button color="primary" onClick={handleLocationSubmit}>
                  Confirm
                </Button>
              )}
            </div>
          </AccordionItem>
        );
      case 'select_pizza':
        return (
          <AccordionItem
            key={index.toString()}
            aria-label="Choose Pizza"
            startContent={<MessageCardProfile success={isCompleted} />}
            subtitle="Choose one of the options below"
            title="Choose Pizza"
          >
            <div className="grid grid-cols-3 gap-4">
              <Card className="py-4 max-w-72">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl pb-2"
                    src="pizza-example-image.png"
                    width={270}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-4">
                  <h4 className="font-bold text-large">
                    Ristorante Pizzeria Garda
                  </h4>
                  <p className="text-tiny uppercase font-bold">
                    1.2 km from you
                  </p>
                  <Divider className="my-2" />
                  <small className="text-default-500">Pizza Marguerita</small>

                  <p className="text-default-500 font-bold">EUR 14.00</p>
                </CardBody>
                <CardFooter className="flex justify-between px-4">
                  {!isCompleted && (
                    <Button color="primary" onClick={handlePizzaSelection}>
                      CONFIRM ORDER
                    </Button>
                  )}
                </CardFooter>
              </Card>
              <Card className="py-4 max-w-72">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl pb-2"
                    src="pizza-example-image-2.png"
                    width={270}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-4">
                  <h4 className="font-bold text-large">Milano Vice Pizza</h4>
                  <p className="text-tiny uppercase font-bold">
                    1.7 km from you
                  </p>
                  <Divider className="my-2" />
                  <small className="text-default-500">
                    Pizza Special Marguerita
                  </small>

                  <p className="text-default-500 font-bold">EUR 15.50</p>
                </CardBody>
                <CardFooter className="flex justify-between px-4">
                  {!isCompleted && (
                    <Button color="primary" onClick={handlePizzaSelection}>
                      CONFIRM ORDER
                    </Button>
                  )}
                </CardFooter>
              </Card>
              <Card className="py-4 max-w-72">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl pb-2"
                    src="pizza-example-image-3.png"
                    width={270}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-4">
                  <h4 className="font-bold text-large">Selecta Modern Pizza</h4>
                  <p className="text-tiny uppercase font-bold">
                    2.3 km from you
                  </p>
                  <Divider className="my-2" />
                  <small className="text-default-500">
                    Marguerita Originale
                  </small>

                  <p className="text-default-500 font-bold">EUR 9.50</p>
                </CardBody>
                <CardFooter className="flex justify-between px-4">
                  {!isCompleted && (
                    <Button color="primary" onClick={handlePizzaSelection}>
                      CONFIRM ORDER
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          </AccordionItem>
        );
      case 'success':
        return (
          <AccordionItem
            key={index.toString()}
            aria-label="Success"
            indicator={<CheckIcon />}
            startContent={
              <Badge
                isOneChar
                color="success"
                content={<CheckIcon />}
                placement="bottom-right"
              >
                <Avatar
                  isBordered
                  color={'success'}
                  radius="lg"
                  src="pizza-avatar.png"
                />
              </Badge>
            }
            subtitle="Your order is ready!"
            title="Your order is ready!"
          >
            <div className="flex flex-col gap-2">
              <p>
                Your pizza is on its way! To address:{' '}
                <Code>5th Avenue Street, 769, New York - NY. 6650</Code>
              </p>
              <Divider />
              <p className="text-bold pb-2">Your receipt:</p>
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>ITEM NUMBER</TableColumn>
                  <TableColumn>ORDER</TableColumn>
                  <TableColumn>SIZE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>1</TableCell>
                    <TableCell>Pizza Marguerita</TableCell>
                    <TableCell>Extra Large (8 pieces)</TableCell>
                    <TableCell>
                      <p className="text-warning">Pizza is Being Prepared</p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AccordionItem>
        );
      case 'loading':
        return (
          <AccordionItem
            key={index.toString()}
            aria-label="Loading"
            indicator={<Spinner color="primary" />}
            startContent={
              <Avatar
                isBordered
                color="primary"
                radius="lg"
                src="pizza-avatar.png"
              />
            }
            subtitle="We are processing your details"
            title="Loading"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Accordion
      className="w-full"
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      onSelectionChange={setSelectedKeys as any}
    >
      {messageList.map((messageType, index) =>
        renderMessage(messageType, index)
      )}
    </Accordion>
  );
}
