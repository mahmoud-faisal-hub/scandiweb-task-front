import { ref, computed } from 'vue';
import DVDForm from '~/components/Product/DVDForm.vue';
import BookForm from '~/components/Product/BookForm.vue';
import FurnitureForm from '~/components/Product/FurnitureForm.vue';

const type = {
  DVD: DVDForm,
  Book: BookForm,
  Furniture: FurnitureForm,
};

const FormComponents: object = {
  DVD: DVDForm,
  Book: BookForm,
  Furniture: FurnitureForm,
};

export function useProductTypeAttributesComponent(type: string) {
  const selectedComponent = computed(() => {
    return FormComponents[type]?? null;
  });

  return {
    selectedComponent
  };
}