"use client";

import { registerSchema, RegisterSchema } from "@/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Card className="w-1/4 mx-auto flex justify-center items-center mt-6 mb-6">
      <CardHeader className="flex flex-col items-center justify-center ">
        <div className="flex flex-col gap-2 items-center ">
          <div className="flex flex-row items-center gap-3 ">
            <CiLock size={30} />
            <h1>Register</h1>
          </div>
          <p>Welcome to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              type="text"
              label="Name"
              variant="bordered"
              className="text-black"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message as String}
            />

            <Input
              type="email"
              label="Email"
              variant="bordered"
              className="text-black "
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as String}
            />
            <Input
              type="password"
              label="Password"
              variant="bordered"
              className="text-black b"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as String}
            />
          </div>
          <Button
            fullWidth
            className="bg-orange-100 border-2 border-gray-400 mt-3"
            type="submit"
            isDisabled={!isValid}
          >
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
