import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  name: string;
  image: string;
  password: string;
  confirmPassword: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch("password");
  const onSubmit = async (data: { email: string; name: string; image: string; password: string; confirmPassword: string; }) => {
    const {email, name, image, password, confirmPassword} = data;
    console.log(email, name, image, password, confirmPassword);
  }
  // firstName and lastName will have correct type

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <div className="flex justify-center items-center h-5/6">
            <img src="https://i.ibb.co/XfQ2LfT/side-picture.png" />
          </div>
        </div>
        <div className="lg:w-1/2 py-20">
          <div className="card max-w-lg mx-auto text-titleText">
            <h1 className="text-3xl font-bold text-center pt-14 text-menuText">
              Create New Account
            </h1>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-menuText text-xl font-semibold">
                    Your Email
                  </span>
                </label>
                <input
                  type="Type your email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className={`input rounded-md h-[55px] input-bordered focus:outline-none bg-[#E6E6E6] border-none ${
                    errors.email &&
                    "focus:border-red-700 focus:ring-red-700 border-red-700"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-700 font-bold">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-menuText text-xl font-semibold">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className={`input rounded-md h-[55px] input-bordered focus:outline-none bg-[#E6E6E6] border-none ${
                    errors.name &&
                    "focus:border-red-700 focus:ring-red-700 border-red-700"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-700 font-bold">
                    {errors.name?.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-menuText text-xl font-semibold">
                    Image
                  </span>
                </label>
                <label
                  htmlFor="image"
                  className="input input-bordered rounded-md h-[55px] focus:outline-none bg-[#E6E6E6] border-none flex items-center"
                >
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    placeholder="Upload Image"
                    id="image"
                  />
                </label>
                {errors.image && (
                  <span className="text-red-700 font-bold">
                    Image is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-menuText text-xl font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be less then 20 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[\W_])[a-zA-Z\d\W_]/,
                      message:
                        "Password must have one Uppercase and one Special letter",
                    },
                  })}
                  placeholder="Password"
                  className={`input rounded-md h-[55px] input-bordered focus:outline-none bg-[#E6E6E6] border-none ${
                    errors.password &&
                    "focus:border-red-700 focus:ring-red-700 border-red-700"
                  }`}
                />
                {errors.password && (
                  <span className="text-red-700 font-bold">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-menuText text-xl font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Password is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                  placeholder="Confirm password"
                  className={`input rounded-md h-[55px] input-bordered focus:outline-none bg-[#E6E6E6] border-none ${
                    errors.confirmPassword &&
                    "focus:border-red-700 focus:ring-red-700 border-red-700"
                  }`}
                />
                {errors.confirmPassword && (
                  <span className="text-red-700 font-bold">
                    {errors.confirmPassword?.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn border-none rounded-md bg-secondary hover:bg-secondaryHover text-white font-bold"
                />
              </div>
            </form>
            <p className="pb-12 text-center text-menuText text-lg">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-secondary font-bold">
                  Log in here
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
