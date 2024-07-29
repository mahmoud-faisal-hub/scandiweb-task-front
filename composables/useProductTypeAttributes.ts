import { watch, reactive } from 'vue';

export function useProductTypeAttributes(props: any, emit: any) {
  const internalAttributes = reactive({ ...props.modelValue });

  watch(
    () => props.modelValue,
    (newValue) => {
      Object.assign(internalAttributes, newValue);
    }
  );

  watch(
    internalAttributes,
    (newValue) => {
      emit('update:modelValue', { ...newValue });
    },
    { deep: true }
  );

  return internalAttributes;
}