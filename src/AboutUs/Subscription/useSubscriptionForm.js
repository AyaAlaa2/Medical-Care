// useSubscriptionForm.js
// Hook: connects react-hook-form + Zod and handles submit + reset.

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

 const subscriptionSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

export function useSubscriptionForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,        // <-- add this
    formState,
  } = useForm({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: { email: "", agree: false },
  });

  // When email is valid, reset BOTH email and checkbox
  const handleValidSubmit = handleSubmit(() =>
    reset({ email: "", agree: false })
  );

  // Live checkbox value, used to disable the button
  const isAgreementChecked = watch("agree");

  // Expose what the form component needs
  return { control, register, formState, handleValidSubmit, isAgreementChecked };
}
