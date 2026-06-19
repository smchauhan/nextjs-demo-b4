"use client";

import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const handleFormSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users"));
    localStorage.setItem("login", true);
    console.log(data);
    //router.push("/products");
  };
  return (
    <div className="card">
      <div className="card-header">Signin</div>
      <div className="card-body">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              defaultValue="demo@gmail.com"
              {...register("email", { required: "Enter email" })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              defaultValue="password"
              {...register("password", { required: "Enter password" })}
            />
          </Form.Group>

          <div className="col-md-6 offset-md-4">
            <Button type="submit" className="btn btn-primary">
              Signin
            </Button>
            <Link href="/auth/signup" className="btn btn-link d-block">
              Signup
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
