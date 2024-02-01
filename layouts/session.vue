<template>
    <UContainer>
      <UCard class="mt-10">
        <template #header>
          <div class="flex justify-between">
            <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
          </div>
        </template>
        <slot />
        <UNotifications />
      </UCard>
    </UContainer>
  </template>
  