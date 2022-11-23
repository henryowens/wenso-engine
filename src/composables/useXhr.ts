import { AxiosError } from "axios";
import { reactive } from "vue";

interface UseXhr<T> {
  loading: boolean;
  error: AxiosError | string | null;
  result: T | null;
}

export default <T>(request: Promise<T>, preValidation?: boolean): UseXhr<T> => {
  const state: UseXhr<T> = reactive({
    loading: true,
    result: null,
    error: null,
  });

  if (preValidation) {
    state.error = "Pre-validation error";
    state.loading = false;
  } else
    request
      .then((res) => (state.result = res))
      .catch((err) => (state.error = err))
      .finally(() => (state.loading = false));

  return state;
};
