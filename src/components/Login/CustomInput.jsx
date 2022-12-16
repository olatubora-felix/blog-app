import { Input } from "@material-tailwind/react";
import React, { useState } from "react";

const CustomInput = ({ label, openEyes, closeEyes, type, onChange, value }) => {
  const [passwordShow, setPasswordShow] = useState(true);

  return (
    <div className="w-full my-2">
      <Input
        label={label}
        type={passwordShow ? "text" : type}
        icon={
          passwordShow ? (
            <i
              className={`${openEyes} cursor-pointer`}
              onClick={() => setPasswordShow(!passwordShow)}
            />
          ) : (
            <i
              className={`${closeEyes} cursor-pointer`}
              onClick={() => setPasswordShow(!passwordShow)}
            />
          )
        }
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
