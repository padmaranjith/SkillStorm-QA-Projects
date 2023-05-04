import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  email: z.string().email(),
  userName: z.string(),
  password: z.string().min(4),
});
export default function ZodValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="inputValidation">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h1> React Hook Form</h1>
        <div>
          <label htmlFor="Email">Email</label>
          <input {...register("email")} type="email" placeholder="Email" />
          <p color="red">{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            {...register("userName")}
            type="text"
            placeholder="Your Name"
          />
          <p color="red">{errors.userName?.message}</p>
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <p color="red">{errors.password?.message}</p>
        </div>
        <div>
          <p></p>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
