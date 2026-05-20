<script lang="ts" setup>
import { ErrorMessage } from 'vee-validate'
import { toValue } from 'vue'
import { useFormField } from './useFormField'

const { name, formMessageId } = useFormField()

const messageClasses = tw`
  text-sm font-medium 
  text-destructive
  dark:text-dark-destructive
`
</script>

<template>
  <ErrorMessage :id="formMessageId" as="p" :name="toValue(name)" :class="messageClasses" />
</template>
