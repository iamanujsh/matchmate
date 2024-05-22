"use client";
import { Button } from "@nextui-org/react";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Match Mate</h1>

      <Button
        as={Link}
        href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegUser size={20} />}
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Members
      </Button>
    </>
  );
}
