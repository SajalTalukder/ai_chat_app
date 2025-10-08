"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Podcast } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-950 ">
      <div className="flex flex-col items-center justify-between gap-6">
        <div className="w-[150px] h-[150px] bg-gray-900 rounded-full flex items-center justify-center flex-col ">
          <Podcast className="text-white" size={100} />
        </div>
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome to PodConnect
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-md">
          Connect with fellow podcast enthusiasts, share your favorite episodes,
          and discover new content together.
        </p>

        {!isSignedIn && (
          <SignInButton mode="modal">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="cursor-pointer w-64 text-lg font-medium"
            >
              Get Started Now
            </Button>
          </SignInButton>
        )}

        {isSignedIn && (
          <Link href="/chat">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="cursor-pointer w-64 text-lg font-medium"
            >
              Start Conversation Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
