import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";          // <-- import Controller
import { useSubscriptionForm } from "./useSubscriptionForm";

export default function SubscriptionForm() {
  const {
    control,
    register,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    handleValidSubmit,
    isAgreementChecked,
  } = useSubscriptionForm();

  const hasEmailError = !!errors.email;

  return (
    <Box component="form" onSubmit={handleValidSubmit}>
      <Stack spacing={1.5} alignItems="center">
        {/* Simple global alerts */}
        {isSubmitted && hasEmailError && (
          <Alert severity="error">Please enter a valid email.</Alert>
        )}
        {isSubmitSuccessful && !hasEmailError && (
          <Alert severity="success">Subscribed!</Alert>
        )}

        {/* Email + subscribe button in one row */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", maxWidth: "30rem" }}
        >
          <TextField
            fullWidth
            placeholder="Your email address"
            {...register("email")}
            error={hasEmailError}
            helperText={errors.email?.message}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!isAgreementChecked}   // still controlled by checkbox
            sx={{ width: "7rem" , backgroundColor: "var(--main-color)" }}
          >
            SUBSCRIBE
          </Button>
        </Stack>

        {/* Checkbox now uses Controller so reset() can uncheck it */}
        <Controller
          name="agree"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label="I agree to the terms and conditions and the privacy policy"
            />
          )}
        />
      </Stack>
    </Box>
  );
}
