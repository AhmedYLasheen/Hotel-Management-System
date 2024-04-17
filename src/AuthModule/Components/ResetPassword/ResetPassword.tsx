import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

// Import image
import imgForgotPass from "../../../Img/forgotPass.png";

// Import components from MUI
import {
  Button,
  FormControl,
  TextField,
  Typography,
  FilledInput,
  InputAdornment,
  IconButton,
  Alert,
  Box,
  Grid,
  Container,
  CircularProgress
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Import CSS module
import styleResetPass from "./ResetPassword.module.css";

export interface FormDataRegister {
  email: string;
  password: string;
  confirmPassword: string;
  seed: string;
}


export default function ResetPassword() {
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const validatePasswordMatch = (value: unknown) => {
    const password = getValues("password");
    return value === password || "Confirm Password doesn't match Password";
  };

  const onSubmit = async (data: FormDataRegister) => {
    setLoadingBtn(true);

    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3000/api/v0/admin/users/reset-password",
        data
      );

      // console.log(response);
      toast.success("Verification successful. Password reset initiated.");
      navigate("/login");
    } catch (error: any) {
      // console.log(error);
      toast.error(error.response.data.message);
    }

    setLoadingBtn(false);
  };

  return (
    <>
        <Container sx={{ my: 5 }} >

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography
            className={`${styleResetPass.ConStay}`}
            variant="h5"
            component="h5"
          >
            <Box component="span" color="primary.main">
              Stay
            </Box>
            cation.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography sx={{ mb: 3 }}  variant="h6" component="h6">
              Reset Password{" "}
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you already have an account register <br />
              You can{" "}
              <Box component="span" color="#EB5148">
                Login here !
              </Box>
            </Typography>

            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <FormControl  sx={{ mt: 4, display: "block" }} variant="filled">
              <label  htmlFor="email">
                    Email
                  </label>
                <TextField
                                sx={{ width: 1 }}

id="email"
placeholder="Enter Your Email"

                  {...register("email", {
                    required: "Email is required",
                  })}
               
                />
              </FormControl>
              {errors.email && (
                  <Alert  sx={{ mt: 1 }}   severity="error">
                    {errors.email.message?.toString()}
                  </Alert>
                )}

              {/* OTP */}

              <FormControl sx={{ mt: 4, display: "block" }} variant="filled">
              <label  htmlFor="OTP">
              OTP
                  </label>
                <TextField
                  className={styleResetPass.textField}
                  id="OTP"
                  placeholder="Enter Your OTP"
                  {...register("seed", {
                    required: "OTP is required",
                  })}
                
                />
                   {errors.seed && (
                    <Alert  sx={{ mt: 1 }} severity="error">
                      {errors.seed.message?.toString()}
                    </Alert>
                  )}
              </FormControl>

              {/* Password */}
              <FormControl  sx={{ mt: 4, display: "block" }}  variant="filled">
              <label  htmlFor="Password">
                    Password
                  </label>
                <FilledInput
                                  id="Password"
                                  sx={{ width: 1  }}                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <Alert severity="error">{errors.password.message?.toString()}</Alert>
                )}
              </FormControl>

              {/* Confirm Password */}
              <FormControl  sx={{ my: 4, display: "block"  }} variant="filled">
              <label  htmlFor="Confirm">
              Confirm Password
                  </label>
                <FilledInput
                  className={styleResetPass.textField}
                  type={showConfirmPassword ? "text" : "password"}
                  id="Confirm"
                  placeholder="Enter Your Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: validatePasswordMatch,
                  })}
                  error={!!errors.confirmPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle Confirm visibility"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.confirmPassword && (
                  <Alert severity="error">
                    {errors.confirmPassword.message?.toString()}
                  </Alert>
                )}
              </FormControl>

              {/* Submit Button */}
              <Button
                sx={{ width: 1  }}  
                variant="contained"
                type="submit"
                disabled={loadingBtn}
              >
                {loadingBtn ? (
                                  <CircularProgress color="inherit" />

                ) : (
                  "Reset"
                )}
              </Button>
            </Form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className={styleResetPass.imgRe} src={imgForgotPass} alt="" />
        </Grid>
      </Grid>
      </Container>
    </>
  );
}
