import type { CloudFlareHeaders } from "./CloudFlareHeaders";

export interface HeaderFetchAPIResponse {
  locationHeaders: CloudFlareHeaders;
  headers: any;
}
