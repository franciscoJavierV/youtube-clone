<template>
    <UContainer>
      <UCard class="mt-10">
        <template #header>
          <div class="flex justify-between">
            <h1>BIENVENIDO ESTE ES MI CLONE DE YOUTUBE </h1>
            <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
          </div>
        </template>
        <slot />
        <UNotifications />
      </UCard>
    </UContainer>
  </template>
  