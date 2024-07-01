export type SDKConfig = {
  clientId: string;
  clientSecret?: string;
  env?: 'production' | 'staging' | 'mock';
  apiUrl?: string;
};
