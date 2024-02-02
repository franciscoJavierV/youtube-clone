<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
const { login } = useFirebaseAuth();
const toast = useToast();
const schema = z.object({
  email: z.string().email("Incorrect email"),
  password: z.string().min(6, "Min 6 characters"),
});

type Schema = z.output<typeof schema>;

const state = ref({
  email: undefined,
  password: undefined,
});

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
  const { email, password } = event.data;
  try {
    const res = await login(email, password);
    toast.add({
      title: "Login successfully completed",
      timeout: 2000,
      callback: async () => {
        navigateTo("feed");
      },
    });
  } catch (error) {
    console.error(error);
  }
};
</script>
<template>
  <UForm
    :schema="schema"
    :state="state"
    @submit="handleSubmit"
    class="max-w-sm mx-auto"
  >
    <div class="mb-5">
      <UFormGroup @submit.prevent="handleSubmit">
        <UInput
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          type="email"
          :placeholder="$t('login.email')"
          v-model.trim="state.email"
        />
      </UFormGroup>
      <UFormGroup>
        <UInput
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          type="password"
          :placeholder="$t('login.password')"
          v-model.trim="state.password"
        />
      </UFormGroup>
      <UButton
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {{ $t("login.btn") }}
      </UButton>
    </div>
  </UForm>
</template>

<style lang=""></style>
