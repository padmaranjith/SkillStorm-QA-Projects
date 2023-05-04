import { useForm } from "react-hook-form";

export default function ReactHookValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: onblur });

  return (
    <div className="inputValidation">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h1> React Hook Form</h1>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            {...register("email", { required: "This is required" })}
            type="email"
            placeholder="Email"
          />
          <p color="red">{errors.userName?.message}</p>
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            {...register("userName", { required: "This is required" })}
            type="text"
            placeholder="Your Name"
          />
          <p color="red">{errors.userName?.message}</p>
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Minimum length should be 4",
              },
            })}
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
