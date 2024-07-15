/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, CardBody, CardHeader, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiDownload, HiGift, HiOutlineChat } from "react-icons/hi";

// icons
import { MdVerified } from "react-icons/md";

export default function ModalProfile({ onClose }) {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1 dark:bg-gray-900">My Profile</ModalHeader>
      <ModalBody className="dark:bg-gray-900">
        <Card className="flex">
          <Image
            src="/images/bannersigit.png"
            alt="banner"
            width={500}
            height={200}
            className="w-full h-full z-0 object-cover"
          />
          <CardHeader className="absolute bottom-0 gap-2">
            <Image
              src="/images/sigit.jpg"
              alt="sigit.jpg"
              height={65} width={65}
              className="rounded-full shadow-md"
            />
            <p className="text-dark text-sm font-semibold flex items-center" role="none">
              @sigitwhyd1_
              <MdVerified className="text-blue-500" />
            </p>
          </CardHeader>
        </Card>
        <Card className="dark:bg-gray-900">
          <CardBody className="gap-2 text-dark dark:text-gray-300">
            <Button
              href="https://wa.me/62858770174946/"
              color="default"
              variant="bordered"
              endContent={<HiOutlineChat className="text-dark dark:text-gray-300" />}
            >
              <Link href="https://wa.me/62858770174946/">Messages</Link>
            </Button>
          </CardBody>
        </Card>
      </ModalBody >
      <ModalFooter className="flex justify-center dark:bg-gray-900">
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
      </ModalFooter>
    </>
  )
}
