<script setup lang="ts">
import { z } from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'
const {  register }  = useFirebaseAuth()
const schema = z.object({
    email: z.string().email(''),
    password: z.string().min(6, 'Min 6 characters'),
    name: z.string()
})

type Schema = z.output<typeof schema>
    
const state = ref({
    email: undefined,
    password: undefined,
    name: undefined
})

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
    const { email , password} = event.data
    try {
    await register(email, password)
     
    } catch (error) {
        console.error(error)
    }
}
</script>
<template>
    <UForm
        :schema="schema"
        :state="state"
        @submit="handleSubmit" 
        class="max-w-sm mx-auto"   
    >
    <div class="mb-5">
        <UFormGroup >
            <UInput class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="text" placeholder="Nombre de usuario" v-model.trim="state.name" />
        </UFormGroup>
        <UFormGroup >
            <UInput class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="email" placeholder="email" v-model.trim="state.email" />
        </UFormGroup>
        <UFormGroup>
            <UInput class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" type="password" placeholder="password" v-model.trim="state.password" />     
        </UFormGroup>
        <UButton   @submit="handleSubmit" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("register.button")}}
        </UButton>
    </div>
    </UForm>
</template>

<style lang="">
    
</style>