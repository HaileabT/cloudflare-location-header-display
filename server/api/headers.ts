import { CloudFlareHeaders } from "~/types/CloudFlareHeaders";

export default defineEventHandler((event) => {
  const headers = getHeaders(event);

  const locationHeaders: CloudFlareHeaders = {
    "CF-Connecting-IP": headers["cf-connecting-ip"] || "N/A",
    "CF-IPCountry": headers["cf-ipcountry"] || "N/A",
    "CF-Ray": headers["cf-ray"] || "N/A",
    "CF-Visitor": headers["cf-visitor"] || "N/A",

    "CF-Ipcity": headers["CF-Ipcity"] || "N/A",
    "CF-Iplat": headers["CF-Iplat"] || "N/A",
    "CF-Iplong": headers["CF-Iplong"] || "N/A",
    "CF-Ipregion": headers["CF-Ipregion"] || "N/A",
    "CF-Ippostcode": headers["CF-Ippostcode"] || "N/A",
    "CF-Iptimezone": headers["CF-Iptimezone"] || "N/A",

    "CF-Pseudo-IPv4": headers["CF-Pseudo-IPv4"] || "N/A",
    "CF-Geo-Region": headers["CF-Geo-Region"] || "N/A",
    "CF-Geo-City": headers["CF-Geo-City"] || "N/A",
    "CF-Geo-Latitude": headers["CF-Geo-Latitude"] || "N/A",
    "CF-Geo-Longitude": headers["CF-Geo-Longitude"] || "N/A",

    "X-Forwarded-For": headers["x-forwarded-for"] || "N/A",
    "X-Forwarded-Port": headers["x-forwarded-port"] || "N/A",
    "X-Forwarded-Proto": headers["x-forwarded-proto"] || "N/A",
  };

  console.log(locationHeaders, headers);

  return { headers, locationHeaders };
});
