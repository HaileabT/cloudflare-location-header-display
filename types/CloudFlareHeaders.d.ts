export interface CloudFlareHeaders {
  "CF-Connecting-IP"?: string;
  "CF-IPCountry"?: string;
  "CF-Ray"?: string;
  "CF-Visitor"?: string;
  "CF-Ipcity"?: string;
  "CF-Iplat"?: string;
  "CF-Iplong"?: string;
  "CF-Ipregion"?: string;
  "CF-Ippostcode"?: string;
  "CF-Iptimezone"?: string;
  "CF-Pseudo-IPv4"?: string;
  "CF-Geo-Region"?: string;
  "CF-Geo-City"?: string;
  "CF-Geo-Latitude"?: string;
  "CF-Geo-Longitude"?: string;

  "X-Forwarded-For": String;
  "X-Forwarded-Port": String;
  "X-Forwarded-Proto": String;
}
