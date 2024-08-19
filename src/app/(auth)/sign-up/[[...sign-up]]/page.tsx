import { SignUp } from "@clerk/nextjs";
import { FC } from "react";

const page:FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default page;
