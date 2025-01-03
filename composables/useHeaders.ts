import type { CloudFlareHeaders } from "~/types/CloudFlareHeaders";
import type { HeaderFetchAPIResponse } from "~/types/HeaderFetchAPIResponse";

export const useHeaders = () => {
  const cloudFlareHeaders = useState<CloudFlareHeaders | undefined>("cloudflare_headers", () => undefined);
  const headers = useState("all_headers");

  const fetchHeaders = async () => {
    const { data, error } = await useFetch<HeaderFetchAPIResponse>("/api/headers");

    if (error.value) {
      console.log(error.value?.message);
      return;
    }

    cloudFlareHeaders.value = data.value?.locationHeaders ?? undefined;
    headers.value = data.value?.headers;
  };

  return { headers, fetchHeaders, cloudFlareHeaders };
};
