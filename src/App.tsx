import { useForm } from "react-hook-form"; // used this lib because its light and easy to convert to json
import "./App.css";
import { useState } from "react";

export default function App() {
  const [isAdvanced, setIsAdvanced] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    // formState: { errors }, // can used for more specific err's but no need for this task as default input handle that great for us
  } = useForm();

  const onSubmit = (data: unknown) => console.log(data);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Advanced") {
      setIsAdvanced(true);
    } else if (selectedValue === "Manual") {
      setIsAdvanced(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <span className="form-item">
          <label>Account Type:</label>
          <select
            className="select-width"
            {...register("type", { required: true })}
            onChange={handleSelectChange}
          >
            <option value="Advanced">Advanced</option>
            <option value="Manual">Manual</option>
          </select>
        </span>
        <span className="form-item">
          <label>User Name:</label>
          <input
            className="general-width"
            type="email"
            required
            placeholder="name@example.com"
            minLength={3}
            {...register("user")}
          />
        </span>
        <span className="form-item">
          <label>Password:</label>
          <input
            className="general-width"
            type="password"
            placeholder="Required"
            {...register("password")}
            required
            minLength={2}
          />
        </span>
        <span className="form-item">
          <label>Server Address:</label>
          <input
            className="general-width"
            type="text"
            placeholder="example.com"
            required
            minLength={2}
            {...register("server_address")}
          />
        </span>
        {isAdvanced ? (
          <>
            <span className="form-item">
              <label>Server Path:</label>
              <input
                className="general-width"
                type="text"
                placeholder="/calendars/user/"
                {...register("server_path")}
                minLength={3}
              />
            </span>
            <div>
              <span className="form-item">
                <label>Port:</label>
                <input
                  className="port"
                  type="tel"
                  placeholder=""
                  {...register("port")}
                  minLength={1}
                />
                <input {...register("use_ssl")} type="checkbox" />
                <label>Use SSL</label>
              </span>
            </div>
          </>
        ) : (
          ""
        )}
        <span className="submit-wrapper">
          <input type="submit" />
        </span>
      </form>
    </>
  );
}
